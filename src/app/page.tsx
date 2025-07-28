'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import RealStories from '@/components/RealStories';
import TiredOfHealthToolsSection from '@/components/TiredOfHealthToolsSection';
import WhatMakesDimensionDifferentSection from '@/components/WhatMakesDimensionDifferentSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import PrivacyAssurance from '@/components/PrivacyAssurance';

type ChatMessage = { from: string; text: string };
type Story = {
  key: string;
  name: string;
  age: number;
  descriptor: string;
  image: string;
  story: string;
  responder: string;
  responderAvatar: string;
  buttonText: string;
  cardColor: string;
  accentColor: string;
  chat: ChatMessage[];
};

export default function Home() {
  return (
    <>
      {/* HERO + REAL STORIES SECTIONS WITH SHARED BACKGROUND */}
      <section
        className="relative w-full pb-4"
        style={{
          backgroundImage: "url('/largebg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(255,255,255,0.6)',zIndex:1,pointerEvents:'none'}} />
        <div style={{position:'relative',zIndex:2}}>

        {/* HERO SECTION */}
        <div className="flex flex-col w-full">
          {/* Header with Login button */}
          <Header />
          <main className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-10 pb-16">
            <div className="flex flex-col items-center justify-center w-full mt-2 mb-8">
              <h1 className="font-light text-gray-800 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-center mb-6">
                You've carried your health <span className="rustic-underline">alone</span> for long enough.
              </h1>
              <div className="text-2xl md:text-3xl text-gray-800 text-center font-light mb-2">
                Not Anymore.
              </div>
              
            </div>
            <div className="w-full flex flex-col items-center mb-8">
              <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 tracking-tight mb-2">
                Meet Your New
              </h2>
              <div className="text-5xl md:text-6xl font-light text-center text-gray-900 tracking-tight">
                SUPERPOWER
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center w-full max-w-4xl mb-12">
              <div className="flex flex-col items-center">
                <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-48 h-48 md:w-64 md:h-64 mb-4">
                  <img src="/will.png" alt="Wil" className="object-cover w-full h-full" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl text-gray-800 mb-2">Wil</div>
                  <div className="text-gray-600 text-sm max-w-xs">
                    Data nerd with a big heart who gets genuinely excited about your sleep scores
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-48 h-48 md:w-64 md:h-64 mb-4">
                  <img src="/elli.png" alt="Elli" className="object-cover w-full h-full" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl text-gray-800 mb-2">Elli</div>
                  <div className="text-gray-600 text-sm max-w-xs">
                    Emotionally brilliant and super smart - somehow knows you need a hug before you do
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mb-8">
              <h2 className="text-xl md:text-2xl font-light text-center text-gray-800 mb-4">
                AI-powered health coaching that listens, remembers, and supports you—like a real friend.
              </h2>
            </div>
            {/* CTA SECTION */}
            <div className="w-full flex flex-col items-center my-8">
              <a href="https://app.trydimension.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-900 transition-colors text-lg">
                Get Started Now
              </a>
            </div>
          </main>
        </div>
        {/* REAL STORIES SECTION */}
        <section className="w-full px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              <strong>Real People. Real Struggles. Real Support.</strong>
            </h2>
          </div>
          <RealStories />
        </section>
        </div>
      </section>
      {/* TIRED OF HEALTH TOOLS SECTION */}
      <div className="w-full">
        <TiredOfHealthToolsSection />
      </div>
      {/* WHAT MAKES DIMENSION DIFFERENT SECTION */}
      <div className="w-full">
        <WhatMakesDimensionDifferentSection />
      </div>
      {/* HOW IT WORKS SECTION */}
      <HowItWorksSection />
      {/* PRICING SECTION */}
      <PricingSection />
      {/* PRIVACY ASSURANCE */}
      <PrivacyAssurance />
    </>
  );
}