"use client";
import React from "react";

const STEPS = [
  {
    icon: "🧑‍🏫",
    title: "Step 1: Choose Your Coach",
    description: (
      <>
        You pick the voice that suits your vibe.<br />
        <b>Wil or Elli—your AI coach—joins you with personality, warmth, and a sharp eye for patterns.</b> Choosing your coach helps the experience feel human, personal, and yours from the beginning.
      </>
    ),
  },
  {
    icon: "💬",
    title: "Step 2: Get to Know Each Other",
    description: (
      <>
        It’s not a questionnaire. It’s a conversation.<br />
        <b>Wil or Elli chats with you to understand your world:</b> your habits, sleep, stress, energy, goals, and what’s been falling apart lately. No forms. No pressure. Just a natural, intuitive way to get support that actually fits.
      </>
    ),
  },
  {
    icon: "🔗",
    title: "Step 3: Connect Your Devices",
    description: (
      <>
        More clarity, less guesswork.<br />
        If you use an Apple Watch, Oura, Garmin, or other tools, Dimension plugs in effortlessly to bring your health data into the picture. <span className="italic">(Optional—but powerful.)</span>
      </>
    ),
  },
  {
    icon: "✨",
    title: "Step 4: The Magic Begins",
    description: (
      <>
        Real support starts here.<br />
        From Day One, Dimension starts tailoring its guidance. It learns from your patterns, remembers your context, and helps you shift gently—offering suggestions that actually fit your life, even when it’s chaotic.
      </>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white relative overflow-hidden" style={{backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'rgba(255,255,255,0.7)' }} />
      <div className="relative z-[2] w-full max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-gray-800 text-center mb-6">How Dimension Works (and Why It’s So Different)</h2>
        <p className="text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12 font-light">
          Forget clunky apps and endless forms. From the moment you say hello, Dimension meets you like a friend who already knows you’re juggling a lot—and still wants to help.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {STEPS.map((step) => (
            <div key={step.title} className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col gap-2">
              <div className="mb-2">
                <span className="font-semibold text-lg text-gray-900">{step.title}</span>
              </div>
              <div className="text-gray-700 text-base font-light">{step.description}</div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-2">
          <div className="text-center text-black font-medium text-base">
            Built to evolve with you—not just give tips and vanish.
          </div>
        </div>
      </div>
    </section>
  );
}
