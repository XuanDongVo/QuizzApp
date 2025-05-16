const express = require("express");
const route = express.Router();
const topicService = require("../services/topicService");
const { subjectDocuments } = require("../models/model");

// Lấy danh sách tất cả các topic
route.get("/", async (req, res) => {
    try {
        const topics = await topicService.getAllTopics();
        res.json(topics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = route;