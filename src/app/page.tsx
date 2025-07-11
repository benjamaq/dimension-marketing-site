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
      { from: 'Rachel', text: "I'm exhausted. I don't even know where to start." },
      { from: 'Ellie', text: "You're carrying a lot, Rachel. Let's take it one step at a time. What's one small thing you wish you could do for yourself?" },
      { from: 'Rachel', text: "Even five minutes feels impossible." },
      { from: 'Ellie', text: "Start with two. I'll remind you that you deserve it. What would those two minutes look like?" },
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
      { from: 'Sine', text: "I feel like I'm always on edge. Everything feels like too much." },
      { from: 'Ellie', text: "That wired feeling is your nervous system stuck in overdrive. Let's find ways to help you come down naturally." },
      { from: 'Sine', text: "I don't have time for complicated routines." },
      { from: 'Ellie', text: "We'll start with micro-moments. Even 30 seconds of deep breathing can shift your whole day." },
    ],
  },
  {
    key: 'yara',
    name: 'Yara',
    age: 47,
    descriptor: "Everyone's go-to. Never her own.",
    image: '/yara.jpg',
    story: `Emotionally numb, physically drained, quietly resentful.`,
    responder: 'Ellie',
    responderAvatar: '/elli.png',
    buttonText: 'View Chat',
    cardColor: 'from-gray-50 to-white',
    accentColor: 'bg-gray-800',
    chat: [
      { from: 'Yara', text: "I don't even remember what I want anymore. Everything is about everyone else." },
      { from: 'Ellie', text: "That feeling of losing yourself is so real, Yara. Let's start by finding one small thing that's just for you." },
      { from: 'Yara', text: "I feel guilty even thinking about it." },
      { from: 'Ellie', text: "Your needs matter too. Taking care of yourself isn't selfish - it's necessary for everyone you love." },
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
      { from: 'Leo', text: "My HRV is tanking and I'm drinking way too much coffee. The data doesn't lie." },
      { from: 'Wil', text: "Your body's telling you something important. That anxiety spike is linked to your sleep disruption pattern." },
      { from: 'Leo', text: "So what do I do? I can't just stop being busy." },
      { from: 'Wil', text: "We don't need to change everything. Let's target your evening routine first - that's where we'll see the biggest ROI." },
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
      { from: 'Tariq', text: "I'm always tired but I can't seem to rest. My mind won't stop." },
      { from: 'Wil', text: "That constant mental load is exhausting, Tariq. Your body needs permission to truly relax." },
      { from: 'Tariq', text: "I don't even know how to do that anymore." },
      { from: 'Wil', text: "Let's start simple. What's one thing you used to enjoy that you've stopped doing?" },
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
  const [showingFullChat, setShowingFullChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleStorySelect = (index: number) => {
    setCurrentStoryIndex(index);
    setSelectedChat(index);
    setShowingFullChat(false);
    // Show first message from each person as teaser
    const firstMessages = STORIES[index].chat.slice(0, 2);
    setChatMessages(firstMessages);
  };

  const showFullConversation = () => {
    if (selectedChat !== null) {
      setShowingFullChat(true);
      const allMessages = STORIES[selectedChat].chat;
      
      // Add messages one by one with delay
      setChatMessages([allMessages[0], allMessages[1]]); // Keep first two
      
      allMessages.slice(2).forEach((message, index) => {
        setTimeout(() => {
          setChatMessages(prev => [...prev, message]);
        }, (index + 1) * 1500); // 1.5s delay between messages
      });
    }
  };

  const nextStory = () => {
    const next = (currentStoryIndex + 1) % STORIES.length;
    setCurrentStoryIndex(next);
    if (selectedChat !== null) {
      setSelectedChat(next);
      setShowingFullChat(false);
      const firstMessages = STORIES[next].chat.slice(0, 2);
      setChatMessages(firstMessages);
    }
  };

  const prevStory = () => {
    const prev = (currentStoryIndex - 1 + STORIES.length) % STORIES.length;
    setCurrentStoryIndex(prev);
    if (selectedChat !== null) {
      setSelectedChat(prev);
      setShowingFullChat(false);
      const firstMessages = STORIES[prev].chat.slice(0, 2);
      setChatMessages(firstMessages);
    }
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
              <div className="w-40 opacity-75 flex-shrink-0 cursor-pointer hover:opacity-95 transition-all duration-300 hover:scale-105" onClick={prevStory}>
                <div className={`bg-gradient-to-br from-gray-200 via-white to-gray-100 rounded-xl shadow-md border border-gray-300 p-5 h-96 overflow-hidden transform scale-95`}>
                  <div className="flex items-center mb-4">
                    <img 
                      src={STORIES[getPrevIndex()].image} 
                      alt={STORIES[getPrevIndex()].name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow-sm mr-3" 
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {STORIES[getPrevIndex()].name}, {STORIES[getPrevIndex()].age}
                      </div>
                      <div className="text-xs text-gray-600 italic">
                        {STORIES[getPrevIndex()].descriptor}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed line-clamp-6 mb-3">
                    <span className="font-medium">How they're feeling:</span> {STORIES[getPrevIndex()].story}
                  </div>
                  <div className={`w-full h-1 ${STORIES[getPrevIndex()].accentColor} rounded-full opacity-40`}></div>
                </div>
              </div>

              <div className="w-96 flex-shrink-0 z-10">
                <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl shadow-xl border border-gray-300 overflow-hidden min-h-[540px]">
                  {/* Header with mixed styling */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-white">
                    <div className="flex items-center">
                      <img 
                        src={STORIES[currentStoryIndex].image} 
                        alt={STORIES[currentStoryIndex].name} 
                        className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg mr-4" 
                      />
                      <div>
                        <div className="font-bold text-xl text-white">
                          {STORIES[currentStoryIndex].name}, {STORIES[currentStoryIndex].age}
                        </div>
                        <div className="text-gray-200 text-sm italic">
                          {STORIES[currentStoryIndex].descriptor}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* How they're feeling */}
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 mb-5 border border-gray-200 shadow-sm">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">How they're really feeling</h4>
                      <div className="text-gray-800 text-sm leading-relaxed font-medium">
                        {STORIES[currentStoryIndex].story}
                      </div>
                    </div>
                    
                    {/* Health & Life in grid */}
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Health Challenges</h4>
                        <div className="space-y-2">
                          <div className="text-xs text-gray-800">
                            • {currentStoryIndex === 0 ? 'Constant fatigue despite 8hrs in bed' : 
                               currentStoryIndex === 1 ? 'Emotional eating cycles' :
                               currentStoryIndex === 2 ? 'Hormonal swings' :
                               currentStoryIndex === 3 ? 'Sleep disruption' : 'Joint stiffness'}
                          </div>
                          <div className="text-xs text-gray-800">
                            • {currentStoryIndex === 0 ? 'Light, broken sleep' : 
                               currentStoryIndex === 1 ? 'Afternoon energy dips' :
                               currentStoryIndex === 2 ? 'Neck/shoulder pain' :
                               currentStoryIndex === 3 ? 'Over-reliance on stimulants' : 'Poor sleep hygiene'}
                          </div>
                          <div className="text-xs text-gray-800">
                            • {currentStoryIndex === 0 ? 'Zero time for herself' : 
                               currentStoryIndex === 1 ? 'Social isolation' :
                               currentStoryIndex === 2 ? 'Low libido' :
                               currentStoryIndex === 3 ? 'Suppressed emotions' : 'Internalized stress'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Life Context</h4>
                        <div className="space-y-2">
                          <div className="text-xs text-gray-800">
                            • {currentStoryIndex === 0 ? 'Full-time work' : 
                               currentStoryIndex === 1 ? 'Single mom' :
                               currentStoryIndex === 2 ? 'Part-time teacher' :
                               currentStoryIndex === 3 ? 'Executive in tech' : 'Manages family business'}
                          </div>
                          <div className="text-xs text-gray-800">
                            • {currentStoryIndex === 0 ? 'Two small kids' : 
                               currentStoryIndex === 1 ? 'Freelance creative' :
                               currentStoryIndex === 2 ? 'Three teens' :
                               currentStoryIndex === 3 ? 'Two young kids' : 'Adult children at home'}
                          </div>
                          <div className="text-xs text-gray-800">
                            • {currentStoryIndex === 0 ? 'Aging parents' : 
                               currentStoryIndex === 1 ? 'Always "on"' :
                               currentStoryIndex === 2 ? 'Manages home + eldercare' :
                               currentStoryIndex === 3 ? 'Often traveling' : 'Aging parents in care'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech tracking & energy snapshot */}
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tech & Tracking</h4>
                        <div className="text-xs text-gray-800">
                          {currentStoryIndex === 0 ? '🍎 Apple Watch — wears daily, ignores alerts' : 
                           currentStoryIndex === 1 ? '⌚ Garmin — basic step use only' :
                           currentStoryIndex === 2 ? '🚫 None — goes by "gut feel"' :
                           currentStoryIndex === 3 ? '💍 Oura Ring + WHOOP — obsessed with numbers' : '📱 Apple Health — passive use'}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Energy & Stress</h4>
                        <div className="text-xs text-gray-800">
                          Energy: {currentStoryIndex === 0 ? '🪫 2/10' : 
                                   currentStoryIndex === 1 ? '⚡️ 4/10' :
                                   currentStoryIndex === 2 ? '🔋 3/10' :
                                   currentStoryIndex === 3 ? '🔌 6/10' : '💡 5/10'}
                        </div>
                        <div className="text-xs text-gray-800 mt-1">
                          Stress: {currentStoryIndex === 0 ? '🔥 9/10' : 
                                   currentStoryIndex === 1 ? '🔥 8/10' :
                                   currentStoryIndex === 2 ? '🔥 8/10' :
                                   currentStoryIndex === 3 ? '🔥 8/10' : '🔥 7/10'}
                        </div>
                      </div>
                    </div>
                    
                    {/* What they need */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 mb-5 text-white">
                      <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2">The Right Support</h4>
                      <p className="text-sm leading-relaxed">
                        {currentStoryIndex === 0 ? 'Practical, calming advice — someone who can cut through the noise.' :
                         currentStoryIndex === 1 ? 'A non-judgmental mirror. Tools that fit her rhythm, not fight it.' :
                         currentStoryIndex === 2 ? 'A nudge toward self-priority. Emotional space and daily sanity.' :
                         currentStoryIndex === 3 ? 'Direct, science-backed insight plus reminders to slow the hell down.' : 'A grounded companion — with calm, steady motivation and zero fluff.'}
                      </p>
                    </div>
                    
                    <button
                      className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-semibold py-4 rounded-xl transition-all text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                      onClick={() => handleStorySelect(currentStoryIndex)}
                    >
                      <span className="mr-2">💬</span>
                      Reveal {STORIES[currentStoryIndex].name}'s conversation with {STORIES[currentStoryIndex].responder}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-40 opacity-75 flex-shrink-0 cursor-pointer hover:opacity-95 transition-all duration-300 hover:scale-105" onClick={nextStory}>
                <div className={`bg-gradient-to-br from-gray-200 via-white to-gray-100 rounded-xl shadow-md border border-gray-300 p-5 h-96 overflow-hidden transform scale-95`}>
                  <div className="flex items-center mb-4">
                    <img 
                      src={STORIES[getNextIndex()].image} 
                      alt={STORIES[getNextIndex()].name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow-sm mr-3" 
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {STORIES[getNextIndex()].name}, {STORIES[getNextIndex()].age}
                      </div>
                      <div className="text-xs text-gray-600 italic">
                        {STORIES[getNextIndex()].descriptor}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed line-clamp-6 mb-3">
                    <span className="font-medium">How they're feeling:</span> {STORIES[getNextIndex()].story}
                  </div>
                  <div className={`w-full h-1 ${STORIES[getNextIndex()].accentColor} rounded-full opacity-40`}></div>
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
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <div className="text-gray-800 text-lg font-medium">
                    Click "Reveal conversation" to see how Dimension responds
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Real conversations, real support
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-300 overflow-hidden animate-fadeInUp min-h-[500px]">
                {/* Clean header */}
                <div className="bg-gradient-to-r from-gray-900 to-black p-6 text-white">
                  <div className="flex items-center">
                    <img 
                      src={STORIES[selectedChat].responderAvatar} 
                      alt={STORIES[selectedChat].responder} 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4" 
                    />
                    <div>
                      <div className="font-semibold text-lg">
                        {STORIES[selectedChat].name}'s conversation with {STORIES[selectedChat].responder}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {showingFullChat ? 'Full conversation' : 'Conversation preview'}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === STORIES[selectedChat].responder ? 'justify-start' : 'justify-end'} animate-fadeInUp`} style={{ animationDelay: `${i * 200}ms` }}>
                      <div className={`rounded-2xl px-5 py-4 max-w-[85%] shadow-sm ${
                        msg.from === STORIES[selectedChat].responder 
                          ? 'bg-gray-100 text-gray-800 border border-gray-200' 
                          : 'bg-gray-900 text-white'
                      }`}>
                        <div className="text-sm font-medium mb-2 opacity-70">{msg.from}</div>
                        <div className="text-base leading-relaxed">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Show more button */}
                  {!showingFullChat && selectedChat !== null && (
                    <div className="flex justify-center pt-4">
                      <button 
                        onClick={showFullConversation}
                        className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                      >
                        ✨ Show full conversation
                      </button>
                    </div>
                  )}
                </div>
                
                {/* CTA at bottom */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
                  <button 
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 rounded-xl transition-all text-lg shadow-md hover:shadow-lg transform hover:scale-[1.01]"
                    onClick={() => document.getElementById('get-started')?.scrollIntoView({behavior:'smooth'})}
                  >
                    Ready to start your own conversation? → Get Started
                  </button>
                </div>
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