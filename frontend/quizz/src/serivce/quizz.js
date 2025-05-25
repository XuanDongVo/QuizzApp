//  Quizz.js của FRONTEND

import { api } from "./api";

// 1. Tạo quiz mới
{/* 2.1.5	Hệ thống thực hiện 1 api POST sang quizz.js */ }
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
{/*2.1.29	Quizz.js thực hiện api POST truyền dữ liệu question cần tạo qua cho route Quizz.js(BE) */ }
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
{/* 2.1.38 Quizz.js thực hiện api post để cập nhật quizz cho người dùng. */ }
export const updateQuizzPublishStatus = async (quizzId, publish) => {
    const response = await api.put(`/quizz/${quizzId}/publish/${publish}`);
    return response;
};
