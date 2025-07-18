"use client";
import React from "react";

export default function PrivacyAssurance() {
  return (
    <div className="w-full flex justify-center py-6 bg-transparent">
      <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base font-light">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 2C7.23858 2 5 4.23858 5 7V8.38268C5 8.83696 4.78929 9.2663 4.41421 9.58579L3.41421 10.4142C2.63316 11.0866 2 12.1833 2 13.3827V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V13.3827C18 12.1833 17.3668 11.0866 16.5858 10.4142L15.5858 9.58579C15.2107 9.2663 15 8.83696 15 8.38268V7C15 4.23858 12.7614 2 10 2Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Your health data stays private and secure — always.</span>
      </div>
    </div>
  );
}
