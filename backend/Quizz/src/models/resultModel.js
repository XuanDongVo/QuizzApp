const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    quizzId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Quizz" },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    correctAnswers: { type: Number, required: true },
    incorrectAnswers: { type: Number, required: true },
    submittedAt: { type: Date, default: Date.now }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
