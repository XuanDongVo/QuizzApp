
import QuizzMain from "@/components/quizzCreated/QuizzMain";
import { use } from 'react'

export default function page({ params }) {
    const { quizzId } = use(params);
    return (
        <QuizzMain quizzId={quizzId} />
    )
}