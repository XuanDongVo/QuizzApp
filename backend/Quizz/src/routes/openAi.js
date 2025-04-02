const express = require("express");
const route = express.Router();
const openAIService = require("../services/OpenAIService");

route.get("/", async (req, res) => {
    try {
        const { topic, questionCount } = req.query;

        // Kiểm tra input
        if (!topic || !questionCount) {
            return res.status(400).json({ error: "Missing topic or questionCount in query parameters" });
        }

        // Gọi OpenAI Service
        const response = await openAIService.getChatGPTResponse(topic, parseInt(questionCount));
        res.json({ data: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = route;