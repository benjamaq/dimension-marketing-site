"use client";
import React from "react";

const FEATURES = [
  "Unlimited 1-on-1 AI coaching",
  "Personalized plans, sleep + stress insights",
  "Works with Apple Watch, Oura, Garmin + more",
  "No contracts. Cancel anytime."
];

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white relative overflow-hidden" style={{backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'rgba(255,255,255,0.7)' }} />
      <div className="relative z-[2] w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-3">
          <span className="inline-flex items-center px-4 py-1 bg-black text-white text-xs font-bold uppercase rounded-full shadow-sm border border-gray-300 mb-2 tracking-wide">
            Limited Beta Price
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-gray-800 text-center mb-3">Beta Access — Join for $19/month</h2>
        <div className="text-base md:text-lg text-center text-gray-700 mb-6 font-light">Cancel anytime. No contracts. Just clarity.</div>
        <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl border border-gray-100 p-8 w-full mb-6">
          <div className="text-lg md:text-xl text-center text-gray-900 font-semibold mb-5">
            Get unlimited coaching, personalized support, and device integration—all for less than one yoga class.
          </div>
          <ul className="space-y-4 mb-6">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base md:text-lg text-gray-800">
                <span className="text-gray-900 text-xl font-bold">•</span> {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center">
            <a href="#get-started" className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-900 transition-colors text-lg mb-2">
              Start Coaching for $19/month
            </a>
            <div className="text-xs text-gray-500 text-center max-w-xs">Lock in the Beta rate before public launch.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
