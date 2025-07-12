'use client';

import React, { useState, useEffect } from 'react';

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
      { from: 'Rachel', text: "I'm so tired but I can't turn my brain off at night. Even when the kids are finally asleep, I'm lying there thinking about everything I didn't get done." },
      { from: 'Ellie', text: "That mental load you're carrying is exhausting, Rachel. Your nervous system is stuck in 'on' mode. Let's find a way to help you transition from mom-mode to rest-mode." },
      { from: 'Rachel', text: "I don't even know how to do that anymore. There's always something." },
      { from: 'Ellie', text: "We'll start with a 5-minute buffer ritual. Something that signals to your body: 'The day is done, you've done enough.' What's one small thing that used to make you feel calm?" },
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
      { from: 'Ellie', text: "Let's remove 'should' from this conversation. You're doing the best you can with the energy you have. What if we set up your space so the easier choice is also the nourishing choice?" },
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
      { from: 'Yara', text: "I realized I can't remember the last time someone asked me how I'm doing and actually waited for an answer. Everyone just assumes I'm fine because I handle everything." },
      { from: 'Ellie', text: "I'm asking now, Yara. How are you really doing? And I'm going to wait for the real answer, not the one you give everyone else." },
      { from: 'Yara', text: "Honestly? I'm angry. At everyone. But mostly at myself for letting it get this bad." },
      { from: 'Ellie', text: "That anger is information. It's your inner voice finally speaking up, saying 'I matter too.' You've been taking care of everyone else's needs - what would it look like to advocate for your own?" },
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
      { from: 'Leo', text: "My Oura data is brutal this week. HRV down 40%, sleep efficiency tanking. I know what the numbers are telling me, but I don't know how to fix it without changing my whole life." },
      { from: 'Wil', text: "Those numbers are a clear signal, Leo. Your autonomic nervous system is stuck in fight-or-flight mode. The good news? We don't need to overhaul everything - we need strategic interventions." },
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
      { from: 'Tariq', text: "I've tried yoga classes, but I feel ridiculous. And I can't seem to stop thinking long enough for it to work." },
      { from: 'Wil', text: "Forget the classes. Let's start with progressive muscle release while you're doing things you already do. Five minutes of intentional shoulder drops while watching the news. It's practical, private, and effective." },
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

