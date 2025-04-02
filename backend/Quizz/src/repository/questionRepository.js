const { connectToDatabase } = require("../config/mongoConfig");
const { ObjectId } = require("mongodb");

const findByTopicId = async (topicId) => {
    const db = await connectToDatabase();
    return await db
        .collection("questions")
        .find({ topicId: new ObjectId(topicId) })
        .toArray();
};

const insert = async (question) => {
    const db = await connectToDatabase();
    const result = await db.collection("questions").insertOne(question);
    return result.ops[0];
};

module.exports = {
    findByTopicId,
    insert,
};