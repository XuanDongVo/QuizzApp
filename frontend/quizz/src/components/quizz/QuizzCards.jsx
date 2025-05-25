import React from "react";
import QuizzCard from "./QuizzCard";
import Link from "next/link";
import { categories } from "../../dataFake";

const QuizzCards = () => {
    return (
        <div className="relative">
            <div className="grid grid-cols-4 gap-y-5 gap-x-5">
                {categories.map((category) => (
// 3.1.1 User click chọn bộ câu hỏi
// 3.1.2 Chuyển tới trang pre-game(idQuiz)
                    <Link key={category.id} href={`/quizz/pre-game/${category.id}`}>
                        <QuizzCard category={category} />
                    </Link>
                ))}
            </div>
        </div >
    );
};

export default QuizzCards;
