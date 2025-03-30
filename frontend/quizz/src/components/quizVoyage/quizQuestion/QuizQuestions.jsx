import React from "react";
import Image from "next/image";

const QuizQuestions = ({ questionData, totalQuestion, currentQuestionIndex }) => {
    return (
        <div
            className="h-1/2 w-full flex flex-col items-center justify-center p-2 relative"
        >
            <div className="bg-[#09090961] w-full h-full flex items-center justify-center  rounded-lg">
                <div className="container">
                    <div className="flex flex-row items-center gap-6 justify-center">
                        {/* Hình ảnh */}
                        {questionData.image && (
                            <div className="bg-[#09090980] flex items-center justify-center p-4 rounded-lg w-1/4">
                                <div className="w-1/2 flex items-center justify-center">
                                    <Image
                                        src={questionData.image}
                                        width={200}
                                        height={200}
                                        alt="Biology category"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        )}
                        {/* Đoạn văn */}
                        <div className="flex items-center justify-center">
                            <h1 className="text-white text-center text-2xl font-bold">
                                {questionData.question}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute top-[-10] right-1/2 w-15">
                <div className=" transform translate-x-1/2 rounded-4xl bg-gray-800/75 bg-opacity-60 p-2 flex items-center justify-center shadow-md">
                    <div className="text-white text-sm font-semibold">
                        {currentQuestionIndex + 1} /{totalQuestion}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizQuestions;