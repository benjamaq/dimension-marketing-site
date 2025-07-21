'use client';

import React from 'react';

export default function TiredOfHealthToolsSection() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-white relative overflow-hidden"
      style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.6)' }}
      />
      
      <div className="relative z-[2] w-full px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
              You&apos;ve tried tracking. You&apos;ve tried apps. But you&apos;re still exhausted
            </h2>
          </div>

          {/* Two-Column Conversational Card */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 px-0 md:px-8 py-10 flex flex-col md:flex-row gap-0 md:gap-4 items-stretch">
              {/* Left: Pills */}
              <div className="flex flex-col justify-center items-center md:items-start px-8 py-4 md:py-0 w-full md:w-1/2 gap-4">
                <div className="bg-white/80 rounded-full px-6 py-3 text-lg text-gray-800 shadow border border-gray-100 max-w-xs w-full text-center">Maybe it was a wellness app.</div>
                <div className="bg-white/80 rounded-full px-6 py-3 text-lg text-gray-800 shadow border border-gray-100 max-w-xs w-full text-center">Maybe it was your smartwatch.</div>
                <div className="bg-white/80 rounded-full px-6 py-3 text-lg text-gray-800 shadow border border-gray-100 max-w-xs w-full text-center">Maybe it was another “plan” that fell apart after a week.</div>
              </div>
              {/* Right: Messaging */}
              <div className="flex flex-col justify-center px-8 py-6 w-full md:w-1/2">
                
                <div className="font-bold text-gray-900 text-lg mb-2">
                  You gave it a shot.
                </div>
                <div className="text-base text-gray-700 mb-4">
                  The apps. The programs. The gadgets.<br />
                  But when life got messy, they didn’t really help.
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Because most tools track symptoms — not what’s behind them.
                </p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dimension is different.</h4>
                <p className="text-lg text-gray-700 mb-6">
                  It doesn’t just track. It listens.<br />
                  It gets to know you, and helps you respond in real moments — with calm, clarity, and kindness.
                </p>
                <a href="https://app.trydimension.com" className="mt-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow hover:bg-black transition">Get Started with Dimension</a>
              </div>
            </div>
          </div>

          {/* Before/After Snapshots */}
          <div className="mb-20">
            <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
              See the difference
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* CARD 1: Sleep */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">“Sleep score: 71”</p>
                      <p className="text-gray-500 text-sm mt-2">→ no idea what to do next</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-900 font-medium">“You were up later than usual, and stress was still high at bedtime — that’s likely what dragged your sleep down.<br />Let’s try a no-screen wind-down tonight, and I’ll check in tomorrow.”</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: Steps / Activity */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">“You walked 3,428 steps”</p>
                      <p className="text-gray-500 text-sm mt-2">→ shrug</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-900 font-medium">“Nice walk — but your energy dipped in the afternoon, and movement usually helps.<br />Want to add 10 minutes of gentle stretching tomorrow to lift your mood and ease your back?”</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Heart Rate / Stress */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">“Heart rate elevated”</p>
                      <p className="text-gray-500 text-sm mt-2">→ no clue why</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-900 font-medium">“Stress spiked around 3PM — right after that calendar notification.<br />Could be the afternoon crash or tension building up. Want help building a calm buffer?”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
