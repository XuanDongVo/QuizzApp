const express = require("express");
const route = express.Router();
const resultService = require("../services/resultService");

// Lưu kết quả làm bài
route.post("/", async (req, res) => {
    try {
        const { userId, quizzId, score, totalQuestions, correctAnswers, incorrectAnswers } = req.body;

        if (!userId || !quizzId) {
            return res.status(400).json({ error: "User ID and Quizz ID are required" });
        }

        const result = await resultService.saveQuizResult(userId, quizzId, score, totalQuestions, correctAnswers, incorrectAnswers);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lấy kết quả theo quizzId
route.get("/quizz/:quizzId", async (req, res) => {
    try {
        const { quizzId } = req.params;
        const results = await resultService.getResultsByQuizzId(quizzId);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lấy kết quả theo userId
route.get("/user/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const results = await resultService.getResultsByUserId(userId);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Xóa kết quả theo resultId
route.delete("/:resultId", async (req, res) => {
    try {
        const { resultId } = req.params;
        await resultService.deleteResultById(resultId);
        res.status(200).json({ message: "Result deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = route;
