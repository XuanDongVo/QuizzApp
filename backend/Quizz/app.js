require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { CONNECT_DB } = require("./src/config/mongoConfig");

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.BUILD_MODE === "production"
    ? process.env.CLIENT_URL
    : "http://localhost:3000",
  credentials: true,
}));

// Import routes
const questionRoute = require("./src/routes/question");
const openAiRoute = require("./src/routes/openAi");
const quizzRoute = require("./src/routes/quizz");

// Sử dụng routes
app.use("/question", questionRoute);
app.use("/openai", openAiRoute);
app.use("/quizz", quizzRoute);

// Kết nối cơ sở dữ liệu và khởi động server
const PORT = process.env.PORT || 3000;

CONNECT_DB()
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on ${process.env.BUILD_MODE === "production" ? "Production" : "Development"} mode at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });