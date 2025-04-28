'use client';
import React, { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
    const [isOpenManual, setIsOpenManual] = useState(false); // Modal cho tạo thủ công
    const [quizTitle, setQuizTitle] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu hamburger
    const router = useRouter();

    const handleCreateManual = () => {
        if (quizTitle.trim() === '') {
            alert('Please enter a quiz title.');
            return;
        }

        setIsOpenManual(false);
        router.push(`/admin/quizz/${1}/main`);
    };

    return (
        <>
            <nav className="bg-white shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <div className="text-2xl font-bold text-[var(--background-primary)]">Quizizz</div>
                    </Link>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)] transition-colors duration-200">
                            Activity
                        </a>
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)] transition-colors duration-200">
                            Classes
                        </a>
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)] transition-colors duration-200">
                            Flashcards
                        </a>
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)] transition-colors duration-200">
                            Library
                        </a>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Create Quiz Button (Desktop & Mobile) */}
                    <div>
                        <button
                            onClick={() => setIsOpenManual(true)}
                            className="bg-[var(--background-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--background-primary)]/80 transition duration-300"
                        >
                            Create a quiz
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col space-y-4">
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)]">
                            Activity
                        </a>
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)]">
                            Classes
                        </a>
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)]">
                            Flashcards
                        </a>
                        <a href="#" className="text-gray-600 font-bold hover:text-[var(--background-primary)]">
                            Library
                        </a>
                    </div>
                )}
            </nav>

            {/* Modal for Manual Quiz Creation */}
            <Dialog open={isOpenManual} onClose={() => setIsOpenManual(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/50" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <DialogTitle className="text-lg font-bold text-gray-800 mb-4">
                            Enter Quiz Title
                        </DialogTitle>
                        <input
                            type="text"
                            value={quizTitle}
                            onChange={(e) => setQuizTitle(e.target.value)}
                            placeholder="e.g., World History"
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--background-primary)]"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsOpenManual(false)}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreateManual}
                                className="px-4 py-2 rounded bg-[var(--background-primary)] text-white hover:bg-[var(--background-primary)]/80 transition"
                            >
                                Create
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default NavBar;