"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("user");           // remove logged in user
        localStorage.removeItem("poll_votes");      // optional: remove poll votes
        // Remove the user's personal vote record
        if (user && user.username) {
            localStorage.removeItem(`voted_${user.username}`);
        }

        setUser(null);

        window.location.href = "/";  // redirect to home
    };
    return (
        <div>
            <div className="herocontains">
                <div className="herocontents">
                    <div className="herocontain">
                        <div className="hero bg-[url('/vector-round-dot-pattern-frame-background-with-gradation-effect-text-space_8130-3143.avif')] bg-cover bg-center h-[100vh] w-full ">
                            <div className="flex justify-center w-full pt-10">
                                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-10 py-4 flex items-center  shadow-lg w-[55%] justify-between">
                                    <div className="flex items-center gap-3 text-white text-xl font-semibold font-title">
                                        Social Computing
                                    </div>

                                    <ul className="flex items-center gap-8 text-white text-lg">
                                        <li className="cursor-pointer hover:text-gray-300 transition">Home</li>

                                        <Link href="/user/docs">
                                            <li className="cursor-pointer hover:text-gray-300 transition">Docs</li>
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

                            <div className='flex justify-center items-center h-[80vh] text-white '>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='text-5xl font-title font-semibold'>The Social Proof Engine</div>

                                    <div className='flex items-center gap-10 mt-5 font-title'>
                                        <Link href="/user/answer">
                                            <div className='cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full'>Share an Opinion</div>
                                        </Link>

                                        <Link href="/user/verify">
                                            <div className='cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full'>Verify an Opinion?</div>
                                        </Link>
                                    </div>

                                    <div className='text-white font-title mt-3 text-[14px]'>
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
