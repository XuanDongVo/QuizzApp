

import QuizzEdit from "@/components/quizzCreated/QuizzEdit";
import { use } from 'react'

export default function page({ params }) {

    const { quizzId } = use(params);

    return (
        <QuizzEdit quizzId={quizzId} question={null} />
    )


}