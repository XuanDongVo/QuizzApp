"use client";
import QuizAnswers from "@/components/quizVoyage/quizAnswers/QuizAnswers";
import QuizQuestions from "@/components/quizVoyage/quizQuestion/QuizQuestions";
import { useQuizContext } from "@/context/quizzContext";

export default function QuizPage({ quizData, quizzId, isPreview }) {
    //   3.1.7 Lấy  câu hỏi hiện tại
    const { currentQuestionIndex } = useQuizContext();
    // 3.1.8  Hiển thị câu hỏi hiện tại
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