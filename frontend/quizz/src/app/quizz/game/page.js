'use client'
import QuizPage from '@/components/page/QuizPage';
import { useQuizContext } from "@/context/quizzContext";
export default function Page() {
    const { quizData } = useQuizContext();
    return <QuizPage quizData={quizData} />;
}
