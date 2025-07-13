import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, MessageCircle, Heart, TrendingUp, Shield, Mic, Users, Star, Brain, Database, Atom, Activity } from 'lucide-react'
import ellieImage from './assets/ellie.png'
import wilImage from './assets/wil.png'
import dimensionLogo from './assets/dimension-logo.png'
import './App.css'
import DimensionChat from './DimensionChat';

function App() {
  const scrollToAction = () => {
    document.getElementById('action-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: `
        linear-gradient(135deg, rgba(240, 242, 247, 0.65) 0%, rgba(229, 231, 235, 0.6) 50%, rgba(209, 213, 219, 0.65) 100%),
        url('/dimension-bg.png')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Chat UI at top of page */}
      <div className="flex justify-center items-center pt-8"><DimensionChat companion="ellie" /></div>
      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Navigation - Removed Secure */}
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center">
            {/* Combined Logo with Image and Text */}
            <div className="flex items-center">
              <img src={dimensionLogo} alt="Dimension Logo" className="h-8 mr-3" />
              <span className="text-2xl font-bold text-gray-800 tracking-wide">DIMENSION</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToAction()} className="text-gray-600 hover:text-gray-800 transition-colors font-light">Meet Them</button>
            <button onClick={() => scrollToSection('get-started')} className="text-gray-600 hover:text-gray-800 transition-colors font-light">Get Started</button>
          </div>
        </nav>

        {/* Hero Section - Enhanced with Explosive Science Messaging */}
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
          <div className="max-w-6xl mx-auto mt-16">
            {/* Main Headline - Elegant and Futuristic */}
            <h1 className="text-3xl md:text-4xl font-extralight text-gray-600 mb-3 leading-tight tracking-[0.2em] uppercase">
              Redefining What's Possible 
              <br />
              <span className="text-gray-500 text-2xl md:text-3xl">
                in Personal Health
              </span>
            </h1>
            
            {/* Minimal Visual Separator */}
            <div className="w-16 h-px bg-gray-400 mx-auto mb-12"></div>
            
            {/* Superpower Introduction - Sophisticated and Cool */}
            <div className="relative flex justify-center items-center mb-16" style={{minHeight: '220px'}}>
              {/* Bubbles on 4 sides */}
              <span className="absolute left-1/2 -top-10 -translate-x-1/2 bg-gradient-to-br from-pink-100 to-orange-100 text-gray-800 px-7 py-3 rounded-full shadow-xl border border-orange-200 text-base font-medium z-10" style={{borderRadius: '999px'}}>Feel Better, Every Day</span>
              <span className="absolute top-1/2 -right-10 -translate-y-1/2 bg-gradient-to-br from-blue-100 to-cyan-100 text-gray-800 px-7 py-3 rounded-full shadow-xl border border-blue-200 text-base font-medium z-10" style={{borderRadius: '999px'}}>Science-Backed</span>
              <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-gradient-to-br from-green-100 to-lime-100 text-gray-800 px-7 py-3 rounded-full shadow-xl border border-green-200 text-base font-medium z-10" style={{borderRadius: '999px'}}>Real Conversations</span>
              <span className="absolute top-1/2 -left-10 -translate-y-1/2 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800 px-7 py-3 rounded-full shadow-xl border border-purple-200 text-base font-medium z-10" style={{borderRadius: '999px'}}>Knows You</span>
              <h2 className="text-4xl md:text-6xl text-gray-800 font-light tracking-wide leading-tight z-20">
                Meet Your New
                <br />
                <span className="text-5xl md:text-7xl font-thin text-gray-700 tracking-wider">
                  SUPERPOWER
                </span>
              </h2>
            </div>
            
            {/* Companions - Enhanced Symbols */}
            <div className="flex justify-center items-start space-x-20 mb-12">
              {/* Wil - Enhanced with TrendingUp for analytical */}
              <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-2xl p-2">
                    <img 
                      src={wilImage} 
                      alt="Wil" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gray-700 rounded-full p-3 shadow-xl">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-800 font-semibold text-2xl tracking-wide mb-3">Wil</p>
                  <p className="text-gray-600 text-base font-light max-w-[240px] leading-relaxed">
                    Your analytical health strategist who speaks your language and gets your lifestyle
                  </p>
                  <div className="mt-4 text-xs text-gray-500 italic">
                    "I see patterns you miss"
                  </div>
                </div>
              </div>

              {/* Ellie - Enhanced with Heart */}
              <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-2xl p-2">
                    <img 
                      src={ellieImage} 
                      alt="Ellie" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gray-700 rounded-full p-3 shadow-xl">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-800 font-semibold text-2xl tracking-wide mb-3">Ellie</p>
                  <p className="text-gray-600 text-base font-light max-w-[240px] leading-relaxed">
                    Your empathetic wellness companion who truly understands how you feel
                  </p>
                  <div className="mt-4 text-xs text-gray-500 italic">
                    "I feel what you're going through"
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLOSIVE Value Proposition */}
            <div className="mb-8 py-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-700 mb-4 tracking-wide text-center">
                Your Health Bestie: World-Class Expert, Always By Your Side
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light text-center">
                Woke up exhausted? Burger or salad? Need to calm down? Analyzing test results? Dimension is your AI health bestie, always by your side. It <span className="font-semibold text-gray-800">remembers your unique journey, understands your patterns,</span> and provides instant, empathetic, science-backed answers for <span className="font-semibold text-gray-800">every thought.</span> Your health journey, clear, fun, and uniquely <em>yours</em>.
              </p>
            </div>

            {/* Primary CTA Above the Fold */}
            <div className="mb-12 py-8">
              <button 
                onClick={() => scrollToSection('get-started')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/20"
              >
                Start Your Health Journey
              </button>
              <p className="text-sm text-gray-500 mt-4 font-light">
                Join 2,847+ people who've found their perfect health companion
              </p>
            </div>

            {/* EXPLOSIVE Science Differentiator Section */}
            <div 
              className="rounded-2xl p-12 md:p-16 border-2 border-gray-600 shadow-2xl max-w-6xl mx-auto mb-12 relative overflow-hidden"
              style={{
                backgroundImage: `
                  linear-gradient(135deg, rgba(17, 24, 39, 0.05) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(17, 24, 39, 0.05) 100%),
                  url('/dimension-bg.png')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'local',
                backgroundColor: '#1f2937'
              }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-900/20 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="backdrop-blur-md rounded-2xl p-10 shadow-2xl border-2 border-gray-200/50 mb-12 relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.92) 50%, rgba(226, 232, 240, 0.95) 100%)'
                }}>
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent animate-pulse"></div>
                  
                  <h4 className="text-gray-800 text-2xl md:text-3xl font-light mb-6 tracking-wider text-center relative z-10">
                    "This isn't ChatGPT with health prompts"
                  </h4>
                  <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-center relative z-10">
                    Dimension companions are powered by a specialized RAG database containing the world's most advanced health research, 
                    constantly updated with breakthrough insights from leading health and longevity experts.
                  </p>
                  <div className="flex justify-center items-center space-x-8 text-gray-600 relative z-10">
                    <span className="font-light text-sm tracking-widest">LIVE UPDATES</span>
                    <span className="font-light text-sm tracking-widest">EXPERT INSIGHTS</span>
                    <span className="font-light text-sm tracking-widest">PRECISION AI</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 relative overflow-hidden group" style={{
                    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.92) 50%, rgba(226, 232, 240, 0.95) 100%)'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="font-light text-gray-800 mb-4 text-xl tracking-wider text-center relative z-10">LIVE KNOWLEDGE ENGINE</h4>
                    <p className="text-gray-700 text-base font-light leading-relaxed text-center relative z-10">
                      Real-time access to breakthrough research from Harvard, Stanford, and the world's leading longevity labs
                    </p>
                  </div>
                  
                  <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 relative overflow-hidden group" style={{
                    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.92) 50%, rgba(226, 232, 240, 0.95) 100%)'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="font-light text-gray-800 mb-4 text-xl tracking-wider text-center relative z-10">CUTTING-EDGE INTELLIGENCE</h4>
                    <p className="text-gray-700 text-base font-light leading-relaxed text-center relative z-10">
                      Not outdated textbook knowledge—the latest discoveries in longevity, biohacking, and precision medicine
                    </p>
                  </div>
                  
                  <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 relative overflow-hidden group" style={{
                    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.92) 50%, rgba(226, 232, 240, 0.95) 100%)'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="font-light text-gray-800 mb-4 text-xl tracking-wider text-center relative z-10">PERSONALIZED PRECISION</h4>
                    <p className="text-gray-700 text-base font-light leading-relaxed text-center relative z-10">
                      Advanced AI algorithms adapt revolutionary research to your unique biology, lifestyle, and goals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Social Proof */}
            <div className="flex justify-center items-center space-x-8 mb-12 text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm font-light">2,847 companions chosen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span className="text-sm font-light">Voice conversations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span className="text-sm font-light">Updated daily</span>
              </div>
            </div>

            {/* Call to Action - Simplified */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToAction()}
                className="bg-gray-800 hover:bg-gray-900 text-white px-10 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                Meet Wil & Ellie
              </Button>
            </div>

            {/* Scroll Down Arrow */}
            <div className="flex flex-col items-center animate-bounce">
              <p className="text-gray-500 mb-2 text-lg font-light tracking-wide">See them in conversation</p>
              <button 
                onClick={scrollToAction}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Companions in Action - Enhanced Focus */}
        <div 
          id="action-section" 
          className="min-h-screen py-20 relative overflow-hidden"
          style={{
            position: 'relative'
          }}
        >
          {/* Background layer using pseudo-element approach */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(240, 242, 247, 0.65) 0%, rgba(229, 231, 235, 0.6) 50%, rgba(209, 213, 219, 0.65) 100%),
                url('/dimension-bg.png')
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              zIndex: 1
            }}
          ></div>
          <div className="max-w-6xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
            {/* Section Header - Companion Focused */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
                Real Conversations, Real Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                See how Wil and Ellie understand you, support you, and help you thrive
              </p>
            </div>

            {/* Enhanced Companion Conversations */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Wil's Enhanced Conversation */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 p-1 mr-4">
                    <img src={wilImage} alt="Wil" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Wil</h3>
                    <p className="text-gray-600 text-sm">Your analytical health strategist</p>
                    <div className="flex items-center mt-1">
                      <Mic className="w-3 h-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Speaks naturally with you</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <p className="text-gray-700 italic">
                      "Slept 8 hours but feel like absolute garbage. What's wrong with me?"
                    </p>
                  </div>

                  <div className="bg-gray-800 text-white rounded-2xl p-4">
                    <p className="font-medium mb-1">Wil:</p>
                    <p className="text-sm leading-relaxed">
                      "I see from your Strava that you ran twice as far as normal yesterday, and your HRV is really low - you're genuinely exhausted. Based on the latest recovery research, your body's still in deep recovery mode from that long run."
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-4">
                    <p className="text-gray-700 italic">
                      "So what do I do right now?"
                    </p>
                  </div>

                  <div className="bg-gray-800 text-white rounded-2xl p-4">
                    <p className="font-medium mb-1">Wil:</p>
                    <p className="text-sm leading-relaxed">
                      "Your calendar shows another busy day, but let's get some good protein and a 15-minute walk before your first call. That'll kickstart your recovery without overdoing it."
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition-colors">
                  Choose Wil as Your Companion
                </button>
              </div>

              {/* Ellie's Enhanced Conversation */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 p-1 mr-4">
                    <img src={ellieImage} alt="Ellie" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Ellie</h3>
                    <p className="text-gray-600 text-sm">Your empathetic wellness companion</p>
                    <div className="flex items-center mt-1">
                      <Heart className="w-3 h-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Understands your emotions</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <p className="text-gray-700 italic">
                      "Everything feels too much today. I stress-ate a whole bag of chips and I hate myself for it."
                    </p>
                  </div>

                  <div className="bg-gray-800 text-white rounded-2xl p-4">
                    <p className="font-medium mb-1">Ellie:</p>
                    <p className="text-sm leading-relaxed">
                      "Oh honey, I can see you haven't slept well for the last 3 nights, and that would be making you feel so much more stressed. Those chips were just your body asking for comfort - there's no shame in that."
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-4">
                    <p className="text-gray-700 italic">
                      "But I feel so out of control..."
                    </p>
                  </div>

                  <div className="bg-gray-800 text-white rounded-2xl p-4">
                    <p className="font-medium mb-1">Ellie:</p>
                    <p className="text-sm leading-relaxed">
                      "I see you have an hour free at 4pm. Instead of the gym today, what about a guided meditation and some herbal tea? Your nervous system needs gentleness right now."
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors">
                  Choose Ellie as Your Companion
                </button>
              </div>
            </div>

            {/* --- NEW: Moments That Matter Section --- */}
            <section className="relative flex justify-center items-center min-h-[480px] max-w-4xl mx-auto mb-20 mt-12 px-4">
              {/* Speech bubbles - top row */}
              <div className="absolute left-1/2 top-0 flex gap-4 -translate-x-1/2">
                <SpeechBubble color="from-pink-100 to-orange-100" border="border-orange-200">Sleep struggles?</SpeechBubble>
                <SpeechBubble color="from-blue-100 to-cyan-100" border="border-blue-200">Need motivation?</SpeechBubble>
                <SpeechBubble color="from-green-100 to-lime-100" border="border-green-200">Craving sugar?</SpeechBubble>
                <SpeechBubble color="from-purple-100 to-pink-100" border="border-purple-200">Feeling overwhelmed?</SpeechBubble>
              </div>
              {/* Speech bubble - left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <SpeechBubble color="from-blue-100 to-gray-100" border="border-blue-200">Lost focus?</SpeechBubble>
              </div>
              {/* Speech bubble - right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <SpeechBubble color="from-green-100 to-lime-100" border="border-green-200">Need a break?</SpeechBubble>
              </div>
              {/* Centered main text */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">For the moments that actually matter.</h2>
                <p className="text-lg text-gray-500 mb-8 font-light">Because health isn’t just numbers—it’s how you feel, think, and get through real life.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <SpeechBubble color="from-pink-100 to-pink-50" border="border-pink-200" textStyle="text-pink-600">"How can I feel better?"</SpeechBubble>
                  <SpeechBubble color="from-green-100 to-lime-50" border="border-green-200" textStyle="text-green-600">"Is my diet working?"</SpeechBubble>
                  <SpeechBubble color="from-yellow-100 to-yellow-50" border="border-yellow-200" textStyle="text-yellow-600">"What exercise fits me?"</SpeechBubble>
                  <SpeechBubble color="from-purple-100 to-purple-50" border="border-purple-200" textStyle="text-purple-600">"Why am I so tired?"</SpeechBubble>
                  <SpeechBubble color="from-blue-100 to-blue-50" border="border-blue-200" textStyle="text-blue-600">"Rough day?"</SpeechBubble>
                </div>
              </div>
              {/* Speech bubbles - bottom row */}
              <div className="absolute left-1/2 bottom-0 flex gap-4 -translate-x-1/2">
                <SpeechBubble color="from-yellow-100 to-orange-100" border="border-yellow-200">Stressed at work?</SpeechBubble>
                <SpeechBubble color="from-blue-100 to-cyan-100" border="border-blue-200">Need a win?</SpeechBubble>
                <SpeechBubble color="from-green-100 to-lime-100" border="border-green-200">Big decision?</SpeechBubble>
                <SpeechBubble color="from-purple-100 to-pink-100" border="border-purple-200">Just need to vent?</SpeechBubble>
              </div>
            </section>


// SpeechBubble Component
function SpeechBubble({ children, color = 'from-pink-100 to-orange-100', border = 'border-orange-200', textStyle = 'text-gray-800' }) {
  return (
    <span className={`relative bg-gradient-to-br ${color} ${border} ${textStyle} px-6 py-3 rounded-[32px] shadow-xl border text-base font-medium flex items-center`} style={{ minWidth: '120px', minHeight: '48px' }}>
      {children}
      {/* Bubble tail */}
      <svg className="absolute -bottom-3 left-8 w-6 h-4" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2 C8 12, 16 12, 22 2" stroke="#e5e7eb" strokeWidth="2" fill="none" />
      </svg>
    </span>
  );
}


            {/* --- NEW: Your Health Bestie Section --- */}
            <section className="max-w-4xl mx-auto text-center mb-20 px-4">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">Your Health Bestie: <span className="font-medium">A Companion Who Knows You</span></h3>
              <p className="text-lg text-gray-600 mb-6 font-light">Remembers your stress triggers, celebrates your wins, connects to your wearables, and offers expert-backed insights tailored to you.</p>
              <div className="flex justify-center items-center gap-6 mt-6">
                <img src={wilImage} alt="Wil" className="w-20 h-20 rounded-full border-2 border-gray-200 shadow-lg object-cover" />
                <img src={ellieImage} alt="Ellie" className="w-20 h-20 rounded-full border-2 border-gray-200 shadow-lg object-cover" />
              </div>
            </section>

            {/* --- NEW: More Than Smart Section --- */}
            <section className="max-w-4xl mx-auto text-center mb-20 px-4">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">More than smart. <span className="font-medium">Made for real life.</span></h3>
              <p className="text-lg text-gray-600 mb-6 font-light">Built different. Purpose-built with science, emotional intelligence, and full context.</p>
              <p className="text-base text-gray-500 mb-2">Syncs with Apple Health, Oura, Strava, Whoop, Garmin + more for real-time insights. Gets smarter with every chat.</p>
            </section>

            {/* --- NEW: Call to Action Section --- */}
            <section className="flex flex-col items-center justify-center mb-24" id="get-started">
              <div className="flex flex-col md:flex-row gap-6">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-10 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                  Join Now for Free
                </button>
                <button className="bg-white/90 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-4 px-10 rounded-full text-xl shadow-md transition-all duration-300">
                  See it in action
                </button>
              </div>
              <p className="text-gray-500 font-light mt-4">
                Limited usage. No credit card needed.
              </p>
            </section>
      </div>
    </div>
  );
}

export default App;

