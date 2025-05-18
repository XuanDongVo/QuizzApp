"use client";
import QuizAnswers from "@/components/quizVoyage/quizAnswers/QuizAnswers";
import QuizQuestions from "@/components/quizVoyage/quizQuestion/QuizQuestions";
import { useQuizContext } from "@/context/quizzContext";
// 3.1.5 quizPage hiển thị câu hỏi
export default function QuizPage({ quizData, quizzId, isPreview }) {
    const { currentQuestionIndex } = useQuizContext();

    return (
        <div
            className="flex flex-col h-screen"
            style={{ backgroundImage: 'url(https://cf.quizizz.com/themes/v2/classic/bg_image.jpg)' }}
        >
            <QuizQuestions
                questionData={quizData?.questions[currentQuestionIndex]}
                totalQuestion={quizData?.questions?.length}
                currentQuestionIndex={currentQuestionIndex}
            />
            <QuizAnswers
                questionData={quizData?.questions[currentQuestionIndex]}
                categoryId={quizData}
                quizzId={quizzId}
                isPreview={isPreview}
                totalQuestion={quizData?.questions?.length}
            />
        </div>
    );
}