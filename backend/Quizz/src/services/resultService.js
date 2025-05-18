const resultRepository = require("../repository/resultRepository");

const saveQuizResult = async (userId, quizzId, score, totalQuestions, correctAnswers, incorrectAnswers) => {
    if (!userId || !quizzId) {
        throw new Error("User ID and Quizz ID are required");
    }

    const resultData = {
        userId,
        quizzId,
        score,
        totalQuestions,
        correctAnswers,
        incorrectAnswers,
        submittedAt: new Date(),
    };

    const result = await resultRepository.saveResult(resultData);
    return result;
};

const getResultsByQuizzId = async (quizzId) => {
    if (!quizzId) {
        throw new Error("Quizz ID is required");
    }

    const results = await resultRepository.getResultsByQuizzId(quizzId);
    return results;
};

const getResultsByUserId = async (userId) => {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const results = await resultRepository.getResultsByUserId(userId);
    return results;
};

const deleteResultById = async (resultId) => {
    if (!resultId) {
        throw new Error("Result ID is required");
    }

    return await resultRepository.deleteResultById(resultId);
};

module.exports = {
    saveQuizResult,
    getResultsByQuizzId,
    getResultsByUserId,
    deleteResultById
};
