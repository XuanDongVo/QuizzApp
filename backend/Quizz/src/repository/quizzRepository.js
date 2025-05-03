const { ObjectId } = require("mongodb");
const { GET_DB } = require("../config/mongoConfig");

const getQuizzById = async (quizzId) => {
    const db = GET_DB();
    const quizz = await db.collection("quizz").findOne({ _id: new ObjectId(quizzId) });
    return quizz;
};


// Tạo quizz mới
const createdQuizz = async (name) => {
    const db = GET_DB();
    const newQuizz = {
        name: name,
    };
    const result = await db.collection("quizz").insertOne(newQuizz);
    return {
        id: result.insertedId,
        name: newQuizz.name
    };
};


// Cập nhật Quizz
const updateQuizzById = async (quizzId, newQuestions) => {
    const db = GET_DB();
    const result = await db.collection("quizz").updateOne(
        { _id: new ObjectId(quizzId) },
        { $set: { questions: newQuestions } }
    );

    return result;
};


module.exports = {
    createdQuizz,
    updateQuizzById,
    getQuizzById
};