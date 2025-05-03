const { MongoClient } = require('mongodb');

let quizDatabaseInstance = null;

const connect = async () => {
    const uri = process.env.MONGO_URI;
    const dbName = process.env.MONGO_DB_NAME;

    if (!uri || !dbName) {
        throw new Error('MONGO_URI or MONGO_DB_NAME environment variable is not defined');
    }

    console.log('Connecting with URI:', uri); // Debug log

    const client = new MongoClient(uri, {
        serverApi: {
            version: '1',
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        quizDatabaseInstance = client.db(dbName);

        if (!quizDatabaseInstance) {
            throw new Error('Database is not connected');
        }
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Connection error:', error);
        throw error;
    }
};

// Gọi connect và export sau khi kết nối hoàn tất
connect().catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});

module.exports = {
    CONNECT_DB: quizDatabaseInstance,
};