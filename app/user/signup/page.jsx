"use client";

import React, { useState } from "react";

const page = () => {
  const [mode, setMode] = useState("signup");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [paymentText, setPaymentText] = useState("");

  const handleSignup = async () => {
    const packageData = {
      email,
      password: pass,
      fullName,
      username,
    };

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(packageData),
    });

    const data = await res.json();
    console.log("Added to database:", data);
  };

  const handleLogin = async () => {
    const loginpackage = {
      email,
      password: pass,
    };

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginpackage),
      credentials: "include",
    });

    const data = await res.json();
    console.log("Log in Completed", data);

    if (data.success) {
      setMessage("Login Successful!");
      setPaymentText("");
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/";
    } else {
      setMessage(data.message || "Login failed!");
      if (data.message !== "User not found") {
        setPaymentText("Click to go to payment page");
      }
    }

    setEmail("");
    setPass("");
    setFullName("");
    setUsername("");
  };

  return (
    <div className="loginpage font-title">
      <div className="logindetails bg-black min-h-screen flex flex-col justify-center items-center px-4">

        <div className="mainflex flex flex-col md:flex-row justify-around items-center w-full max-w-6xl">

          {/* Logo */}
          <div className="Cartify text-white text-3xl md:text-5xl font-Momo mb-6 md:mb-0 text-center md:text-left">
            <a href="/">Social Proof Engine</a>
          </div>

          {/* Login Panel */}
          <div className="userloginpanel w-full max-w-sm">
            <div className="cardpanel bg-transparent">
              <div className="flexcol">
                <div className="borderclass flex flex-col gap-4 p-5  rounded-xl bg-black/40">

                  {/* toggles */}
                  <div className="flex justify-center text-white text-sm md:text-base">
                    <button
                      className="px-5 py-2 bg-white text-black rounded-full"
                      onClick={() => {
                        setMode("login");
                        setMessage("");
                        setPaymentText("");
                      }}
                    >
                      Log in
                    </button>

                    <span className="text-white mx-2">|</span>

                    <button
                      className="px-5 py-2 bg-white text-black rounded-full"
                      onClick={() => {
                        setMode("signup");
                        setMessage("");
                        setPaymentText("");
                      }}
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="caption text-white text-center">
                    {mode === "signup"
                      ? "Sign up to discover amazing deals"
                      : "Log in to your account"}
                  </div>

                  {/* Inputs */}
                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-2 w-full bg-white text-black rounded"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      className="p-2 w-full bg-white text-black rounded"
                    />

                    {mode === "signup" && (
                      <>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="p-2 w-full bg-white text-black rounded"
                        />

                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="p-2 w-full bg-white text-black rounded"
                        />
                      </>
                    )}
                  </form>

                  {/* Texts under signup */}
                  {mode === "signup" && (
                    <>
                      <p className="text-white text-xs mt-1">
                        People who use our service may have uploaded your contact information.
                      </p>

                      <p className="text-white text-xs">
                        By signing up, you agree to our Terms & Privacy Policy.
                      </p>
                    </>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    {mode === "signup" ? (
                      <button
                        className="py-2 px-6 bg-white text-black rounded-full"
                        onClick={handleSignup}
                      >
                        Sign Up
                      </button>
                    ) : (
                      <button
                        className="py-2 px-6 bg-white text-black rounded-full"
                        onClick={handleLogin}
                      >
                        Log in
                      </button>
                    )}
                  </div>

                  {/* Messages */}
                  <p className="text-green-500 font-bold text-center">{message}</p>

                  {paymentText && (
                    <p className="text-white text-center">{paymentText}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default page;
