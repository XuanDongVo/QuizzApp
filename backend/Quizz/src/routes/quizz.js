//  Quizz.js của BACKEND

const express = require("express");
const route = express.Router();
const quizzService = require("../services/quizzSerivce");

// tạo quizz mới
route.post("/", async (req, res) => {
    try {
        {/* 2.1.6 Quizz.js(BE) nhận dữ liệu được truyền từ Quizz.js(FE). */ }
        const { title } = req.body;
        {/*2.1.7 Quizz.js(BE) gọi hàm createQuizz từ QuizzService để khởi tạo quizz. */ }
        const quizz = await quizzService.createdQuizz(title);
        {/*2.1.11 Quizz.js(BE) trả đối tượng quizz cho Navbar.*/ }
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
        {/*2.1.30 Quizz.js(BE) nhận dữ liệu question được truyền qua api. */ }
        const question = req.body;
        {/*2.1.31 Quizz.js(BE) gọi hàm addQuestionToQuizz từ QuizzService để thêm câu hỏi vào quizz. */ }
        const updatedQuizz = await quizzService.addQuestionToQuizz(id, question);
        res.status(200).json(updatedQuizz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

route.put("/:id/publish/:publish", async (req, res) => {
    try {
        {/*2.1.39 Quizz.js(BE) nhận dữ liệu question được truyền qua api. */ }
        const { id, publish } = req.params;
        let publishStatus;
        if (publish.toLowerCase() === 'true') {
            publishStatus = true;
        } else if (publish.toLowerCase() === 'false') {
            publishStatus = false;
        } else {
            return res.status(400).json({ error: 'Invalid publish status. Use "true" or "false".' });
        }
        {/*2.1.40 Quizz.js(BE) gọi hàm updateQuizzPublishStatus từ QuizzService để cập nhật trạng thái của quizz */ }
        const updatedQuizz = await quizzService.updateQuizzPublishStatus(id, publishStatus);
        res.status(200).json(updatedQuizz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = route;