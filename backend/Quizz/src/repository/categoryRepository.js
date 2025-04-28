const { GET_DB } = require("../config/mongoConfig");

const findAll = async () => {
    const db = GET_DB();
    return await db.collection("categories").find().toArray();
};

const insert = async (category) => {
    const db = GET_DB();
    const result = await db.collection("categories").insertOne(category);
    return result;
};

module.exports = {
    findAll,
    insert,
};