require("dotenv").config(); // Load biến môi trường từ file .env
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

// Kiểm tra biến môi trường
if (!uri) {
    throw new Error("MONGO_URI is not defined in .env");
}
if (!dbName) {
    throw new Error("MONGO_DB_NAME is not defined in .env");
}

// Khởi tạo client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let quizzizDatabaseInstance = null;

// Hàm kết nối đến database
const CONNECT_DB = async () => {
    try {
        await client.connect();
        quizzizDatabaseInstance = client.db(dbName);
        console.log("✅ Connected to MongoDB:", dbName);
    } catch (err) {
        console.error("❌ Failed to connect to MongoDB:", err.message);
        process.exit(1);
    }
};

// Hàm lấy đối tượng kết nối
const GET_DB = () => {
    if (!quizzizDatabaseInstance) {
        throw new Error("Database is not connected yet. Please call CONNECT_DB first.");
    }
    return quizzizDatabaseInstance;
};

module.exports = {
    CONNECT_DB,
    GET_DB,
};
