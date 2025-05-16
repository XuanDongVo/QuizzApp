'use client';
import { use } from 'react';
import QuizzEdit from '@/components/quizzCreated/QuizzEdit';
import { useCreatedQuizzContext } from '@/context/createdQuizzContext';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
    const { quizzId, questionId } = use(params);
    const { quizz } = useCreatedQuizzContext()

    const router = useRouter()
    const question = quizz?.questions?.find((item) => item.id === parseInt(questionId, 10));
    console.log('question', question)

    const handleSubmit = () => {
        router.back()
    };


    return <QuizzEdit quizzId={quizzId} question={question} onClick={handleSubmit} />;
}