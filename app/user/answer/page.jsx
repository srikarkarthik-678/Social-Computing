"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async () => {
    if (!user) {
      alert("Please log in to submit!");
      return;
    }

    if (!text.trim()) {
      alert("Please enter something!");
      return;
    }

    const res = await fetch("/api/opinion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        message: text,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Opinion saved!");
      setText("");
    } else {
      alert("Error saving opinion");
    }
  };

  return (
    <div className="answercontains">
      <div className="answercontent bg-black min-h-[100vh]">
        <div className="answer">

          {/* NAVBAR */}
          <div className="flex justify-center w-full px-4 pt-4">
            <div className="
              backdrop-blur-xl rounded-full 
              px-4 md:px-10 py-3 
              flex items-center shadow-lg 
              w-full md:w-[95%] lg:w-[100%] 
              justify-between
            ">
              <div className="flex items-center gap-3 text-white text-lg md:text-xl font-semibold font-title">
                Social Proof Engine
              </div>

              {/* Hamburger Menu (Mobile Only) */}
              <div
                className="md:hidden text-white cursor-pointer text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </div>

              {/* Desktop Menu */}
              <ul className="
                hidden md:flex items-center gap-8 
                text-white text-md font-title
              ">
                <Link href="/">
                  <li className="cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full">
                    Home
                  </li>
                </Link>

                <Link href="/user/verify">
                  <li className="cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-full">
                    Verify an Opinion?
                  </li>
                </Link>

                {user ? (
                  <li className="text-white text-base">{user.username}</li>
                ) : (
                  <li className="p-2 text-base">User</li>
                )}
              </ul>
            </div>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {menuOpen && (
            <div className="md:hidden mt-3 flex justify-center">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-xl p-4 w-[90%] text-white text-center space-y-4 font-title">

                <Link href="/">
                  <div className="cursor-pointer hover:text-gray-200">Home</div>
                </Link>

                <Link href="/user/verify">
                  <div className="cursor-pointer hover:text-gray-200">
                    Verify an Opinion?
                  </div>
                </Link>

                {user ? (
                  <div className="font-semibold text-center">{user.username}</div>
                ) : (
                  <div className="text-center p-2">User</div>
                )}
              </div>
            </div>
          )}

          {/* INPUT SECTION */}
          <div className="flex justify-center items-center min-h-[70vh] text-white px-4">
            <div className="flex flex-col justify-center items-center gap-4 text-center">

              <div className="font-League text-2xl md:text-4xl font-semibold">
                Tell Us What You've Heard...
              </div>

              <textarea
                placeholder="Enter Your Thoughts"
                className="
                  bg-transparent border border-white 
                  p-2 rounded-md 
                  w-[90%] sm:w-[350px] 
                  h-[100px] text-sm md:text-base
                "
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                className="
                  bg-white text-black p-2 px-6 
                  rounded-full font-title mt-2 
                  text-sm md:text-base hover:scale-105 transition
                "
                onClick={handleSubmit}
              >
                Submit
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
