"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState(null);
  const [opinions, setOpinions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  useEffect(() => {
    async function loadOpinions() {
      const res = await fetch("/api/opinion/all");
      const data = await res.json();
      setOpinions(data.opinions || []);
    }
    loadOpinions();
  }, []);

  const handleVote = async (id, option) => {
    if (!user) {
      alert("Please login to vote.");
      return;
    }

    const voteKey = `voted_${user.username}_${id}`;
    if (localStorage.getItem(voteKey)) {
      alert("You already voted on this poll!");
      return;
    }

    const res = await fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opinionId: id, option }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem(voteKey, "1");

      const r = await fetch("/api/opinion/all");
      const updated = await r.json();
      setOpinions(updated.opinions);
    }
  };

  return (
    <div className="verifycontains font-title">
      <div className="verifycontent bg-black min-h-[100vh] pb-10">

        {/* NAVBAR */}
        <div className="flex justify-center w-full px-4 pt-4">
          <div className="
            backdrop-blur-xl rounded-full px-6 md:px-10 py-4
            flex items-center shadow-lg w-full justify-between
          ">
            <div className="text-white text-xl font-semibold font-title">
              Social Proof Engine
            </div>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden text-white text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-white text-md font-title">
              <Link href="/">
                <li className="cursor-pointer p-2 hover:bg-white hover:text-black rounded-full">
                  Home
                </li>
              </Link>

              <Link href="/user/answer">
                <li className="cursor-pointer p-2 hover:bg-white hover:text-black rounded-full">
                  Share an Opinion?
                </li>
              </Link>

              <li className="text-white">{user ? user.username : "User"}</li>
            </ul>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className="md:hidden mt-3 flex justify-center">
            <div className="
              backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg
              rounded-xl p-4 w-[90%] text-white text-center space-y-4 font-title
            ">
              <Link href="/">
                <div className="cursor-pointer hover:text-gray-300">
                  Home
                </div>
              </Link>

              <Link href="/user/answer">
                <div className="cursor-pointer hover:text-gray-300">
                  Share an Opinion?
                </div>
              </Link>

              <div className="text-gray-200">
                {user ? user.username : "User"}
              </div>
            </div>
          </div>
        )}

        {/* POLLS */}
        {opinions.map((opinion, index) => {
          const voteKey = user ? `voted_${user.username}_${opinion._id}` : "";
          const voted = user ? localStorage.getItem(voteKey) : false;

          const total = opinion.yes + opinion.no;
          const yesPercent = total ? (opinion.yes / total) * 100 : 0;
          const noPercent = total ? (opinion.no / total) * 100 : 0;

          return (
            <div
              key={opinion._id}
              className="w-[90%] p-5 border border-gray-400 rounded-xl bg-black text-white mx-auto mt-6 font-title"
            >
              <p className="text-lg mb-4 font-medium">
                {index + 1}. {opinion.message}
              </p>

              {/* Agree */}
              <div
                onClick={() => !voted && handleVote(opinion._id, "yes")}
                className={`mb-4 cursor-pointer ${voted ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="flex justify-between mb-1">
                  <span>Agree</span>
                  <span className="font-semibold">{Math.round(yesPercent)}%</span>
                </div>

                <div className="w-full h-3 border border-white rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-700"
                    style={{ width: `${yesPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Disagree */}
              <div
                onClick={() => !voted && handleVote(opinion._id, "no")}
                className={`cursor-pointer ${voted ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="flex justify-between mb-1">
                  <span>Disagree</span>
                  <span className="font-semibold">{Math.round(noPercent)}%</span>
                </div>

                <div className="w-full h-3 border border-white rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-700"
                    style={{ width: `${noPercent}%` }}
                  ></div>
                </div>
              </div>

              <p className="mt-5 text-xs text-gray-500">
                Results will be shown after 3hrs
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
