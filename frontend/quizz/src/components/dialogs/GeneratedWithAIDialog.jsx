'use client';
import { useState, useRef, useEffect } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import { useRouter } from "next/navigation";
import { useCreatedQuizzContext } from '@/context/createdQuizzContext';
import { openAiGenerated } from '@/serivce/openApiService';
import { createdQuizz } from '@/serivce/quizz';

const GeneratedWithAIDialog = ({ open, handleClose }) => {
    const [topic, setTopic] = useState('');
    const [questionCount, setQuestionCount] = useState(10);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();
    const { addQuestion } = useCreatedQuizzContext();

    const topicRef = useRef(null);
    const countRef = useRef(null);

    const handleSubmit = async () => {
        if (!topic.trim()) {
            topicRef.current?.focus();
            return;
        }

        if (!questionCount || questionCount < 1 || questionCount > 10) {
            countRef.current?.focus();
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await createQuizAndAddQuestions(topic, questionCount);
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };


    const createQuizAndAddQuestions = async (topic, questionCount) => {
        // Bước 1: Lấy câu hỏi từ AI
        const response = await openAiGenerated(topic, questionCount);
        // Bước 2: Tạo quiz mới
        const quizResponse = await createdQuizz(topic.trim());
        const quizzId = quizResponse.data.id;
        // Bước 3: Duyệt qua các câu hỏi từ AI và thêm vào quizz
        for (let question of response.data.data.questions) {
            await addQuestion({
                currentQuestion: question.question,
                answers: question.options,
                correctAnswer: [question.correctAnswer],
                quizzId
            });
        }

        setTopic('');
        router.push(`/admin/quizz/${quizzId}/main`);
    };


    return (
        <Dialog open={open} onClose={handleClose} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <DialogPanel className="relative w-full max-w-md sm:max-w-lg transform overflow-hidden rounded-xl bg-white p-6 sm:p-8 text-left shadow-xl transition-all">
                        <DialogTitle
                            as="h3"
                            className="text-lg sm:text-xl font-semibold leading-6 text-gray-900 text-center"
                        >
                            Tạo câu hỏi bằng AI
                        </DialogTitle>

                        {loading ? (
                            <div className="mt-6 text-center text-blue-600 text-sm">
                                Đang tạo câu hỏi... Vui lòng chờ đợi ⏳
                            </div>
                        ) : (
                            <>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Chủ đề
                                    </label>
                                    <input
                                        type="text"
                                        ref={topicRef}
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        placeholder="Ví dụ: Lịch sử Việt Nam, Toán học..."
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--background-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--background-primary)]"
                                        disabled={loading}
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Số lượng câu hỏi (tối đa 10)
                                    </label>
                                    <input
                                        type="number"
                                        ref={countRef}
                                        value={questionCount}
                                        onChange={(e) => setQuestionCount(Number(e.target.value))}
                                        min={1}
                                        max={10}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--background-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--background-primary)]"
                                        disabled={loading}
                                    />
                                </div>

                                <div className="mt-5 rounded-md bg-yellow-100 p-3 text-sm text-yellow-800">
                                    ⚠️ Câu hỏi được tạo bởi AI có thể không hoàn toàn chính xác. Vui lòng kiểm tra lại nội dung trước khi sử dụng.
                                </div>

                                {error && (
                                    <div className="mt-4 text-sm text-red-600">
                                        {error}
                                    </div>
                                )}

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        disabled={loading}
                                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="rounded-md bg-[var(--background-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--background-primary)]/80 disabled:opacity-50"
                                    >
                                        Tạo câu hỏi
                                    </button>
                                </div>
                            </>
                        )}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default GeneratedWithAIDialog;
