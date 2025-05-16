// QuizzEdit.jsx

'use client';
import { useRef, useState } from 'react';
import { useCreatedQuizzContext } from '@/context/createdQuizzContext';
import QuestionEditorHeader from './QuestionEditorHeader';


const QuizzEdit = ({ quizzId, question, onClick }) => {
    const { addQuestion, updateQuestion } = useCreatedQuizzContext();
    const questionRef = useRef();

    const colors = [
        "var(--color-question-1)",
        "var(--color-question-2)",
        "var(--color-question-3)",
        "var(--color-question-4)",
        "var(--color-question-5)",
    ];

    const [currentQuestion, setQuestion] = useState(question?.question || '');
    const [answers, setAnswers] = useState(question?.options || ['', '']);
    const [correctAnswer, setCorrectAnswer] = useState(question?.correctAnswer || '');
    const [questionError, setQuestionError] = useState(false);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleCorrectAnswerChange = (answer) => {
        setCorrectAnswer(answer);
    };

    const addAnswer = () => {
        if (answers.length < 5) {
            setAnswers([...answers, '']);
        }
    };

    const handleSavedQuestion = async () => {
        if (!currentQuestion.trim()) {
            setQuestionError(true);
            questionRef.current?.focus();
            return;
        }

        setQuestionError(false);

        const updatedData = {
            question: currentQuestion,
            options: answers,
            correctAnswer
        };

        if (question) {
            updateQuestion(question.id, updatedData, quizzId);
        } else {
            addQuestion({ currentQuestion, answers, correctAnswer: [correctAnswer], quizzId });
        }

        // Gửi toàn bộ questions lên server
        // await updateAllQuestions(quizzId, quizz.questions);

        onClick(); // Đóng popup hoặc quay về
    };

    const removeAnswer = (index) => {
        if (answers.length > 2) {
            const newAnswers = answers.filter((_, i) => i !== index);
            setAnswers(newAnswers);
            if (answers[index] === correctAnswer) {
                setCorrectAnswer('');
            }
        }
    };

    return (
        <>
            <QuestionEditorHeader handleSavedQuestion={handleSavedQuestion} handleBack={onClick} />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
                <div className="flex-1 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
                        <div className="bg-[#461a42] rounded-lg p-4 sm:p-6">
                            <div
                                className={`border-1 text-white p-6 sm:p-8 rounded-lg flex items-center justify-center ${questionError ? 'border-red-500' : 'border-white'}`}
                            >
                                <input
                                    type="text"
                                    placeholder="Type your question here"
                                    ref={questionRef}
                                    value={currentQuestion}
                                    onChange={(e) => {
                                        setQuestion(e.target.value);
                                        setQuestionError(false);
                                    }}
                                    className="bg-transparent text-center text-lg sm:text-xl outline-none w-full max-w-4xl placeholder-gray-400"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6">
                                {answers.map((answer, index) => (
                                    <div
                                        key={index}
                                        className={`relative transition-opacity duration-300 ${correctAnswer === answer ? 'opacity-100' : 'opacity-50'}`}
                                    >
                                        <div
                                            className="border-2 border-white rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all duration-500 h-32 min-w-[250px]"
                                            style={{ backgroundColor: colors[index] }}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Type answer option here"
                                                value={answer}
                                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                                className="w-full h-full p-4 rounded-lg text-white bg-transparent outline-none placeholder-gray-300 text-center text-base sm:text-lg"
                                            />
                                            <button
                                                onClick={() => handleCorrectAnswerChange(answer)}
                                                className={`absolute top-4 left-4 p-1 rounded-full border-1 border-white ${correctAnswer === answer ? 'text-green-400' : 'text-gray-300'
                                                    } hover:text-green-500 transition-colors duration-300 cursor-pointer`}
                                                disabled={!answer}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </button>
                                            {answers.length > 2 && (
                                                <button
                                                    onClick={() => removeAnswer(index)}
                                                    className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {answers.length < 5 && (
                                <div className="flex justify-center p-4" onClick={addAnswer}>
                                    <button className="px-4 py-2 text-white bg-[var(--background-primary)] rounded hover:bg-[var(--background-primary)]/80 transition duration-300 cursor-pointer">
                                        + Add answer option
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizzEdit;
