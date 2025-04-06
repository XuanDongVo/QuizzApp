'use client';
import { useEffect, useState } from 'react';
import { openAiGenerated } from '@/serivce/openApiService'; // Đảm bảo đường dẫn đúng
import { useSearchParams } from 'next/navigation';
import { useQuizContext } from '@/context/quizzContext';
import Link from 'next/link';

export default function Page() {
    const { setQuizData, quizData } = useQuizContext(); // Lấy quizData từ context
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');
    const questionCount = searchParams.get('questionCount');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await openAiGenerated(topic, questionCount);
                setQuizData(response.data.data);
            } catch (err) {
                setError(err.message || 'Có lỗi xảy ra');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [topic, questionCount, setQuizData]);

    return (
        <div className="relative h-screen">
            <div
                className="bg-cover bg-center h-full"
                style={{ backgroundImage: 'url(https://cf.quizizz.com/themes/v2/classic/bg_image.jpg)' }}
            >
                <div className="container mx-auto h-full flex items-center justify-center flex-col">
                    <div className="flex gap-5 flex-col w-3/12">
                        {/* Tên trò chơi */}
                        <div className="bg-gradient-to-t from-[#ffffff14] to-[#ffffff0a] rounded-lg p-5">
                            <div className="flex gap-7">
                                <img src={quizData?.image} className="w-20 h-20" alt="Quiz Image" />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-2xl text-white">{topic}</h1>
                                    <p className="text-white font-light opacity-75">{questionCount} câu hỏi</p>
                                </div>
                            </div>
                        </div>

                        {/* Nút chơi */}
                        <div className="bg-[var(--background-color)] rounded-lg p-5">
                            <div className="flex flex-col gap-5 items-center justify-center">
                                {/* Tiến trình game */}
                                <div>

                                    <div className="flex justify-between">
                                        <p className="text-white text-[10px] font-medium">Start</p>
                                        <p className="text-white text-[10px] font-medium">End</p>
                                    </div>
                                </div>
                                <div className="text-[18px] font-bold text-white text-center">
                                    {questionCount} câu hỏi chuẩn bị
                                </div>

                                {/* Thông báo khi đang tải */}
                                {loading && (
                                    <div className="text-white text-sm text-center">
                                        Quá trình khởi tạo quiz mất từ 5 đến 10 giây, vui lòng chờ!
                                    </div>
                                )}

                                {/* Nút Start Game */}
                                <button
                                    className={`w-full py-2 rounded-lg text-white font-bold ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                                        }`}
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : (
                                        <Link href="/quizz/game">
                                            <span>Start Game</span>
                                        </Link>
                                    )}
                                </button>

                                {/* Hiển thị lỗi nếu có */}
                                {error && (
                                    <div className="text-red-500 text-sm text-center">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="/">
                <div className="absolute top-5 left-5 hover:cursor-pointer hover:bg-amber-50 hover:opacity-75 bg-amber-50 rounded-full p-2 opacity-50">
                    <div className="text-black font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06  Star12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
    );
}
