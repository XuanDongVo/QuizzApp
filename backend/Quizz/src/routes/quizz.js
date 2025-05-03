const express = require("express");
const route = express.Router();
const quizzService = require("../services/quizzSerivce");

// tạo quizz mới 
route.post("/", async (req, res) => {
    try {
        const { title } = req.body;
        const quizz = await quizzService.createdQuizz(title);
        res.status(201).json(quizz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const quizz = await quizzService.getQuizzById(id);
        res.status(200).json(quizz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.post("/:id/questions", async (req, res) => {
    try {
        const { id } = req.params;
        const question = req.body;
        const updatedQuizz = await quizzService.addQuestionToQuizz(id, question);
        res.status(200).json(updatedQuizz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = route;