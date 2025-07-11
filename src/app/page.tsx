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
};

const STORIES: Story[] = [
  {
    key: 'tom',
    name: 'Tom',
    age: 42,
    descriptor: 'Performance-driven and always tracking.',
    image: '/tom.jpg',
    story: `Tom's deep into biohacking — HRV, fasting, cold exposure. But lately, he's hitting walls. There's data everywhere, but no clarity. He wants a coach who sees the full picture and sharpens every edge.`,
    responder: 'Wil',
    responderAvatar: '/will.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Tom', text: "I'm exhausted. All this tracking isn't helping." },
      { from: 'Wil', text: "I see the issue. Your recovery window is misaligned with your stress peaks. Let's fix one lever at a time." },
      { from: 'Tom', text: "Finally, someone who gets the data." },
      { from: 'Wil', text: "Your HRV pattern shows you need 2 more hours between your last meal and sleep. Try that tonight." },
    ],
  },
  {
    key: 'rachel',
    name: 'Rachel',
    age: 39,
    descriptor: 'Holding it all together — barely.',
    image: '/rachel.jpg',
    story: `Between kids, work, and aging parents, Rachel's running on fumes. She doesn't have time to think about herself — let alone fix her health. She needs someone who understands without her needing to explain.`,
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Rachel', text: "I'm exhausted. I don't even know where to start." },
      { from: 'Ellie', text: "You're carrying a lot, Rachel. Let's take it one step at a time. What's one small thing you wish you could do for yourself?" },
      { from: 'Rachel', text: "Even five minutes feels impossible." },
      { from: 'Ellie', text: "Start with two. I'll remind you that you deserve it. What would those two minutes look like?" },
    ],
  },
  {
    key: 'jan',
    name: 'Jan',
    age: 54,
    descriptor: "Everything's changing, and no one's listening.",
    image: '/jan.jpg',
    story: `Hot flashes. Brain fog. Restless nights. Jan's doctor shrugs it off. She's done being dismissed. She wants a guide who knows what's happening — and what to do about it.`,
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Jan', text: "I feel like I'm losing myself. No one understands what I'm going through." },
      { from: 'Ellie', text: "Jan, what you're experiencing is real and valid. Let's talk about what's hardest right now." },
      { from: 'Jan', text: "The brain fog is the worst. I used to be so sharp." },
      { from: 'Ellie', text: "You're still sharp. Your brain is adapting to hormonal changes. Here's what we can do to support it..." },
    ],
  },
  {
    key: 'michael',
    name: 'Michael',
    age: 61,
    descriptor: 'He let things slide, but he\'s ready now.',
    image: '/michael.jpg',
    story: `Michael used to feel great. But life got busy. Now his joints ache, energy's low, and he doesn't know where to begin. He needs small steps, no judgment — just someone to walk with him.`,
    responder: 'Wil',
    responderAvatar: '/will.png',
    buttonText: 'View Chat',
    chat: [
      { from: 'Michael', text: "I haven't exercised in months. I don't even know where to start." },
      { from: 'Wil', text: "Let's start ridiculously small, Michael. What's one thing you could do today that would feel good?" },
      { from: 'Michael', text: "Maybe just a short walk around the block." },
      { from: 'Wil', text: "Perfect. That's your first win. Let's build on it tomorrow. How did that feel?" },
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

function RealStories() {
  useFadeInUpAnimation();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const handleStorySelect = (index: number) => {
    setCurrentStoryIndex(index);
    setSelectedChat(index);
  };

  const nextStory = () => {
    const next = (currentStoryIndex + 1) % STORIES.length;
    setCurrentStoryIndex(next);
    if (selectedChat !== null) setSelectedChat(next);
  };

  const prevStory = () => {
    const prev = (currentStoryIndex - 1 + STORIES.length) % STORIES.length;
    setCurrentStoryIndex(prev);
    if (selectedChat !== null) setSelectedChat(prev);
  };

  const getPrevIndex = () => (currentStoryIndex - 1 + STORIES.length) % STORIES.length;
  const getNextIndex = () => (currentStoryIndex + 1) % STORIES.length;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center bg-indigo-50 rounded-full px-6 py-2 mb-4">
          <span className="text-sm font-medium text-indigo-700">
            👥 Meet Others Like You: {STORIES.map(s => s.name).join(', ')}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <button 
              onClick={prevStory}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextStory}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-4">
              <div className="w-32 opacity-70 flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity" onClick={prevStory}>
                <div className="bg-white rounded-xl shadow border border-gray-200 p-4 h-80 overflow-hidden transform scale-90">
                  <div className="flex items-center mb-3">
                    <img 
                      src={STORIES[getPrevIndex()].image} 
                      alt={STORIES[getPrevIndex()].name} 
                      className="w-10 h-10 rounded-full object-cover border border-gray-200 mr-3" 
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        {STORIES[getPrevIndex()].name}, {STORIES[getPrevIndex()].age}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {STORIES[getPrevIndex()].descriptor}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    {STORIES[getPrevIndex()].story.substring(0, 120)}...
                  </div>
                </div>
              </div>

              <div className="w-80 flex-shrink-0 z-10">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 min-h-[500px]">
                  <div className="flex items-center mb-4">
                    <img 
                      src={STORIES[currentStoryIndex].image} 
                      alt={STORIES[currentStoryIndex].name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100 mr-4" 
                    />
                    <div>
                      <div className="font-bold text-lg text-gray-900">
                        {STORIES[currentStoryIndex].name}, {STORIES[currentStoryIndex].age}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {STORIES[currentStoryIndex].descriptor}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-gray-700 text-sm mb-8 leading-relaxed">
                    {STORIES[currentStoryIndex].story}
                  </div>
                  
                  <button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors text-base"
                    onClick={() => handleStorySelect(currentStoryIndex)}
                  >
                    📱 Watch {STORIES[currentStoryIndex].name}'s conversation with {STORIES[currentStoryIndex].responder}
                  </button>
                </div>
              </div>

              <div className="w-32 opacity-70 flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity" onClick={nextStory}>
                <div className="bg-white rounded-xl shadow border border-gray-200 p-4 h-80 overflow-hidden transform scale-90">
                  <div className="flex items-center mb-3">
                    <img 
                      src={STORIES[getNextIndex()].image} 
                      alt={STORIES[getNextIndex()].name} 
                      className="w-10 h-10 rounded-full object-cover border border-gray-200 mr-3" 
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        {STORIES[getNextIndex()].name}, {STORIES[getNextIndex()].age}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {STORIES[getNextIndex()].descriptor}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    {STORIES[getNextIndex()].story.substring(0, 120)}...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {STORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStoryIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentStoryIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="sticky top-8">
            {selectedChat === null ? (
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center min-h-[500px] flex items-center justify-center">
                <div className="text-gray-400 text-lg">
                  👆 Click "Watch conversation" to see how Dimension responds
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-fadeInUp min-h-[500px]">
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <img 
                    src={STORIES[selectedChat].responderAvatar} 
                    alt={STORIES[selectedChat].responder} 
                    className="w-12 h-12 rounded-full border-2 border-indigo-200 mr-3" 
                  />
                  <div>
                    <div className="font-semibold text-lg text-gray-800">
                      {STORIES[selectedChat].name}'s conversation with {STORIES[selectedChat].responder}
                    </div>
                    <div className="text-sm text-gray-500">Real messages</div>
                  </div>
                </div>
                
                <div className="space-y-5 mb-8 max-h-80 overflow-y-auto">
                  {STORIES[selectedChat].chat.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === STORIES[selectedChat].responder ? 'justify-start' : 'justify-end'}`}>
                      <div className={`rounded-2xl px-5 py-4 max-w-[85%] ${
                        msg.from === STORIES[selectedChat].responder 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-indigo-600 text-white'
                      }`}>
                        <div className="text-sm font-medium mb-2">{msg.from}</div>
                        <div className="text-base leading-relaxed">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors text-lg"
                  onClick={() => document.getElementById('get-started')?.scrollIntoView({behavior:'smooth'})}
                >
                  Ready to start your own conversation? → Start Now
                </button>
              </div>
            )}
          </div>
        </div>
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
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.6)' }}
      />
      
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

        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-10 pb-16">
          <div className="flex flex-col items-center justify-center w-full mt-2 mb-8">
            <h1 className="font-light text-gray-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-center mb-10">
              The next Dimension of health feels like having a<br className="hidden md:inline" /> friend who truly gets you
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 text-center mb-8">
              Meet Your Daily Health Champion
            </h2>
          </div>

          <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center w-full max-w-4xl mb-12">
            <div className="flex flex-col items-center">
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-48 h-48 md:w-64 md:h-64 mb-4">
                <Image src="/will.png" alt="Wil" width={256} height={256} className="object-cover w-full h-full" />
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
                <Image src="/elli.png" alt="Ellie" width={256} height={256} className="object-cover w-full h-full" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl text-gray-800 mb-2">Ellie</div>
                <div className="text-gray-600 text-sm max-w-xs">
                  Emotionally brilliant and super smart - somehow knows you need a hug before you do
                </div>
              </div>
            </div>
          </section>

          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 font-medium">
              Health wisdom from experts, delivered like a friend
            </p>
          </div>

          <section className="w-full px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                Here's how it works
              </h2>
            </div>
            <RealStories />
          </section>
        </main>
      </div>
    </div>
  );
}