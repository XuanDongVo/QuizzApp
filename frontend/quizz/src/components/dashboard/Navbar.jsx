'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { createdQuizz } from '@/serivce/quizz';

const NavBar = () => {
    const [isOpenManual, setIsOpenManual] = useState(false);
    const [quizTitle, setQuizTitle] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const inputRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();

    const navItems = ['Dashboard', 'Activity', 'Classes', 'Flashcards', 'Library'];
    const navRefs = useRef([]);
    const [activeTab, setActiveTab] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeIndex = navItems.findIndex(item =>
            pathname === (item === 'Dashboard' ? '/admin/dashboard' : `/admin/dashboard/${item.toLowerCase()}`)
        );
        if (activeIndex !== -1 && navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
            setActiveTab({ left: offsetLeft, width: offsetWidth });
        }
    }, [pathname]);


    {/* 2.1.3.Người dùng xác nhận tạo quizz. */ }
    const handleCreateManual = async () => {
        if (quizTitle.trim() === '') {
            setHasError(true);
            {/* 2.2.4. Hệ thống focus vào input nhập tên quizz. */ }
            inputRef.current?.focus();
            return;
        }

        try {
            {/* 2.1.4 Navbar gọi hàm khởi tạo quizz (createQuizz) từ quizz.js (FE) .*/ }
            const response = await createdQuizz(quizTitle.trim());
            setIsOpenManual(false);
            setQuizTitle('');
            setHasError(false);
            {/* 2.1.12.	Hệ thống chuyển người dùng đến giao diện tạo câu hỏi cho quiz vừa tạo*/ }
            router.push(`/admin/quizz/${response.data.id}/main`);
        } catch (error) {
            console.error('Error creating quiz:', error);
        }
    };

    useEffect(() => {
        if (isOpenManual) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpenManual]);

    return (
        <>
            <nav className="bg-white shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/">
                        <div className="text-2xl font-bold text-[var(--background-primary)]">Quizizz</div>
                    </Link>

                    <div className="relative hidden md:flex space-x-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item}
                                href={item === 'Dashboard' ? '/admin/dashboard' : `/admin/dashboard/${item.toLowerCase()}`}
                                className={`text-gray-600 font-bold transition-colors duration-200 ${pathname === (item === 'Dashboard' ? '/admin/dashboard' : `/admin/dashboard/${item.toLowerCase()}`)
                                    ? 'text-[var(--background-primary)]'
                                    : 'hover:text-[var(--background-primary)]'
                                    }`}
                                ref={el => (navRefs.current[index] = el)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div
                            className="absolute bottom-0 h-0.5 bg-[var(--background-primary)] transition-all duration-300"
                            style={{ left: activeTab.left, width: activeTab.width }}
                        />
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* 2.1.0 Người dùng chọn chức năng "Create a Quizz" trên thanh navbar */}
                    <div>
                        <button
                            onClick={() => setIsOpenManual(true)}
                            className="bg-[var(--background-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--background-primary)]/80 transition duration-300"
                        >
                            Create a quizz
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col space-y-4 px-4">
                        {navItems.map(item => (
                            <Link
                                key={item}
                                href={item === 'Dashboard' ? '/admin/dashboard' : `/admin/dashboard/${item.toLowerCase()}`}
                                className={`text-gray-600 font-bold hover:text-[var(--background-primary)] ${pathname === (item === 'Dashboard' ? '/admin/dashboard' : `/admin/dashboard/${item.toLowerCase()}`)
                                    ? 'text-[var(--background-primary)] border-b-2 border-[var(--background-primary)]'
                                    : ''
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            {/* 2.1.1	Hệ thống hiển thị dialog yêu cầu nhập tên quiz */}
            <Dialog open={isOpenManual} onClose={() => setIsOpenManual(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/50" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <DialogTitle className="text-lg font-bold text-gray-800 mb-4">
                            Enter Quiz Title
                        </DialogTitle>
                        {/* 2.1.2	Người dùng nhập tên quizz */}
                        <input
                            ref={inputRef}
                            type="text"
                            value={quizTitle}
                            onChange={(e) => {
                                setQuizTitle(e.target.value);
                                if (hasError && e.target.value.trim() !== '') setHasError(false);
                            }}
                            placeholder="e.g., World History"
                            className={`w-full border rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 
                                ${hasError
                                    ? 'border-red-500 focus:ring-red-400'
                                    : 'border-gray-300 focus:ring-[var(--background-primary)]'
                                }`}
                        />
                        {hasError && <p className="text-red-500 text-sm mb-2">Please enter a quiz title.</p>}
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    setIsOpenManual(false);
                                    setHasError(false);
                                    setQuizTitle('');
                                }}
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