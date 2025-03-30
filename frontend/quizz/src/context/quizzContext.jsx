"use client";
import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const router = useRouter();
    const [answerCorrect, setAnswerCorrect] = useState(0);
    const [answerIncorrect, setAnswerIncorrect] = useState(0);

    const increaseScore = () => {
        setScore((prev) => prev + 1);
    };

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setAnswerCorrect((prev) => prev + 1);
        } else {
            setAnswerIncorrect((prev) => prev + 1);
        }

    }

    const nextQuestion = (totalQuestions, categoryId) => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setShowAnswer(false);
        } else {
            setCurrentQuestionIndex(0);
            setShowAnswer(false);
            router.push(`/quizz/game-finnish/${categoryId}`);
        }
    };

    return (
        <QuizContext.Provider
            value={{
                currentQuestionIndex,
                score,
                showAnswer,
                setShowAnswer,
                increaseScore,
                nextQuestion,
                handleAnswerClick,
                answerCorrect,
                answerIncorrect

            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => useContext(QuizContext);