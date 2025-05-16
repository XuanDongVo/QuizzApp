import React from 'react';
import Link from 'next/link';

// Quiz Card Component
const QuizzCard = ({ quiz }) => {
    return (
        <button
            aria-label="Quiz Information Card"
            type="button"
            className="w-full flex flex-col items-start rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-white h-[200px] hover:cursor-pointer"
            data-cy={`solo-quiz-${quiz.id || 0}`}
        >
            {/* Image Section */}
            <div className="relative w-full">
                <div className="w-full h-32 bg-[var(--background-primary)] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-repeat opacity-10"></div>
                    <span className="text-4xl z-10">{quiz.emoji || "🌍"}</span>
                </div>

                {/* Quiz Stats */}
                <div className="absolute w-full flex justify-between px-2 py-1 top-1">
                    <span className="text-xs text-gray-700 bg-gray-100 rounded px-2 py-1">{quiz.questions || "8"} Qs</span>
                    <span className="text-xs text-gray-700 bg-gray-100 rounded px-2 py-1">{quiz.plays || "150k"} plays</span>
                </div>
            </div>

            {/* Quiz Title */}
            <p className="w-full px-3 py-2 text-sm text-gray-800 line-clamp-2 font-bold">
                {quiz.title || "Vòng quanh thế giới"}
            </p>
        </button>
    );
};



// Quiz Category Section Component
const QuizCategorySection = ({ title, quizzes }) => {
    return (
        <div className="max-w-8/12 mx-auto py-6 px-4 sm:px-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="text-yellow-400 mr-2">⭐</span>
                    {title}
                </h2>
                <Link href="/see-more">
                    <button className="bg-[var(--background-primary)] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-[var(--background-primary)]/80 transition duration-200 ease-in-out hover:cursor-pointer text-sm sm:text-base">
                        See more
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                {quizzes.map((quiz, index) => (
                    <QuizzCard key={index} quiz={quiz} />
                ))}
            </div>
        </div>
    );
};
export default QuizCategorySection;
