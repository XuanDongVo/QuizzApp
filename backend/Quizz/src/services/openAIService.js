const { GoogleGenAI } = require('@google/genai');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function getChatGPTResponse(topic, questionCount) {
    try {
        const prompt = `
            Tạo ${questionCount} câu hỏi liên quan đến chủ đề "${topic}". 
            Mỗi câu hỏi phải có 5 đáp án (options), trong đó chỉ có 1 đáp án đúng. 
            Trả về kết quả dưới dạng JSON với cấu trúc sau:
            {
                "name": "${topic}",
                "questions": [
                    {
                        "question": "Nội dung câu hỏi",
                        "options": ["đáp án 1", "đáp án 2", "đáp án 3", "đáp án 4", "đáp án 5"],
                        "correctAnswer": "đáp án đúng"
                    },
                    ...
                ]
            }
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash-001',
            contents: prompt
        });

        // Giả sử response.text chứa JSON dạng chuỗi, parse nó
        console.log("Response from AI:", response.text);
        // Loại bỏ ```json và ``` nếu có
        let jsonString = response.text
            .replace(/```json/g, '') // Xóa ```json
            .replace(/```/g, '')     // Xóa ```
            .trim();                 // Xóa khoảng trắng thừa

        // Parse chuỗi thành JSON
        const jsonResponse = JSON.parse(jsonString);
        return jsonResponse;
    } catch (error) {
        console.error("Lỗi khi tạo câu hỏi:", error);
        throw new Error("Failed to generate questions from AI service");
    }
}

module.exports = { getChatGPTResponse };