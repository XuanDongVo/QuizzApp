require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { CONNECT_DB } = require("./src/config/mongoConfig");

const START_SERVER = () => {
  // Middleware
  app.use(express.json());
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

  // Import routes
  const topicRoute = require("./src/routes/topic");
  const questionRoute = require("./src/routes/question");
  const openAiRoute = require("./src/routes/openAi");

  // Sử dụng routes
  app.use("/topic", topicRoute);
  app.use("/question", questionRoute);
  app.use("/openai", openAiRoute);

  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

CONNECT_DB()
  .then(() => { console.log("Connected to database") })
  .then(() => { START_SERVER(); })
  .catch((error) => {
    console.log("Error connecting to database", error);
  }
  );