const questionRepository = require("../repository/questionRepository");

const getQuestionsByTopicId = async (topicId) => {
    const questions = await questionRepository.findByTopicId(topicId);
    return questions;
};

const createQuestion = async (topicId, option) => {
    //   const question = await questionRepository.insert({ topicId, text });
    //   for (const answer of answers) {
    //     await answerRepository.insert({ ...answer, questionId: question._id });
    //   }
    //   return question;
};

module.exports = {
    getQuestionsByTopicId,
    createQuestion,
};