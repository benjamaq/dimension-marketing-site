import React, { useState, useRef, useEffect } from 'react';
import { Mic, Smile, Paperclip, Send } from 'lucide-react';
import ellieImg from './elli.png';
import wilImg from './wil.png';

const companions = {
  ellie: {
    name: 'Ellie',
    avatar: ellieImg,
    color: 'from-pink-100 to-orange-100',
    bubble: 'bg-gradient-to-br from-orange-100 to-pink-50 text-gray-900',
    border: 'border-orange-200',
  },
  wil: {
    name: 'Will',
    avatar: wilImg,
    color: 'from-blue-100 to-gray-100',
    bubble: 'bg-gradient-to-br from-blue-100 to-gray-50 text-gray-900',
    border: 'border-blue-200',
  },
};

const initialMessages = [
  {
    id: 1,
    sender: 'ellie',
    text: 'Hey, I’m Ellie. Here whenever you need me. How are you feeling today?',
    time: 'now',
  },
];

export default function DimensionChat({ companion = 'ellie' }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [voice, setVoice] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setSending(true);
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: input,
      time: 'now',
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setTimeout(() => {
      // Simulate a warm, supportive reply
      setMessages((msgs) => [
        ...msgs,
        {
          id: Date.now() + 1,
          sender: companion,
          text: msgs[msgs.length - 1].text.includes('tired')
            ? 'That sounds tough. Want to talk more about what’s making you feel this way?'
            : 'I’m here for you. Tell me more.',
          time: 'now',
        },
      ]);
      setSending(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const comp = companions[companion];

  return (
    <div className="w-full max-w-[1325px] mx-auto flex flex-col h-[90vh] min-h-[1035px] bg-white/80 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative backdrop-blur-md mt-6 mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-white to-gray-100 border-b border-gray-200 shadow-sm">
        <img src={comp.avatar} alt={comp.name} className="w-10 h-10 rounded-full border-2 border-white shadow" />
        <span className="font-semibold text-lg text-gray-800">{comp.name}</span>
        <span className="ml-auto text-xs text-gray-400 font-light">Dimension AI Companion</span>
      </div>
      {/* Messages */}
      <div className="flex-1 px-4 py-4 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col gap-4">
          {messages.map((msg, idx) =>
  msg.sender === 'user' ? (
    <div
      key={msg.id}
      className="flex flex-col items-center w-full animate-fadeIn"
    >
      <div className="max-w-[320px] w-full bg-gray-100 text-gray-800 rounded-2xl px-4 py-3 text-base font-normal shadow-sm mb-1 text-center">
        {msg.text}
      </div>
    </div>
  ) : (
    <div
      key={msg.id}
      className="flex flex-row items-center w-full animate-fadeIn mb-1"
    >
      <img
        src={companions[msg.sender]?.avatar || ellieImg}
        alt={companions[msg.sender]?.name || 'Ellie'}
        className="w-8 h-8 rounded-full border border-gray-200 mr-3 ml-1"
        style={{ alignSelf: 'flex-start' }}
      />
      <div className="max-w-[320px] w-full bg-gray-800 text-white rounded-2xl px-4 py-3 text-base font-normal shadow-md text-center">
        {msg.text}
      </div>
    </div>
  )
)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* Input Bar */}
      <div className="p-4 bg-gradient-to-t from-gray-100 to-white border-t border-gray-200 flex items-center gap-2">
        <button
          aria-label="Toggle voice input"
          className={`transition-all duration-200 rounded-full p-2 ${voice ? 'bg-blue-100' : 'bg-gray-50'} hover:bg-blue-50 focus:outline-none`}
          onClick={() => setVoice((v) => !v)}
        >
          <Mic className={`w-5 h-5 ${voice ? 'text-blue-600' : 'text-gray-400'}`} />
        </button>
        <input
          type="text"
          className="flex-1 rounded-full px-4 py-2 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800 font-normal placeholder:text-gray-400 shadow-sm transition-all"
          placeholder={voice ? 'Listening…' : 'Type a message…'}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={voice || sending}
        />
        <button
          aria-label="Emoji"
          className="rounded-full p-2 hover:bg-orange-50 transition-colors text-gray-400"
          tabIndex={-1}
        >
          <Smile className="w-5 h-5" />
        </button>
        <button
          aria-label="Attach file"
          className="rounded-full p-2 hover:bg-orange-50 transition-colors text-gray-400"
          tabIndex={-1}
        >
          <Paperclip className="w-5 h-5" />
        </button>
        <button
          aria-label="Send"
          className="rounded-full p-2 bg-gradient-to-br from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 shadow-lg text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSend}
          disabled={!input.trim() || sending || voice}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
