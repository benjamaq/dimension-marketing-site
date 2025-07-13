'use client';

import React, { useEffect } from 'react';
import RealStories from '@/components/RealStories';
import TiredOfHealthToolsSection from '@/components/TiredOfHealthToolsSection';

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

const STORIES: Story[] = [
  {
    key: 'rachel',
    name: 'Rachel',
    age: 39,
    descriptor: 'Holding everyone together, barely holding herself.',
    image: '/rachel.jpg',
    story: `Overwhelmed, guilty for snapping at the kids, too wired to sleep but too tired to think.`,
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    cardColor: 'from-gray-100 to-white',
    accentColor: 'bg-gray-600',
    chat: [
      { from: 'Rachel', text: "I'm so tired but I can&apos;t turn my brain off at night. Even when the kids are finally asleep, I'm lying there thinking about everything I didn&apos;t get done." },
      { from: 'Ellie', text: "That mental load you&apos;re carrying is exhausting, Rachel. Your nervous system is stuck in &apos;on&apos; mode. Let&apos;s find a way to help you transition from mom-mode to rest-mode." },
      { from: 'Rachel', text: "I don&apos;t even know how to do that anymore. There&apos;s always something." },
      { from: 'Ellie', text: "We&apos;ll start with a 5-minute buffer ritual. Something that signals to your body: &apos;The day is done, you&apos;ve done enough.&apos; What&apos;s one small thing that used to make you feel calm?" },
    ],
  },
  {
    key: 'sine',
    name: 'Sine',
    age: 42,
    descriptor: 'Fiercely independent, quietly burning out.',
    image: '/sine.jpg',
    story: `Losing control — wired all day, crashes at night.`,
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    cardColor: 'from-white to-gray-100',
    accentColor: 'bg-gray-700',
    chat: [
      { from: 'Sine', text: "I hate how I eat when I'm stressed. Yesterday I demolished a bag of chips at 3pm and felt terrible about myself for hours." },
      { from: 'Ellie', text: "That afternoon crash and emotional eating cycle is so common, Sine. Your body was asking for something - probably energy and comfort. Instead of fighting it, let's understand what you actually needed in that moment." },
      { from: 'Sine', text: "I know I should eat better, but when I'm overwhelmed, healthy choices feel impossible." },
      { from: 'Ellie', text: "Let's remove &apos;should&apos; from this conversation. You're doing the best you can with the energy you have. What if we set up your space so the easier choice is also the nourishing choice?" },
    ],
  },
  {
    key: 'yara',
    name: 'Yara',
    age: 47,
    descriptor: "Everyone&apos;s go-to. Never her own.",
    image: '/yara.jpg',
    story: `Emotionally numb, physically drained, quietly resentful.`,
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    cardColor: 'from-gray-50 to-white',
    accentColor: 'bg-gray-800',
    chat: [
      { from: 'Yara', text: "I realized I can&apos;t remember the last time someone asked me how I'm doing and actually waited for an answer. Everyone just assumes I'm fine because I handle everything." },
      { from: 'Ellie', text: "I'm asking now, Yara. How are you really doing? And I'm going to wait for the real answer, not the one you give everyone else." },
      { from: 'Yara', text: "Honestly? I'm angry. At everyone. But mostly at myself for letting it get this bad." },
      { from: 'Ellie', text: "That anger is information. It&apos;s your inner voice finally speaking up, saying &apos;I matter too.&apos; You've been taking care of everyone else's needs - what would it look like to advocate for your own?" },
    ],
  },
  {
    key: 'leo',
    name: 'Leo',
    age: 45,
    descriptor: 'Always performing, rarely processing.',
    image: '/leo.jpg',
    story: `Wakes up anxious, hides stress behind humor and caffeine.`,
    responder: 'Wil',
    responderAvatar: '/will.png',
    buttonText: 'View Chat',
    cardColor: 'from-white to-gray-50',
    accentColor: 'bg-black',
    chat: [
      { from: 'Leo', text: "My Oura data is brutal this week. HRV down 40%, sleep efficiency tanking. I know what the numbers are telling me, but I don&apos;t know how to fix it without changing my whole life." },
      { from: 'Wil', text: "Those numbers are a clear signal, Leo. Your autonomic nervous system is stuck in fight-or-flight mode. The good news? We don&apos;t need to overhaul everything - we need strategic interventions." },
      { from: 'Leo', text: "I've tried meditation apps, but sitting still for 20 minutes feels impossible when my brain is going 100mph." },
      { from: 'Wil', text: "Forget traditional meditation. Let's work with your wiring, not against it. Box breathing while you walk to meetings. 90-second coherence sessions between calls. Micro-interventions that fit your rhythm." },
    ],
  },
  {
    key: 'tariq',
    name: 'Tariq',
    age: 63,
    descriptor: 'Calm exterior, pressure cooker inside.',
    image: '/tariq.jpg',
    story: `Feels responsible for everyone, but no idea what he needs.`,
    responder: 'Wil',
    responderAvatar: '/will.png',
    buttonText: 'View Chat',
    cardColor: 'from-gray-100 to-gray-50',
    accentColor: 'bg-gray-900',
    chat: [
      { from: 'Tariq', text: "My wife says I'm always tense, even when I'm supposedly relaxing. I'll be sitting on the couch, but my shoulders are up around my ears and my mind is still running through business problems." },
      { from: 'Wil', text: "That's your body's way of staying ready for the next crisis, Tariq. After decades of being the one everyone relies on, your nervous system doesn't know how to truly rest. We need to teach it that it's safe to let go." },
      { from: 'Tariq', text: "I've tried yoga classes, but I feel ridiculous. And I can&apos;t seem to stop thinking long enough for it to work." },
      { from: 'Wil', text: "Forget the classes. Let's start with progressive muscle release while you&apos;re doing things you already do. Five minutes of intentional shoulder drops while watching the news. It's practical, private, and effective." },
    ],
  },
];

