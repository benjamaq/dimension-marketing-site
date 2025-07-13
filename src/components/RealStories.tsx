'use client';

import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

export default function RealStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      key: 'rachel',
      name: 'Rachel',
      age: 39,
      descriptor: 'Holding everyone together, barely holding herself.'
    },
    {
      key: 'sine', 
      name: 'Sine',
      age: 42,
      descriptor: 'Fiercely independent, quietly burning out.'
    }
  ];

  const chatMessages = [
    { from: 'Rachel', text: "I'm so tired but I can't turn my brain off at night." },
    { from: 'Ellie', text: "That mental load you're carrying is exhausting, Rachel." }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => setCurrentIndex((idx) => Math.max(0, idx - 1))}
          disabled={currentIndex === 0}
          className={`w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all`}
          aria-label="Previous"
        >
          {/* SVG left arrow in circle */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,8 12,16 20,24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="text-lg text-gray-700 font-medium text-center px-2">
          <span className="underline">Click to see more user conversations</span>
        </div>
        <button
          onClick={() => setCurrentIndex((idx) => Math.min(stories.length - 1, idx + 1))}
          disabled={currentIndex === stories.length - 1}
          className={`w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-400 bg-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all`}
          aria-label="Next"
        >
          {/* SVG right arrow in circle */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="12,8 20,16 12,24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex-1 max-w-md min-h-[600px] flex">
          <ProfileCard story={stories[currentIndex]} />
        </div>
        <div className="flex-1 max-w-md min-h-[600px] flex items-stretch">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-0 flex flex-col items-center w-full min-h-[600px]">
            {/* Profile image */}
            <div className="flex flex-col items-center pt-8">
              <img src="/elli.png" alt="Ellie" className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover mb-2" />
              <div className="font-semibold text-xl text-gray-800">Ellie</div>
              <div className="text-sm text-gray-500 mb-4">Your empathic wellness companion</div>
            </div>
            {/* Chat bubble */}
            <div className="flex-1 flex flex-col justify-center w-full px-6">
              <div className="flex items-start">
                <img src="/elli.png" alt="Ellie" className="w-8 h-8 rounded-full mr-2 mt-1" />
                <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-3 shadow-sm max-w-[80%]">
                  Hey, I&apos;m Ellie. Here whenever you need me. How are you feeling today?
                </div>
              </div>
            </div>
            {/* Input placeholder */}
            <div className="w-full px-6 pb-6 pt-2">
              <input
                type="text"
                disabled
                placeholder="Type a message..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-gray-500 focus:outline-none shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {stories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}