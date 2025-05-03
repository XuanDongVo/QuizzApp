"use client";

import QuizPage from "@/components/page/QuizPage";
import { useCreatedQuizzContext } from "@/context/createdQuizzContext";
import { useQuizContext } from "@/context/quizzContext";
import { useEffect, use } from "react";

export default function Page({ params }) {
    const { quizzId } = use(params);
    const { quizz } = useCreatedQuizzContext();
    const { setQuizData, quizData, setCurrentQuestionIndex } = useQuizContext();
    useEffect(() => {
        if (quizz?.questions > 0) {
            setQuizData(quizz);
            setCurrentQuestionIndex(0)
        }
    }, [quizzId, quizz]);

    if (!quizz || !quizz?.questions || quizz?.questions.length === 0) {
        return <div>Loading...</div>;
    }

    return <QuizPage quizData={quizz} quizzId={quizzId} isPreview={true} />;
}
