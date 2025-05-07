'use client';
import React, { useState, useEffect, useRef } from 'react';
import QuizzCard from '@/components/quizz/QuizzCard';
import Link from "next/link";
import { getQuizzesByPublishStatus } from '@/serivce/quizz';

export default function Page() {
    const [activeTab, setActiveTab] = useState('published');
    const [publishedQuizzes, setPublishedQuizzes] = useState([]);
    const [notPublishedQuizzes, setNotPublishedQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tabRefs = useRef([]);
    const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
    // Lấy dữ liệu quiz
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                setLoading(true);
                const publishedResponse = await getQuizzesByPublishStatus(true);
                const notPublishedResponse = await getQuizzesByPublishStatus(false);

                console.log('Published Quizzes:', publishedResponse);
                console.log('Not Published Quizzes:', notPublishedResponse);

                setPublishedQuizzes(publishedResponse.data || []);
                setNotPublishedQuizzes(notPublishedResponse.data || []);
            } catch (err) {
                console.error('Error fetching quizzes:', err);
                setError('Failed to load quizzes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    // Xử lý hiệu ứng thanh di chuyển cho tab
    useEffect(() => {
        const activeIndex = activeTab === 'published' ? 0 : 1;
        if (tabRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = tabRefs.current[activeIndex];
            setTabIndicator({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    const quizzes = activeTab === 'published' ? publishedQuizzes : notPublishedQuizzes;

    // Hiển thị giao diện loading
    if (loading) {
        return (
            <div className="p-6 max-w-7xl mx-auto flex justify-center items-center min-h-[50vh]">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-[var(--background-primary)] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">Loading quizzes...</p>
                </div>
            </div>
        );
    }

    // Hiển thị lỗi nếu có
    if (error) {
        return (
            <div className="p-6 max-w-7xl mx-auto text-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="relative flex space-x-6 border-b border-gray-200 mb-6">
                {['Published', 'Not Published'].map((tab, index) => (
                    <button
                        key={tab}
                        ref={el => (tabRefs.current[index] = el)}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`pb-2 text-gray-600 font-bold transition-colors duration-200 ${activeTab === tab.toLowerCase()
                            ? 'text-[var(--background-primary)]'
                            : 'hover:text-[var(--background-primary)]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
                <div
                    className="absolute bottom-0 h-0.5 bg-[var(--background-primary)] transition-all duration-300"
                    style={{ left: tabIndicator.left, width: tabIndicator.width }}
                />
            </div>

            {/* Grid Layout cho QuizzCard */}
            {quizzes.length > 0 ? (
                <div className="grid grid-cols-4 gap-y-5 gap-x-5">
                    {quizzes.map((quiz) => (
                        <Link key={quiz._id} href={`/admin/quizz/${quiz._id}/main`}>
                            <QuizzCard key={quiz._id} category={quiz} />
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500">
                    No {activeTab === 'published' ? 'published' : 'unpublished'} quizzes available.
                </div>
            )}
        </div>
    );
}