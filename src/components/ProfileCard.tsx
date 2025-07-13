'use client';

import React from 'react';

type Story = {
  key: string;
  name: string;
  age: number;
  descriptor: string;
};

interface ProfileCardProps {
  story: Story;
}

export default function ProfileCard({ story }: ProfileCardProps) {
  return (
    <div className="w-full h-full flex-1">
      <div className="bg-gray-100 rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full h-full flex flex-col">
        <div className="bg-white/60 backdrop-blur border-b border-gray-200 p-5">
          <div className="font-bold text-xl text-gray-700 mb-1">
            {story.name}, {story.age}
          </div>
          <div className="italic text-base text-gray-600">
            {story.descriptor}
          </div>
        </div>
        <div className="p-5 flex-1">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-base font-semibold text-gray-500 uppercase mb-2">Health Challenges</h4>
              <div className="text-sm text-gray-800">
                <div>• Constant fatigue</div>
                <div>• Poor sleep</div>
                <div>• No time for self</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-base font-semibold text-gray-500 uppercase mb-2">Life Context</h4>
              <div className="text-sm text-gray-800">
                <div>• Full-time work</div>
                <div>• Two kids</div>
                <div>• Aging parents</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-base font-semibold text-gray-500 uppercase mb-2">Tech & Tracking</h4>
              <div className="text-sm text-gray-800">
                🍎 Apple Watch — wears daily, ignores alerts
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-36 flex flex-col justify-center">
              <h4 className="text-base font-semibold text-gray-500 uppercase mb-2">Energy & Stress</h4>
              <div className="text-sm text-gray-800">
                <div>Energy: 🪫 2/10</div>
                <div>Stress: 🔥 9/10</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 col-span-2 h-36 flex flex-col justify-center">
              <h4 className="text-base font-semibold text-gray-500 uppercase mb-2">THE RIGHT SUPPORT</h4>
              <p className="text-sm text-gray-800">Practical, calming advice — someone who can cut through the noise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
