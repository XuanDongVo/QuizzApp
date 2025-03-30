"use client";
import QuizAnswers from "@/components/quizVoyage/quizAnswers/QuizAnswers";
import QuizQuestions from "@/components/quizVoyage/quizQuestion/QuizQuestions";
import { categories } from "@/dataFake";
import { useQuizContext } from "@/context/quizzContext";

export default function QuizPage({ categoryId }) {
    const { currentQuestionIndex } = useQuizContext();
    const category = categories.find((category) => category.id === Number(categoryId));

    return (
        <div
            className="flex flex-col h-screen"
            style={{ backgroundImage: 'url(https://cf.quizizz.com/themes/v2/classic/bg_image.jpg)' }}
        >
            <QuizQuestions
                questionData={category.questions[currentQuestionIndex]}
                totalQuestion={category.questions.length}
                currentQuestionIndex={currentQuestionIndex}
            />
            <QuizAnswers
                questionData={category.questions[currentQuestionIndex]}
                categoryId={categoryId}
            />
        </div>
    );
}