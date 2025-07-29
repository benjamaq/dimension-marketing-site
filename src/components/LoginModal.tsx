"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [forgotMode, setForgotMode] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else if (data.user) {
      window.location.href = "https://app.trydimension.com/onboarding?step=chat";
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    if (error) setError(error.message);
    else setSuccess("Password reset email sent. Check your inbox.");
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">×</button>
        <h2 className="text-xl font-bold mb-4 text-center">Login to Dimension</h2>
        {error && <div className="text-red-600 text-sm mb-2 text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm mb-2 text-center">{success}</div>}
        {!forgotMode ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border rounded px-3 py-2 outline-none focus:ring w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border rounded px-3 py-2 outline-none focus:ring w-full"
              required
            />
            <button
              type="submit"
              className="bg-black text-white rounded px-4 py-2 font-semibold hover:bg-gray-900 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <button
              type="button"
              className="text-sm text-gray-500 hover:underline mt-1"
              onClick={() => setForgotMode(true)}
            >
              Forgot Password?
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgot} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border rounded px-3 py-2 outline-none focus:ring w-full"
              required
            />
            <button
              type="submit"
              className="bg-black text-white rounded px-4 py-2 font-semibold hover:bg-gray-900 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Email"}
            </button>
            <button
              type="button"
              className="text-sm text-gray-500 hover:underline mt-1"
              onClick={() => setForgotMode(false)}
            >
              Back to Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
