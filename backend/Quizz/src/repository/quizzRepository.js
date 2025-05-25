const { ObjectId } = require("mongodb");
const { GET_DB } = require("../config/mongoConfig");

{/* trả về đối tượng quizz */ }
const getQuizzById = async (quizzId) => {
    const db = GET_DB();
    const quizz = await db.collection("quizz").findOne({ _id: new ObjectId(quizzId) });
    return quizz;
};

const getQuizzesByPublishStatus = async (publish) => {
    const db = GET_DB();
    const quizzes = await db.collection("quizz").find({ publish: publish }).toArray();
    return quizzes;
};


// Tạo quizz mới
const createdQuizz = async (name) => {
    const db = GET_DB();
    const newQuizz = {
        name: name,
        publish: false,
    };
    {/*2.1.9.QuizzRepository lưu lại quizz. */ }
    const result = await db.collection("quizz").insertOne(newQuizz);
    {/*2.1.10.	QuizzRepository trả về id, name, publish (trạng thái quizz) cho quizz.js(BE).*/ }
    return {
        id: result.insertedId,
        name: newQuizz.name,
        publish: false
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

const updateQuizzPublishStatus = async (quizzId, publish) => {
    const db = GET_DB();
    const result = await db.collection("quizz").updateOne(
        { _id: new ObjectId(quizzId) },
        { $set: { publish: publish } }
    );
    return result;
};


module.exports = {
    createdQuizz,
    updateQuizzById,
    getQuizzById,
    getQuizzesByPublishStatus,
    updateQuizzPublishStatus
};