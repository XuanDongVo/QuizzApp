import { useCreatedQuizzContext } from '@/context/createdQuizzContext';
import Link from 'next/link';

export default function Page({ params }) {
    const { quizzId } = params;
    const { quizz, setQuizz } = useCreatedQuizzContext();

    const handleDelete = (id) => {
        const updated = quizz.questions.filter(q => q.id !== id);
        setQuizz({ ...quizz, questions: updated });
    }

    return (
        <div>
            <h1>Danh sách câu hỏi</h1>
            <Link href={`/admin/quizz/${quizzId}/created`}>➕ Thêm câu hỏi</Link>
            <ul>
                {quizz.questions.map(q => (
                    <li key={q.id}>
                        {q.title}
                        <Link href={`/admin/quizz/${quizzId}/edit/${q.id}`}>✏️</Link>
                        <button onClick={() => handleDelete(q.id)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
