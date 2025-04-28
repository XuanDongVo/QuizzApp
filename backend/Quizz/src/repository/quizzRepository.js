const { ObjectId } = require("mongodb");
const { GET_DB } = require("../config/mongoConfig");

// Khởi tạo một quizz mới
const createdQuizz = async () => {
    const db = GET_DB();
    const newQuizz = {
        _id: new ObjectId()
    };
    await db.collection("quizz").insertOne(newQuizz);
    return newQuizz._id;
};

// Cập nhật Quizz
const updateQuizzById = async (quizzId, quizz) => {
    const db = GET_DB();
    const result = await db.collection("quizz").updateOne(
        { _id: quizzId },
        { $set: quizz }
    );
    return result;
};

module.exports = {
    createdQuizz,
    updateQuizzById,
};
