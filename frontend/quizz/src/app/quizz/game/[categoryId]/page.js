'use client'
import QuizPage from '@/components/page/QuizPage';
import { use } from 'react'
export default function Page({ params }) {
    const { categoryId } = use(params);
    return <QuizPage categoryId={categoryId} />;
}
