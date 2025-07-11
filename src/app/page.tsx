'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
  chat: ChatMessage[];
  lifeStage?: string;
  healthChallenges?: string[];
  techTracking?: string;
  whatSheNeeds?: string;
};

const STORIES: Story[] = [
  {
    key: 'tom',
    name: 'Tom',
    age: 42,
    descriptor: "Performance-driven and always tracking.",
    image: '/tom.jpg',
    story: "Wil helped me realize that my late-night emails were sabotaging my recovery. Now, I actually rest.",
    responder: 'Wil',
    responderAvatar: '/will.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Tom', text: "Wil, why am I always tired after a good week?" },
      { from: 'Wil', text: "Let's focus on one lever at a time. Today, try shifting your recovery window and see how you feel." },
      { from: 'Tom', text: "That's actionable. Thanks, Wil." },
    ],
  },
  {
    key: 'rachel',
    name: 'Rachel',
    age: 39,
    descriptor: 'Holding everyone together, barely holding herself.',
    image: '/rachel.jpg',
    story: "Rachel's the glue of her family, but her own needs come last. Ellie helped her carve out moments for herself that actually stick.",
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Rachel', text: "I’m exhausted. I don’t even know where to start." },
      { from: 'Ellie', text: "You’re carrying a lot, Rachel. Let’s take it one step at a time. What’s one thing you wish you had more energy for?" },
      { from: 'Rachel', text: "Honestly, just getting through the day without feeling exhausted." },
      { from: 'Ellie', text: "That’s completely understandable. Let’s try a small experiment: can you find 5 quiet minutes today, just for yourself—even if it’s in the car or bathroom?" },
      { from: 'Rachel', text: "I can try, but I always feel guilty." },
      { from: 'Ellie', text: "You deserve care too. Even a few minutes can help. I’ll check in tomorrow to see how it went. No pressure—just notice how you feel." },
    ],
    lifeStage: 'Full-time job, two kids, caregiving for aging parents',
    healthChallenges: [
      'Constant fatigue',
      'Poor sleep',
      'No time for self-care',
    ],
    techTracking: 'Apple Watch, Fitbit app (unused lately)',
    whatSheNeeds: 'A guide who gets it without needing a full explanation',
  },
  {
    key: 'jan',
    name: 'Jan',
    age: 54,
    descriptor: "Everything's changing, and no one's listening.",
    image: '/jan.jpg',
    story: "Jan's world is shifting—work, family, even her body. Ellie listens, validates, and helps her find her voice again.",
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Jan', text: "I keep forgetting to take my meds. It’s just so much to remember." },
      { from: 'Ellie', text: "That’s really common, Jan. Let’s make it easier. What’s the best time of day for a gentle reminder?" },
      { from: 'Jan', text: "Probably morning, before I get too distracted." },
      { from: 'Ellie', text: "Great. I’ll send you a nudge at 8am. If you miss it, no worries—just try again the next day. We’ll track your progress together." },
      { from: 'Jan', text: "Thank you. That feels manageable." },
      { from: 'Ellie', text: "You’re welcome. Consistency beats perfection. Let’s check in next week and adjust if needed." },
    ],
  },
  {
    key: 'michael',
    name: 'Michael',
    age: 61,
    descriptor: "He let things slide, but he's ready now.",
    image: '/michael.jpg',
    story: "Michael lost momentum after retirement. Wil's nudges got him walking again—now he's setting new goals.",
    responder: 'Wil',
    responderAvatar: '/will.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Michael', text: "I want to get back in shape but I hate the gym. It never sticks." },
      { from: 'Wil', text: "You’re not alone, Michael. Let’s find something you actually enjoy. What’s one activity that feels good, not forced?" },
      { from: 'Michael', text: "I like walking my dog after work." },
      { from: 'Wil', text: "That’s a great start. How about we set a gentle step goal for your walks? No pressure—just a little more than usual." },
      { from: 'Michael', text: "I can try that. It feels doable." },
      { from: 'Wil', text: "Awesome. I’ll track your steps and send encouragement. Let’s celebrate every bit of progress." },
    ],
  },
];

