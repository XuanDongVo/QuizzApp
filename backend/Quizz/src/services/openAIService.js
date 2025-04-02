const puppeteer = require("puppeteer");
const fs = require("fs");

async function getChatGPTResponse(topic, questionCount) {
    try {
        const browser = await puppeteer.launch({ headless: false }); // Mở trình duyệt (bỏ headless để thấy UI)
        const page = await browser.newPage();

        // Đọc cookie từ file JSON
        const cookies = JSON.parse(fs.readFileSync("e:/Quizz/backend/Quizz/chatgpt.com.json", "utf-8"));
        await page.setCookie(...cookies);

        // Truy cập vào ChatGPT
        await page.goto("https://chat.openai.com/");

        // Đợi trang tải xong
        await new Promise(resolve => setTimeout(resolve, 10000));

        // Tạo prompt
        const prompt = `Hãy đưa ra ${questionCount} câu hỏi liên quan đến chủ đề "${topic}". Mỗi câu hỏi có 4 phương án và 1 đáp án đúng. Trả về dưới dạng JSON.`;

        // Nhập prompt vào textarea
        await page.type('textarea', prompt);

        // Gửi prompt (ấn Enter)
        await page.keyboard.press("Enter");

        // Đợi ChatGPT phản hồi
        await new Promise(resolve => setTimeout(resolve, 50000));

        // Lấy nội dung phản hồi
        const response = await page.evaluate(() => {
            let elements = document.querySelectorAll(".markdown");
            return elements.length > 0 ? elements[elements.length - 1].innerText : "";
        });

        // Đóng trình duyệt
        await browser.close();
        return response;
    } catch (error) {
        console.error("Error in getChatGPTResponse:", error);
        throw new Error("Failed to get response from ChatGPT");
    }
}

module.exports = {
    getChatGPTResponse,
};