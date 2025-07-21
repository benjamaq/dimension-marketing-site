'use client';

import React, { useState, useEffect } from 'react';

type ChatMessage = { from: string; text: string };
type Story = {
  key: string;
  name: string;
  age: number;
  descriptor: string;
  responder: string;
  responderAvatar: string;
  chat: ChatMessage[];
};

const STORIES: Story[] = [
  {
    key: 'jenna',
    name: 'Jenna',
    age: 32,
    descriptor: 'Training harder but feeling slower, race in 4 weeks.',
    responder: 'Elli',
    responderAvatar: '/elli.png',
    chat: [
      { from: 'Jenna', text: "Ugh. Another terrible run. I’m training harder but I feel slower and heavy. What’s going on?" },
      { from: 'Elli', text: "Hey Jenna. I took a look at your last 10 days on Strava—your pace has dropped about 8%, even though you’ve increased volume and frequency. That usually means your body’s under more stress than it can currently handle.\n\nQuick check-in: how’s sleep been? And any changes to your diet or stress levels?" },
      { from: 'Jenna', text: "Sleep’s been a bit off—about 6 hours a night. Diet’s the same. Just feeling behind. The race is in 4 weeks." },
      { from: 'Elli', text: "Totally hear you. The good news is: your fitness base is strong. But your recovery metrics show early signs of overreaching—HRV is slightly down, and your resting heart rate is up 4–5 bpm.\n\nWhat Elli recommends here is to adjust the workload, not stop it:\n\n- Add a full rest day this week\n- Shift one tempo run into a zone 2 jog\n- Prioritize 7–8 hours of sleep\n- Lighten strength training if you’re doing any\n\nWould you like me to send a modified training plan for the next 7 days based on Elli’s template?" },
      { from: 'Jenna', text: "Yes, please. I don’t want to lose the progress—but I also don’t want to hit a wall." },
      { from: 'Elli', text: "Smart call. Let’s keep your momentum—but make it sustainable. You’ve got this. 🏁" },
    ],
  },
  {
    key: 'marcus',
    name: 'Marcus',
    age: 28,
    descriptor: 'Feeling incredible on peptides, optimizing without overtraining.',
    responder: 'Wil',
    responderAvatar: '/will.png',
    chat: [
      { from: 'Marcus', text: "So I started BPC-157 and Ipamorelin last week… and I feel incredible. Crushed squats, hit a PR, barely sore today. Is that normal—or am I pushing too hard?" },
      { from: 'Wil', text: "That’s a real and pretty common response, Marcus—especially with that combo. BPC-157 helps reduce inflammation and speeds up tissue repair, while Ipamorelin boosts growth hormone release, improving sleep, recovery, and muscle performance.\n\nBut Wil would say: don’t confuse rapid recovery with limitless capacity. Your nervous system, tendons, and connective tissue still need to catch up." },
      { from: 'Marcus', text: "That’s what I was thinking. I feel like I could double my sets right now." },
      { from: 'Wil', text: "Totally understandable—but Wil’s approach is to channel that energy, not burn it. Here's what he recommends:\n\n- Maintain intensity, but don’t increase volume this week\n- Focus on perfect reps, not piling on more sets\n- Watch for signs like disrupted sleep, irritability, or grip strength drop-offs\n\nWould you like me to adjust your program to ride this wave intelligently?" },
      { from: 'Marcus', text: "Yeah, do it. I don’t want to waste this window—but I also don’t want to crash." },
      { from: 'Wil', text: "Exactly. You’re not chasing a moment—you’re building a foundation. Let’s make this next phase your strongest yet. 🔥" },
    ],
  },
  {
    key: 'rachel',
    name: 'Rachel',
    age: 39,
    descriptor: 'Holding everyone together, barely holding herself.',
    responder: 'Ellie',
    responderAvatar: '/elli.png',
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
    responder: 'Ellie',
    responderAvatar: '/elli.png',
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
    responder: 'Ellie',
    responderAvatar: '/elli.png',
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
    responder: 'Wil',
    responderAvatar: '/will.png',
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
    responder: 'Wil',
    responderAvatar: '/will.png',
    chat: [
      { from: 'Tariq', text: "My wife says I'm always tense, even when I'm supposedly relaxing. I'll be sitting on the couch, but my shoulders are up around my ears and my mind is still running through business problems." },
      { from: 'Wil', text: "That's your body's way of staying ready for the next crisis, Tariq. After decades of being the one everyone relies on, your nervous system doesn't know how to truly rest. We need to teach it that it's safe to let go." },
      { from: 'Tariq', text: "I've tried yoga classes, but I feel ridiculous. And I can't seem to stop thinking long enough for it to work." },
      { from: 'Wil', text: "Forget the classes. Let's start with progressive muscle release while you're doing things you already do. Five minutes of intentional shoulder drops while watching the news. It's practical, private, and effective." },
    ],
  },
];

