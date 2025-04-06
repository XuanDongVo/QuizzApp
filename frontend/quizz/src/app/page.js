"use client";
import Header from "@/components/header/Header";
import QuizzCards from "@/components/quizz/QuizzCards";
import GeneratedWithAIDialog from "@/components/dialogs/GeneratedWithAIDialog";
import { useState } from "react";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="relative">
      <Header />
      <div className="pt-[72px] h-screen">
        <div className="container mx-auto px-10 py-5 flex flex-col gap-10">
          <h1 className="text-center text-3xl font-bold">Quizz Catalog</h1>
          <QuizzCards />
        </div>
      </div>

      <button className="absolute top-9/12 right-10 px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-black hover:opacity-75 transition-all duration-300 z-10 cursor-pointer"
        onClick={handleOpenDialog}
      >
        Generate Quizz with AI
      </button>

      <GeneratedWithAIDialog
        open={openDialog}
        handleClose={handleCloseDialog} />

    </div >
  );
}

