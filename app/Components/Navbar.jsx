"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!mounted) return null;

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("poll_votes");

        if (user?.username) {
            localStorage.removeItem(`voted_${user.username}`);
        }

        setUser(null);
        window.location.href = "/";
    };

    return (
        <div>
            <div className="herocontains">
                <div className="herocontents">
                    <div className="herocontain">

                        <div className="hero bg-[url('/vector-round-dot-pattern-frame-background-with-gradation-effect-text-space_8130-3143.avif')] bg-cover bg-center min-h-[100vh] w-full">

                            {/* NAVBAR */}
                            <div className="flex justify-center w-full pt-6 px-4">
                                <div
                                    className="
                                    backdrop-blur-xl bg-white/10 border border-white/20 
                                    rounded-full px-6 py-3 
                                    flex items-center shadow-lg 
                                    w-[90%] md:w-[70%] lg:w-[55%] 
                                    justify-between
                                "
                                >
                                    <div className="flex items-center gap-3 text-white text-lg md:text-xl font-semibold font-title">
                                        Social Computing
                                    </div>

                                    {/* Hamburger for mobile */}
                                    <div
                                        className="md:hidden text-white cursor-pointer text-2xl"
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        ☰
                                    </div>

                                    {/* Menu Items */}
                                    <ul
                                        className={`
                                            md:flex hidden items-center gap-8 
                                            text-white text-lg
                                        `}
                                    >
                                        <li className="cursor-pointer hover:text-gray-300 transition">
                                            Home
                                        </li>

                                        <Link href="/user/docs">
                                            <li className="cursor-pointer hover:text-gray-300 transition">
                                                Docs
                                            </li>
                                        </Link>

                                        {user ? (
                                            <div className="flex items-center gap-5">
                                                <li className="text-white">{user.username}</li>

                                                <li
                                                    className="cursor-pointer text-red-400 hover:text-red-600"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </li>
                                            </div>
                                        ) : (
                                            <Link href="/user/signup">
                                                <li className="cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full">
                                                    Sign Up
                                                </li>
                                            </Link>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* MOBILE DROPDOWN MENU */}
                            {menuOpen && (
                                <div className="md:hidden mt-3 flex justify-center">
                                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-xl p-4 w-[80%] text-white text-center space-y-4">
                                        <div className="cursor-pointer hover:text-gray-200">Home</div>

                                        <Link href="/user/docs">
                                            <div className="cursor-pointer hover:text-gray-200">Docs</div>
                                        </Link>

                                        {!user && (
                                            <Link href="/user/signup">
                                                <div className="cursor-pointer hover:text-gray-200">
                                                    Sign Up
                                                </div>
                                            </Link>
                                        )}

                                        {user && (
                                            <>
                                                <div className="font-semibold">{user.username}</div>
                                                <div
                                                    className="cursor-pointer text-red-300 hover:text-red-500"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* HERO SECTION */}
                            <div className="flex justify-center items-center min-h-[80vh] text-white px-4">
                                <div className="flex flex-col justify-center items-center text-center">

                                    <div className="text-3xl md:text-5xl font-title font-semibold">
                                        The Social Proof Engine
                                    </div>

                                    <div className="flex items-center gap-5 md:gap-10 mt-5 font-title flex-wrap justify-center">
                                        <Link href="/user/answer">
                                            <div className="cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full text-sm md:text-base">
                                                Share an Opinion
                                            </div>
                                        </Link>

                                        <Link href="/user/verify">
                                            <div className="cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full text-sm md:text-base">
                                                Verify an Opinion?
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="text-white font-title mt-3 text-[12px] md:text-[14px]">
                                        Please read the docs before you continue
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
