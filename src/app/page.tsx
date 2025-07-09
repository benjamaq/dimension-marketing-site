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
          <h1 className="font-light text-gray-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-center mb-6" style={{fontFamily:'inherit'}}>
            The next Dimension of health feels like having a<br className="hidden md:inline" /> friend who truly gets you
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 text-center mt-2 mb-10">Meet Your Daily Health Champion</h2>
        </div>
        <section className="flex flex-row gap-20 md:gap-32 items-start justify-center w-full max-w-5xl mt-0">
          {/* Wil Card */}
          <div className="flex flex-col items-center w-80">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/will.png" alt="Wil portrait photo" width={320} height={320} className="object-cover w-full h-full" unoptimized />
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl text-gray-800 mb-1">Wil</div>
              <div className="text-gray-600 text-sm mb-1">Your analytical health strategist who speaks your language and gets your lifestyle</div>
              <div className="text-gray-500 text-xs italic mb-3">"I see patterns you miss"</div>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">Slept 8 hours but feel like absolute garbage. What's wrong with me?</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/will.png' alt='Wil small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">I see from your Strava that you ran twice as far as normal yesterday, and your HRV is really low - you're genuinely exhausted. Based on the latest recovery research, your body's still in deep recovery mode from that long run.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">So what do I do right now?</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/will.png' alt='Wil small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">Your calendar shows another busy day, but let's get some good protein and a 15-minute walk before your first call. That'll kickstart your recovery without overdoing it.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 mr-2"></span><div className="bg-gray-900 px-5 py-4 rounded-xl shadow text-white text-lg font-semibold text-center w-full">Start a chat</div></div>
              </div>

            </div>
          </div>
          {/* Ellie Card */}
          <div className="flex flex-col items-center w-80">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/elli.png" alt="Ellie" width={320} height={320} className="object-cover w-full h-full" unoptimized />
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl text-gray-800 mb-1">Ellie</div>
              <div className="text-gray-600 text-sm mb-1">Your empathetic wellness companion who truly understands how you feel</div>
              <div className="text-gray-500 text-xs italic mb-3">"I feel what you're going through"</div>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">Everything feels too much today. I stress-ate a whole bag of chips and I hate myself for it.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/elli.png' alt='Ellie small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">Oh honey, I can see you haven't slept well for the last 3 nights, and that would be making you feel so much more stressed. Those chips were just your body asking for comfort - there's no shame in that.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 mr-2 border border-gray-300">U</span><div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base text-left w-full">But I feel so out of control...</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-2"><Image src='/elli.png' alt='Ellie small' width={28} height={28} className="object-cover w-full h-full" unoptimized /></span><div className="bg-gray-900 px-5 py-3 rounded-xl shadow text-white text-base text-left w-full">I see you have an hour free at 4pm. Instead of the gym today, what about a guided meditation and some herbal tea? Your nervous system needs gentleness right now.</div></div>
                <div className="flex items-start"><span className="flex-shrink-0 w-7 h-7 mr-2"></span><div className="bg-gray-900 px-5 py-4 rounded-xl shadow text-white text-lg font-semibold text-center w-full">Let’s Talk About You</div></div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
