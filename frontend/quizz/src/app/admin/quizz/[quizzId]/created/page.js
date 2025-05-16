'use client';
import QuizzEdit from "@/components/quizzCreated/QuizzEdit";
import { use } from 'react'
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
    const router = useRouter()

    const { quizzId } = use(params);

    const handleSubmit = () => {
        router.back()
    };

    return (
        <QuizzEdit quizzId={quizzId} question={null} onClick={handleSubmit} />
    )


}