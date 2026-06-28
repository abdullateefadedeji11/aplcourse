/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Flame, 
  Zap, 
  BookOpen, 
  Award, 
  Check, 
  CheckCircle2, 
  XCircle, 
  Tv, 
  Globe, 
  PhoneCall, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Download, 
  Maximize2, 
  Minimize2, 
  Users, 
  CheckSquare, 
  FileText, 
  Layout, 
  MessageSquare, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Play, 
  Lock, 
  Volume2, 
  Music, 
  Video, 
  Presentation, 
  Headphones, 
  ArrowRight, 
  HelpCircle, 
  Info, 
  X,
  Plus,
  AlertTriangle,
  FileCode,
  CheckSquare as CheckIcon,
  Moon,
  Sun,
  Laptop,
  GraduationCap,
  Building
} from 'lucide-react';
import { REDESIGNED_HTML } from './exportedHtml';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType: 'logo' | 'coach' | 'footer-logo';
}

function SafeImage({ src, alt, className = "", fallbackType }: SafeImageProps) {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    if (fallbackType === 'logo') {
      return (
        <div className={`flex items-center justify-center bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-xl font-black font-heading ${className}`}>
          GEA
        </div>
      );
    } else if (fallbackType === 'coach') {
      return (
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy to-slate-900 border border-slate-800 text-center p-6 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-4 shadow-neon-orange/10">
            <Users className="w-10 h-10 animate-float text-brand-orange" />
          </div>
          <p className="text-white font-extrabold text-xs uppercase tracking-wider font-heading">Coach Photo</p>
          <p className="text-[11px] text-slate-500 mt-1">Abdullateef Adedeji</p>
        </div>
      );
    } else {
      return (
        <div className={`flex items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 rounded font-bold font-heading ${className}`}>
          GEA Academy
        </div>
      );
    }
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
    />
  );
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const [timeLeft, setTimeLeft] = useState(() => {
    const difference = +new Date("2026-07-11T09:00:00") - +new Date();
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
      const difference = +new Date("2026-07-11T09:00:00") - +new Date();
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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#ff6b00] selection:text-white relative min-h-screen font-sans overflow-x-hidden">
      
      {/* Mesh Gradient Background Elements for Immersive Frosted Glass Feel */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[45%] bg-[#ff6b00] rounded-full blur-[160px] opacity-[0.05] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[40%] bg-blue-500 rounded-full blur-[150px] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="absolute top-[50%] left-[-15%] w-[50%] h-[45%] bg-[#ff6b00] rounded-full blur-[170px] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="absolute top-[75%] right-[-10%] w-[45%] h-[40%] bg-blue-600 rounded-full blur-[150px] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-2%] left-[15%] w-[45%] h-[40%] bg-[#ff6b00] rounded-full blur-[150px] opacity-[0.04] pointer-events-none z-0"></div>

      {/* Decorative vertical texts */}
      <div className="absolute right-0 top-[15%] -translate-y-1/2 translate-x-12 rotate-90 text-[100px] font-black text-slate-900/[0.015] pointer-events-none select-none z-0 uppercase tracking-widest">
        APL_SYSTEM_CERT
      </div>
      <div className="absolute left-0 top-[65%] -translate-y-1/2 -translate-x-12 -rotate-90 text-[100px] font-black text-slate-900/[0.015] pointer-events-none select-none z-0 uppercase tracking-widest">
        GROWTH_MINDED
      </div>

      {/* Top Floating Control Bar for Live Timer */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#ff6b00]/85 via-red-600/85 to-[#ff6b00]/85 backdrop-blur-md text-white py-3 px-4 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-xs md:text-sm font-black tracking-wide uppercase">
            <span className="inline-flex h-2 w-2 rounded-full bg-white animate-ping"></span>
            🚨 July 11th & 12th Masterclass Registration is Live!
          </div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-black/20 px-3.5 py-1 rounded-full border border-white/10 font-mono text-white">
            ⏰ {timeLeft.isExpired ? "Registration Closed" : `Closes in: ${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
          </div>
        </div>
      </div>

      {/* Main Premium Navigation Header */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-[48px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SafeImage 
              src="/gea_logo.png" 
              alt="GEA Logo" 
              fallbackType="logo" 
              className="h-10 w-auto object-contain rounded-lg border border-slate-200 p-1 bg-white shadow-sm" 
            />
            <span className="font-heading font-extrabold text-sm md:text-lg tracking-tight text-slate-900">
              Growth-minded <span className="text-[#ff6b00] font-black">Educators Academy</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all duration-300 border border-slate-200/50 shadow-sm flex items-center justify-center cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <a href="#checkout" className="bg-[#ff6b00] hover:bg-[#ea580c] text-white px-6 py-2.5 rounded-full font-black text-sm tracking-wide hover:shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:scale-105 transition-all duration-300 uppercase">
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero-section" className="relative pt-12 pb-24 md:pt-20 md:pb-36 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 backdrop-blur-sm text-[#ff6b00] font-bold text-xs md:text-sm mb-6 tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4 animate-spin text-[#ff6b00]" style={{ animationDuration: '4s' }} />
            The Rules of Education Have Changed
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight mb-8 font-heading">
            Master AI. Eliminate Burnout. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">Multiply Your Income & Impact.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Welcome to the <strong className="text-slate-900 font-semibold">Two-Tiered AI-Powered Learning (APL) Certification Course.</strong> Transition from an exhausted "Content Dispenser" to a highly respected, highly paid <strong className="text-[#ff6b00] font-semibold">"Global Guide."</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#checkout" className="w-full sm:w-auto bg-[#ff6b00] text-white px-8 py-5 rounded-full font-black text-lg tracking-wide hover:shadow-[0_0_25px_rgba(255,107,0,0.45)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg uppercase">
              SECURE YOUR TIER NOW 👉
            </a>
            <a href="#course-pitch" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 px-8 py-5 rounded-full font-bold text-lg tracking-wide hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
              <Info className="w-5 h-5 text-slate-500" /> See How It Works
            </a>
          </div>

          {/* Big Glassmorphic Countdown Timer */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white border border-slate-200/80 rounded-[2rem] p-6 md:p-8 text-center shadow-[0_10px_35px_rgba(15,23,42,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b00]/50 to-transparent"></div>
              
              <p className="text-[#ff6b00] font-black text-xs md:text-sm tracking-widest uppercase mb-5 flex items-center justify-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                Countdown to July 11, 2026 Masterclass
              </p>
              
              <div className="grid grid-cols-4 gap-3 md:gap-5">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 md:p-4 flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-black text-slate-900 font-mono tracking-tight">{timeLeft.days}</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mt-1.5">Days</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 md:p-4 flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-black text-slate-900 font-mono tracking-tight">{timeLeft.hours}</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mt-1.5">Hours</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 md:p-4 flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-black text-slate-900 font-mono tracking-tight">{timeLeft.minutes}</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mt-1.5">Mins</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 md:p-4 flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-black text-slate-900 font-mono tracking-tight">{timeLeft.seconds}</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mt-1.5">Secs</span>
                </div>
              </div>
              
              <p className="text-slate-500 text-xs md:text-sm mt-5 font-light leading-relaxed">
                Unlock instant access to all recordings, the exclusive WhatsApp support group, and premium bonuses immediately upon registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Section */}
      <section id="course-pitch" className="py-20 md:py-28 px-4 bg-transparent text-slate-800 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">The Paradigm Shift</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-2 leading-tight font-heading">
              You Deserve Profound Fulfillment <span className="text-[#ff6b00]">&</span> True Financial Reward.
            </h2>
            <div className="w-24 h-1.5 bg-[#ff6b00] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="text-slate-600 space-y-8 leading-relaxed text-base md:text-lg">
            <p>At the heart of every educator is a deep, burning desire for two things: <strong className="text-slate-950 font-extrabold">Profound Fulfillment and True Financial Reward.</strong></p>
            <p>You didn't choose this noble profession to drown in paperwork or struggle from paycheck to paycheck. You want a career where you actively change lives. Where a child’s eyes light up because you finally helped them understand a complex concept. But let us be brutally honest: <strong className="text-[#ff6b00] font-black">you also desire a career that is highly profitable.</strong> You want your expertise to command premium value, and you want to provide for your family without burning the candle at both ends.</p>
            <p>Similarly, if you are a <strong className="text-slate-950 font-extrabold">School Owner</strong>, you desire an institution that isn't just surviving on tight, stressful margins. You want a beacon of excellence—a highly profitable, premium brand with a waitlist of eager parents and a loyal team of energetic teachers.</p>
            
            {/* The Tape Recorder Trap Component */}
            <div className="my-12 p-8 md:p-10 bg-white border-l-4 border-[#ff6b00] border-y border-r border-slate-200/80 rounded-r-2xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                <AlertTriangle className="w-32 h-32" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 flex items-center gap-3 font-heading">
                <AlertTriangle className="text-[#ff6b00] w-8 h-8 flex-shrink-0" />
                The Tape Recorder Trap
              </h3>
              <p className="mb-6 text-slate-600">But right now, there is a massive wall standing between you and that dream. Trying to teach a 21st-century mind with 19th-century tools is like trying to grow a lush garden in the middle of a desert.</p>
              <p className="mb-6 text-slate-600">Think about your typical weekend. Instead of resting and recharging, you are buried under a mountain of paper. Your hand aches from manually copying endless lesson notes into a diary that half your students will barely glance at. You are grading dozens of scripts, writing terminal reports, and trying to plan engaging activities, all while the clock aggressively ticks down to Monday morning. You are giving everything, yet feeling like you are constantly falling behind.</p>
              
              <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-inner border border-slate-100 text-slate-800 my-8 relative">
                <p className="font-extrabold text-[#ff6b00] text-xl md:text-2xl text-center leading-relaxed font-heading">
                  "You have become a 'Tape Recorder' in a Spotify world—spending hours delivering basic facts that a smartphone can pull up in three seconds."
                </p>
              </div>
              
              <p className="text-slate-600">If this cycle does not break, the passion that brought you to the classroom will be completely suffocated by this general overload. For school owners, an exhausted faculty leads to high staff turnover, frustrated parents, eroding academic standards, and the painful loss of your school's prestige to more innovative competitors down the street.</p>
            </div>
            
            {/* Step Out of the Factory Line Component */}
            <div className="my-12 p-8 md:p-10 bg-white text-slate-800 rounded-2xl shadow-[0_10px_35px_rgba(15,23,42,0.05)] border border-slate-200/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.04] pointer-events-none">
                <Zap className="w-32 h-32 text-[#ff6b00]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#ff6b00] mb-4 flex items-center gap-3 font-heading">
                <CheckCircle2 className="text-[#ff6b00] w-8 h-8 flex-shrink-0" />
                Step Out of the Factory Line
              </h3>
              <p className="text-slate-600 mb-6">What if AI became your high-performance engine, and YOU became the master pilot? In the AI-Powered Learning (APL) Course model, you step out of the factory line and into the highly respected role of a <strong className="text-[#ff6b00] font-extrabold">Learning Architect</strong>.</p>
              <p className="text-slate-600 mb-6">By automating the heavy lifting—the lesson planning, the grading, the slide creation—you reclaim your time, your energy, and your joy. But this is not just about saving you time; it is about saving your students' futures. Because you are no longer chained to the chalkboard reciting facts, you finally have the space to mentor. You empower your students with the elite 21st-century skills they desperately need to survive the 2030 job market: critical thinking, complex problem-solving, and deep collaboration. You become the visionary guide who teaches them <em>how</em> to think, not just <em>what</em> to think.</p>
              <p className="text-slate-600 mb-6">When you achieve this, everything changes. You suddenly have the time and the elite skills to charge premium rates, build a highly profitable digital presence, or elevate your school into the undisputed flagship academy of your city. The APL Framework is the ultimate key to the legacy and the income you deserve.</p>
              
              <p className="font-black text-[#ff6b00] text-xl mt-8 font-heading">It is time to transition from knowing what an AI-Powered Learning Facilitator is, to actually <span className="underline decoration-[#ff6b00]">becoming one</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Sub-Banner */}
      <section className="py-24 bg-transparent text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] text-slate-300">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-sub" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-sub)"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <span className="text-[#ff6b00] font-bold tracking-widest uppercase text-sm mb-4 inline-block font-heading">The Solution is Here</span>
          <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl mx-auto font-heading text-slate-900">
            Welcome to the 2-Tiered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">AI-Powered Learning Certification Course</span>
          </h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff6b00] to-yellow-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* NEW WEBINAR SUMMARY VIDEO SECTION */}
      <section className="py-24 bg-transparent text-slate-800 border-t border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/25 backdrop-blur-sm text-[#ff6b00] font-bold text-xs tracking-wider uppercase mb-4 font-heading">
            <Play className="w-3.5 h-3.5 fill-current text-[#ff6b00]" />
            See It In Action
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight font-heading text-slate-900">
            Watch the AI-Powered Learning Facilitator Webinar Summary
          </h3>
          
          {/* MacBook Device Frame Mockup */}
          <div className="relative mx-auto max-w-3xl mb-12 shadow-2xl rounded-2xl border border-slate-200 bg-white p-2 md:p-4 shadow-[0_15px_45px_rgba(15,23,42,0.06)] backdrop-blur-md">
            <div className="flex items-center justify-between pb-2 px-2 border-b border-slate-100 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">GEA WEBINAR SUMMIT</span>
              <div className="w-10"></div>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-video">
              <iframe 
                src="https://www.youtube.com/embed/BJd8VWjPnRM?si=tf_TVFg9I-BdlCvp" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover exactly how this framework will transform your teaching, eliminate burnout, and elevate your income in the digital age.
          </p>
        </div>
      </section>

      {/* Who is This Course For Section */}
      <section className="py-24 bg-transparent text-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Empower Your Future</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading">Who Is This Course For?</h2>
            <p className="text-lg text-slate-600">The AI-Powered Learning framework is customized for growth-minded individuals ready to rewrite their educational legacy.</p>
            <div className="w-20 h-1.5 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors font-heading">Exhausted Classroom Teachers</h4>
              <p className="text-slate-600 leading-relaxed text-sm">Who desperately want to reclaim their weekends, eliminate burnout, and become highly valued, well-paid 21st-century educators.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                <Building className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors font-heading">Visionary School Owners & Admins</h4>
              <p className="text-slate-600 leading-relaxed text-sm">Who want to standardise global excellence across their faculty, eradicate staff turnover, and turn their school into a highly profitable premium brand.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                <Tv className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors font-heading">Online Teachers & Creators</h4>
              <p className="text-slate-600 leading-relaxed text-sm">Who want to scale their impact across borders, package their knowledge into premium virtual programs, and stand out in the digital economy.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors font-heading">Private Tutors & Consultants</h4>
              <p className="text-slate-600 leading-relaxed text-sm">Who want to deliver mind-blowing, personalised learning experiences that effortlessly justify charging premium, high-ticket rates.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                <Laptop className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors font-heading">Ed-Tech & Curriculum Developers</h4>
              <p className="text-slate-600 leading-relaxed text-sm">Who want to master rapid resource creation and stay lightyears ahead of the curve in the competitive global education market.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors font-heading">Forward-Thinking Graduates</h4>
              <p className="text-slate-600 leading-relaxed text-sm">Who want to enter the competitive job market not as novices, but as highly sought-after, highly paid digital learning experts.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="#checkout" className="inline-flex bg-[#ff6b00] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-[#ea580c] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,0,0.45)] uppercase tracking-wide font-heading">
              YES, I AM READY TO ENROLL NOW 👉
            </a>
          </div>
        </div>
      </section>

      {/* Proof/Visual Examples Bento Section */}
      <section className="py-24 bg-transparent text-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] text-slate-300 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-sm font-heading">Aesthetic & Practical Proof</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 font-heading">Imagine Creating <span className="text-[#ff6b00]">THIS</span> For Your Students...</h2>
            <p className="text-lg text-slate-600 leading-relaxed">During this course, you won't just learn theory. You will build a captivating automated resource factory. Here is a taste of what you will master.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff6b00] to-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Video 1 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300 backdrop-blur-md">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2 font-heading">
                  <Video className="text-[#ff6b00] w-5 h-5" /> AI-Powered Video Lessons
                </h4>
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/eQZrRzVnSr8?si=wdTQqTerRQ0FMRbf" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed border-t border-slate-100 pt-3">
                Learn to convert text scripts into highly engaging educational videos with b-roll and engaging visuals in minutes.
              </p>
            </div>

            {/* Video 2 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300 backdrop-blur-md">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2 font-heading">
                  <Music className="text-[#ff6b00] w-5 h-5" /> Educational Music Videos
                </h4>
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/rmQLg9Tbdwk?si=vEUrurFIV2Ku565z" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed border-t border-slate-100 pt-3">
                Turn complex formulas or historical facts into catchy, memorable songs that students can't stop singing.
              </p>
            </div>

            {/* Slides 3 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300 backdrop-blur-md">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2 font-heading">
                  <Presentation className="text-[#ff6b00] w-5 h-5" /> AI-Generated Slide Decks
                </h4>
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-video">
                  <iframe 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRNwdK9ivYzeZ6G9F04pfeWEZOscArDrCK7TFWkfFuYNlvxa9z67rfviN-WuEw17s079mYFNIPUxqlA/pubembed?start=true&loop=true&delayms=3000" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed border-t border-slate-100 pt-3">
                Turn raw text into beautifully structured, professional slide decks using tools like Manus and NotebookLM in under 3 minutes.
              </p>
            </div>

            {/* Audio 4 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300 backdrop-blur-md">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2 font-heading">
                  <Headphones className="text-[#ff6b00] w-5 h-5" /> NotebookLM Audio Overviews
                </h4>
                <div className="bg-slate-50 rounded-xl border border-slate-200/60 p-6 text-center flex flex-col justify-center items-center h-[230px]">
                  <div className="w-12 h-12 rounded-full bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] mb-3">
                    <Headphones className="w-6 h-6 animate-float" />
                  </div>
                  <p className="text-slate-900 font-semibold text-sm mb-4">Listen to an AI-Generated Audio Summary</p>
                  
                  <div className="w-full h-[60px] rounded-lg overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <iframe 
                      src="https://drive.google.com/file/d/1uaGbur57RUU7-THO_BR1DuX8Pz8IcfwM/preview" 
                      width="100%" 
                      height="60" 
                      allow="autoplay" 
                      className="border-none"
                      loading="lazy"
                    ></iframe>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 mt-3 text-center">
                    Having trouble playing? <a href="https://drive.google.com/file/d/1uaGbur57RUU7-THO_BR1DuX8Pz8IcfwM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#ff6b00] hover:underline font-bold inline-flex items-center gap-1">Listen on Google Drive <ExternalLink className="w-3 h-3" /></a>
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed border-t border-slate-100 pt-3">
                Generate interactive podcast-style audio summaries of your lesson notes for students to consume on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-transparent text-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Step-by-Step Blueprint</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 font-heading text-slate-900">The 2-Tier Course <span className="text-[#ff6b00]">Curriculum</span></h2>
            <p className="text-lg text-slate-600">Choose the path that fits your goals. The Basic tier builds your unbreakable foundation, while the Advanced tier transforms you into a complete Digital Architect.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff6b00] to-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            {/* Basic Course Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_35px_rgba(15,23,42,0.04)] relative flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-300">
              <div>
                <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-600 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-sm font-heading">
                  THE BASIC COURSE
                </div>
                <p className="text-slate-600 italic mb-3 font-light leading-relaxed">The ultimate foundation. We destroy the exhausting "Sage on the Stage" identity and empower you with high-impact, low-tech AI strategies.</p>
                <p className="text-blue-600 font-bold text-sm mb-8 flex items-center gap-2">
                  <Play className="w-4 h-4 text-blue-500" /> Instant Pre-Recorded Videos + Dedicated WhatsApp Support
                </p>
                
                <div className="space-y-6">
                  {/* Modules 1 to 6 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 1: Intro to AI-Powered Learning</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Grasping the "What" and "Why" to future-proof your career and boost your value.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 2: Fundamentals of AI & Data Ethics</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Demystifying tech and protecting privacy so you teach with absolute confidence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 3: The AI-Mindset & AI-Proof Teacher</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Amplifying the human empathy that algorithms can't replicate to make you indispensable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 4: The Low-Tech Revolution</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Implementing high-level AI pedagogy even in low-tech/low-bandwidth environments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 5: NotebookLM & 10-Minute Factory</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Building a personal AI textbook to create incredible study guides instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 6: Music Video Creation</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Turning complex academic concepts into highly engaging musical hits your students will love.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Course Card */}
            <div className="bg-white border-2 border-[#ff6b00] rounded-3xl p-8 shadow-[0_15px_45px_rgba(255,107,0,0.06)] relative flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(255,107,0,0.12)] transition-all duration-300">
              <div className="absolute -top-4 right-8 bg-[#ff6b00] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-md font-heading animate-pulse">
                RECOMMENDED TRACK
              </div>
              <div>
                <div className="inline-block bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-sm font-heading">
                  THE ADVANCED COURSE
                </div>
                <p className="text-slate-700 italic mb-3 font-semibold leading-relaxed">You get <strong className="text-[#ff6b00] font-bold">everything in the Basic Course</strong> PLUS the ultimate execution blueprint for video, slide creation, and gamification.</p>
                <p className="text-[#ff6b00] font-bold text-sm mb-8 flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#ff6b00]" /> Instant Pre-Recorded Videos + Live Saturday Review Sessions
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-[#ff6b00]/5 p-4 rounded-xl border border-[#ff6b00]/10 mb-4">
                    <div className="bg-[#ff6b00]/20 text-[#ff6b00] rounded-xl p-2 flex-shrink-0"><Plus className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-[#ff6b00] font-bold text-base font-heading">Includes All Modules 1-6</h5>
                      <p className="text-slate-500 text-xs">Everything in Basic is included and pre-unlocked.</p>
                    </div>
                  </div>
                  
                  {/* Modules 7 to 12 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-[#ff6b00]/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 7: AI-Powered Flipped Classroom</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Effortlessly shifting students from passive listeners to highly engaged problem solvers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-[#ff6b00]/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 8: Rapid Slide Creation & Lesson Planning</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Using AI to generate weeks of brilliant notes in mere minutes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-[#ff6b00]/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 9: AI-Powered Video Creation</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Screen recording and video generation to create premium, customized content.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-[#ff6b00]/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 10: Gamified Assessment</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Designing AI-proof quizzes and addictive classroom games that make learning irresistible.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-[#ff6b00]/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 11: Google Drive Mastery</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Elite cloud architecture for modern teachers (never lose a file or lesson note again).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-[#ff6b00]/20"><Check className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-base font-heading">Module 12: Google Classroom</h5>
                      <p className="text-slate-500 text-sm mt-0.5">Integrating your AI resources into a world-class digital environment for seamless teaching.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a href="#checkout" className="inline-flex bg-gradient-to-r from-[#ff6b00] to-red-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-[#ff6b00] transition-all duration-300 shadow-[0_0_25px_rgba(255,107,0,0.35)] uppercase tracking-wide pulse-btn font-heading">
              I AM READY FOR THIS TRANSFORMATION 👉
            </a>
          </div>
        </div>
      </section>

      {/* Bonus Bundle Grid */}
      <section className="py-24 bg-transparent text-slate-800 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Unbeatable Value Bundle</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 font-heading text-slate-900">Exclusive <span className="text-[#ff6b00]">Course Bonuses</span></h2>
            <p className="text-lg text-slate-600">When you enroll today, you unlock a treasure chest of premium resources designed to skyrocket your teaching income and visibility.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff6b00] to-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bonus 1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-[#ff6b00]/30 flex flex-col justify-between shadow-sm hover:shadow-md">
              <span className="absolute top-0 right-0 bg-blue-50 text-blue-600 border-l border-b border-slate-150 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider font-heading">Basic & Advanced</span>
              <div>
                <div className="w-12 h-12 bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-xl flex items-center justify-center mb-5 text-[#ff6b00]">
                  <Cpu className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-heading">6 Videos on The Empowered Educator Mindset</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Rewire your psychology for absolute success. Break free from limiting beliefs and step into your true power and worth as a Global Guide.</p>
              </div>
            </div>
            
            {/* Bonus 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-[#ff6b00]/30 flex flex-col justify-between shadow-sm hover:shadow-md">
              <span className="absolute top-0 right-0 bg-blue-50 text-blue-600 border-l border-b border-slate-150 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider font-heading">Basic & Advanced</span>
              <div>
                <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-5 text-green-600">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-heading">Teach Smart, Earn Big</h4>
                <p className="text-sm text-slate-600 leading-relaxed">The exact roadmap to monetizing your new skills. Learn how to stop undercharging and start building multiple, highly profitable streams of income.</p>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-[#ff6b00]/30 flex flex-col justify-between shadow-sm hover:shadow-md">
              <span className="absolute top-0 right-0 bg-blue-50 text-blue-600 border-l border-b border-slate-150 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider font-heading">Basic & Advanced</span>
              <div>
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-5 text-blue-600">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-heading">AI Prompts for Teachers Playbook</h4>
                <p className="text-sm text-slate-600 leading-relaxed">A copy-and-paste library of elite, battle-tested AI prompts. Never stare at a blank screen again; just plug these in and get magic instantly.</p>
              </div>
            </div>

            {/* Bonus 4 (LIVE) */}
            <div className="bg-white rounded-3xl p-6 border-2 border-[#ff6b00] relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(255,107,0,0.1)] flex flex-col justify-between shadow-sm">
              <span className="absolute top-0 right-0 bg-[#ff6b00] text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-widest shadow-sm font-heading">Basic & Advanced (Live Access)</span>
              <div>
                <div className="w-12 h-12 bg-[#ff6b00]/20 border border-[#ff6b00]/40 rounded-xl flex items-center justify-center mb-5 text-[#ff6b00]">
                  <Video className="w-6 h-6 text-[#ff6b00] animate-pulse" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-heading">LIVE MASTERCLASS: Personal Branding & Visibility Strategies</h4>
                <p className="text-sm text-slate-600 leading-relaxed">If you are a hidden gem, you cannot charge a premium. Discover live how to build a magnetic personal brand leveraging AI that attracts premium clients and opportunities.</p>
              </div>
            </div>

            {/* Bonus 5 (LIVE) */}
            <div className="bg-white rounded-3xl p-6 border-2 border-[#ff6b00] relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(255,107,0,0.1)] flex flex-col justify-between shadow-sm">
              <span className="absolute top-0 right-0 bg-[#ff6b00] text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-widest shadow-sm font-heading">Basic & Advanced (Live Access)</span>
              <div>
                <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center mb-5 text-yellow-600">
                  <Building className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-heading">LIVE MASTERCLASS: Profitable AI-Powered Educator</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Specifically designed for School Owners and Ambitious Teachers: Learn how to leverage your new AI skills to drastically boost your enrollment and brand value.</p>
              </div>
            </div>

            {/* Bonus 6 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-[#ff6b00]/50 flex flex-col justify-between shadow-sm hover:shadow-md">
              <span className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider font-heading">Advanced Only</span>
              <div>
                <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center mb-5 text-pink-600">
                  <Download className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-heading">Lifetime Access to All Recordings</h4>
                <p className="text-sm text-slate-600 leading-relaxed">While Basic users only get live access to the Masterclasses and Reviews, Advanced users receive the full library of recordings to replay, study, and master forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-transparent text-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Friction Killer</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading">Addressing Your Concerns</h2>
            <p className="text-lg text-slate-600">Still on the fence? Let's dismantle every doubt and clear your path to success.</p>
            <div className="w-20 h-1.5 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-[#ff6b00]/30">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-start gap-3 font-heading focus:outline-none"
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className="text-[#ff6b00] w-6 h-6 flex-shrink-0 mt-0.5" />
                  "I don't have the time during the week for this."
                </span>
                {activeFaq === 0 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <div className={`mt-4 pl-9 text-slate-600 leading-relaxed text-sm transition-all duration-300 ${activeFaq === 0 ? 'block' : 'hidden'}`}>
                <p><strong className="text-slate-900">We completely eliminated the weekday stress!</strong> Every participant gets <strong className="text-[#ff6b00] font-semibold">instant access</strong> to all their pre-recorded videos to watch anytime, along with a 24/7 dedicated WhatsApp support group. Furthermore, for our Advanced and School tiers, all live review sessions are strictly held on <strong className="text-[#ff6b00] font-semibold">weekends</strong> (Saturdays).</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-[#ff6b00]/30">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-start gap-3 font-heading focus:outline-none"
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className="text-[#ff6b00] w-6 h-6 flex-shrink-0 mt-0.5" />
                  "I am not very tech-savvy. Will I struggle?"
                </span>
                {activeFaq === 1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <div className={`mt-4 pl-9 text-slate-600 leading-relaxed text-sm transition-all duration-300 ${activeFaq === 1 ? 'block' : 'hidden'}`}>
                <p>If you know how to send a WhatsApp message, you can master this course. We teach you the language of AI (Prompt Engineering), not complicated coding. We start from the absolute basics.</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-[#ff6b00]/30">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-start gap-3 font-heading focus:outline-none"
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className="text-[#ff6b00] w-6 h-6 flex-shrink-0 mt-0.5" />
                  "My school doesn't have high-end gadgets or strong Wi-Fi."
                </span>
                {activeFaq === 2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <div className={`mt-4 pl-9 text-slate-600 leading-relaxed text-sm transition-all duration-300 ${activeFaq === 2 ? 'block' : 'hidden'}`}>
                <p>We specifically designed <strong className="text-slate-900 font-semibold">Module 4: The Low-Tech Revolution</strong> for the African reality. We will show you how to do the heavy lifting on your smartphone at home, and bring the magical results into a low-tech classroom.</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-[#ff6b00]/30">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-start gap-3 font-heading focus:outline-none"
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className="text-[#ff6b00] w-6 h-6 flex-shrink-0 mt-0.5" />
                  "Will AI eventually replace me?"
                </span>
                {activeFaq === 3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <div className={`mt-4 pl-9 text-slate-600 leading-relaxed text-sm transition-all duration-300 ${activeFaq === 3 ? 'block' : 'hidden'}`}>
                <p>AI will never replace a teacher. But a teacher who uses AI will absolutely replace the teacher who refuses to. This course ensures you are the one steering the machine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section with Pricing Cards */}
      <section id="checkout" className="py-24 bg-transparent text-slate-800 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.03),transparent_45%)] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Invest in Excellence</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-2 mb-6 font-heading">Choose Your <span className="text-[#ff6b00]">Transformation Tier</span></h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              Global educators pay hundreds of dollars to acquire these elite skills. Because the future of African education is an emergency, we have heavily subsidized this course. Lock in your package now.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff6b00] to-yellow-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* INDIVIDUAL PACKAGES */}
          <div className="text-center mt-12 mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 border-b-4 border-[#ff6b00] inline-block pb-3 uppercase tracking-wide font-heading">
              INDIVIDUAL PACKAGES
            </h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-medium text-sm md:text-base">100% Virtual Training for the dedicated educator. Choose your path to mastery.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-24 items-stretch">
            {/* Basic Individual */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_35px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300 relative pt-12">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-100 border border-slate-200 text-slate-700 px-5 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase font-heading">
                The Foundation
              </div>
              <div>
                <div className="text-center border-b border-slate-100 pb-6 mb-8">
                  <h4 className="text-2xl font-black text-slate-900 tracking-wide uppercase font-heading">BASIC COURSE</h4>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Pre-Recorded Videos + Premium WhatsApp Support</p>
                  
                  <div className="mt-6 flex flex-col justify-center items-center gap-1">
                    <span className="text-lg text-slate-400 line-through font-bold">₦10,000</span>
                    <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">₦7,500</span>
                    <span className="text-green-600 font-bold mt-3 bg-green-500/10 border border-green-500/20 inline-block px-4 py-1 rounded-full text-xs">Discount Applied!</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 text-slate-600">
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Instant Access to All Pre-Recorded Videos</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Dedicated WhatsApp Group for Q&A</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Access to Modules 1 - 6</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Live Access: July 11/12 Masterclasses</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Basic Bonuses Included</li>
                  <li className="flex items-center gap-3 text-sm text-slate-400 line-through"><XCircle className="text-slate-300 w-4 h-4 flex-shrink-0" /> No Live Review Sessions</li>
                  <li className="flex items-center gap-3 text-sm text-slate-400 line-through"><XCircle className="text-slate-300 w-4 h-4 flex-shrink-0" /> No Course Recordings</li>
                </ul>
              </div>
            </div>

            {/* Advanced Individual */}
            <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-md flex flex-col justify-between relative pt-12 border-4 border-[#ff6b00] hover:shadow-[0_15px_45px_rgba(255,107,0,0.12)] transition-all duration-300">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff6b00] to-red-600 text-white px-6 py-2 rounded-full font-black text-xs tracking-widest uppercase shadow-lg whitespace-nowrap font-heading">
                BEST VALUE TIER
              </div>
              <div>
                <div className="text-center border-b border-slate-100 pb-6 mb-8">
                  <h4 className="text-2xl font-black text-slate-900 tracking-wide uppercase font-heading">ADVANCED COURSE</h4>
                  <p className="text-xs text-[#ff6b00] mt-2 font-black">Pre-Recorded Videos + Live Saturday Review Sessions</p>
                  
                  <div className="mt-6 flex flex-col justify-center items-center gap-1">
                    <span className="text-lg text-slate-400 line-through font-bold">₦15,000</span>
                    <span className="text-5xl md:text-6xl font-black text-[#ff6b00] tracking-tight">₦12,000</span>
                    <span className="text-[#ff6b00] font-bold mt-3 bg-[#ff6b00]/10 border border-[#ff6b00]/20 inline-block px-4 py-1 rounded-full text-xs animate-pulse">Most Popular</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 text-slate-600">
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Instant Access to All Pre-Recorded Videos</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Dedicated WhatsApp Group for Q&A</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> <strong className="text-slate-900 font-bold">Live Saturday Review Sessions</strong></li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Access to ALL Modules 1 - 12</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Live Access: July 11/12 Masterclasses</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> <strong className="text-slate-900 font-bold">Lifetime Access to All Recordings</strong></li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> All Premium Bonuses Included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SCHOOL PACKAGES */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 border-b-4 border-[#ff6b00] inline-block pb-3 uppercase tracking-wide font-heading">
              SCHOOL PACKAGES
            </h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-medium text-sm md:text-base">100% Virtual Training designed for teams of 5 teachers. Empower your entire staff and save massively.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16 items-stretch">
            {/* Basic School */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative">
              <div>
                <div className="text-center border-b border-slate-100 pb-6 mb-8">
                  <h4 className="text-2xl font-black text-blue-600 tracking-wide uppercase font-heading">BASIC SCHOOL TIER</h4>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Pre-Recorded Videos + 1 Live Review Session</p>
                  
                  <div className="mt-6 flex flex-col justify-center items-center gap-1">
                    <span className="text-lg text-slate-400 line-through font-bold">₦50,000</span>
                    <span className="text-5xl font-black text-blue-600 tracking-tight">₦40,000</span>
                    <span className="text-blue-600 font-bold mt-3 bg-blue-50 border border-blue-200 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider">For 5 Teachers</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 text-slate-600">
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Instant Access to All Pre-Recorded Videos</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> <strong className="text-slate-900 font-bold">1 Exclusive Live Review Session for your team</strong></li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Personalised Group Support for all 5 teachers</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Access to Modules 1 - 6</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Live Access: July 11/12 Masterclasses</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-blue-500 w-4 h-4 flex-shrink-0" /> Basic Bonuses Included</li>
                </ul>
              </div>
            </div>

            {/* Advanced School */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative">
              <div>
                <div className="text-center border-b border-slate-100 pb-6 mb-8">
                  <h4 className="text-2xl font-black text-[#ff6b00] tracking-wide uppercase font-heading">ADVANCED SCHOOL TIER</h4>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Pre-Recorded Videos + 2 Live Review Sessions</p>
                  
                  <div className="mt-6 flex flex-col justify-center items-center gap-1">
                    <span className="text-lg text-slate-400 line-through font-bold">₦75,000</span>
                    <span className="text-5xl font-black text-[#ff6b00] tracking-tight">₦60,000</span>
                    <span className="text-[#ff6b00] font-bold mt-3 bg-orange-50 border border-orange-200 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider">For 5 Teachers</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 text-slate-600">
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Instant Access to All Pre-Recorded Videos</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> <strong className="text-slate-900 font-bold">2 Exclusive Live Review Sessions for your team</strong></li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Personalised Group Support for all 5 teachers</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> Access to ALL Modules 1 - 12</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> <strong className="text-slate-900 font-bold">Lifetime Access to All Recordings</strong></li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="text-[#ff6b00] w-4 h-4 flex-shrink-0" /> All Premium Bonuses Included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Physical Training Option Callout */}
          <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.05),transparent_70%)] pointer-events-none"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#ff6b00] opacity-5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-[#ff6b00]/10 text-[#ff6b00] w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-[#ff6b00]/20 shadow-inner">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 font-heading">Prefer Physical Training?</h3>
              <p className="text-[#ff6b00] font-bold text-lg mb-4 uppercase tracking-wider font-heading">Available strictly for August 2026</p>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                Want us to train your entire staff in person? Book an exclusive, highly interactive physical session tailored specifically for your school's unique needs.
              </p>
              <a href="tel:09154667467" className="inline-flex bg-slate-900 text-white px-8 py-4.5 rounded-full font-black text-base hover:bg-[#ff6b00] hover:text-white hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 animate-float">
                <PhoneCall className="w-5 h-5 animate-pulse text-[#ff6b00]" /> Call or Message: 09154667467
              </a>
            </div>
          </div>

          {/* PAYMENT STEPS BOX */}
          <div className="mt-20 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff6b00] to-yellow-500"></div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 font-heading">How To Secure Your Seat Right Now:</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
              
              {/* Step 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex-1 w-full text-left flex flex-col justify-between">
                <div>
                  <div className="bg-[#ff6b00] text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg mb-5 shadow-[0_0_15px_rgba(255,107,0,0.3)]">1</div>
                  <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase tracking-wide font-heading">Make Payment</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 relative overflow-hidden shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                      <p className="font-bold text-slate-500 mb-1.5 text-[10px] uppercase tracking-wider">🇳🇬 For Nigerian Residents (Naira):</p>
                      <p className="font-mono text-2xl font-black text-slate-900 tracking-widest select-all">3138340156</p>
                      <p className="font-black text-[#ff6b00] text-sm mt-1 font-heading">FIRST BANK</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200 relative overflow-hidden shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6b00]"></div>
                      <p className="font-bold text-slate-500 mb-2.5 text-[10px] uppercase tracking-wider">🌍 For International Participants:</p>
                      <a href="https://geacademy.selar.com/aplbootcamp" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-[#ff6b00] to-red-600 text-white text-center py-3 rounded-lg font-black hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all duration-300 text-xs uppercase tracking-wider">
                        Pay Securely via Selar <ExternalLink className="inline w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="text-[#ff6b00] self-center hidden md:block">
                <ArrowRight className="w-8 h-8" />
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex-1 w-full text-left flex flex-col justify-between">
                <div>
                  <div className="bg-[#ff6b00] text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg mb-5 shadow-[0_0_15px_rgba(255,107,0,0.3)]">2</div>
                  <h4 className="font-bold text-lg mb-3 text-slate-900 uppercase tracking-wide font-heading">Upload Receipt</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Click the button below to fill out the secure registration form and upload your proof of payment to get immediate access to the course tier and bonuses you selected.
                  </p>
                </div>
                <a href="https://forms.gle/xWbfNu9aQKytwxaZ9" target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-900 text-white text-center py-4 rounded-lg font-black hover:bg-[#ff6b00] hover:text-white transition-all duration-300 shadow-md uppercase tracking-wider text-xs">
                  Open Registration Form <ExternalLink className="inline w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Facilitator Section */}
      <section className="py-24 bg-slate-50 text-slate-950 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-black tracking-widest uppercase text-xs md:text-sm font-heading">Your Master Coach</span>
            <h3 className="text-3xl md:text-5xl font-black text-brand-navy mt-2 mb-4 font-heading">Meet The Facilitator</h3>
            <div className="w-20 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            {/* Image container */}
            <div className="lg:w-5/12 bg-brand-navy relative overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dots-fac" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots-fac)" />
                </svg>
              </div>
              <SafeImage 
                src="/abdullateef.jpg" 
                alt="Coach Abdullateef Adedeji" 
                fallbackType="coach" 
                className="w-full h-full object-cover absolute inset-0 z-10 hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent h-44 z-20"></div>
            </div>
            
            {/* Bio Content */}
            <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2 font-heading">The Flipped Classroom Expert</span>
              <h4 className="text-3xl md:text-4xl font-black text-brand-navy mb-1 leading-tight font-heading">Abdullateef Adedeji</h4>
              <p className="text-brand-navy/80 font-semibold text-sm mb-6 pb-4 border-b border-slate-100 uppercase tracking-wider font-heading">
                Founder, Growth-minded Educators Academy
              </p>
              
              <div className="space-y-4 text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
                <p>Abdullateef Adedeji is a leading educational strategist and hands-on innovator widely recognized as "The Flipped Classroom Expert." With a proven track record of training over 1,000 educators across Nigeria, Ghana, Cameroon, and the USA, he specializes in transforming traditional teaching into dynamic, highly profitable technology-driven ecosystems.</p>
                <p>As a researcher at the International Centre for Applied Mathematical Modelling and Data Analytics and founder of the Growth-minded Educators Academy, Abdullateef operates at the cutting edge of modern pedagogy. His expertise on the digital economy and pedagogical reform has been featured in three high-profile television appearances, including Kaftan TV’s DayBreak Africa and News Central TV.</p>
                <p>By combining deep instructional insight with actionable frameworks, Abdullateef masterfully equips teachers to facilitate AI-powered learning environments. He moves educators from exhausted digital spectators to confident, thriving facilitators—ensuring you build the deeply rewarding legacy you deserve.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-brand-navy font-bold flex items-center gap-2 text-xs uppercase tracking-wide shadow-sm">
                  <Globe className="text-brand-orange w-4 h-4" /> 1,000+ Educators Trained
                </div>
                <div className="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-brand-navy font-bold flex items-center gap-2 text-xs uppercase tracking-wide shadow-sm">
                  <Tv className="text-brand-orange w-4 h-4" /> Featured on News Central TV
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="#checkout" className="inline-flex bg-brand-orange text-white px-10 py-5 rounded-full font-black text-xl hover:bg-brand-orangeHover transition-all duration-300 shadow-neon-orange uppercase tracking-wide pulse-btn">
              SECURE YOUR COURSE TIER NOW 👉
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <SafeImage 
            src="/gea_logo.png" 
            alt="GEA Logo" 
            fallbackType="footer-logo" 
            className="h-14 w-auto object-contain rounded-lg mb-6 border border-slate-800 p-1 bg-brand-navy/50 opacity-85" 
          />
          <h3 className="text-white font-extrabold text-xl mb-2 font-heading tracking-wide uppercase">Growth-minded Educators Academy</h3>
          <p className="mb-8 max-w-md mx-auto text-sm leading-relaxed text-slate-400">
            Empowering African educators to transition from Content Dispensers to Global Guides.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <a href="https://chat.whatsapp.com/Gb5pEtxsQFG2LUzEjUYCcZ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="Join our WhatsApp Community">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
            <a href="https://web.facebook.com/geacademypage/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="Facebook Page">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="https://www.linkedin.com/company/geacademypage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#095bb0] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="LinkedIn Page">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://www.youtube.com/@geacademy_yt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF0000] hover:bg-[#e60000] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="YouTube Channel">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            &copy; 2026 Growth-minded Educators Academy. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
