'use client';

import React from 'react';

const FEATURES = [
  {
    icon: '🧠',
    title: 'Built-in Memory',
    description: (
      <>
        <b>Your coach actually remembers.</b> Dimension keeps track of your patterns — sleep, mood, stress, habits — and brings them up at just the right moment.<br />
        <span className="font-semibold text-gray-700">No more starting over.</span>
      </>
    ),
  },
  {
    icon: '❤️',
    title: 'Emotionally Intelligent',
    description: (
      <>
        <b>It listens between the lines.</b> Dimension hears the mood behind your message, notices shifts in tone, and responds with empathy and clarity.<br />
        <span className="font-semibold text-gray-700">Like a real friend — one who knows their science.</span>
      </>
    ),
  },
  {
    icon: '🔗',
    title: 'Connected to Your Tools',
    description: (
      <>
        <b>Smart integrations without overwhelm.</b> Dimension syncs with Apple Watch, Oura, Garmin and more to give you real-time, contextual support.<br />
        <span className="font-semibold text-gray-700">Not just "10,000 steps left" notifications.</span>
      </>
    ),
  },
  {
    icon: '🧬',
    title: 'Leading Health Protocols',
    description: (
      <>
        <b>Not internet noise. Real health intelligence.</b> While other AIs pull from the web, Dimension is grounded in research from the most trusted thinkers in longevity, metabolic health, recovery, and performance.<br />
        
      </>
    ),
  },
];

export default function WhatMakesDimensionDifferentSection() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white relative overflow-hidden" style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'rgba(255,255,255,0.6)' }} />
      <div className="relative z-[2] w-full px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
              What Makes Dimension Different
            </h2>
            <div className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              You’ve seen chatbots. This is something else. Dimension isn’t trained on the internet. It’s built on the deepest health science from the world’s top minds in longevity, performance, and emotional resilience — and designed to <span className="font-semibold">coach you like someone who actually knows you.</span>
            </div>
          </div>
          {/* Conversational Card Layout */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 px-0 md:px-8 py-10 flex flex-col md:flex-row gap-0 md:gap-4 items-stretch">
              {/* Left: Pills */}
              <div className="flex flex-col justify-center items-center md:items-start px-8 py-4 md:py-0 w-full md:w-1/2 gap-4">
                {FEATURES.map((feature, idx) => (
                  <div key={feature.title} className="bg-white/80 rounded-full px-6 py-3 text-lg text-gray-800 shadow border border-gray-100 max-w-xs w-full text-center flex items-center gap-2 font-semibold">
                    <span className="text-2xl mr-2">{feature.icon}</span>
                    {feature.title}
                  </div>
                ))}
              </div>
              {/* Right: Messaging */}
              <div className="flex flex-col justify-center px-8 py-6 w-full md:w-1/2 gap-6">
                {FEATURES.map((feature, idx) => (
                  <div key={feature.title} className="mb-4">
                    <div className="text-base text-gray-700 mb-2">
                      {feature.description}
                    </div>
                  </div>
                ))}
                {/* CTA Button */}
                <div className="mt-6 flex justify-center md:justify-start">
                  <a
                    href="#get-started"
                    className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-900 transition-colors text-lg"
                  >
                    Get Started with Dimension
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
