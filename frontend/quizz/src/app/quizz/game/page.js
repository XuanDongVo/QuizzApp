'use client'
import QuizPage from '@/components/page/QuizPage';
import { useQuizContext } from "@/context/quizzContext";
export default function Page() {
    // trang game
    // 3.1.5  Dùng QuizContext để xử lý logic
    const { quizData } = useQuizContext();
    // 3.1.6  Chuyển đến trang QuizPage
    return <QuizPage quizData={quizData} />;
}
