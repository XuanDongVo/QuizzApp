const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

// Khởi tạo đối tượng kết nối
let quizzizDatabaseInstance = null;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// Hàm kết nối đến database
const CONNECT_DB = async () => {
    await client.connect();
    quizzizDatabaseInstance = client.db(dbName);
};

// Hàm lấy đối tượng kết nối
const GET_DB = () => {
    if (!quizzizDatabaseInstance) {
        throw new Error("Database is not connected");
    }
    return quizzizDatabaseInstance;
};

module.exports = {
    CONNECT_DB,
    GET_DB,
};