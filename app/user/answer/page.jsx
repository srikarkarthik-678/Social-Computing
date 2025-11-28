"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState("");

  // Load logged-in user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
      <div className="answercontent bg-black h-[100vh]">
        <div className="answer">
          {/* NAVBAR */}
          <div className="flex justify-center w-full">
            <div className="backdrop-blur-xl rounded-full px-10 py-4 flex items-center shadow-lg w-[100%] justify-between">
              <div className="flex items-center gap-3 text-white text-xl font-semibold font-title">
                Social Proof Engine
              </div>
              <ul className="flex items-center gap-8 text-white text-md font-title">
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
                  <li className="text-white">{user.username}</li>
                ) : (
                  <li className="p-2">User</li>
                )}
              </ul>
            </div>
          </div>

          {/* INPUT UI */}
          <div className="flex justify-center items-center h-[80vh] text-white">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="font-League text-4xl font-semibold">
                The Secret That You've Been Hiding…
              </div>

              <textarea
                placeholder="Enter Your Thoughts"
                className="bg-transparent border border-white p-2 w-[350px] h-[100px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                className="bg-white text-black p-2 rounded-full font-title mt-2"
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
