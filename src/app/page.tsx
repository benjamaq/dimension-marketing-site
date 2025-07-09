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
              <div className="font-semibold text-xl text-gray-800 mb-3">Wil</div>
              <div className="bg-gray-100 px-5 py-3 rounded-xl shadow text-gray-700 text-base max-w-xs mx-auto">
                Slept 8 hours but feel like absolute garbage. What's wrong with me?
              </div>
            </div>
          </div>
          {/* Ellie Card */}
          <div className="flex flex-col items-center w-80">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80 mb-6">
              <Image src="/elli.png" alt="Ellie" width={320} height={320} className="object-cover w-full h-full" unoptimized />
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
