// components/quizzCreated/QuizzMain.js
'use client';
import Link from 'next/link';
import { useQuizContext } from '@/context/createdQuizzContext';
import { useRouter } from "next/navigation";

const QuizzMain = ({ quizzId }) => {
    const { questions, deleteQuestion } = useQuizContext();
    const router = useRouter();

    const handleAddQuestion = () => {
        router.push(`created`)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">UNTITLED QUIZ</h1>
                    <div className="space-x-2">
                        <button className="px-4 py-2 bg-gray-200 rounded">SETTINGS</button>
                        <button className="px-4 py-2 bg-gray-200 rounded">PREVIEW</button>
                        <button className="px-4 py-2 bg-[#8854c0] text-white rounded">
                            PUBLISH
                        </button>
                    </div>
                </div>

                <div className="flex flex-row justify-between pb-2 pt-4">
                    <div>
                        <h2 className="font-bold text-black">
                            {questions.length} Question{questions.length !== 1 ? 's' : ''}
                        </h2>
                    </div>
                    <button
                        onClick={handleAddQuestion}
                        className="px-4 py-2 text-purple-600 border border-[var(--background-primary)] rounded hover:cursor-pointer hover:font-bold"
                    >
                        + Add question
                    </button>
                </div>

                {/* Questions List */}
                <div>
                    {questions.map((q, index) => (
                        <div
                            key={q.id}
                            className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center"
                        >
                            <div>
                                <p className="font-bold">{`${index + 1}. ${q.question} `}</p>
                                <div className="flex space-x-2 text-sm text-gray-600">
                                    {/* <span>{q.type}</span>
                                    <span>{q.time}</span>
                                    <span>{q.points}</span> */}
                                </div>
                                <div className="mt-2">
                                    {q.answers.map((answer, i) => (
                                        <span
                                            key={i}
                                            className={`mr-2 ${q.correctAnswer.includes(answer) ? 'text-green-600' : ''
                                                }`}
                                        >
                                            {answer}
                                            {q.correctAnswer.includes(answer) && ' ✓'}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-x-2">
                                <Link href={`edit/${q.id}`}>
                                    <button className="p-1 text-gray-600 hover:text-gray-800">
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
                                    onClick={() => deleteQuestion(q.id)}
                                    className="p-1 text-gray-600 hover:text-gray-800"
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
                    ))}
                </div>

                {/* Add Question Buttons */}
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleAddQuestion}
                        className="px-4 py-2 text-purple-600 border border-[var(--background-primary)] rounded hover:cursor-pointer hover:font-bold"
                    >
                        + Add question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizzMain;