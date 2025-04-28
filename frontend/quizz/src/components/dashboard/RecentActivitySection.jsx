import QuizzCard from "../quizz/QuizzCard";
import { categories } from "../../dataFake";
import Link from "next/link";

const RecentActivitySection = () => {
    return (
        <div className="max-w-8/12 mx-auto py-6 px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/quizz/pre-game/${category.id}`}>
                            <QuizzCard category={category} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivitySection;