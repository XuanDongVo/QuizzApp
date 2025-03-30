"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


function Header() {
    const pathname = usePathname();

    const menu = [
        {
            name: "Home",

            link: "/"
        },
        { name: "My Stats", link: "/stats" },
    ];

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    {/* <Image src="/icon--logo-lg.png" alt="logo" width={40} height={40} /> */}
                    <h1 className="text-2xl font-bold text-blue-500">Quizz</h1>
                </Link>

                {/* Menu */}
                <ul className="flex items-center gap-6">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.link}
                                className={`relative px-4 py-2 font-medium text-gray-600 transition-all duration-300 
                                    hover:text-blue-500 
                                    ${pathname === item.link ? "text-blue-500" : ""}`}
                            >
                                {item.name}
                                {pathname === item.link && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div></div>
            </nav>
        </header>
    );
}

export default Header;
