import { api } from "./api";

// 1. Lưu kết quả quiz
export const saveResult = async (resultData) => {
    const response = await api.post("/results", resultData);
    return response;
};

// 2. Lấy kết quả theo userId
export const getResultsByUserId = async (userId) => {
    const response = await api.get(`/results/user/${userId}`);
    return response;
};

// 3. Lấy kết quả theo quizzId
export const getResultsByQuizzId = async (quizzId) => {
    const response = await api.get(`/results/quizz/${quizzId}`);
    return response;
};

// 4. Xoá kết quả theo ID
export const deleteResultById = async (resultId) => {
    const response = await api.delete(`/results/${resultId}`);
    return response;
};
