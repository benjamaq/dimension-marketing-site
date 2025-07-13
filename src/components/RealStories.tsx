'use client';

import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

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

// You may need to import STORIES and useFadeInUpAnimation from their respective files if they are not global.
// For now, we'll assume they are available in the parent or can be passed as props.

export default function RealStories({ STORIES, useFadeInUpAnimation }: { STORIES: Story[]; useFadeInUpAnimation: () => void }) {
  useFadeInUpAnimation();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [selectedChat, setSelectedChat] = useState<number | null>(0);
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

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
    setChatMessages([]);
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

  // The ProfileCard component should be imported if it is also modularized.
  // For now, assume it is available globally or imported above.

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-4">
          <span className="text-sm font-medium text-blue-700">
            Click on profiles or use arrows to explore • See live conversations
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-0">
        <button 
          onClick={prevStory}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-30"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <ProfileCard 
          story={STORIES[getPrevIndex()]} 
          isPreview={true} 
          onClick={prevStory}
        />

        <ProfileCard 
          story={STORIES[currentStoryIndex]} 
          onClick={() => handleStorySelect(currentStoryIndex)}
          className="-ml-4"
        />

        <div className="w-96 z-10">
          {selectedChat === null ? (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center h-[580px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">&quot;💬&quot;</div>
                <div className="text-gray-600 text-lg font-medium">
                  Click &quot;View conversation&quot; to see how Dimension responds
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Real conversations, real support
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden animate-fadeInUp h-[580px] flex flex-col">
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

      {selectedChat !== null && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3">
            <span className="text-sm font-medium text-gray-700">
              👀 Currently viewing: <strong>{STORIES[selectedChat].responder}&apos;s conversation with {STORIES[selectedChat].name}</strong>
            </span>
            <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

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
