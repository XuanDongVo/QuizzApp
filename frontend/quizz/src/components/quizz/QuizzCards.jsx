import React from "react";
import QuizzCard from "./QuizzCard";
import Link from "next/link";
import { categories } from "../../dataFake";

const QuizzCards = () => {



    return (
        <div className="grid grid-cols-4 gap-y-5 gap-x-5">
            {categories.map((category) => (
                <Link key={category.id} href={`/quizz/pre-game/${category.id}`}>
                    <QuizzCard category={category} />
                </Link>
            ))}
        </div>
    );
};

export default QuizzCards;
