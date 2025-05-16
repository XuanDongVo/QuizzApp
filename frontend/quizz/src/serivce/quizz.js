import { api } from "./api";

// 1. Tạo quiz mới
export const createdQuizz = async (title) => {
    const response = await api.post("/quizz", { title });
    return response;
};

// 2. Lấy quiz theo ID
export const getQuizzById = async (quizzId) => {
    const response = await api.get(`/quizz/${quizzId}`);
    return response;
};

// 3. Cập nhật thông tin quiz 
export const updateQuizzInfo = async (quizzId, { title, image }) => {
    const response = await api.put(`/quizz/${quizzId}`, { title, image });
    return response;
};

// 4. Cập nhật lại danh sách câu hỏi 
export const updateAllQuestions = async (quizzId, questions) => {
    const response = await api.post(`/quizz/${quizzId}/questions`, questions);
    return response;
};

// 5. Lấy danh sách quiz theo trạng thái publish
export const getQuizzesByPublishStatus = async (publish) => {
    const response = await api.get(`/quizz/get/${publish}`);
    return response;
};

// 6. Cập nhật trạng thái publish của quiz
export const updateQuizzPublishStatus = async (quizzId, publish) => {
    const response = await api.put(`/quizz/${quizzId}/publish/${publish}`);
    return response;
};
