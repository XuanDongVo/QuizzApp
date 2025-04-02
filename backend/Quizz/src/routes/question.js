const express = require("express");
const route = express.Router();
const questionService = require("../services/questionService");

// Lấy danh sách câu hỏi dựa trên topicId, bao gồm cả câu trả lời
route.get("/:topicId", async (req, res) => {
    try {
        const { topicId } = req.params;
        const questions = await questionService.getQuestionsByTopicId(topicId);
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Tạo câu hỏi mới
route.post("/new", async (req, res) => {
    //   try {
    //     const { topicId, text, answers } = req.body;
    //     if (!topicId || !text || !answers || !Array.isArray(answers)) {
    //       return res.status(400).json({ error: "Invalid input data" });
    //     }
    //     const question = await questionService.createQuestion(topicId, text, answers);
    //     res.status(201).json(question);
    //   } catch (error) {
    //     res.status(500).json({ error: error.message });
    //   }
});

module.exports = route;