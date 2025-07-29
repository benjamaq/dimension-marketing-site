'use client';

import React from 'react';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null;

  const handleLogin = () => {
    // For now, just redirect to the main app
    window.location.href = 'https://app.trydimension.com/onboarding?step=chat';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">×</button>
        <h2 className="text-xl font-bold mb-4 text-center">Login to Dimension</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white rounded px-4 py-2 font-semibold hover:bg-gray-900 transition"
        >
          Continue to App
        </button>
      </div>
    </div>
  );
}