// Reusable Profile Card Component
function ProfileCard({ story, isPreview = false, onClick }: { story: Story; isPreview?: boolean; onClick?: () => void }) {
  const baseScale = isPreview ? 'scale-75' : 'scale-100';
  const width = isPreview ? 'w-80' : 'w-96';
  const height = isPreview ? 'h-[435px]' : 'h-[580px]';
  
  return (
    <div className={`${width} ${baseScale} origin-center transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-105' : ''}`} onClick={onClick}>
      <div className={`bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl shadow-xl border border-gray-300 overflow-hidden ${height} flex flex-col`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 text-white">
          <div className="flex items-center mb-2">
            <img 
              src={story.image} 
              alt={story.name} 
              className={`${isPreview ? 'w-10 h-10' : 'w-14 h-14'} rounded-full object-cover border-2 border-white shadow-lg mr-3`}
            />
            <div>
              <div className={`font-bold ${isPreview ? 'text-base' : 'text-xl'} text-white`}>
                {story.name}, {story.age}
              </div>
            </div>
          </div>
          <div className={`text-gray-200 ${isPreview ? 'text-xs' : 'text-sm'} italic leading-relaxed`}>
            {story.descriptor}
          </div>
        </div>
        
        <div className={`${isPreview ? 'p-3' : 'p-5'} flex-1 flex flex-col`}>              
          {/* Health & Life in 2x2 grid */}
          <div className={`grid grid-cols-2 ${isPreview ? 'gap-2 mb-2' : 'gap-4 mb-4'}`}>
            <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Health Challenges</h4>
              <div className="space-y-1">
                <div className="text-xs text-gray-800">
                  • {story.key === 'rachel' ? 'Constant fatigue despite 8hrs in bed' : 
                     story.key === 'sine' ? 'Emotional eating cycles' :
                     story.key === 'yara' ? 'Hormonal swings' :
                     story.key === 'leo' ? 'Sleep disruption' : 'Joint stiffness'}
                </div>
                {!isPreview && (
                  <>
                    <div className="text-xs text-gray-800">
                      • {story.key === 'rachel' ? 'Light, broken sleep' : 
                         story.key === 'sine' ? 'Afternoon energy dips' :
                         story.key === 'yara' ? 'Neck/shoulder pain' :
                         story.key === 'leo' ? 'Over-reliance on stimulants' : 'Poor sleep hygiene'}
                    </div>
                    <div className="text-xs text-gray-800">
                      • {story.key === 'rachel' ? 'Zero time for herself' : 
                         story.key === 'sine' ? 'Social isolation' :
                         story.key === 'yara' ? 'Low libido' :
                         story.key === 'leo' ? 'Suppressed emotions' : 'Internalized stress'}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Life Context</h4>
              <div className="space-y-1">
                <div className="text-xs text-gray-800">
                  • {story.key === 'rachel' ? 'Full-time work' : 
                     story.key === 'sine' ? 'Single mom' :
                     story.key === 'yara' ? 'Part-time teacher' :
                     story.key === 'leo' ? 'Executive in tech' : 'Manages family business'}
                </div>
                {!isPreview && (
                  <>
                    <div className="text-xs text-gray-800">
                      • {story.key === 'rachel' ? 'Two small kids' : 
                         story.key === 'sine' ? 'Freelance creative' :
                         story.key === 'yara' ? 'Three teens' :
                         story.key === 'leo' ? 'Two young kids' : 'Adult children at home'}
                    </div>
                    <div className="text-xs text-gray-800">
                      • {story.key === 'rachel' ? 'Aging parents' : 
                         story.key === 'sine' ? 'Always "on"' :
                         story.key === 'yara' ? 'Manages home + eldercare' :
                         story.key === 'leo' ? 'Often traveling' : 'Aging parents in care'}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tech & Tracking</h4>
              <div className="text-xs text-gray-800">
                {story.key === 'rachel' ? '🍎 Apple Watch' : 
                 story.key === 'sine' ? '⌚ Garmin' :
                 story.key === 'yara' ? '🚫 None' :
                 story.key === 'leo' ? '💍 Oura Ring' : '📱 Apple Health'}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Energy & Stress</h4>
              <div className="text-xs text-gray-800">
                Energy: {story.key === 'rachel' ? '🪫 2/10' : 
                         story.key === 'sine' ? '⚡️ 4/10' :
                         story.key === 'yara' ? '🔋 3/10' :
                         story.key === 'leo' ? '🔌 6/10' : '💡 5/10'}
              </div>
              {!isPreview && (
                <div className="text-xs text-gray-800 mt-1">
                  Stress: {story.key === 'rachel' ? '🔥 9/10' : 
                           story.key === 'sine' ? '🔥 8/10' :
                           story.key === 'yara' ? '🔥 8/10' :
                           story.key === 'leo' ? '🔥 8/10' : '🔥 7/10'}
                </div>
              )}
            </div>
          </div>
          
          {/* What they need */}
          <div className={`bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg ${isPreview ? 'p-2 mb-2' : 'p-4 mb-4'} text-white`}>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-1">The Right Support</h4>
            <p className={`${isPreview ? 'text-xs' : 'text-sm'} leading-relaxed`}>
              {story.key === 'rachel' ? 'Practical, calming advice — someone who can cut through the noise.' :
               story.key === 'sine' ? 'A non-judgmental mirror. Tools that fit her rhythm, not fight it.' :
               story.key === 'yara' ? 'A nudge toward self-priority. Emotional space and daily sanity.' :
               story.key === 'leo' ? 'Direct, science-backed insight plus reminders to slow the hell down.' : 'A grounded companion — with calm, steady motivation and zero fluff.'}
            </p>
          </div>
          
          {/* CTA */}
          {!isPreview && (
            <div className="mt-auto">
              <button className="w-full text-gray-600 hover:text-gray-900 font-medium py-3 transition-all text-sm flex items-center justify-center gap-2">
                <span>View conversation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RealStories() {
  useFadeInUpAnimation();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [selectedChat, setSelectedChat] = useState<number | null>(0);
  const [showingFullChat, setShowingFullChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Load first person's chat on initial mount
  useEffect(() => {
    const allMessages = STORIES[0].chat;
    allMessages.forEach((message, messageIndex) => {
      setTimeout(() => {
        setChatMessages(prev => [...prev, message]);
      }, messageIndex * 1500);
    });
  }, []);

  const handleStorySelect = (index: number) => {
    setCurrentStoryIndex(index);
    setSelectedChat(index);
    setShowingFullChat(false);
    
    // Start with empty messages and load them progressively
    setChatMessages([]);
    
    // Load messages one by one with delays
    const allMessages = STORIES[index].chat;
    allMessages.forEach((message, messageIndex) => {
      setTimeout(() => {
        setChatMessages(prev => [...prev, message]);
      }, messageIndex * 1500);
    });
  };

  const nextStory = () => {
    const next = (currentStoryIndex + 1) % STORIES.length;
    setCurrentStoryIndex(next);
    if (selectedChat !== null) {
      setSelectedChat(next);
      setShowingFullChat(false);
      
      // Progressive loading for navigation too
      setChatMessages([]);
      const allMessages = STORIES[next].chat;
      allMessages.forEach((message, messageIndex) => {
        setTimeout(() => {
          setChatMessages(prev => [...prev, message]);
        }, messageIndex * 1500);
      });
    }
  };

  const prevStory = () => {
    const prev = (currentStoryIndex - 1 + STORIES.length) % STORIES.length;
    setCurrentStoryIndex(prev);
    if (selectedChat !== null) {
      setSelectedChat(prev);
      setShowingFullChat(false);
      
      // Progressive loading for navigation too
      setChatMessages([]);
      const allMessages = STORIES[prev].chat;
      allMessages.forEach((message, messageIndex) => {
        setTimeout(() => {
          setChatMessages(prev => [...prev, message]);
        }, messageIndex * 1500);
      });
    }
  };

  const getPrevIndex = () => (currentStoryIndex - 1 + STORIES.length) % STORIES.length;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Instruction section */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-4">
          <span className="text-sm font-medium text-blue-700">
            👆 Click on profiles or use arrows to explore • 💬 See live conversations
          </span>
        </div>
      </div>

      {/* Main Layout: preview card + main card + chat */}
      <div className="flex items-center justify-center gap-8">
        
        {/* Navigation arrows */}
        <button 
          onClick={prevStory}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-30"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* LEFT: Preview card - EXACT SAME LAYOUT, JUST SCALED */}
        <ProfileCard 
          story={STORIES[getPrevIndex()]} 
          isPreview={true} 
          onClick={prevStory}
        />

        {/* CENTER: Main profile card */}
        <ProfileCard 
          story={STORIES[currentStoryIndex]} 
          onClick={() => handleStorySelect(currentStoryIndex)}
        />

        {/* RIGHT: Chat box */}
        <div className="w-96 z-10">
          {selectedChat === null ? (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center h-[580px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <div className="text-gray-600 text-lg font-medium">
                  Click "View conversation" to see how Dimension responds
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Real conversations, real support
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden animate-fadeInUp h-[580px] flex flex-col">
              {/* Chat header */}
              <div className="p-5 text-center border-b border-gray-100">
                <div className="flex justify-center mb-4">
                  <img 
                    src={STORIES[selectedChat].responderAvatar} 
                    alt={STORIES[selectedChat].responder} 
                    className="w-14 h-14 rounded-full border-2 border-gray-200 shadow-sm" 
                  />
                </div>
                <div className="font-semibold text-xl text-gray-900 mb-1">
                  {STORIES[selectedChat].responder}
                </div>
                <div className="text-gray-500 text-sm">
                  {STORIES[selectedChat].responder === 'Ellie' ? 'Your empathic wellness companion' : 'Data nerd with a big heart who gets genuinely excited about your sleep scores'}
                </div>
              </div>
              
              {/* Chat messages area */}
              <div className="flex-1 p-5 flex flex-col">
                <div className="space-y-4 flex-1 overflow-y-auto max-h-96">
                  {chatMessages.map((msg: ChatMessage, index: number) => (
                    <div key={index} className={`flex ${msg.from === STORIES[selectedChat].responder ? 'justify-start' : 'justify-end'} animate-fadeInUp`}>
                      {msg.from === STORIES[selectedChat].responder ? (
                        <div className="flex items-start gap-3">
                          <img 
                            src={STORIES[selectedChat].responderAvatar} 
                            alt={STORIES[selectedChat].responder} 
                            className="w-8 h-8 rounded-full flex-shrink-0 mt-1" 
                          />
                          <div className="bg-gray-100 text-gray-800 rounded-2xl px-5 py-4 max-w-[85%] border border-gray-200">
                            <div className="text-sm font-medium mb-2 text-gray-600">{msg.from}</div>
                            <div className="text-sm leading-relaxed text-gray-800">
                              {msg.text}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-900 text-white rounded-2xl px-5 py-4 max-w-[85%] shadow-sm">
                          <div className="text-sm leading-relaxed text-white">
                            {msg.text}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Loading indicator */}
                {chatMessages.length < STORIES[selectedChat].chat.length && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center text-gray-500 text-sm">
                      <div className="animate-pulse mr-2">💬</div>
                      <span>Loading conversation...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={nextStory}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-30"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Current conversation indicator */}
      {selectedChat !== null && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3">
            <span className="text-sm font-medium text-gray-700">
              👀 Currently viewing: <strong>{STORIES[selectedChat].responder}'s conversation with {STORIES[selectedChat].name}</strong>
            </span>
            <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

      {/* Navigation dots */}
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
            <h1 className="font-light text-gray-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-center mb-6">
              You've carried your health alone for long enough
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              The next dimension is the best version of you
            </p>
            <h2 className="text-2xl text-gray-600 font-medium text-center mb-12">
              Meet your daily health champion
            </h2>
          </div>

          <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center w-full max-w-4xl mb-12">
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
          </section>

          <div className="text-center mb-16">
            <p className="text-2xl text-gray-600 font-medium">
              Health wisdom from experts, delivered like a friend
            </p>
          </div>

          <section className="w-full px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                👉 <strong>Real People. Real Conversations.</strong>
              </h2>
              <p className="text-lg text-gray-600 font-medium mb-2">
                See how Dimension responds in the moments that matter.
              </p>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                Click through real profiles to see how Ellie and Wil provide personalized support for different people and situations.
              </p>
            </div>
            <RealStories />
          </section>
        </main>
      </div>
    </div>
  );
}