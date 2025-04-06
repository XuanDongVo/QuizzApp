'use client'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { categories } from "@/dataFake";
import Link from "next/link";
import { use, useEffect } from 'react'
import { useQuizContext } from "@/context/quizzContext";

export default function page({ params }) {
    const { quizData, setQuizData, resetQuiz } = useQuizContext();
    const { categoryId } = use(params);

    useEffect(() => {
        const category = categories.find((category) => category.id === Number(categoryId));
        if (category) {
            resetQuiz();
            setQuizData(category);

        }
    }, [categoryId]);

    if (!quizData) {
        return <div className="text-white text-center pt-10">Đang tải dữ liệu...</div>;
    }

    return (
        <div className="relative h-screen">
            <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url(https://cf.quizizz.com/themes/v2/classic/bg_image.jpg)' }}>
                <div className="container mx-auto h-full flex items-center justify-center flex-direction-col">
                    <div className="flex gap-5 flex-col w-3/12">
                        {/* Ten tro choi */}
                        <div className=" bg-gradient-to-t from-[#ffffff14] to-[#ffffff0a] rounded-lg p-5">
                            <div className="flex gap-7 ">
                                <img src={quizData.image} className="w-20 h-20" />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-2xl text-white ">{quizData.name}</h1>
                                    <p className="text-white font-light opacity-75">{quizData.questions.length} câu hỏi</p>
                                </div>
                            </div>
                        </div>

                        {/* Nut choi */}
                        <div className="bg-[var(--background-color)] rounded-lg p-5 ">
                            <div className="flex flex-col gap-5 alight-center justify-center">
                                {/* tien trinh game */}
                                <div >
                                    <Progress value={10} colorProcess="bg-white" />
                                    <div className="flex justify-between">
                                        <p className="text-white text-[10px] font-medium">Start</p>
                                        <p className="text-white text-[10px] font-medium">End</p>
                                    </div>
                                </div>
                                <div className="text-[18px] font-bold text-white text-center">{quizData.questions.length} câu hỏi chuẩn bị</div>

                                <Button variant="success">
                                    <Link href={`/quizz/game`}>
                                        <div className="text-white text-center font-bold">
                                            Start Game
                                        </div>
                                    </Link>
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link href={`/`}>
                <div className="absolute top-5 left-5 hover:cursor-pointer hover:bg-amber-50 hover:opacity-75 bg-amber-50 rounded-full p-2 opacity-50">
                    <div className="text-black font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>

    )
}