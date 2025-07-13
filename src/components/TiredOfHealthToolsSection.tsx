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
              Tired of health tools that don&apos;t actually help?
            </h2>
          </div>

          {/* Problem/Solution Cards - Using Gray Variations */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Problem Card */}
            <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-400 p-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="text-3xl mr-3">🌪️</span>
                  The Problem
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1 flex-shrink-0">❌</span>
                    <span><strong>Generic tips</strong> that ignore your real life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1 flex-shrink-0">❌</span>
                    <span><strong>Endless data</strong> with zero emotional support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1 flex-shrink-0">❌</span>
                    <span><strong>One-size-fits-all plans</strong> that fall apart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1 flex-shrink-0">❌</span>
                    <span><strong>Judgy tones, confusing charts,</strong> and no follow-up</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-gray-300 rounded-lg">
                  <p className="text-gray-900 font-bold text-center">
                    You&apos;re not the problem. The tools are.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-400 p-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="text-3xl mr-3">🌈</span>
                  The Solution
                </h3>
              </div>
              <div className="p-6">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  Meet Dimension — the first AI built for your real life.
                </p>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  It blends science-backed health wisdom with emotional intelligence, remembering what matters to you and evolving with your needs.
                </p>
                <div className="p-4 bg-gray-300 rounded-lg text-center">
                  <p className="text-gray-900 font-bold">
                    Not just numbers. Not just advice.<br/>
                    <em className="text-lg">A true companion — with both heart and brains.</em>
                  </p>
                </div>
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
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
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
                    <div className="bg-gray-300 rounded-lg p-4">
                      <p className="text-gray-900 font-medium">&quot;Let&apos;s try a no-screen wind-down tonight. I&apos;ll check in tomorrow.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
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
                    <div className="bg-gray-300 rounded-lg p-4">
                      <p className="text-gray-900 font-medium">&quot;Nice walk. Want to add some gentle stretching to help with your back?&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">❌ Old Tools</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-800 font-medium">&quot;You missed your workout&quot;</p>
                      <p className="text-gray-500 text-sm mt-2">→ guilt spiral</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">✅ With Dimension</h4>
                    <div className="bg-gray-300 rounded-lg p-4">
                      <p className="text-gray-900 font-medium">&quot;Rough day? Let&apos;s pivot to something doable — 10 mins of movement before bed.&quot;</p>
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

            <div className="grid md:grid-cols-2 gap-8">
              {/* Built-in Memory */}
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">🧠</span>
                    <h3 className="text-2xl font-bold text-gray-900">Built-in Memory</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Your coach actually remembers.</strong> Dimension keeps track of your patterns — sleep, mood, stress, habits — and brings them up at just the right moment.
                  </p>
                  <div className="bg-gray-300 rounded-lg p-3">
                    <p className="text-gray-900 font-bold">No more starting over.</p>
                  </div>
                </div>
              </div>

              {/* Emotionally Intelligent */}
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">❤️</span>
                    <h3 className="text-2xl font-bold text-gray-900">Emotionally Intelligent</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>It listens between the lines.</strong> Dimension hears the mood behind your message, notices shifts in tone, and responds with empathy and clarity.
                  </p>
                  <div className="bg-gray-300 rounded-lg p-3">
                    <p className="text-gray-900 font-bold">Like a real friend — one who knows their science.</p>
                  </div>
                </div>
              </div>

              {/* Connected to Tools */}
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">🔗</span>
                    <h3 className="text-2xl font-bold text-gray-900">Connected to Your Tools</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Smart integrations without overwhelm.</strong> Dimension syncs with Apple Watch, Oura, Garmin and more to give you real-time, contextual support.
                  </p>
                  <div className="bg-gray-300 rounded-lg p-3">
                    <p className="text-gray-900 font-bold">Not just &quot;10,000 steps left&quot; notifications.</p>
                  </div>
                </div>
              </div>

              {/* Health Protocols */}
              <div className="bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-400 p-5">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">🧬</span>
                    <h3 className="text-2xl font-bold text-gray-900">Leading Health Protocols</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Not internet noise. Real health intelligence.</strong> While other AIs pull from the web, Dimension is grounded in research from the most trusted thinkers in longevity, metabolic health, recovery, and performance.
                  </p>
                  <div className="bg-gray-300 rounded-lg p-3">
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
