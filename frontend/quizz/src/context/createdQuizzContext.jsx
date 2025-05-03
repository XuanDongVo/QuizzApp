'use client';
import React, { createContext, useContext, useState } from 'react';
import { updateAllQuestions } from '@/serivce/quizz';

const CreatedQuizzContext = createContext();

export const CreatedQuizzProvider = ({ children }) => {
    const [quizz, setQuizz] = useState({
        id: null,
        name: '',
        image: 'https://www.ksb-fluidexperts.fr/wp-content/uploads/2020/12/QUIZZ-scaled.jpg',
        questions: []
    });

    // Thêm câu hỏi mới
    const addQuestion = ({ currentQuestion, answers, correctAnswer, quizzId }) => {
        const newQuestion = {
            id: Date.now(),
            question: currentQuestion,
            options: answers,
            correctAnswer: correctAnswer[0]
        };

        const updatedQuestions = Array.isArray(quizz?.questions)
            ? [...quizz.questions, newQuestion]
            : [newQuestion];

        setQuizz(prev => ({
            ...prev,
            questions: updatedQuestions
        }));

        // Gửi câu hỏi mới lên server
        updateAllQuestions(quizzId, updatedQuestions)

    };


    // Cập nhật câu hỏi
    const updateQuestion = (questionId, updatedQuestion, quizzId) => {
        const updatedQuestions = quizz.questions.map((question) => {
            if (question.id === questionId) {
                return { ...question, ...updatedQuestion };
            }
            return question;
        });

        setQuizz((prevQuizz) => {
            return {
                ...prevQuizz,
                questions: updatedQuestions
            };
        });

        updateAllQuestions(quizzId, updatedQuestions);
    };


    // Xoá câu hỏi
    const deleteQuestion = (quizzId, index) => {
        const updatedQuestions = quizz.questions.filter((item) => item.id !== index);
        setQuizz((prevQuizz) => {
            return {
                ...prevQuizz,
                questions: updatedQuestions
            };
        });

        updateAllQuestions(quizzId, updatedQuestions);
    };



    return (
        <CreatedQuizzContext.Provider
            value={{
                quizz,
                setQuizz,
                addQuestion,
                updateQuestion,
                deleteQuestion
            }}
        >
            {children}
        </CreatedQuizzContext.Provider>
    );
};

export const useCreatedQuizzContext = () => useContext(CreatedQuizzContext);
