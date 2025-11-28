"use client";

import React, { useState } from "react";

const page = () => {
  const [mode, setMode] = useState("signup"); // signup | login
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
    username 
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
      <div className="logindetails bg-black">
        <div className="mainflex flex justify-around items-center h-[98vh] bg-black">

          <div className="Cartify ml-[15px] text-[45px] font-Momo text-white">
            <a href="/">Social Proof Engine</a>
          </div>

          <div className="userloginpanel">
            <div className="cardpanel">
              <div className="flexcol">
                <div className="borderclass flex flex-col gap-[10px] h-[300px] items-center justify-center">

                  <div className="flex">
                    <button
                      className="login px-[25px] py-[8px] bg-white text-black rounded-full cursor-pointer"
                      onClick={() => {
                        setMode("login");
                        setMessage("");
                        setPaymentText("");
                      }}
                    >
                      Log in
                    </button>

                    <span className="text-white h-[20px] mx-2">|</span>

                    <button
                      className="signup1 px-[25px] py-[8px] bg-white text-black rounded-full cursor-pointer"
                      onClick={() => {
                        setMode("signup");
                        setMessage("");
                        setPaymentText("");
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="caption text-white">
                    {mode === "signup"
                      ? "Sign up to discover amazing deals"
                      : "Log in to your account"}
                  </div>
                  <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-[7px] w-[250px] bg-white text-black"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      className="p-[7px] w-[250px] bg-white text-black"
                    />
                    {mode === "signup" && (
                      <>
                        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)}className="p-[7px] w-[250px] bg-white text-black"/>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-[7px] w-[250px] bg-white text-black"/>
                      </>
                    )}
                  </form>
                  {mode === "signup" && (
                    <>
                      <div className="text-white w-[340px] text-[13px] ml-[70px]">
                        People who use our service may have uploaded your contact information to Social Proof Engine.
                      </div>

                      <div className="text-white w-[340px] text-[13px] ml-[70px]">
                        By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                      </div>
                    </>
                  )}
                  <div className="flex gap-3">
                    {mode === "signup" ? (
                      <button
                        className="py-[10px] px-[15px] bg-white text-black rounded-full cursor-pointer"
                        onClick={handleSignup}
                      >
                        Sign Up
                      </button>
                    ) : (
                      <button
                        className="py-[10px] px-[15px] bg-white text-black rounded-full cursor-pointer"
                        onClick={handleLogin}
                      >
                        Log in
                      </button>
                    )}
                  </div>
                  <p className="text-green-500 font-bold">{message}</p>

                  {paymentText && (
                      <p className="hello text-white">{paymentText}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="black bg-black"></div>
      </div>
    </div>
  );
};

export default page;
