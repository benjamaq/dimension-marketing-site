import React from 'react';

type Story = {
  key: string;
  name: string;
  age: number;
  descriptor: string;
  responder: string;
  responderAvatar: string;
  chat: { from: string; text: string }[];
};

export default function ProfileCard({ 
  story, 
  isPreview = false, 
  onClick, 
  className = "" 
}: { 
  story: Story; 
  isPreview?: boolean; 
  onClick?: () => void; 
  className?: string;
}) {
  const baseScale = isPreview ? 'scale-75' : 'scale-100';
  const width = isPreview ? 'w-80' : 'w-96';
  const height = 'h-[580px]';
  
  return (
    <div className={`${width} ${baseScale} origin-center transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-105' : ''} ${className}`} onClick={onClick}>
      <div className={`bg-gray-200 rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${height} flex flex-col`}>
        <div className="bg-gray-400 p-5">
          <div>
            <div className={`font-bold ${isPreview ? 'text-base' : 'text-xl'} text-gray-900 mb-1`}>
              {story.name}, {story.age}
            </div>
            <div className={`italic ${isPreview ? 'text-xs' : 'text-base'} text-gray-800 font-normal`}>
              {story.descriptor}
            </div>
          </div>
        </div>
        
        <div className={`${isPreview ? 'p-3' : 'p-5'} flex-1 flex flex-col`}>              
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
                         story.key === 'yara' ? '🔋 6/10' :
                         story.key === 'leo' ? '⚡️ 7/10' : '🪫 3/10'}
                <br />
                Stress: {story.key === 'rachel' ? '😰 8/10' : 
                         story.key === 'sine' ? '😬 7/10' :
                         story.key === 'yara' ? '😬 5/10' :
                         story.key === 'leo' ? '🙂 4/10' : '😰 6/10'}
              </div>
            </div>
          </div>
          <div className="mt-auto pt-4">
            <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-xl shadow hover:bg-indigo-700 transition-all">
              View conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
