import react from "react";
import Image from "next/image";
const QuizzCard = ({ category }) => {

    return (
        <div
            key={category.id}
            className="border-2 rounded-xl p-4 cursor-pointer 
                    hover:-translate-y-1 transition-transform duration-300 ease-in-out 
                    shadow-md hover:shadow-lg bg-white"
        >
            {/* Hình ảnh */}
            <div className="rounded-xl h-[10rem] overflow-hidden">
                <Image
                    src={category?.image || "/categories/image--quizz.png"}
                    width={300}
                    height={200}
                    alt={category.name}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Nội dung */}
            <div className="py-3 px-2">
                <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
        </div>
    )
}

export default QuizzCard;