// TypeWriter effect hook
function useTypewriter(text: string, speed: number = 30) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    let i = 0;
    
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
}

function ProfileCard({ story }: { story: Story }) {
  // Dynamic content functions (same as before)
  const getHealthChallenges = (key: string) => {
    const challenges = {
      jenna: [
        'Training plateau despite increased volume',
        'Poor sleep (6 hours nightly)',
        'Early overreaching symptoms'
      ],
      marcus: [
        'Risk of overtraining euphoria',
        'Balancing peptide benefits',
        'Sustainable progression'
      ],
      rachel: ['Constant fatigue despite 8hrs in bed', 'Light, broken sleep', 'Zero time for herself'],
      sine: ['Emotional eating cycles', 'Afternoon energy dips', 'Social isolation'],
      yara: ['Hormonal swings', 'Neck/shoulder pain', 'Low libido'],
      leo: ['Sleep disruption', 'Over-reliance on stimulants', 'Suppressed emotions'],
      tariq: ['Joint stiffness', 'Poor sleep hygiene', 'Internalized stress']
    };
    return challenges[key as keyof typeof challenges] || challenges.rachel;
  };

  const getLifeContext = (key: string) => {
    const context = {
      jenna: [
        'Competitive runner',
        'Race in 4 weeks',
        'Performance anxiety'
      ],
      marcus: [
        'Serious lifter',
        'Biohacking approach',
        'Performance optimization focus'
      ],
      rachel: ['Full-time work', 'Two small kids', 'Aging parents'],
      sine: ['Single mom', 'Freelance creative', 'Always "on"'],
      yara: ['Part-time teacher', 'Three teens', 'Manages home + eldercare'],
      leo: ['Executive in tech', 'Two young kids', 'Often traveling'],
      tariq: ['Manages family business', 'Adult children at home', 'Aging parents in care']
    };
    return context[key as keyof typeof context] || context.rachel;
  };

  const getTechTracking = (key: string) => {
    const tech = {
      jenna: '📱 Strava — daily tracking, HRV monitoring',
      marcus: '💉 BPC-157 + Ipamorelin — peptide protocol, performance tracking',
      rachel: '🍎 Apple Watch — wears daily, ignores alerts',
      sine: '⌚ Garmin — tracks runs, ignores recovery',
      yara: '🚫 None — overwhelmed by tech',
      leo: '💍 Oura Ring — obsesses over HRV data',
      tariq: '📱 Apple Health — basic tracking only'
    };
    return tech[key as keyof typeof tech] || tech.rachel;
  };

  const getEnergyStress = (key: string) => {
    const stats = {
      jenna: { energy: '⚡ 6/10', stress: '🔥 7/10' },
      marcus: { energy: '🚀 9/10', stress: '😌 3/10' },
      rachel: { energy: '🪫 2/10', stress: '🔥 9/10' },
      sine: { energy: '⚡️ 4/10', stress: '🔥 8/10' },
      yara: { energy: '🔋 3/10', stress: '🔥 8/10' },
      leo: { energy: '🔌 6/10', stress: '🔥 8/10' },
      tariq: { energy: '💡 5/10', stress: '🔥 7/10' }
    };
    return stats[key as keyof typeof stats] || stats.rachel;
  };

  const getSupport = (key: string) => {
    const support = {
      jenna: 'Data-driven training adjustments — someone who understands athletic performance.',
      marcus: 'Expert peptide guidance — someone who understands advanced protocols.',
      rachel: 'Practical, calming advice — someone who can cut through the noise.',
      sine: 'A non-judgmental mirror. Tools that fit her rhythm, not fight it.',
      yara: 'A nudge toward self-priority. Emotional space and daily sanity.',
      leo: 'Direct, science-backed insight plus reminders to slow the hell down.',
      tariq: 'A grounded companion — with calm, steady motivation and zero fluff.'
    };
    return support[key as keyof typeof support] || support.rachel;
  };

  const healthChallenges = getHealthChallenges(story.key);
  const lifeContext = getLifeContext(story.key);
  const techTracking = getTechTracking(story.key);
  const energyStress = getEnergyStress(story.key);
  const supportText = getSupport(story.key);

  return (
    <div className="w-[375px] h-[550px] min-h-[550px] max-h-[550px] max-w-[375px] flex flex-col">
      <div className="bg-gray-100 rounded-2xl shadow-xl border border-gray-200 p-2 flex flex-col w-full h-full">
        <div className="bg-white/60 backdrop-blur border-b border-gray-200 p-4">
          <div className="font-bold text-xl text-gray-700 mb-1">
            {story.name}, {story.age}
          </div>
          <div className="italic text-base text-gray-600">
            {story.descriptor}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="flex flex-col gap-1 flex-1 min-h-0">
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Health Challenges</h4>
              <div className="text-sm text-gray-800">
                {healthChallenges.map((challenge, idx) => <div key={idx}>• {challenge}</div>)}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Life Context</h4>
              <div className="text-sm text-gray-800">
                {lifeContext.map((context, idx) => <div key={idx}>• {context}</div>)}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Tech & Tracking</h4>
              <div className="text-sm text-gray-800">
                {techTracking}
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 border border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Energy & Stress</h4>
              <div className="text-xs text-gray-800 leading-tight">
                <div>Energy: {energyStress.energy}</div>
                <div>Stress: {energyStress.stress}</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 border border-gray-200 w-full flex flex-col overflow-y-auto">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">THE RIGHT SUPPORT</h4>
              <p className="text-xs text-gray-800 leading-tight">{supportText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RealStories() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<{ msg: ChatMessage; isTyping: boolean; isComplete: boolean }[]>([]);
  const chatRef = React.useRef<HTMLDivElement>(null);
  
  // Sequentially add chat bubbles, one at a time, waiting for typewriter effect to finish
  useEffect(() => {
    let isActive = true;
    setChatMessages([]);
    const story = STORIES[currentStoryIndex];

    const showMessagesSequentially = async () => {
      for (let i = 0; i < story.chat.length; i++) {
        if (!isActive) break;
        setChatMessages(prev => [...prev, { msg: story.chat[i], isTyping: true, isComplete: false }]);
        // Wait for typewriter effect (estimate: 30ms per character, plus a small buffer)
        const messageLength = story.chat[i].text.length;
        await new Promise(res => setTimeout(res, messageLength * 30 + 500));
      }
    };
    showMessagesSequentially();
    return () => { isActive = false; };
  }, [currentStoryIndex]);

  // Scroll chat to bottom when chatMessages change
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const nextStory = () => setCurrentStoryIndex((currentStoryIndex + 1) % STORIES.length);
  const prevStory = () => setCurrentStoryIndex((currentStoryIndex - 1 + STORIES.length) % STORIES.length);

  return (
    <div className="w-full max-w-6xl mx-auto mb-20">
      {/* Navigation */}
      <div className="flex items-center justify-center mb-6 gap-3">
        <button onClick={prevStory} className="bg-white rounded-full p-2 shadow hover:shadow-lg border border-gray-200 transition-all">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-base md:text-lg font-medium text-gray-700 px-4 py-2 rounded-full">
          Click to see more conversations
        </span>
        <button onClick={nextStory} className="bg-white rounded-full p-2 shadow hover:shadow-lg border border-gray-200 transition-all">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full">
        <div className="flex-shrink-0">
          <ProfileCard story={STORIES[currentStoryIndex]} />
        </div>
        
        <div className="w-[375px] h-[550px] min-h-[550px] max-h-[550px] max-w-[375px] flex flex-col">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-4 flex flex-col w-full h-full">
            <div className="flex items-center mb-4">
              <img src={STORIES[currentStoryIndex].responderAvatar} alt={STORIES[currentStoryIndex].responder} className="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4" />
              <div>
                <div className="font-semibold text-lg text-gray-900">{STORIES[currentStoryIndex].name}'s conversation with {STORIES[currentStoryIndex].responder}</div>
                <div className="text-gray-400 text-sm">Live conversation preview</div>
              </div>
            </div>
            
            <div className="space-y-3 overflow-y-auto flex-1" ref={chatRef}>
              {chatMessages.map((item, i) => (
                <ChatBubble 
                  key={i} 
                  message={item.msg} 
                  responder={STORIES[currentStoryIndex].responder}
                  responderAvatar={STORIES[currentStoryIndex].responderAvatar}
                />
              ))}
            </div>
            

          </div>
        </div>
      </div>

      {/* Dots Navigation INSIDE card row for better section alignment */}
      <div className="flex justify-center mt-8 mb-20 gap-2">
      {STORIES.map((_, idx) => (
  <button key={idx} onClick={() => setCurrentStoryIndex(idx)}
            aria-label={`Go to story ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}

// Chat Bubble with Typewriter Effect
function ChatBubble({ message, responder, responderAvatar }: { message: ChatMessage; responder: string; responderAvatar: string }) {
  const { displayText, isComplete } = useTypewriter(message.text, 30);

  return (
    <div className={`flex ${message.from === responder ? 'justify-start' : 'justify-end'}`}>
      {message.from === responder ? (
        <div className="flex items-start gap-3 max-w-[90%]">
          <img src={responderAvatar} alt={responder} className="w-8 h-8 rounded-full flex-shrink-0 mt-1" />
          <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-3 border border-gray-200">
            <div className="text-xs font-medium mb-1 text-gray-600">{message.from}</div>
            <div className="text-sm leading-relaxed text-gray-800">
              {displayText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 text-white rounded-2xl px-4 py-3 max-w-[90%] shadow-sm">
          <div className="text-sm leading-relaxed text-white">
            {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </div>
        </div>
      )}
    </div>
  );
}