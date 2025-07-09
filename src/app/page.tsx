import Image from 'next/image';

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
      {/* Header */}
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
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-10 pb-16">
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
  <div className="font-semibold text-xl text-gray-800 mb-1">Wil</div>
  <div className="hidden md:flex absolute left-[-220px] top-1/2 transform -translate-y-1/2 items-center z-10">
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="mr-2"><path d="M24 6L0 0V12L24 6Z" fill="#e5e7eb"/></svg>
    <div className="bg-gray-100 rounded-lg px-4 py-2 shadow text-gray-700 text-sm font-medium whitespace-nowrap">
      Analytical, pattern-spotter, loves data
    </div>
  </div>
</div>
              
              <div className="text-gray-500 text-xs italic mb-3">"I see patterns you miss"</div>
              <div className="flex-1 flex flex-col gap-3 w-full max-w-[340px]">
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">Slept 8 hours but feel like absolute garbage. What's wrong with me?</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/will.png' alt='Wil small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">I see from your Strava that you ran twice as far as normal yesterday, and your HRV is really low - you're genuinely exhausted. Based on the latest recovery research, your body's still in deep recovery mode from that long run.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">So what do I do right now?</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/will.png' alt='Wil small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">Your calendar shows another busy day, but let's get some good protein and a 15-minute walk before your first call. That'll kickstart your recovery without overdoing it.</div></div>
              </div>
              <div className="mt-4 w-full max-w-[340px]"><div className="px-5 py-4 rounded-xl shadow text-gray-800 text-lg font-semibold text-center bg-gradient-to-r from-[#23272b] via-[#43484d] to-[#23272b] text-white border border-gray-400 w-full">Start a chat</div></div>
            </div>
          </div>
          {/* Ellie Card */}
          <div className="flex flex-col justify-between w-80 h-full">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/elli.png" alt="Ellie" width={320} height={320} className="object-cover w-full h-full" unoptimized />
            </div>
            
            <div className="flex flex-col flex-1 items-center w-full">
              <div className="font-semibold text-xl text-gray-800 mb-1">Ellie</div>
              
              <div className="text-gray-500 text-xs italic mb-3">"I feel what you're going through"</div>
              <div className="flex-1 flex flex-col gap-3 w-full max-w-[340px]">
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">Everything feels too much today. I stress-ate a whole bag of chips and I hate myself for it.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/elli.png' alt='Ellie small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">Oh honey, I can see you haven't slept well for the last 3 nights, and that would be making you feel so much more stressed. Those chips were just your body asking for comfort - there's no shame in that.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">But I feel so out of control...</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/elli.png' alt='Ellie small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">I see you have an hour free at 4pm. Instead of the gym today, what about a guided meditation and some herbal tea? Your nervous system needs gentleness right now.</div></div>
              </div>
              <div className="mt-4 w-full max-w-[340px]"><div className="px-5 py-4 rounded-xl shadow text-gray-800 text-lg font-semibold text-center bg-gradient-to-r from-[#23272b] via-[#43484d] to-[#23272b] text-white border border-gray-400 w-full">Let’s Talk About You</div></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
