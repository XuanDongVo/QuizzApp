const quizzRepository = require("../repository/quizzRepository");


const createdQuizz = async (title) => {
    if (!title || typeof title !== "string") {
        throw new Error("Title is required and must be a string");
    }
    {/*2.1.8 QuizzService gọi hàm createQuizz từ quizzRepository để khởi tạo quizz. */ }
    const quizz = await quizzRepository.createdQuizz(title);
    return quizz;
};

const addQuestionToQuizz = async (quizzId, question) => {
    if (!quizzId) throw new Error("Invalid quizz ID");
    if (!question || typeof question !== "object") throw new Error("Invalid question data");

    {/*2.1.32 QuizzService gọi hàm getQuizzById từ quizzRepository để lấy đối tượng quizz */ }
    const quizz = await quizzRepository.getQuizzById(quizzId);
    if (!quizz) throw new Error("Quizz not found");

    {/*2.1.33 QuizzService gọi hàm updateQuizzById từ QuizzRepository để cập nhật câu hỏi cho quizz. */ }
    const updatedQuizz = await quizzRepository.updateQuizzById(quizzId, question);

    return updatedQuizz;
};

const getQuizzesByPublishStatus = async (publish) => {
    if (publish === undefined) {
        throw new Error("Publish status is required");
    }
    const quizzes = await quizzRepository.getQuizzesByPublishStatus(publish);
    return quizzes;
};


const getQuizzById = async (quizzId) => {
    if (!quizzId) {
        throw new Error("Invalid quizz ID");
    }
    const quizz = await quizzRepository.getQuizzById(quizzId);
    return quizz;
}

const updateQuizzPublishStatus = async (quizzId, publish) => {
    if (!quizzId) throw new Error("Invalid quizz ID");
    if (publish === undefined) throw new Error("Publish status is required");
    {/*2.1.31 QuizzService gọi hàm updateQuizzPublishStatus từ QuizzRepository để cập nhật trên cơ sở dữ liệu. */ }
    return await quizzRepository.updateQuizzPublishStatus(quizzId, publish);

}

module.exports = {
    createdQuizz,
    addQuestionToQuizz,
    getQuizzById,
    getQuizzesByPublishStatus,
    updateQuizzPublishStatus
};