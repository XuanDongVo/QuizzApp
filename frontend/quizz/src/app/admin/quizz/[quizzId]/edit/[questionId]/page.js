'use client';
import { use } from 'react';
import QuizzEdit from '@/components/quizzCreated/QuizzEdit';
import { useQuizContext } from '@/context/createdQuizzContext';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
    const { quizzId } = use(params);
    const { questions } = useQuizContext()
    const { questionId } = use(params);

    const router = useRouter()

    const question = questions.find((item) => item.id === parseInt(questionId, 10));

    const handleSubmit = () => {
        router.push(`/admin/quizz/${quizzId}/main`)
    };


    return <QuizzEdit question={question} onClick={handleSubmit} />;
}