// ADD THIS MISSING FUNCTION HERE!
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

function RealStories() {
  useFadeInUpAnimation();
  const [current, setCurrent] = useState(0);
  const total = STORIES.length;

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + total) % total);
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % total);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [total]);

  // Touch/swipe navigation
  let touchStartX = 0;
  let touchEndX = 0;
  function handleTouchStart(e: React.TouchEvent) { touchStartX = e.changedTouches[0].screenX; }
  function handleTouchEnd(e: React.TouchEvent) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) setCurrent((prev) => (prev - 1 + total) % total); // swipe right
    if (touchStartX - touchEndX > 50) setCurrent((prev) => (prev + 1) % total); // swipe left
  }

  const story = STORIES[current];

  // Chat reveal state
  const STATIC_BUBBLES = 1; // Always show only the first bubble
  const [chatStarted, setChatStarted] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0); // Revealed from index 1 onward
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const totalBubbles = story.chat.length;
  const revealableBubbles = totalBubbles - STATIC_BUBBLES;

  // Reset chat state on story change
  useEffect(() => {
    setChatStarted(false);
    setRevealedCount(0);
    setIsFullyRevealed(false);
  }, [current]);

  // Sequential bubble reveal (for bubbles 2+)
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (chatStarted && revealedCount < revealableBubbles && !isFullyRevealed) {
      timeout = setTimeout(() => setRevealedCount(revealedCount + 1), 1500);
    }
    if (revealedCount === revealableBubbles) setIsFullyRevealed(true);
    return () => clearTimeout(timeout);
  }, [chatStarted, revealedCount, revealableBubbles, isFullyRevealed]);

  return (
    <div className="w-full flex flex-col items-center max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="mb-4 w-full flex justify-center">
        <div className="bg-gray-50 rounded-full px-6 py-2 text-sm font-semibold text-gray-700 shadow-sm">
          Meet Others Like You: Rachel, Michael, Jan, Tom
        </div>
      </div>
      {/* Carousel */}
      <div className="relative w-full flex flex-row items-center justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Left Arrow */}
        <button
          aria-label="Previous story"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-indigo-100 rounded-full shadow p-2 z-20"
          style={{ display: total > 1 ? 'block' : 'none' }}
          onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Cards */}
        <div className="flex flex-row items-center justify-center w-full max-w-3xl gap-4">
          {[ -1, 0, 1 ].map((offset) => {
            const index = (current + offset + total) % total;
            const s = STORIES[index];
            const isCenter = offset === 0;
            return (
              <div
                key={s.key}
                className={`transition-all duration-500 flex flex-col bg-white rounded-2xl shadow-md px-6 py-6 w-72 md:w-80 border border-gray-100 ${isCenter ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-60 z-0'}`}
                style={{ cursor: isCenter ? 'default' : 'pointer' }}
                onClick={() => !isCenter && setCurrent(index)}
              >
                <div className="font-bold text-2xl text-gray-900 mb-1 tracking-tight">{s.name}, {s.age}</div>
                <div className="font-semibold text-base text-gray-700 mb-5">{s.descriptor}</div>
                {s.lifeStage && (
                  <div className="mb-4">
                    <div className="uppercase text-sm tracking-wide text-gray-500 font-bold mb-1">Life stage</div>
                    <div className="text-gray-700 text-sm leading-relaxed">{s.lifeStage}</div>
                  </div>
                )}
                {s.healthChallenges && (
                  <div className="mb-4">
                    <div className="uppercase text-sm tracking-wide text-gray-500 font-bold mb-1">Health challenges</div>
                    <ul className="pl-4 text-gray-700 text-sm list-disc">
                      {s.healthChallenges.map((hc: string, i: number) => (
                        <li key={i} className="mb-1">{hc}</li>
                      ))}
                    </ul>
                    <Image 
                        src={story.image} 
                        alt={story.name} 
                        width={64} height={64}
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100 mr-4"
                        unoptimized
                      />
                    <div className="uppercase text-sm tracking-wide text-gray-500 font-bold mb-1">Tech / Tracking</div>
                    <div className="text-gray-700 text-sm">{s.techTracking}</div>
                  </div>
                )}
                {s.whatSheNeeds && (
                  <div className="mb-2">
                    <div className="uppercase text-sm tracking-wide text-gray-500 font-bold mb-1">What she needs</div>
                    <div className="text-gray-700 text-sm">A guide who gets it without needing a full explanation</div>
                    <div className="text-gray-700 text-sm">A guide who <span className="italic">gets it</span> without needing a full explanation</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          aria-label="Next story"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-indigo-100 rounded-full shadow p-2 z-20"
          style={{ display: total > 1 ? 'block' : 'none' }}
          onClick={() => setCurrent((prev) => (prev + 1) % total)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      {/* Progress dots */}
      <div className="flex gap-2 justify-center mt-4">
        {STORIES.map((_, idx) => (
          <span key={idx} className={`inline-block w-2 h-2 rounded-full ${idx===current?'bg-indigo-500':'bg-indigo-200'}`}></span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle white overlay only over background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.6)' }}
      />
      {/* Main content above overlay */}
      <div className="relative z-[2] flex flex-col min-h-screen w-full">

      <header className="w-full flex items-center justify-between px-10 pt-8">
        <div className="flex items-center">
          <Image src="/logo.png" alt="DIMENSION Logo" width={40} height={40} className="mr-3" />
          <span className="font-bold text-xl tracking-wide text-gray-900">DIMENSION</span>
        </div>
        <nav className="flex gap-10 text-base font-light text-gray-700">
          <a href="#meet" className="hover:text-gray-900 transition-colors">Meet Them</a>
          <a href="#get-started" className="hover:text-gray-900 transition-colors">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-24 pb-16">
        <div className="flex flex-col items-center justify-center w-full mt-2 mb-2">
          <h1 className="font-light text-gray-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-center mb-10" style={{fontFamily:'inherit'}}>
            The next Dimension of health feels like having a<br className="hidden md:inline" /> friend who truly gets you
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 text-center mt-2 mb-2">Meet Your Daily Health Champion</h2>

        </div>
        <section className="flex flex-row gap-20 md:gap-32 items-start justify-center w-full max-w-5xl h-full mt-0">
          {/* Wil Card */}
          <div className="flex flex-col justify-between w-80 h-full">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/will.png" alt="Wil portrait photo" width={320} height={320} className="object-cover w-full h-full" unoptimized />
            </div>
            
            <div className="flex flex-col flex-1 items-center w-full">
              <div className="relative flex items-center justify-center w-full">
  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 text-center">Wil</div>
</div>
              
              <div className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center mb-3">Data nerd with a big heart who gets genuinely excited about your sleep scores</div>
            </div>
          </div>
          {/* Ellie Card */}
          <div className="flex flex-col justify-between w-80 h-full">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/elli.png" alt="Ellie" width={320} height={320} className="object-cover w-full h-full" unoptimized />
            </div>
            
            <div className="flex flex-col flex-1 items-center w-full">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 text-center">Ellie</div>
              
              <div className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center mb-3">Emotionally brilliant and super smart - somehow knows you need a hug before you do</div>
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center mb-12">
          <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 text-center mt-2 mb-2">Health wisdom from experts, delivered like a friend</div>
        </div>
        {/* Real Stories Section */}
        <section className="w-full flex flex-col items-center mt-12 px-4">
          <div className="max-w-2xl w-full text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Here&#39;s how it works</h2>
            <p className="text-lg text-gray-600">Real conversations with real people. See how your health champion shows up.</p>
          </div>
          <RealStories />
        </section>
      </main>
    </div>
  </div>
  );
}