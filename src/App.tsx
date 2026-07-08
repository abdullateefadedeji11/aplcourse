import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Flame, 
  Zap, 
  BookOpen, 
  Award, 
  Check, 
  CheckCircle2, 
  PhoneCall, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Play, 
  ArrowRight, 
  AlertTriangle, 
  Moon, 
  Sun, 
  GraduationCap, 
  Building,
  MonitorPlay,
  Calendar,
  MapPin,
  Clock,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Sub-components
import { SafeImage } from './components/SafeImage';
import { WhoIsThisCourseFor } from './components/WhoIsThisCourseFor';
import { ProofOfCreation } from './components/ProofOfCreation';
import { MeetTheFacilitator } from './components/MeetTheFacilitator';
import { AddressingConcerns } from './components/AddressingConcerns';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const [selectedPath, setSelectedPath] = useState<'masterclass' | 'advanced' | 'basic' | 'school' | null>('masterclass');
  const [showAPLCourse, setShowAPLCourse] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [timeLeft, setTimeLeft] = useState(() => {
    const difference = +new Date("2026-07-17T17:00:00") - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date("2026-07-17T17:00:00") - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isExpired: false
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSelectPath = (path: 'masterclass' | 'advanced' | 'basic' | 'school') => {
    setSelectedPath(path);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const renderThreeButtonCTA = (titleText = "Ready to choose your path?") => {
    return (
      <div className="py-12 bg-slate-50 border-t border-b border-slate-200/60 dark:bg-slate-900/40 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs uppercase font-black tracking-widest text-[#ff6b00] mb-4 font-heading">
            {titleText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <button 
              onClick={() => handleSelectPath('masterclass')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#ff6b00] border border-[#ff6b00]/30 hover:bg-[#ff6b00]/10 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm font-heading cursor-pointer dark:bg-slate-800 dark:text-orange-400 dark:border-slate-700 dark:hover:bg-slate-700"
            >
              Masterclass Only 👉 (₦10,000)
            </button>
            <button 
              onClick={() => handleSelectPath('advanced')}
              className="w-full sm:w-auto px-7 py-4 bg-[#ff6b00] hover:bg-[#e05e00] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 font-heading cursor-pointer"
            >
              Advanced Course (Includes FREE Masterclass) 👉 (₦12,000)
            </button>
          </div>
          <div className="mt-5 text-xs text-slate-500 dark:text-slate-400">
            Can't afford these? <button onClick={() => handleSelectPath('basic')} className="text-[#ff6b00] underline font-bold hover:text-[#e05e00] bg-transparent border-none cursor-pointer">Get the Basic Course for ₦7,500 only</button> or <button onClick={() => handleSelectPath('school')} className="text-slate-600 dark:text-slate-300 underline font-bold hover:text-slate-900 bg-transparent border-none cursor-pointer">Book a School Package</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#ff6b00] selection:text-white relative min-h-screen font-sans overflow-x-hidden transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      
      {/* Mesh Gradient Background Elements */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[45%] bg-[#ff6b00] rounded-full blur-[160px] opacity-[0.05] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[40%] bg-blue-500 rounded-full blur-[150px] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="absolute top-[50%] left-[-15%] w-[50%] h-[45%] bg-[#ff6b00] rounded-full blur-[170px] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="absolute top-[75%] right-[-10%] w-[45%] h-[40%] bg-blue-600 rounded-full blur-[150px] opacity-[0.03] pointer-events-none z-0"></div>

      {/* Top Floating Control Bar for Live Timer */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#ff6b00] via-red-600 to-[#ff6b00] text-white py-2.5 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm font-black tracking-wide uppercase font-heading">
            <span className="inline-flex h-2 w-2 rounded-full bg-white animate-ping"></span>
            🚨 July 17th: Profitable AI-Powered Educator Masterclass is Live!
          </div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-black/25 px-3.5 py-1 rounded-full border border-white/10 font-mono text-white">
            ⏰ {timeLeft.isExpired ? "Masterclass In Session" : `Closes in: ${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
          </div>
        </div>
      </div>

      {/* Premium Sticky Navigation Header */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-[42px] z-40 shadow-sm transition-colors duration-300 dark:bg-slate-900/95 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SafeImage 
              src="/gea_logo.png" 
              alt="GEA Logo" 
              fallbackType="logo" 
              className="h-10 w-auto object-contain rounded-lg border border-slate-200 p-1 bg-white shadow-sm dark:border-slate-800" 
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-xs text-slate-400 tracking-widest uppercase">
                The Flipped Classroom Expert
              </span>
              <span className="font-heading font-extrabold text-sm md:text-base tracking-tight text-slate-900 dark:text-white">
                Growth-minded <span className="text-[#ff6b00] font-black">Educators Academy</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all duration-300 border border-slate-200 shadow-sm flex items-center justify-center cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </button>
            <a 
              href="#selection-area" 
              className="bg-[#ff6b00] hover:bg-[#e05e00] text-white px-5 py-2 rounded-full font-black text-xs md:text-sm tracking-wide transition-all duration-300 uppercase shadow-md hover:shadow-[#ff6b00]/35"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </nav>

      {/* Main Hero / Welcome Introduction Section */}
      <section className="relative pt-16 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 backdrop-blur-sm text-[#ff6b00] font-bold text-xs mb-6 tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-[#ff6b00]" style={{ animationDuration: '4s' }} />
            🚨 July 17th: Profitable AI-Powered Educator Masterclass (PAPEM) is Live!
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight mb-6 font-heading dark:text-white">
            The Profitable <span className="text-[#ff6b00]">AI-Powered</span> Educator Masterclass
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto font-medium dark:text-slate-300">
            Stop working like an overworked tape recorder. Reclaim your weekends, automate lesson planning in 10 minutes, and step into your highly visible, profitable digital authority era.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
            <a 
              href="#selection-area"
              onClick={() => handleSelectPath('masterclass')}
              className="w-full sm:w-auto px-8 py-4 bg-[#ff6b00] hover:bg-[#e05e00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105 font-heading text-center"
            >
              Secure Your Seat For ₦10,000 👉
            </a>
            <button 
              onClick={() => {
                setShowAPLCourse(prev => !prev);
                setTimeout(() => {
                  document.getElementById('selection-area')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 hover:bg-slate-800 font-heading cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-700/50 text-center"
            >
              {showAPLCourse ? "Hide APL Pedagogy Course ⬆" : "Explore APL Pedagogy Course ⬇"}
            </button>
          </div>
        </div>
      </section>

      {/* Core Educational Introduction Cards */}
      <section className="pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* The Reality */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:bg-slate-900 dark:border-slate-800 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20">
                <Check className="w-6 h-6 font-black" />
              </div>
              <h3 className="font-heading font-black text-xl md:text-2xl text-slate-900 mb-4 dark:text-white">
                The Reality of Modern Education
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base dark:text-slate-300">
                A thriving educational ecosystem relies on a delicate balance: school owners need a stellar reputation built on outstanding results, teachers need the energy and passion to inspire, and students need to develop the critical thinking skills required for a rapidly evolving world. When these elements align, education becomes deeply rewarding—both pedagogically and financially.
              </p>
            </div>

            {/* The Bottleneck */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:bg-slate-900 dark:border-slate-800 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl md:text-2xl text-slate-900 mb-4 dark:text-white">
                The Bottleneck Holding You Back
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base dark:text-slate-300">
                However, the traditional analog teaching model is actively destroying this balance. Today, brilliant educators are buried under mountains of manual lesson planning, tedious grading, and endless administrative paperwork. This unsustainable grind traps your expertise inside the four walls of a physical classroom. It keeps you overworked, underpaid, and completely digitally invisible in an economy that heavily rewards innovation.
              </p>
            </div>

            {/* The Cost */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:bg-slate-900 dark:border-slate-800 transition-all duration-300 md:col-span-2">
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl md:text-2xl text-slate-900 mb-4 dark:text-white">
                The Cost of the Grind
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base dark:text-slate-300">
                This constant, overwhelming grind creates a vicious cycle. Teachers are drained of their energy, leading to severe burnout and forcing them to rely on outdated rote learning just to get through the day. The tragic result? Students are shortchanged, failing to develop the 21st-century skills they desperately need. School owners are left managing frustrated staffs and struggling institutions. And you—the educator—miss out on the opportunity to build a formidable, income-generating personal legacy. Everyone loses.
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl text-white md:col-span-2 relative overflow-hidden">
              <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[50%] bg-[#ff6b00] rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
              
              <div className="relative z-10 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/35 text-[#ff6b00] font-bold text-xs uppercase mb-6 tracking-wider">
                  <Zap className="w-4 h-4 fill-[#ff6b00]" /> High Impact Shift
                </div>
                
                <h3 className="font-heading font-black text-2xl md:text-4xl text-white mb-6 leading-tight">
                  The AI-Powered Solution & Your Profitable Era
                </h3>
                
                <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    It is time for a fundamental, permanent shift. Education must transition from exhausted content dispensing to dynamic, tech-driven facilitation. Welcome to the <strong className="text-white">AI-Powered Learning (APL) Framework</strong> and the definitive <strong className="text-[#ff6b00]">Profitable AI-Powered Educator Masterclass (PAPEM)</strong>.
                  </p>
                  <p>
                    The APL Framework is a revolutionary pedagogical approach that leverages artificial intelligence to completely handle the heavy administrative lifting of daily preparation. By automating your resources and grading, the framework buys back your time, allowing you to step into your true role as an empowering <strong className="text-white">"guide on the side."</strong>
                  </p>
                  <p>
                    But we do not stop at just saving you time.
                  </p>
                  <p>
                    Through our 3-Day Profitable AI-Powered Educator Masterclass, we show you exactly how to take that reclaimed time and monetize it. You will master zero-code web design, educational app development, and AI content strategies to package, price, and sell your expertise to a global audience.
                  </p>
                  <p className="font-extrabold text-[#ff6b00] text-base md:text-lg">
                    Whether you are an individual educator ready to step out of the invisible classroom and into your profitable era, or a school owner ready to digitize and transform your entire institution, we have the exact blueprint for you.
                  </p>
                </div>
              </div>
            </div>

          </div>



        </div>
      </section>

      {/* 2. Visual Selection Path Area & Packages */}
      <section id="selection-area" className="py-16 bg-slate-100 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Interactive Path Selection</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading dark:text-white">
            Choose Your <span className="text-[#ff6b00]">Transformation Path</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-sm md:text-base dark:text-slate-300">
            Click one of the options below to reveal full course materials, exclusive bonuses, WhatsApp support benefits, and secure pricing.
          </p>
          
          {/* Pill Selector Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
            
            {/* Button: Masterclass */}
            <button 
              id="btn-select-masterclass"
              onClick={() => handleSelectPath('masterclass')}
              className={`flex-1 flex flex-col justify-between items-center text-center p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                selectedPath === 'masterclass' 
                  ? 'bg-[#ff6b00] text-white border-[#ff6b00] shadow-xl shadow-[#ff6b00]/30 scale-105' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-[#ff6b00]/40 dark:bg-slate-850 dark:border-slate-800 dark:text-white dark:hover:border-[#ff6b00]/30'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${selectedPath === 'masterclass' ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                  <MonitorPlay className={`w-7 h-7 ${selectedPath === 'masterclass' ? 'text-white' : 'text-[#ff6b00]'}`} />
                </div>
                <span className="font-heading font-black text-lg md:text-xl tracking-wide uppercase">
                  Masterclass Only
                </span>
                <p className={`text-sm mt-3 font-light max-w-[250px] leading-relaxed ${selectedPath === 'masterclass' ? 'text-white/95' : 'text-slate-500'}`}>
                  Access to the 3-Day Live Implementation Workshop. Get the systems, blueprints, and templates.
                </p>
                <p className={`text-xl font-heading font-black mt-4 ${selectedPath === 'masterclass' ? 'text-white' : 'text-[#ff6b00]'}`}>
                  ₦10,000
                </p>
              </div>
              <span className={`mt-6 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider ${selectedPath === 'masterclass' ? 'bg-white text-[#ff6b00]' : 'bg-[#ff6b00] text-white'}`}>
                {selectedPath === 'masterclass' ? 'Viewing Masterclass' : 'Explore Masterclass'}
              </span>
            </button>

            {/* Button B: Advanced */}
            <button 
              onClick={() => handleSelectPath('advanced')}
              className={`flex-1 flex flex-col justify-between items-center text-center p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative ${
                selectedPath === 'advanced' 
                  ? 'bg-slate-900 text-white border-[#ff6b00] shadow-2xl scale-105 ring-4 ring-[#ff6b00]/20' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-[#ff6b00]/40 dark:bg-slate-850 dark:border-slate-800 dark:text-white dark:hover:border-[#ff6b00]/30'
              }`}
            >
              {/* Highlight Tag */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap z-10 animate-pulse">
                🔥 BEST VALUE (FREE MASTERCLASS!)
              </div>

              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${selectedPath === 'advanced' ? 'bg-[#ff6b00]/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                  <Award className={`w-7 h-7 text-[#ff6b00]`} />
                </div>
                <span className="font-heading font-black text-lg md:text-xl tracking-wide uppercase">
                  Advanced Course Combo
                </span>
                <p className={`text-sm mt-3 font-light max-w-[250px] leading-relaxed ${selectedPath === 'advanced' ? 'text-white/95' : 'text-slate-500'}`}>
                  Get the full 12-Module self-paced APL Advanced Course, community support, plus <strong className={selectedPath === 'advanced' ? 'text-[#ff6b00]' : 'text-[#ff6b00]'}>FREE</strong> Masterclass ticket!
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-xl font-heading font-black ${selectedPath === 'advanced' ? 'text-white' : 'text-[#ff6b00]'}`}>
                    ₦12,000
                  </span>
                  <span className="text-xs text-slate-400 line-through">₦25,000</span>
                </div>
              </div>
              <span className={`mt-6 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider ${selectedPath === 'advanced' ? 'bg-[#ff6b00] text-white' : 'bg-[#ff6b00] text-white'}`}>
                {selectedPath === 'advanced' ? 'Viewing Advanced Course' : 'Explore Advanced Course'}
              </span>
            </button>

          </div>

          {/* Alternative / Budget & Institutional Options */}
          <div className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800 max-w-4xl mx-auto text-left">
            <h4 className="font-heading font-black text-xs md:text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 text-center mb-6">
              Alternative Options
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Option 1: Basic Course */}
              <div className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between items-start transition-all duration-300 hover:border-[#ff6b00]/30">
                <div>
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className="font-heading font-black text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Budget Option
                    </span>
                    <span className="font-heading font-black text-[#ff6b00] text-sm">
                      ₦7,500
                    </span>
                  </div>
                  <h5 className="font-heading font-black text-base md:text-lg text-slate-900 dark:text-white mb-2">
                    APL Basic Course (Self-Paced Only)
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    If you cannot afford the Live Masterclass or the Advanced Combo, access our entry-level 7-module self-paced pedagogy course to start automating your preparation today.
                  </p>
                </div>
                <button 
                  onClick={() => handleSelectPath('basic')}
                  className={`mt-4 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedPath === 'basic'
                      ? 'bg-[#ff6b00] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-[#ff6b00]/10 text-slate-800 hover:text-[#ff6b00] dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {selectedPath === 'basic' ? 'Viewing Basic Details 👇' : 'Read More & Explore Basic 👉'}
                </button>
              </div>

              {/* Option 2: School Packages */}
              <div className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between items-start transition-all duration-300 hover:border-[#ff6b00]/30">
                <div>
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className="font-heading font-black text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Institutions
                    </span>
                    <span className="font-heading font-black text-slate-900 dark:text-white text-sm">
                      From ₦40,000
                    </span>
                  </div>
                  <h5 className="font-heading font-black text-base md:text-lg text-slate-900 dark:text-white mb-2">
                    School & Academic Packages
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Train your entire staff with custom dates, flexible pricing, and dedicated team support. Reclaim massive preparation time for your teachers.
                  </p>
                </div>
                <button 
                  onClick={() => handleSelectPath('school')}
                  className={`mt-4 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedPath === 'school'
                      ? 'bg-[#ff6b00] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-[#ff6b00]/10 text-slate-800 hover:text-[#ff6b00] dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {selectedPath === 'school' ? 'Viewing School details 👇' : 'Explore School Packages 👉'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Details Area */}
      <div ref={detailsRef} className="py-20 px-4 relative z-20 bg-slate-50 dark:bg-slate-900/10">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* Placeholder dynamic state */}
            {selectedPath === null && (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-center bg-white border border-slate-200 rounded-[2.5rem] p-12 shadow-md dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="w-16 h-16 bg-[#ff6b00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-[#ff6b00] animate-bounce" />
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 mb-3 dark:text-white">
                  Ready to explore?
                </h3>
                <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm md:text-base dark:text-slate-300">
                  Select one of the paths above to view curriculum modules, bonuses, community benefits, and checkout procedures.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => handleSelectPath('masterclass')} 
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wide transition-all dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 cursor-pointer"
                  >
                    Masterclass Only
                  </button>
                  <button 
                    onClick={() => handleSelectPath('advanced')} 
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wide transition-all dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    Advanced Course + FREE Masterclass
                  </button>
                </div>
              </motion.div>
            )}

            {/* PATH: MASTERCLASS ONLY */}
            {selectedPath === 'masterclass' && (
              <motion.div
                key="masterclass-only"
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl dark:bg-slate-900 dark:border-slate-800 text-left"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs font-heading bg-[#ff6b00]/10 px-3 py-1.5 rounded-md">Live Workshop</span>
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 mt-3 font-heading dark:text-white">
                      The Profitable AI-Powered Educator 3-Day Masterclass
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Standard Ticket</p>
                    <p className="text-3xl font-black text-[#ff6b00] font-heading">₦10,000</p>
                    <p className="text-xs text-slate-400 line-through">₦20,000</p>
                  </div>
                </div>

                <div className="bg-[#ff6b00]/5 border-l-4 border-[#ff6b00] p-6 rounded-r-2xl mb-10 dark:bg-slate-800/50">
                  <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-2 dark:text-white">
                    3-Day Intensive Live Implementation Workshop 🚨
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed dark:text-slate-300">
                    This ticket is strictly for the 3-day tech workshop starting July 17th. 
                    <strong className="text-red-500 block mt-2">⚠️ PLEASE NOTE: This does NOT include the full 12-Module APL Pedagogy Course or self-paced video library access.</strong>
                  </p>
                </div>

                {/* Bold CTA to upgrade */}
                <div className="bg-orange-500 text-white p-6 md:p-8 rounded-3xl mb-10 shadow-lg text-center relative overflow-hidden">
                  <div className="absolute right-[-10%] bottom-[-10%] w-[30%] h-[50%] bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                  <p className="font-heading font-black text-lg md:text-xl mb-2">
                    💡 SMART MOVE: Upgrade to the Advanced Course
                  </p>
                  <p className="text-sm md:text-base text-orange-100 mb-5 leading-relaxed">
                    Get the 12-Module APL Pedagogy Course for just <strong>₦2,000 more</strong> and receive this 3-Day Live Masterclass ticket <strong>100% FREE</strong> (Total Value: ₦35,000).
                  </p>
                  <button 
                    onClick={() => handleSelectPath('advanced')}
                    className="inline-flex bg-white text-[#ff6b00] hover:bg-slate-100 px-6 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Upgrade to Advanced for ₦12,000 👉
                  </button>
                </div>

                {/* Detailed 3-Day Masterclass Curriculum */}
                <div className="mb-10 border-t border-slate-100 dark:border-slate-800 pt-8 mt-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs font-heading bg-[#ff6b00]/10 px-3 py-1.5 rounded-md">
                      Complete Curriculum
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md">
                      Live July 2026
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 font-heading dark:text-white leading-tight mb-4">
                    THE 3-DAY TRANSFORMATION BLUEPRINT
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-10">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold font-heading">When</p>
                        <p className="font-bold text-sm md:text-base text-slate-900 dark:text-white">Friday, July 17th – Sunday, July 19th, 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-[#ff6b00] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold font-heading">Where</p>
                        <p className="font-bold text-sm md:text-base text-slate-900 dark:text-white">
                          [Insert Your Venue/Platform Link Here]
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Day 1, 2, 3 Grid */}
                  <div className="space-y-12">
                    
                    {/* Day 1 */}
                    <div className="relative pl-0 md:pl-8 border-l-0 md:border-l-4 border-[#ff6b00]/40">
                      <div className="absolute top-0 left-[-10px] hidden md:flex w-4 h-4 rounded-full bg-[#ff6b00] items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 px-3 py-1 rounded-full">
                            Day 1: Friday, July 17th
                          </span>
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 font-heading dark:text-white mt-2">
                            The Foundation of AI Pedagogy & Platforms
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                        We are tearing down your analog workflow, establishing your digital footprint, and shifting your mindset from a standard employee to an educational entrepreneur.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 1</span>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                            The Business of Teaching in the Age of AI
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                            We will dissect the modern digital economy. You will learn how to identify hidden market gaps, position your unique pedagogical expertise, and structure a highly profitable business model that does not require you to be physically present in a classroom 24/7.
                          </p>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 2</span>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                            Advanced Gemini and NotebookLM for Learning
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                            Stop using AI just to write basic emails. You will master the exact prompt engineering required to train Gemini to act as a Socratic, interactive tutor for your students. We will also dive into NotebookLM to transform your standard, boring lesson notes into premium, high-value study packs and audio edutainment.
                          </p>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 3</span>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                            Zero-Code Web Design with Gemini Canvas
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                            Every formidable personal brand needs a digital command center. You will learn how to command Gemini Canvas to generate clean HTML/CSS and launch a sleek, highly functional personal portfolio or booking website—without writing a single line of code yourself.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="relative pl-0 md:pl-8 border-l-0 md:border-l-4 border-slate-400/40">
                      <div className="absolute top-0 left-[-10px] hidden md:flex w-4 h-4 rounded-full bg-[#ff6b00] items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 px-3 py-1 rounded-full">
                            Day 2: Saturday, July 18th
                          </span>
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 font-heading dark:text-white mt-2">
                            Tech Engineering & Brand Visibility
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                        A full day dedicated to building dynamic, problem-solving educational tools and the content engine needed to sell them.
                      </p>

                      {/* Day 2 Sessions */}
                      <div className="space-y-6">
                        {/* Morning Session */}
                        <div className="bg-slate-50/60 dark:bg-slate-850/60 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/40">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-4 h-4 text-[#ff6b00]" />
                            <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white">Morning Session</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-850 p-5 rounded-xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                              <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 1</span>
                              <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                                AI-Powered Content Creation and Strategy
                              </h5>
                              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                Eradicate the "what do I post today?" struggle forever. You will generate a highly targeted, 30-day content calendar designed specifically for your teaching niche. Learn how to attract high-paying clients, build authority, and position yourself as the ultimate thought leader.
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-850 p-5 rounded-xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                              <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 2</span>
                              <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                                Web Application Development (Session 1: Development)
                              </h5>
                              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                Take your technical edge to a level most teachers cannot even comprehend. We will conceptualize and use AI to write the logic for interactive educational applications that solve real, teacher-centric problems. Imagine building your own custom Student Performance Analytics Dashboard (SPAD) or a mental well-being safe space application for your colleagues.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Evening Session */}
                        <div className="bg-slate-50/60 dark:bg-slate-850/60 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/40">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-4 h-4 text-[#ff6b00]" />
                            <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white">Evening Session</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-850 p-5 rounded-xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                              <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 3</span>
                              <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                                Visual Branding and Flyer Design
                              </h5>
                              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                People judge the quality of your knowledge by the quality of your presentation. You will master the art of generating high-contrast, professional, AI-driven graphics to promote your new digital products, webinars, and tutoring services.
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-850 p-5 rounded-xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                              <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 4</span>
                              <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                                Web Application Development (Session 2: Deployment)
                              </h5>
                              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                Bring your creation to life. You will learn the exact, step-by-step framework to take the web application you developed in the morning session and deploy it live to the internet for the world to access and use.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="relative pl-0 md:pl-8 border-l-0 md:border-l-4 border-slate-400/40">
                      <div className="absolute top-0 left-[-10px] hidden md:flex w-4 h-4 rounded-full bg-[#ff6b00] items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 px-3 py-1 rounded-full">
                            Day 3: Sunday, July 19th
                          </span>
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 font-heading dark:text-white mt-2">
                            Advanced Content & Monetization
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                        Now that you have the platforms, the tools, and the content, it is time to capture digital attention and launch your products.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 1</span>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                            AI-Powered Video Editing
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                            Attention is the new currency. You will learn how to turn raw educational clips into highly engaging, polished edutainment ready for social media or paid course platforms. We will cover AI tools that drastically cut down your editing time from hours to minutes.
                          </p>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6b00]">Topic 2</span>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white mt-1 mb-2">
                            Packaging and Pricing Your Knowledge
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                            Stop giving your premium insights away for free. You will master a step-by-step psychological strategy to structure, price, and launch your educational resources, courses, and consulting services so you can maximize your profitability.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* WHO IS THIS MASTERCLASS FOR? */}
                  <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="font-heading font-black text-slate-900 dark:text-white text-lg md:text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Users className="text-[#ff6b00] w-5 h-5" /> 🎯 WHO IS THIS MASTERCLASS FOR?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center flex-shrink-0 font-bold text-xs">1</div>
                        <div>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white text-sm">Classroom Teachers</h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">Who want to eliminate burnout and start monetizing their lesson plans.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center flex-shrink-0 font-bold text-xs">2</div>
                        <div>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white text-sm">Private Tutors & Consultants</h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">Who need a digital platform to attract premium, high-ticket clients.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center flex-shrink-0 font-bold text-xs">3</div>
                        <div>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white text-sm">School Owners & Administrators</h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">Looking to build custom web applications to track student performance and standardise staff excellence.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center flex-shrink-0 font-bold text-xs">4</div>
                        <div>
                          <h5 className="font-heading font-black text-slate-900 dark:text-white text-sm">Educational Content Creators</h5>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">Who want to speed up their video editing and graphic design workflows using AI.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real Bank Account Instructions Container */}
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 mb-10 dark:bg-slate-850 dark:border-slate-800">
                  <h4 className="font-heading font-bold text-slate-900 mb-4 dark:text-white uppercase text-xs tracking-wider text-left">
                    How To Secure Your Seat (Masterclass Only):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm dark:bg-slate-900 dark:border-slate-850">
                      <p className="font-bold text-slate-500 mb-1 text-[10px] uppercase tracking-wider">🇳🇬 Nigeria Bank Transfer:</p>
                      <p className="font-mono text-2xl font-black text-slate-900 tracking-widest select-all dark:text-white">0100020970</p>
                      <p className="font-bold text-slate-800 text-xs dark:text-slate-300 mt-0.5">Abdullateef Adedeji</p>
                      <p className="font-bold text-[#ff6b00] text-xs uppercase mt-1 font-heading">Sterling Bank (Naira)</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-center dark:bg-slate-900 dark:border-slate-850">
                      <p className="font-bold text-slate-500 mb-2 text-[10px] uppercase tracking-wider">🌍 International Cards:</p>
                      <a 
                        href="https://geacademy.selar.com/papemasterclass" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block bg-gradient-to-r from-[#ff6b00] to-red-600 text-white text-center py-2.5 rounded-lg font-black text-xs uppercase tracking-wider hover:opacity-90 transition-all"
                      >
                        Pay Online Securely via Selar <ExternalLink className="inline w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                    <p className="text-slate-500 text-xs dark:text-slate-400">
                      *After making your bank transfer, send a direct message with your receipt on WhatsApp to complete enrollment instantly.
                    </p>
                    <a 
                      href="https://wa.link/6685ik" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-center px-5 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center gap-1.5 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" /> Confirm on WhatsApp <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Big Button CTA */}
                <div className="text-center">
                  <a 
                    href="https://geacademy.selar.com/papemasterclass" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#ff6b00] text-white px-8 py-4.5 rounded-full font-black text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-xl shadow-[#ff6b00]/30 uppercase tracking-wider"
                  >
                    GET MASTERCLASS ONLY TICKET <ArrowRight className="w-5 h-5 ml-2.5 animate-pulse text-white" />
                  </a>
                </div>

              </motion.div>
            )}



            {/* PATH 2: ADVANCED COURSE */}
            {selectedPath === 'advanced' && (
              <motion.div
                key="advanced-course"
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white border-2 border-[#ff6b00] rounded-[2.5rem] p-8 md:p-12 shadow-2xl dark:bg-slate-900 dark:border-slate-800 text-left relative overflow-hidden"
              >
                {/* HIGHLY VISIBLE "BEST VALUE" BANNER */}
                <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-center py-3.5 px-6 rounded-2xl mb-8 shadow-md">
                  <p className="font-heading font-black tracking-widest uppercase text-xs md:text-sm animate-pulse">
                    🔥 BEST VALUE TICKET 🔥
                  </p>
                  <p className="text-xs md:text-sm font-semibold mt-1">
                    Includes the full 12-Module Course AND a <strong className="underline">100% FREE</strong>, all-access ticket to the ₦10,000 Live Masterclass!
                  </p>
                </div>

                <div className="flex flex-wrap justify-between items-start gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs font-heading bg-[#ff6b00]/10 px-3 py-1.5 rounded-md">Path 2 (Recommended)</span>
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 mt-3 font-heading dark:text-white">
                      The AI-Powered Learning Advanced Course
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Price today</p>
                    <p className="text-3xl font-black text-[#ff6b00] font-heading">₦12,000</p>
                    <p className="text-xs text-slate-400 line-through">₦25,000</p>
                  </div>
                </div>

                <div className="bg-[#ff6b00]/5 border-l-4 border-[#ff6b00] p-6 rounded-r-2xl mb-10 dark:bg-slate-800/50">
                  <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-2 dark:text-white">
                    The Ultimate Classroom Transformation. 🌟
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed dark:text-slate-300">
                    Go beyond basic automation. Master the complete APL Framework to eliminate burnout, build a Flipped Classroom, and equip your students with a fully sustainable, gamified, and interactive learning environment.
                  </p>
                </div>

                {/* Inside curriculum */}
                <div className="mb-10">
                  <h4 className="font-heading font-black text-lg text-slate-900 mb-6 uppercase tracking-wider flex items-center gap-2 dark:text-white">
                    <Award className="text-[#ff6b00] w-5 h-5" /> Inside the APL Advanced Course Curriculum
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { num: 1, text: "Shift your pedagogy from a traditional 'tape recorder' to a visionary global guide." },
                      { num: 2, text: "Demystify artificial intelligence and master the exact language needed to command AI tools." },
                      { num: 3, text: "Develop an AI mindset to equip the 2030 innovator while designing ethical, cheat-proof assessments." },
                      { num: 4, text: "Master the AI-Powered Flipped Classroom to build true 21st-century innovators." },
                      { num: 5, text: "Automate brilliance with the ChatGPT lesson design masterclass and rapid visual slide creation." },
                      { num: 6, text: "Animate your lessons and master mobile screen recording in the Instant Video Factory." },
                      { num: 7, text: "Implement high-impact, low-tech AI solutions that work in absolutely every classroom environment." },
                      { num: 8, text: "Build your own customized, highly engaging personal AI textbook in just 10 minutes." },
                      { num: 9, text: "Transform dry subjects into captivating edutainment by producing educational music videos with AI." },
                      { num: 10, text: "Create a gamified classroom with automated, interactive assessments to boost student engagement." },
                      { num: 11, text: "Achieve a sustainable classroom through seamless cloud organization with Google Drive." },
                      { num: 12, text: "Structure your ultimate Digital Command Center using Google Classroom." }
                    ].map((mod) => (
                      <li key={mod.num} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex gap-4 items-start dark:bg-slate-850 dark:border-slate-800">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm flex-shrink-0 shadow-sm dark:bg-slate-800">
                          {mod.num}
                        </span>
                        <p className="text-slate-600 text-sm md:text-[14px] leading-relaxed dark:text-slate-300">
                          {mod.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonuses and Package Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Premium Bonuses Card */}
                  <div className="bg-gradient-to-br from-[#ff6b00]/5 to-red-50/40 p-6 rounded-3xl border border-[#ff6b00]/15 dark:from-slate-850 dark:to-slate-900 dark:border-[#ff6b00]/10">
                    <h5 className="font-heading font-black text-[#ff6b00] uppercase tracking-wide text-sm mb-4 flex items-center gap-2">
                      Exclusive Premium Bonuses Included Today 🎁
                    </h5>
                    <ul className="space-y-3.5">
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5 animate-pulse" />
                        <span><strong>Once-a-Week Live Review Sessions:</strong> Join us every Saturday for direct, real-time feedback, strategy breakdowns, and Q&A.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Bonus 1:</strong> Access to the complete recording of the AI-Powered Educators Masterclass.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Bonus 2:</strong> Complete replay of the highly requested "Teach Smart Earn Big" session.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Bonus 3:</strong> 6 Exclusive Videos from "The Empowered Educators Mindset Track" (Profitable Teacher Academy).</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Lifetime Recording Access:</strong> Revisit the course materials and live session recordings whenever you need a refresher.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Enrollment Package Card */}
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 dark:bg-slate-850 dark:border-slate-800">
                    <h5 className="font-heading font-black text-slate-900 uppercase tracking-wide text-sm mb-4 dark:text-white">
                      Your Enrollment Package
                    </h5>
                    <ul className="space-y-3.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>100% Self-Paced Learning:</strong> Access the entire 12-module curriculum immediately.</span>
                      </li>
                      <li className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Exclusive WhatsApp Community Support:</strong> Connect with a high-level network of 21st-century educators.</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Real Bank Account Instructions Container */}
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 mb-10 dark:bg-slate-850 dark:border-slate-800">
                  <h4 className="font-heading font-bold text-slate-900 mb-4 dark:text-white uppercase text-xs tracking-wider">
                    How To Secure Your Seat Right Now (Advanced):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm dark:bg-slate-900 dark:border-slate-850">
                      <p className="font-bold text-slate-500 mb-1 text-[10px] uppercase tracking-wider font-heading">🇳🇬 Nigeria Bank Transfer:</p>
                      <p className="font-mono text-2xl font-black text-slate-900 tracking-widest select-all dark:text-white">0100020970</p>
                      <p className="font-bold text-slate-800 text-xs dark:text-slate-300 mt-0.5 font-heading">Abdullateef Adedeji</p>
                      <p className="font-bold text-[#ff6b00] text-xs uppercase mt-1 font-heading">Sterling Bank (Naira)</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-center dark:bg-slate-900 dark:border-slate-850">
                      <p className="font-bold text-slate-500 mb-2 text-[10px] uppercase tracking-wider font-heading">🌍 International Cards & PayPal:</p>
                      <a 
                        href="https://geacademy.selar.com/apladvancedcourse" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block bg-gradient-to-r from-[#ff6b00] to-red-600 text-white text-center py-2.5 rounded-lg font-black text-xs uppercase tracking-wider hover:opacity-90 transition-all"
                      >
                        Pay Online Securely via Selar <ExternalLink className="inline w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                    <p className="text-slate-500 text-xs dark:text-slate-400">
                      *After making your bank transfer, send a direct message with your receipt on WhatsApp to complete enrollment instantly.
                    </p>
                    <a 
                      href="https://wa.link/6685ik" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-center px-5 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center gap-1.5 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" /> Confirm on WhatsApp <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Big Button CTA */}
                <div className="text-center">
                  <a 
                    href="https://geacademy.selar.com/apladvancedcourse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#ff6b00] text-white px-8 py-4.5 rounded-full font-black text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-xl shadow-[#ff6b00]/30 uppercase tracking-wider"
                  >
                    ENROLL IN THE ADVANCED COURSE INSTANTLY <ArrowRight className="w-5 h-5 ml-2.5 animate-pulse text-white" />
                  </a>
                </div>

              </motion.div>
            )}

            {/* PATH 1: BASIC COURSE */}
            {selectedPath === 'basic' && (
              <motion.div
                key="basic-course"
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl dark:bg-slate-900 dark:border-slate-800 text-left"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs font-heading bg-[#ff6b00]/10 px-3 py-1.5 rounded-md">Budget Option</span>
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 mt-3 font-heading dark:text-white">
                      The AI-Powered Learning Basic Course
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Price today</p>
                    <p className="text-3xl font-black text-[#ff6b00] font-heading">₦7,500</p>
                    <p className="text-xs text-slate-400 line-through">₦15,000</p>
                  </div>
                </div>

                <div className="bg-[#ff6b00]/5 border-l-4 border-[#ff6b00] p-6 rounded-r-2xl mb-10 dark:bg-slate-800/50">
                  <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-2 dark:text-white">
                    Kickstart Your Classroom Automation. 🚀
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed dark:text-slate-300">
                    Acquire foundational skills to eliminate repetitive tasks, automate lesson prep, and transition from dry lecturing to collaborative, engaging facilitation.
                  </p>
                  <p className="text-[#ff6b00] text-sm font-bold mt-3 font-heading">
                    💡 Optional Upgrade: Add the Live Masterclass at checkout for a 50% discount (Total: ₦12,500).
                  </p>
                </div>

                {/* Inside curriculum */}
                <div className="mb-10">
                  <h4 className="font-heading font-black text-lg text-slate-900 mb-6 uppercase tracking-wider flex items-center gap-2 dark:text-white">
                    <Award className="text-[#ff6b00] w-5 h-5" /> Inside the APL Basic Course Curriculum
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { num: 1, text: "Shift your pedagogy from a traditional 'tape recorder' to a visionary global guide." },
                      { num: 2, text: "Demystify artificial intelligence and master the exact language needed to command AI tools." },
                      { num: 3, text: "Develop an AI mindset to equip the 2030 innovator while designing ethical, cheat-proof assessments." },
                      { num: 4, text: "Master the AI-Powered Flipped Classroom to build true 21st-century innovators." },
                      { num: 5, text: "Implement high-impact, low-tech AI solutions that work in absolutely every classroom environment." },
                      { num: 6, text: "Build your own customized, highly engaging personal AI textbook in just 10 minutes." },
                      { num: 7, text: "Transform dry subjects into captivating edutainment by producing educational music videos with AI." }
                    ].map((mod) => (
                      <li key={mod.num} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex gap-4 items-start dark:bg-slate-850 dark:border-slate-800">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm flex-shrink-0 shadow-sm dark:bg-slate-800">
                          {mod.num}
                        </span>
                        <p className="text-slate-600 text-sm md:text-[14px] leading-relaxed dark:text-slate-300">
                          {mod.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonuses and Package Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Bonuses Card */}
                  <div className="bg-gradient-to-br from-[#ff6b00]/5 to-red-50/40 p-6 rounded-3xl border border-[#ff6b00]/15 dark:from-slate-850 dark:to-slate-900 dark:border-[#ff6b00]/10">
                    <h5 className="font-heading font-black text-[#ff6b00] uppercase tracking-wide text-sm mb-4 flex items-center gap-2">
                      Exclusive Bonuses Included Today 🎁
                    </h5>
                    <ul className="space-y-3.5">
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Bonus 1:</strong> Access to the complete recording of the AI-Powered Educators Masterclass.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Bonus 2:</strong> Complete replay of the highly requested "Teach Smart Earn Big" session.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4.5 h-4.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Bonus 3:</strong> 6 Exclusive Videos from "The Empowered Educators Mindset Track" (Profitable Teacher Academy).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Enrollment Package Card */}
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 dark:bg-slate-850 dark:border-slate-800">
                    <h5 className="font-heading font-black text-slate-900 uppercase tracking-wide text-sm mb-4 dark:text-white">
                      Your Enrollment Package
                    </h5>
                    <ul className="space-y-3.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>100% Self-Paced Learning:</strong> Access the entire 7-module curriculum immediately.</span>
                      </li>
                      <li className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                        <span><strong>Exclusive WhatsApp Community Support:</strong> Join our dedicated WhatsApp group to ask questions and get direct support.</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Real Bank Account Instructions Container */}
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 mb-10 dark:bg-slate-850 dark:border-slate-800">
                  <h4 className="font-heading font-bold text-slate-900 mb-4 dark:text-white uppercase text-xs tracking-wider">
                    How To Secure Your Seat Right Now (Basic Only):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm dark:bg-slate-900 dark:border-slate-850">
                      <p className="font-bold text-slate-500 mb-1 text-[10px] uppercase tracking-wider">🇳🇬 Nigeria Bank Transfer:</p>
                      <p className="font-mono text-2xl font-black text-slate-900 tracking-widest select-all dark:text-white">0100020970</p>
                      <p className="font-bold text-slate-800 text-xs dark:text-slate-300 mt-0.5">Abdullateef Adedeji</p>
                      <p className="font-bold text-[#ff6b00] text-xs uppercase mt-1 font-heading">Sterling Bank (Naira)</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-center dark:bg-slate-900 dark:border-slate-850">
                      <p className="font-bold text-slate-500 mb-2 text-[10px] uppercase tracking-wider">🌍 International Cards & PayPal:</p>
                      <a 
                        href="https://geacademy.selar.com/aplbasiccourse" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block bg-gradient-to-r from-[#ff6b00] to-red-600 text-white text-center py-2.5 rounded-lg font-black text-xs uppercase tracking-wider hover:opacity-90 transition-all"
                      >
                        Pay Online Securely via Selar <ExternalLink className="inline w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                    <p className="text-slate-500 text-xs dark:text-slate-400">
                      *After making your bank transfer, send a direct message with your receipt on WhatsApp to complete enrollment instantly.
                    </p>
                    <a 
                      href="https://wa.link/pd09oa" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-center px-5 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center gap-1.5 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" /> Confirm on WhatsApp <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Big Button CTA */}
                <div className="text-center">
                  <a 
                    href="https://geacademy.selar.com/aplbasiccourse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#ff6b00] text-white px-8 py-4.5 rounded-full font-black text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-xl shadow-[#ff6b00]/30 uppercase tracking-wider"
                  >
                    ENROLL IN THE BASIC COURSE INSTANTLY <ArrowRight className="w-5 h-5 ml-2.5 animate-pulse text-white" />
                  </a>
                </div>

              </motion.div>
            )}

            {/* PATH 3: SCHOOL OWNER PACKAGES */}
            {selectedPath === 'school' && (
              <motion.div
                key="school-packages"
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs font-heading bg-[#ff6b00]/10 px-3 py-1.5 rounded-md">Institutional Packages</span>
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 mt-3 font-heading dark:text-white text-left">
                      The Institutional APL Framework (School Owners)
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Inquiries & Booking</p>
                    <p className="text-sm font-bold text-slate-950 dark:text-white font-heading">Direct School Support</p>
                    <p className="text-xs text-[#ff6b00] font-bold uppercase tracking-wider">Fast-Response WhatsApp</p>
                  </div>
                </div>

                <div className="bg-[#ff6b00]/5 border-l-4 border-[#ff6b00] p-6 rounded-r-2xl mb-10 dark:bg-slate-800/50 text-left">
                  <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-2 dark:text-white">
                    Transform Your School. Empower Your Teachers. 🏫🚀
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed dark:text-slate-300">
                    Equip your entire academic staff with the APL Framework to eliminate burnout, upgrade your school’s pedagogy, and build a world-class 21st-century institution. We offer two highly flexible, impact-driven training packages designed specifically for schools. <strong className="text-[#ff6b00]">You pick the exact start date that fits perfectly into your academic calendar.</strong>
                  </p>
                </div>

                {/* Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
                  
                  {/* Tier 1 */}
                  <div className="bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-4">
                        <span className="font-heading font-black text-[#ff6b00] uppercase text-xs bg-[#ff6b00]/10 px-2.5 py-1 rounded">Tier 1</span>
                        <div className="text-right">
                          <p className="text-xs text-slate-400 line-through">₦50,000</p>
                          <p className="text-xl font-black text-slate-900 dark:text-white">₦40,000</p>
                        </div>
                      </div>
                      
                      <h4 className="font-heading font-black text-lg md:text-xl text-slate-900 mb-3 dark:text-white">
                        The 7-Day Basic Transformation Package
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm mb-6 leading-relaxed dark:text-slate-300">
                        A streamlined, 7-day intensive training to give your staff immediate automation skills and introduce the Flipped Classroom model.
                      </p>
                      
                      <ul className="space-y-2 text-xs md:text-sm mb-6 text-slate-600 dark:text-slate-300">
                        <li className="flex gap-2 items-start">
                          <Check className="text-[#ff6b00] w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span><strong>Curriculum:</strong> Covers Modules 1 through 7 of the APL Framework.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <Check className="text-[#ff6b00] w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span><strong>Impact:</strong> Rapid automation, low-tech implementation strategies, and transition to active learning.</span>
                        </li>
                      </ul>

                      {/* Replicated Basic Curriculum */}
                      <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-700/50">
                        <p className="font-heading font-extrabold text-xs text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-[#ff6b00]" /> Basic Curriculum Modules (1-7)
                        </p>
                        <div className="space-y-3">
                          {[
                            { num: 1, text: "Shift your pedagogy from a traditional 'tape recorder' to a visionary global guide." },
                            { num: 2, text: "Demystify artificial intelligence and master the exact language needed to command AI tools." },
                            { num: 3, text: "Develop an AI mindset to equip the 2030 innovator while designing ethical, cheat-proof assessments." },
                            { num: 4, text: "Master the AI-Powered Flipped Classroom to build true 21st-century innovators." },
                            { num: 5, text: "Implement high-impact, low-tech AI solutions that work in absolutely every classroom environment." },
                            { num: 6, text: "Build your own customized, highly engaging personal AI textbook in just 10 minutes." },
                            { num: 7, text: "Transform dry subjects into captivating edutainment by producing educational music videos with AI." }
                          ].map((mod) => (
                            <div key={mod.num} className="flex gap-2.5 items-start">
                              <span className="w-5 h-5 rounded-md bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                                {mod.num}
                              </span>
                              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                                {mod.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tier 2 */}
                  <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col justify-between border border-slate-800">
                    <div className="absolute top-0 right-0 bg-[#ff6b00] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl font-heading">
                      Recommended
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-4">
                        <span className="font-heading font-black text-[#ff6b00] uppercase text-xs bg-[#ff6b00]/25 px-2.5 py-1 rounded">Tier 2</span>
                        <div className="text-right">
                          <p className="text-xs text-slate-400 line-through">₦75,000</p>
                          <p className="text-xl font-black text-white">₦60,000</p>
                        </div>
                      </div>
                      
                      <h4 className="font-heading font-black text-lg md:text-xl text-white mb-3">
                        The 14-Day Advanced Mastery Package
                      </h4>
                      <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed">
                        Our most comprehensive 14-day training program. This tier completely digitizes your staff's workflow, building a fully sustainable, gamified, and interactive digital command center.
                      </p>
                      
                      <ul className="space-y-2 text-xs md:text-sm mb-6 text-slate-300">
                        <li className="flex gap-2 items-start">
                          <Check className="text-[#ff6b00] w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span><strong>Curriculum:</strong> Covers all 12 Modules of the APL Framework.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <Check className="text-[#ff6b00] w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span><strong>Impact:</strong> Full digital integration, automated assessments, rapid visual creation, and sustainable cloud workspace.</span>
                        </li>
                      </ul>

                      {/* Replicated Advanced Curriculum */}
                      <div className="mt-6 pt-6 border-t border-slate-800">
                        <p className="font-heading font-extrabold text-xs text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-[#ff6b00]" /> Advanced Curriculum Modules (1-12)
                        </p>
                        <div className="space-y-3">
                          {[
                            { num: 1, text: "Shift your pedagogy from a traditional 'tape recorder' to a visionary global guide." },
                            { num: 2, text: "Demystify artificial intelligence and master the exact language needed to command AI tools." },
                            { num: 3, text: "Develop an AI mindset to equip the 2030 innovator while designing ethical, cheat-proof assessments." },
                            { num: 4, text: "Master the AI-Powered Flipped Classroom to build true 21st-century innovators." },
                            { num: 5, text: "Automate brilliance with the ChatGPT lesson design masterclass and rapid visual slide creation." },
                            { num: 6, text: "Animate your lessons and master mobile screen recording in the Instant Video Factory." },
                            { num: 7, text: "Implement high-impact, low-tech AI solutions that work in absolutely every classroom environment." },
                            { num: 8, text: "Build your own customized, highly engaging personal AI textbook in just 10 minutes." },
                            { num: 9, text: "Transform dry subjects into captivating edutainment by producing educational music videos with AI." },
                            { num: 10, text: "Create a gamified classroom with automated, interactive assessments to boost student engagement." },
                            { num: 11, text: "Achieve a sustainable classroom through seamless cloud organization with Google Drive." },
                            { num: 12, text: "Structure your ultimate Digital Command Center using Google Classroom." }
                          ].map((mod) => (
                            <div key={mod.num} className="flex gap-2.5 items-start">
                              <span className="w-5 h-5 rounded-md bg-slate-850 text-[#ff6b00] border border-slate-700/50 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                                {mod.num}
                              </span>
                              <p className="text-slate-300 text-xs leading-relaxed">
                                {mod.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* How the Institutional Training Works */}
                <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 mb-10 dark:bg-slate-850 dark:border-slate-800 text-left">
                  <h4 className="font-heading font-black text-slate-900 mb-5 uppercase text-xs tracking-wider dark:text-white">
                    How The Institutional Training Works
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/15 text-[#ff6b00] flex items-center justify-center font-black flex-shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs uppercase tracking-wide text-slate-800 dark:text-white mb-1">Total Flexibility</h5>
                        <p className="text-slate-500 text-xs leading-relaxed dark:text-slate-400">
                          You dictate the start date that works best for your teachers’ convenience.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/15 text-[#ff6b00] flex items-center justify-center font-black flex-shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs uppercase tracking-wide text-slate-800 dark:text-white mb-1">Dedicated Support</h5>
                        <p className="text-slate-500 text-xs leading-relaxed dark:text-slate-400">
                          Your staff gets access to a private WhatsApp community to ensure no teacher is left behind.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/15 text-[#ff6b00] flex items-center justify-center font-black flex-shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs uppercase tracking-wide text-slate-800 dark:text-white mb-1">Immediate ROI</h5>
                        <p className="text-slate-500 text-xs leading-relaxed dark:text-slate-400">
                          The time teachers save on week one of daily prep will immediately offset the time spent on training.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Callout box */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 text-center mb-10 dark:bg-slate-850 dark:border-slate-800">
                  <p className="font-bold text-[#ff6b00] uppercase text-xs tracking-wider mb-2 font-heading">Ready to upgrade your school's pedagogy?</p>
                  <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed mb-6 dark:text-slate-300">
                    Reach out to us on WhatsApp to discuss your staff size, select your preferred training dates, and secure your school's slot.
                  </p>
                  <a 
                    href="https://wa.link/lbfcan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#e05e00] text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md"
                  >
                    <PhoneCall className="w-4 h-4 animate-pulse text-white" /> Book on WhatsApp <ExternalLink className="inline w-3 h-3 ml-1" />
                  </a>
                </div>

                {/* Big Button CTA */}
                <div className="text-center">
                  <a 
                    href="https://wa.link/lbfcan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4.5 rounded-full font-black text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-xl uppercase tracking-wider"
                  >
                    BOOK SCHOOL TRAINING VIA WHATSAPP <ExternalLink className="w-5 h-5 ml-2.5 text-white" />
                  </a>
                </div>

              </motion.div>
            )}


          </AnimatePresence>
        </div>
      </div>

      {/* 3. Who is this course for Section */}
      <WhoIsThisCourseFor />

      {/* 7. FAQ / Break objections Section */}
      <AddressingConcerns />

      {/* 9. Proof of Creation Bento Sandbox */}
      <ProofOfCreation />

      {/* 11. Meet the facilitator Section */}
      <MeetTheFacilitator />

      {/* 12. Three button CTA after Facilitator */}
      {renderThreeButtonCTA("Secure your training seat now:")}

      {/* 13. Footer is the absolute last element */}
      <Footer />

    </div>
  );
}
