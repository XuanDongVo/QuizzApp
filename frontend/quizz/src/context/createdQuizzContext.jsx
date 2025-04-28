'use client';
import React, { createContext, useContext, useState } from 'react';

const CreatedQuizzContext = createContext();

export const CreatedQuizzProvider = ({ children }) => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Question 1',
            answers: ['a', 'b', 'c', 'd'],
            correctAnswer: ['b'],
        },
    ]);

    const addQuestion = ({ currentQuestion, answers, correctAnswer }) => {
        const newQuestion = {
            id: questions.length + 1,
            question: currentQuestion,
            answers: answers,
            correctAnswer: correctAnswer,
        };
        setQuestions([...questions, newQuestion]);
    };

    // Hàm chỉnh sửa câu hỏi
    const updateQuestion = (id, updatedQuestion) => {
        setQuestions(
            questions.map((q) =>
                q.id === id ? { ...q, ...updatedQuestion } : q
            )
        );
    };

    // Hàm xóa câu hỏi
    const deleteQuestion = (id) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    return (
        <CreatedQuizzContext.Provider
            value={{
                questions,
                addQuestion,
                updateQuestion,
                deleteQuestion,

            }}
        >
            {children}
        </CreatedQuizzContext.Provider>
    );
};

export const createdQuizContext = () => useContext(CreatedQuizzContext);