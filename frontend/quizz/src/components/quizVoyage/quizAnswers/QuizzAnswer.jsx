"use client";
import React from "react";
import { useQuizContext } from "@/context/quizzContext";

const QuizAnswer = ({
    index,
    option,
    correctAnswer,
    categoryId,
    totalQuestions,
    selectedOption,
    setSelectedOption,
    quizzId,
    isPreview,
}) => {
    const colors = ["var(--color-question-1)", "var(--color-question-2)", "var(--color-question-3)", "var(--color-question-4)", "var(--color-question-5)"];
    const { increaseScore, nextQuestion, showAnswer, setShowAnswer, handleAnswerClick } = useQuizContext();

    const isSelected = selectedOption === option;
    const isCorrect = option === correctAnswer;

    let backgroundColor = colors[index];

    if (selectedOption) {
        if (isCorrect && (isSelected || showAnswer)) {
            backgroundColor = "green"; // Highlight đáp án đúng
        } else if (isSelected && !isCorrect) {
            backgroundColor = "red"; // Highlight đáp án sai
        }
    }

// 3.1.6 User click chọn đáp án
    const onAnswerClick = () => {
        if (!selectedOption) {
            setSelectedOption(option);
            handleAnswerClick(isCorrect); // Gọi hàm từ context
// 3.1.7 Kiểm tra đáp án có đúng không
 	// Đúng: Tăng điểm
	// Sai: Hiện đáp án đúng
            if (isCorrect) {
                increaseScore();
                setTimeout(() => {
                    nextQuestion(totalQuestions, categoryId, isPreview, quizzId);
                }, 1500);
            } else {
                setShowAnswer(true); // Hiển thị đáp án đúng khi chọn sai
                setTimeout(() => {
                    nextQuestion(totalQuestions, categoryId, isPreview, quizzId);
                }, 2000);
            }
        }
    };


    return (
        <div
            onClick={onAnswerClick}
            className="border-2 border-white rounded-lg shadow-md flex items-center justify-center cursor-pointer flex-1 transition-all duration-500 min-w-[200px]"
            style={{
                backgroundColor,
                opacity: selectedOption && !isCorrect && !isSelected && !showAnswer ? "0.5" : "1",
            }}
        >
            <div className="text-center text-white text-lg p-4">{option}</div>
        </div>
    );
};

export default QuizAnswer;