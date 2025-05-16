'use client';
import { useState } from 'react';
import NavBar from "@/components/dashboard/Navbar";
import GeneratedWithAIDialog from '@/components/dialogs/GeneratedWithAIDialog';

export default function Layout({ children }) {
    const [isOpenAI, setIsOpenAI] = useState(false);
    const handleOpenDialog = () => {
        setIsOpenAI(true);
    };

    return (
        <>
            <NavBar />
            <main className="relative">
                {children}
                <button
                    className="fixed bottom-50 right-10 px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-black hover:opacity-75 transition-all duration-300 z-50 cursor-pointer"
                    onClick={handleOpenDialog}
                >
                    Generate Quizz with AI
                </button>
            </main>
            <GeneratedWithAIDialog open={isOpenAI} handleClose={() => setIsOpenAI(false)} />
        </>
    );
}
