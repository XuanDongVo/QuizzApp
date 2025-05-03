const quizzRepository = require("../repository/quizzRepository");

const createdQuizz = async (title) => {
    if (!title || typeof title !== "string") {
        throw new Error("Title is required and must be a string");
    }
    const quizz = await quizzRepository.createdQuizz(title);
    return quizz;
};

const addQuestionToQuizz = async (quizzId, question) => {
    if (!quizzId) throw new Error("Invalid quizz ID");
    if (!question || typeof question !== "object") throw new Error("Invalid question data");

    const quizz = await quizzRepository.getQuizzById(quizzId);
    if (!quizz) throw new Error("Quizz not found");


    console.log("currentQuestions", typeof (question));
    console.log("currentQuestions", question);

    const updatedQuizz = await quizzRepository.updateQuizzById(quizzId, question);

    return updatedQuizz;
};


const getQuizzById = async (quizzId) => {
    if (!quizzId) {
        throw new Error("Invalid quizz ID");
    }
    const quizz = await quizzRepository.getQuizzById(quizzId);
    return quizz;
}

module.exports = {
    createdQuizz,
    addQuestionToQuizz,
    getQuizzById
};