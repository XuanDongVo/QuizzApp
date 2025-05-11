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

route.get("/get/:publish", async (req, res) => {
    try {
        const { publish } = req.params;
        let publishStatus;

        if (publish.toLowerCase() === 'true') {
            publishStatus = true;
        } else if (publish.toLowerCase() === 'false') {
            publishStatus = false;
        } else {
            return res.status(400).json({ error: 'Invalid publish status. Use "true" or "false".' });
        }

        const quizzes = await quizzService.getQuizzesByPublishStatus(publishStatus);
        res.status(200).json(quizzes);
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

route.put("/:id/publish/:publish", async (req, res) => {
    try {
        const { id, publish } = req.params;
        let publishStatus;

        if (publish.toLowerCase() === 'true') {
            publishStatus = true;
        } else if (publish.toLowerCase() === 'false') {
            publishStatus = false;
        } else {
            return res.status(400).json({ error: 'Invalid publish status. Use "true" or "false".' });
        }

        const updatedQuizz = await quizzService.updateQuizzPublishStatus(id, publishStatus);
        res.status(200).json(updatedQuizz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = route;