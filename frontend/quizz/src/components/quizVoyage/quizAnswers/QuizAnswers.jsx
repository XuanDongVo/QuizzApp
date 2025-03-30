import React, { useState, useEffect } from "react";
import QuizAnswer from "./QuizzAnswer";
import { useQuizContext } from "@/context/quizzContext";

const QuizAnswers = ({ questionData, categoryId }) => {
    const { showAnswer, setShowAnswer, currentQuestionIndex } = useQuizContext();
    const [selectedOption, setSelectedOption] = useState(null);

    // Reset selectedOption khi chuyển sang câu hỏi mới
    useEffect(() => {
        setSelectedOption(null);
        setShowAnswer(false);
    }, [currentQuestionIndex, setShowAnswer]);

    return (
        <div className="flex flex-row gap-2 p-4 overflow-x-auto h-1/2">
            {questionData.options.map((option, index) => (
                <QuizAnswer
                    key={index}
                    index={index}
                    option={option}
                    correctAnswer={questionData.correctAnswer}
                    categoryId={categoryId}
                    totalQuestions={questionData.options.length}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            ))}
        </div>
    );
};

export default QuizAnswers;