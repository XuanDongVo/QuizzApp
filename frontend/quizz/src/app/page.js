import Image from "next/image";
import Header from "@/components/header/Header";
import QuizzCards from "@/components/quizz/QuizzCards";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="pt-[72px]"> {/* Thêm padding top bằng chiều cao header */}
        <div className="container mx-auto px-10 py-5 flex flex-col gap-10">
          <h1 className="text-center text-3xl font-bold">Quizz Catalog</h1>
          <QuizzCards />
        </div>
      </div>
    </div>
  );
}

