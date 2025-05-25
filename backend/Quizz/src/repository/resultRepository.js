const Result = require("../models/resultModel");

const saveResult = async (resultData) => {
    const result = new Result(resultData);
    return await result.save();
};

const getResultsByQuizzId = async (quizzId) => {
    return await Result.find({ quizzId }).populate("userId", "username").sort({ submittedAt: -1 });
};

const getResultsByUserId = async (userId) => {
    return await Result.find({ userId }).populate("quizzId", "title").sort({ submittedAt: -1 });
};

const deleteResultById = async (resultId) => {
    return await Result.findByIdAndDelete(resultId);
};

module.exports = {
    saveResult,
    getResultsByQuizzId,
    getResultsByUserId,
    deleteResultById
};
