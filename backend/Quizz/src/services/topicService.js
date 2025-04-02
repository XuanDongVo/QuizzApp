const topicRepository = require("../repository/topicRepository");

const getAllTopics = async () => {
    return await topicRepository.findAll();
};

const createTopic = async (subjectDocuments) => {
    return await topicRepository.insert({ subjectDocuments });
};

module.exports = {
    getAllTopics,
    createTopic,
};