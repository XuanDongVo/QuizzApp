'use client';
import { use } from 'react';
import QuizzEdit from '@/components/quizzCreated/QuizzEdit';
import { useQuizContext } from '@/context/createdQuizzContext';
export default function page({ params }) {
    const { questions } = useQuizContext()
    const { questionId } = use(params);

    const question = questions.find((item) => item.id === parseInt(questionId, 10));
    console.log('question', question)

    return <QuizzEdit question={question} />;
}