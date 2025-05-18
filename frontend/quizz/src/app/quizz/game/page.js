'use client'
import QuizPage from '@/components/page/QuizPage';
import { useQuizContext } from "@/context/quizzContext";
export default function Page() {
    // 3.1.4 Lấy dữ liệu từ quizContext
    const { quizData } = useQuizContext();
    return <QuizPage quizData={quizData} />;
}
