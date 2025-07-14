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
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
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
                <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">You’ve tried tracking. You’ve tried apps. But you’re still exhausted.</h3>
                <div className="text-gray-500 italic mb-2">You were doing your best.<br/>But here’s the truth:</div>
                <div className="text-xl font-bold text-gray-800 mb-4">None of it really helped when life got hard.</div>
                <div className="text-gray-600 mb-4">Because most tools track symptoms — not what’s behind them.</div>
                <hr className="my-4 border-gray-200" />
                <div className="font-semibold text-gray-900 mb-2">Dimension is different.</div>
                <div className="text-gray-800 mb-4">It listens. It learns. It helps you adjust in the moments that matter. Not more noise. Real support.</div>
                <div className="bg-white/70 rounded-xl border border-gray-100 px-4 py-3 text-gray-700 text-sm mb-4">“It’s the first thing that didn’t make me feel broken.” <span className="text-gray-400">— Early user</span></div>
                <button className="mt-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow hover:bg-black transition">Try Dimension — Free to Start</button>
              </div>
            </div>
          </div>

          {/* Before/After Snapshots */}
          <div className="mb-20">
            <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
              See the difference
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Example 1 */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">&quot;Sleep score: 71&quot;</p>
                      <p className="text-gray-500 text-sm mt-2">→ no idea what to do next</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-900 font-medium">&quot;Let&apos;s try a no-screen wind-down tonight. I&apos;ll check in tomorrow.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">&quot;You walked 3,428 steps&quot;</p>
                      <p className="text-gray-500 text-sm mt-2">→ shrug</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-900 font-medium">&quot;Nice walk. Want to add some gentle stretching to help with your back?&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">“Heart rate elevated”</p>
                      <p className="text-gray-500 text-sm mt-2">→ No clue why</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-900 font-medium">“Stress spike around 3PM. Could be the afternoon crash — want help building a calm buffer?”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid - Matching Profile Card Style */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-gray-800 mb-6">
                What Makes Dimension Different
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                You&apos;ve seen chatbots. This is something else. Dimension isn&apos;t trained on the internet. It&apos;s built on the <strong>deepest health science</strong> from the world&apos;s top minds in longevity, performance, and emotional resilience — and designed to <strong>coach you like someone who actually knows you</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Built-in Memory */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">🧠</span>
                    <h3 className="text-2xl font-bold text-gray-900">Built-in Memory</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Your coach actually remembers.</strong> Dimension keeps track of your patterns — sleep, mood, stress, habits — and brings them up at just the right moment.
                  </p>
                  <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-3 border border-gray-100">
                    <p className="text-gray-900 font-bold">No more starting over.</p>
                  </div>
                </div>
              </div>

              {/* Emotionally Intelligent */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">❤️</span>
                    <h3 className="text-2xl font-bold text-gray-900">Emotionally Intelligent</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>It listens between the lines.</strong> Dimension hears the mood behind your message, notices shifts in tone, and responds with empathy and clarity.
                  </p>
                  <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-3 border border-gray-100">
                    <p className="text-gray-900 font-bold">Like a real friend — one who knows their science.</p>
                  </div>
                </div>
              </div>

              {/* Connected to Tools */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">🔗</span>
                    <h3 className="text-2xl font-bold text-gray-900">Connected to Your Tools</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Smart integrations without overwhelm.</strong> Dimension syncs with Apple Watch, Oura, Garmin and more to give you real-time, contextual support.
                  </p>
                  <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-3 border border-gray-100">
                    <p className="text-gray-900 font-bold">Not just &quot;10,000 steps left&quot; notifications.</p>
                  </div>
                </div>
              </div>

              {/* Health Protocols */}
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">🧬</span>
                    <h3 className="text-2xl font-bold text-gray-900">Leading Health Protocols</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Not internet noise. Real health intelligence.</strong> While other AIs pull from the web, Dimension is grounded in research from the most trusted thinkers in longevity, metabolic health, recovery, and performance.
                  </p>
                  <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 rounded-xl p-3 border border-gray-100">
                    <p className="text-gray-900 font-bold">You won&apos;t see their names here — but you&apos;ll feel their influence in every suggestion.</p>
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
