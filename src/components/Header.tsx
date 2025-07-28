"use client";
import React, { useState } from "react";
import LoginModal from "./LoginModal";

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <header className="w-full flex items-center justify-between px-10 pt-8">
      <div className="flex items-center">
        <img src="/logo.png" alt="DIMENSION Logo" width="40" height="40" className="mr-3" />
        <span className="font-bold text-xl tracking-wide text-gray-900">DIMENSION</span>
      </div>
      <nav>
        <button
          className="border border-gray-400 text-gray-800 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition shadow-sm"
          onClick={() => setLoginOpen(true)}
        >
          Login
        </button>
      </nav>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