function useFadeInUpAnimation() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `.animate-fadeInUp { animation: fadeInUp 0.5s cubic-bezier(.23,1.01,.32,1) both; }
@keyframes fadeInUp { from { opacity:0; transform: translateY(32px); } to { opacity:1; transform: none; } }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
}

export default function Home() {
  return (
    <>
      {/* HERO + REAL STORIES SECTIONS WITH SHARED BACKGROUND */}
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/largebg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* White overlay with 15% opacity */}
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(255,255,255,0.6)',zIndex:1,pointerEvents:'none'}} />
        <div style={{position:'relative',zIndex:2}}>

        {/* HERO SECTION */}
        <div className="flex flex-col w-full">
          <header className="w-full flex items-center justify-between px-10 pt-8">
            <div className="flex items-center">
              <img src="/logo.png" alt="DIMENSION Logo" width="40" height="40" className="mr-3" />
              <span className="font-bold text-xl tracking-wide text-gray-900">DIMENSION</span>
            </div>
            <nav className="flex gap-10 text-base font-light text-gray-700">
              <a href="#meet" className="hover:text-gray-900 transition-colors">Meet Them</a>
              <a href="#get-started" className="hover:text-gray-900 transition-colors">Get Started</a>
            </nav>
          </header>
          <main className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-10 pb-16">
            <div className="flex flex-col items-center justify-center w-full mt-2 mb-8">
              <h1 className="font-light text-gray-800 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-center mb-6">
                You&apos;ve carried your health alone for long enough
              </h1>
              <div className="text-2xl md:text-3xl text-gray-800 text-center font-light mb-2">
                Not Anymore
              </div>
              <hr className="mx-auto w-16 border-t-2 border-gray-300 mb-8" />
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
                  <img src="/elli.png" alt="Ellie" className="object-cover w-full h-full" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl text-gray-800 mb-2">Ellie</div>
                  <div className="text-gray-600 text-sm max-w-xs">
                    Emotionally brilliant and super smart - somehow knows you need a hug before you do
                  </div>
                </div>
              </div>
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
    </>
  );
}