const { GET_DB } = require("../config/mongoConfig");

const findAll = async () => {
    const db = GET_DB();
    return await db.collection("topics").find().toArray();
};

const insert = async (topic) => {
    const db = GET_DB();
    const result = await db.collection("topics").insertOne(topic);
    return result;
};

module.exports = {
    findAll,
    insert,
};