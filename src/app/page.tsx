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
        <div className="flex flex-col items-center justify-center w-full" style={{minHeight:'44vh'}}>
          <h1 className="font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center mb-4" style={{fontFamily:'inherit'}}>
            The next Dimension of health feels like having a<br className="hidden md:inline" /> friend who truly gets you
          </h1>
          <h2 className="text-2xl md:text-3xl font-normal text-gray-700 text-center mb-14">Meet Your Daily Health Champion</h2>
        </div>
        <section className="flex flex-row gap-20 md:gap-32 items-start justify-center w-full max-w-5xl mt-2">
          {/* Wil Card */}
          <div className="flex flex-col items-center w-80">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/will.png" alt="Wil" width={320} height={320} className="object-cover w-full h-full" />
              <span className="absolute top-3 right-3 bg-white rounded-full p-2 shadow flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4B5563" strokeWidth="1.5"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl text-gray-800 mb-3">Wil</div>
              <div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base max-w-xs mx-auto">
                Slept 8 hours but feel like absolute garbage. What's wrong with me?
              </div>
            </div>
          </div>
          {/* Ellie Card */}
          <div className="flex flex-col items-center w-80">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/elli.png" alt="Ellie" width={320} height={320} className="object-cover w-full h-full" />
              <span className="absolute top-3 right-3 bg-white rounded-full p-2 shadow flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl text-gray-800 mb-3">Ellie</div>
              <div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base max-w-xs mx-auto">
                Everything feels too much today. I stress-ate a whole bag of chips and I hate myself for it.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
