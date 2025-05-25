'use client';
import React from 'react';
import Link from 'next/link';
import { useCreatedQuizzContext } from '@/context/createdQuizzContext';
import { useRouter } from "next/navigation";
import QuizzHeader from './QuizzHeader';
import { useEffect } from 'react';
import { getQuizzById } from '@/serivce/quizz';

const QuizzMain = React.memo(({ quizzId }) => {
    const { quizz, deleteQuestion, setQuizz } = useCreatedQuizzContext();
    const [loading, setLoading] = React.useState(true);

    const router = useRouter();
    {/* 2.1.15.QuizzMain điều hướng bạn sang trang tạo câu hỏi (QuizzEdit). */ }
    const handleAddQuestion = () => {
        router.push(`created`);
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchQuizz = async () => {
                setLoading(true);
                {/* 2.1.13 QuizzMain gọi hàm để lấy ra Quizz vừa khởi tạo. */ }
                const response = await getQuizzById(quizzId);
                if (response.status === 200) {
                    const quizzData = response.data;
                    setQuizz(quizzData);
                } else {
                    console.error('Failed to fetch quizz data:', response.statusText);
                }
                setLoading(false);
            };

            fetchQuizz();
        }, 500);

        return () => clearTimeout(timer);
    }, [quizzId]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-[var(--background-primary)] border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>
            </div>
        );
    }

    return (
        <>

            <QuizzHeader />
            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
                    {/* Title and Add Question Button */}
                    <div className="flex flex-col sm:flex-row sm:justify-between items-center pb-4 pt-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
                            {quizz?.questions?.length || 0} Question
                        </h2>

                        {/* 2.1.14 Người dùng nhấn nút button ‘add question’ để tạo câu hỏi. */}
                        <button
                            onClick={handleAddQuestion}
                            className="px-4 py-2 bg-[var(--background-primary)] text-white rounded-lg hover:bg-[var(--background-primary)]/80 transition-colors duration-200 cursor-pointer"
                        >
                            + Add Question
                        </button>
                    </div>

                    {/* Questions List */}
                    <div className="mt-6 space-y-4">
                        {(quizz?.questions?.length ?? 0) === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-gray-500 text-lg">Chưa có câu hỏi nào. Hãy thêm câu hỏi để bắt đầu!</p>
                            </div>
                        ) : (
                            quizz?.questions?.map((q, index) => (
                                <div
                                    key={q.id}
                                    className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                                >
                                    <div className="mb-4 sm:mb-0">
                                        <p className="font-bold text-lg text-gray-800">{`${index + 1}. ${q.question}`}</p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {q.options.map((answer, i) => (
                                                <span
                                                    key={i}
                                                    className={`inline-block px-3 py-1 rounded text-sm font-medium ${q.correctAnswer.includes(answer)
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {answer}
                                                    {q.correctAnswer.includes(answer) && ' ✓'}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Link href={`edit/${q.id}`}>
                                            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => deleteQuestion(quizzId, q.id)}
                                            className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Add Question Button (Bottom) */}
                    {quizz?.length > 0 && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={handleAddQuestion}
                                className="px-6 py-3 bg-[var(--background-primary)] text-white rounded-lg hover:bg-[var(--background-primary)]/80 transition-colors duration-200 cursor-pointer"
                            >
                                + Add Another Question
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

});

export default QuizzMain;