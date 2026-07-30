import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Check, 
  CheckCircle2, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ArrowRight, 
  AlertTriangle, 
  Moon, 
  Sun, 
  GraduationCap, 
  Building,
  Award,
  Zap,
  BookOpen,
  Layers,
  Clock,
  ShieldCheck,
  TrendingUp,
  Flame,
  Globe,
  DollarSign,
  CheckSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Sub-components
import { SafeImage } from './components/SafeImage';
import { WhoIsThisCourseFor } from './components/WhoIsThisCourseFor';
import { ProofOfCreation } from './components/ProofOfCreation';
import { MeetTheFacilitator } from './components/MeetTheFacilitator';
import { AddressingConcerns } from './components/AddressingConcerns';
import { Footer } from './components/Footer';

interface ModuleItem {
  num: number;
  title: string;
  focus: string;
  isGoldOnly?: boolean;
}

const CURRICULUM_MODULES: ModuleItem[] = [
  {
    num: 1,
    title: "Foundations of AI-Powered Learning",
    focus: "Shifting from a traditional \"content dispenser\" to a 21st-century learning facilitator and understanding the core vision of AI integration in education."
  },
  {
    num: 2,
    title: "The AI Mindset & Prompt Engineering Mastery",
    focus: "Demystifying how AI works, mastering the 5-S prompt framework, and designing \"cheat-proof\" assessments that build critical thinking."
  },
  {
    num: 3,
    title: "The AI-Powered Flipped Classroom Framework",
    focus: "Inverting the traditional classroom model to reclaim administrative time, using AI to drive active, collaborative, student-led group learning."
  },
  {
    num: 4,
    title: "Automated Lesson Planning & Resource Creation",
    focus: "Using ChatGPT, Manus, and Gemini to instantly generate detailed lesson plans, 10-slide presentation decks, and low-tech/offline learning resources."
  },
  {
    num: 5,
    title: "Instructional Video Production & AI Editing",
    focus: "Mastering mobile screen recording and leveraging Google Vids/AI tools to shoot, edit, and auto-caption professional micro-learning videos."
  },
  {
    num: 6,
    title: "Advanced AI Research & Zero-Code Web Design",
    focus: "Building a \"10-Minute Resource Factory\" with NotebookLM for deep-dive audio podcasts, and using Gemini Canvas for zero-code interactive web pages."
  },
  {
    num: 7,
    title: "Gamification & Edutainment Mastery",
    focus: "Transforming dry lessons into highly engaging experiences using AI-generated music tracks/videos (Sonauto AI) and gamified assessments (Quizizz)."
  },
  {
    num: 8,
    title: "Digital Classroom Ecosystem & Cloud Management",
    focus: "Establishing a highly organized, professional digital learning hub using Google Drive and Google Classroom to seamlessly distribute assets."
  },
  {
    num: 9,
    title: "The Business of Teaching & Brand Visibility",
    focus: "Building your \"Personal Economy\" (the MEAT framework) and establishing an undeniable, highly professional digital footprint/CV using About.me."
  },
  {
    num: 10,
    title: "AI Content Strategy & Visual Branding",
    focus: "Training AI to capture your brand voice, automating a 30-day social media content calendar, and generating agency-level promotional flyers.",
    isGoldOnly: true
  },
  {
    num: 11,
    title: "Zero-Code Web Application Development",
    focus: "\"Vibe Coding\" with Google AI Studio to build, test, and deploy functional, custom Single-Page Applications (SPAs) without writing code.",
    isGoldOnly: true
  },
  {
    num: 12,
    title: "Product Packaging, Pricing & Sales Automation",
    focus: "Mastering premium pricing psychology and setting up a fully automated digital storefront on Selar to sell your educational assets globally.",
    isGoldOnly: true
  }
];

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const [activePackageTab, setActivePackageTab] = useState<'gold' | 'silver' | 'both'>('gold');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const silverModules = CURRICULUM_MODULES.filter(m => !m.isGoldOnly);
  const goldModules = CURRICULUM_MODULES; // ALL 12 Modules shown for Gold

  return (
    <div className="bg-[#FAF8F5] text-slate-800 antialiased selection:bg-amber-600 selection:text-white relative min-h-screen font-sans overflow-x-hidden transition-colors duration-300 dark:bg-[#0b1320] dark:text-slate-100">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-100/40 via-amber-50/20 to-transparent blur-[120px] pointer-events-none -z-10 dark:from-amber-950/20"></div>

      {/* Top Serene Announcement Header */}
      <div className="bg-slate-900 text-amber-100 text-xs md:text-sm py-2.5 px-4 text-center font-medium border-b border-slate-800 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-bold text-amber-400 font-heading">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Growth-minded Educators Academy (GEA)
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Profitable AI-Powered Educators Academy (PAPEA 2026)</span>
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-slate-200/70 sticky top-0 z-40 transition-colors duration-300 dark:bg-[#0b1320]/90 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SafeImage 
              src="/gea_logo.png" 
              alt="GEA Logo" 
              fallbackType="logo" 
              className="h-10 w-auto object-contain rounded-lg border border-amber-200/50 p-1 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900" 
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xs text-amber-700 tracking-wider uppercase dark:text-amber-400">
                Growth-minded Educators Academy
              </span>
              <span className="font-heading font-extrabold text-sm md:text-base tracking-tight text-slate-900 dark:text-white">
                Profitable AI-Powered <span className="text-amber-600">Educators Academy</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-700 transition-all duration-300 border border-stone-200 flex items-center justify-center cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <a 
              href="#packages" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-300 shadow-md shadow-amber-600/20 hover:scale-[1.02]"
            >
              Select Package
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="pt-12 md:pt-20 pb-16 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 font-bold text-xs mb-6 tracking-wide uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            The Future of African Education is Here
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6 font-heading dark:text-white">
            The Era of the Overworked, Underpaid Educator is <span className="text-amber-600 font-black">Over.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-normal max-w-3xl mx-auto">
            Imagine a reality where your teaching career does not drain the life out of you. Imagine walking into your classroom feeling completely energized, spending your time actively mentoring your students rather than policing them.
          </p>

          {/* Hero Story Card */}
          <div className="bg-white dark:bg-slate-900/90 border border-amber-200/60 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm text-left mb-10 leading-relaxed text-slate-700 dark:text-slate-300 space-y-4 text-sm md:text-base">
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Imagine logging off at 4:00 PM</strong> with zero manual lesson notes to write, zero scripts to grade by hand, and zero anxiety about how to survive the month.
            </p>
            <p>
              Imagine stepping into an elite tier of high-impact educators who command respect, earn premium incomes, and build automated digital learning products that generate income while they sleep.
            </p>
            <p className="text-amber-800 dark:text-amber-400 font-semibold pt-2 border-t border-stone-100 dark:border-slate-800">
              This is not a distant dream. This is the exact transformation engineered inside the Profitable AI-Powered Educators Academy (PAPEA).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#packages"
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-600/25 hover:scale-[1.02] text-center flex items-center justify-center gap-2"
            >
              <span>Explore Silver & Gold Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#silent-crisis"
              className="w-full sm:w-auto px-8 py-4 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 text-center"
            >
              Read The Full Story
            </a>
          </div>

        </div>
      </section>

      {/* 2. THE SILENT CRISIS SECTION */}
      <section id="silent-crisis" className="py-16 md:py-24 bg-white/60 dark:bg-slate-900/40 border-t border-b border-stone-200/60 dark:border-slate-800 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-700 dark:text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm font-heading">The Brutal Reality</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-heading">
              The Silent Crisis in the Classroom
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-12 space-y-6">
            <p>
              Let us address the brutal truth of what it currently takes to be a teacher. You are operating as a traditional <strong>"content dispenser."</strong> You spend countless unpaid hours late at night writing lesson plans, formatting quizzes, and building physical learning aids—only for students to look bored, distracted, or disengaged.
            </p>
            <p>
              This constant, overwhelming grind creates a vicious cycle. Teachers are drained of their energy, leading to severe burnout and forcing them to rely on outdated rote learning just to get through the day.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF8F5] dark:bg-slate-850 p-6 rounded-2xl border border-stone-200/80 dark:border-slate-800 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">Unpaid Late-Night Prep</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Buried under mountains of manual lesson planning, tedious grading, and administrative paperwork that steals time from your family.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] dark:bg-slate-850 p-6 rounded-2xl border border-stone-200/80 dark:border-slate-800 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">Exhaustion & Burnout</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Drained of creative energy, leaving you forced to rely on monotonous lecturing rather than inspiring active critical thinking.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] dark:bg-slate-850 p-6 rounded-2xl border border-stone-200/80 dark:border-slate-800 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">Financial Ceiling</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Trapped inside a fixed salary cap that barely keeps pace with inflation, leaving your expertise digitally invisible to the wider world.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] dark:bg-slate-850 p-6 rounded-2xl border border-stone-200/80 dark:border-slate-800 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">The August Income Gap</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Fearing term breaks and school holidays when physical classroom teaching halts and income streams dry up completely.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE INDISPENSABILITY GAP */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-700 dark:text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm font-heading">The Shift</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-heading">
              The Indispensability Gap: Why You Must Evolve
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm mb-12">
            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              The global educational landscape has experienced a seismic shift. High-net-worth parents are no longer paying top-tier tuition for teachers who merely recite textbooks. School owners are actively hunting for tech-forward facilitators who can build interactive digital classrooms, produce multimedia learning assets, and deliver measurable 21st-century outcomes.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-semibold text-slate-900 dark:text-white bg-amber-50 dark:bg-amber-950/40 p-6 rounded-2xl border-l-4 border-amber-600">
              When you hold the technological and pedagogical solutions that parents and premium schools are begging for, you stop hoping for a raise. You command it.
            </p>
          </div>

          {/* Pillars of Indispensability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 text-center">
              <Zap className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">AI Literacy</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Commanding advanced generative AI tools to execute 5 hours of lesson preparation in 10 minutes.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 text-center">
              <BookOpen className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">Flipped Classroom</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Transitioning from lecturing to Socratic mentorship that keeps students deeply engaged.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 text-center">
              <Globe className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">Zero-Code Web Creation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Building custom interactive learning portals and web apps without writing a single line of code.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 text-center">
              <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">Product Monetization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Packaging your expertise into automated digital courses sold across Africa and beyond.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ENTER PAPEA SECTION */}
      <section className="py-16 bg-slate-900 text-white dark:bg-slate-950 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-xs font-heading">Your Execution Vehicle</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6 font-heading">
            Profitable AI-Powered Educators Academy
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-light">
            PAPEA is not a basic tutorial on search engines. It is a comprehensive, high-ticket digital transformation incubator built specifically for ambitious teachers ready to scale their impact and income.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 px-6 py-3 rounded-full text-amber-300 font-bold text-xs md:text-sm uppercase tracking-wider">
            <span>Explore the Complete 12-Module Curriculum & Packages Below</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* 5. THE PACKAGES (SILVER VS GOLD & EXPANDED CURRICULUM) */}
      <section id="packages" className="py-20 md:py-28 px-4 bg-[#FAF8F5] dark:bg-[#0b1320] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-700 dark:text-amber-400 font-bold tracking-widest uppercase text-xs md:text-sm font-heading">
              Complete 12-Module Curriculum & Package Breakdown
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-heading">
              Select Your Transformation Package
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
              Check the packages one by one or compare side-by-side. Both options enroll via a single checkout link.
            </p>
            <div className="w-20 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Interactive Package Switcher Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12 max-w-2xl mx-auto">
            <button
              onClick={() => setActivePackageTab('gold')}
              className={`px-6 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activePackageTab === 'gold'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-[1.03]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-800 hover:border-amber-500'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Gold Package (12 Modules)</span>
            </button>

            <button
              onClick={() => setActivePackageTab('silver')}
              className={`px-6 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activePackageTab === 'silver'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-[1.03]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-800 hover:border-amber-500'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Silver Package (9 Modules)</span>
            </button>

            <button
              onClick={() => setActivePackageTab('both')}
              className={`px-6 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activePackageTab === 'both'
                  ? 'bg-slate-900 text-white dark:bg-slate-800 shadow-lg scale-[1.03]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-800 hover:border-amber-500'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Compare Both Side-by-Side</span>
            </button>
          </div>

          {/* PACKAGE DISPLAY VIEWS */}

          {/* VIEW 1: GOLD PACKAGE FOCUS (SHOWS ALL 12 MODULES) */}
          {activePackageTab === 'gold' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white dark:from-slate-900 dark:to-slate-900 border-2 border-amber-500/80 rounded-3xl p-6 md:p-10 shadow-xl shadow-amber-500/10 mb-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-amber-200/80 dark:border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full font-heading mb-2">
                    <Sparkles className="w-3.5 h-3.5 fill-white" /> Complete Signature System • Recommended
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
                    The Gold Package
                  </h3>
                  <p className="text-sm text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wide mt-1">
                    The Profitable Teacherpreneur • Complete 12-Module Curriculum
                  </p>
                </div>
                <div className="text-left md:text-right bg-white dark:bg-slate-850 p-4 rounded-2xl border border-amber-200/60 dark:border-slate-800">
                  <p className="text-xs text-slate-400 line-through">₦35,000</p>
                  <p className="text-4xl font-black text-amber-700 dark:text-amber-400 font-heading">₦16,500</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">One-Time Payment</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
                The Gold Package is our complete signature system designed to elevate you from classroom master to automated digital entrepreneur. Below is the complete 12-module curriculum included in your enrollment:
              </p>

              {/* ALL 12 MODULES DETAILED LIST */}
              <div className="space-y-4 mb-10">
                <h4 className="font-heading font-extrabold text-base uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-stone-200 dark:border-slate-800">
                  <Award className="w-5 h-5 text-amber-600" /> All 12 Signature Curriculum Modules:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goldModules.map((module) => (
                    <div 
                      key={module.num}
                      className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                        module.isGoldOnly 
                          ? 'bg-amber-500/10 border-amber-400/50 dark:bg-amber-950/40 dark:border-amber-800/60' 
                          : 'bg-white dark:bg-slate-850 border-stone-200/80 dark:border-slate-800'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-heading ${
                            module.isGoldOnly 
                              ? 'bg-amber-600 text-white' 
                              : 'bg-stone-100 dark:bg-slate-800 text-amber-800 dark:text-amber-400'
                          }`}>
                            Module {module.num}
                          </span>
                          {module.isGoldOnly && (
                            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest">
                              Exclusive Gold Module
                            </span>
                          )}
                        </div>
                        <h5 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">
                          {module.title}
                        </h5>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <strong className="text-slate-800 dark:text-slate-200">Focus:</strong> {module.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusive Perks */}
              <div className="bg-amber-500/10 dark:bg-amber-950/40 p-6 rounded-2xl border border-amber-300/50 dark:border-amber-800/50 mb-6">
                <p className="font-bold text-xs uppercase text-amber-900 dark:text-amber-300 font-heading mb-3">
                  Included Gold Perks & Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Zero-Code Web App Builder Blueprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Digital Product & Selar Storefront Setup Guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>VIP Priority WhatsApp Mentorship & Review</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 2: SILVER PACKAGE FOCUS */}
          {activePackageTab === 'silver' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm mb-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-stone-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading bg-stone-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    Tier 1 • Classroom Mastery
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-heading mt-2">
                    The Silver Package
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wide mt-1">
                    The Elite Classroom Facilitator • 9 Core Modules
                  </p>
                </div>
                <div className="text-left md:text-right bg-stone-50 dark:bg-slate-850 p-4 rounded-2xl border border-stone-200/60 dark:border-slate-800">
                  <p className="text-xs text-slate-400 line-through">₦20,000</p>
                  <p className="text-4xl font-black text-amber-700 dark:text-amber-400 font-heading">₦10,500</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">One-Time Payment</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                Your blueprint to reclaiming your time, mastering modern pedagogy, and becoming the indispensable teacher premium schools demand. Below are the 9 core modules included:
              </p>

              {/* SILVER 9 MODULES DETAILED LIST */}
              <div className="space-y-4 mb-10">
                <h4 className="font-heading font-extrabold text-base uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-stone-200 dark:border-slate-800">
                  <BookOpen className="w-5 h-5 text-amber-600" /> Silver Package 9-Module Curriculum:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {silverModules.map((module) => (
                    <div 
                      key={module.num}
                      className="p-5 rounded-2xl bg-stone-50 dark:bg-slate-850 border border-stone-200/80 dark:border-slate-800 text-left flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-heading bg-stone-200 dark:bg-slate-800 text-amber-800 dark:text-amber-400 mb-2 inline-block">
                          Module {module.num}
                        </span>
                        <h5 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">
                          {module.title}
                        </h5>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <strong className="text-slate-800 dark:text-slate-200">Focus:</strong> {module.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Silver Deliverables */}
              <div className="bg-stone-50 dark:bg-slate-850 p-6 rounded-2xl border border-stone-200/60 dark:border-slate-800 mb-6">
                <p className="font-bold text-xs uppercase text-slate-800 dark:text-slate-200 font-heading mb-3">
                  Included Silver Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Full Self-Paced Video Curriculum Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Dedicated WhatsApp Community Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Weekly Live Review & Saturday Q&A Sessions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: BOTH SIDE-BY-SIDE */}
          {activePackageTab === 'both' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10"
            >
              {/* SILVER CARD */}
              <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-6 pb-6 border-b border-stone-100 dark:border-slate-800">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-heading bg-stone-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        Tier 1 • Classroom Mastery
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3 font-heading">
                        Silver Package
                      </h3>
                      <p className="text-xs text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wide mt-1">
                        9 Core Modules
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 line-through">₦20,000</p>
                      <p className="text-3xl font-black text-amber-700 dark:text-amber-400 font-heading">₦10,500</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Master modern pedagogy, reclaim your time, and transform into an indispensable classroom facilitator.
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                      Curriculum Covered (Modules 1-9):
                    </p>
                    {silverModules.map(m => (
                      <div key={m.num} className="bg-stone-50 dark:bg-slate-850 p-3 rounded-xl border border-stone-200/60 dark:border-slate-800 text-xs">
                        <p className="font-bold text-slate-900 dark:text-white mb-0.5">Module {m.num}: {m.title}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-tight">{m.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* GOLD CARD */}
              <div className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white dark:from-slate-900 dark:to-slate-900 border-2 border-amber-500/80 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-6 pb-6 border-b border-amber-200/80 dark:border-slate-800">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 font-heading bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-full">
                        Tier 2 • Complete Signature System
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3 font-heading">
                        Gold Package
                      </h3>
                      <p className="text-xs text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wide mt-1">
                        All 12 Modules Included
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 line-through">₦35,000</p>
                      <p className="text-3xl font-black text-amber-700 dark:text-amber-400 font-heading">₦16,500</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Master the classroom, build zero-code web applications, and launch your automated digital product empire.
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                      All 12 Modules Covered:
                    </p>
                    {goldModules.map(m => (
                      <div 
                        key={m.num} 
                        className={`p-3 rounded-xl border text-xs ${
                          m.isGoldOnly 
                            ? 'bg-amber-500/10 border-amber-400/40 dark:bg-amber-950/40' 
                            : 'bg-white dark:bg-slate-850 border-stone-200/60 dark:border-slate-800'
                        }`}
                      >
                        <p className="font-bold text-slate-900 dark:text-white mb-0.5 flex justify-between items-center">
                          <span>Module {m.num}: {m.title}</span>
                          {m.isGoldOnly && <span className="text-[9px] uppercase tracking-widest text-amber-700 dark:text-amber-300 font-bold">Gold Only</span>}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-tight">{m.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SINGLE UNIFIED CHECKOUT CTA BUTTON UNDER PACKAGES */}
          <div className="text-center max-w-2xl mx-auto mt-6">
            <a 
              href="https://geacademy.selar.com/papeacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-5 px-8 text-center bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-base md:text-lg uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-600/30 cursor-pointer flex items-center justify-center gap-3 hover:scale-[1.02]"
            >
              <span>Enroll Now on Selar (Access Silver or Gold Package)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Instant access upon secure checkout on Selar. Supports international cards and mobile money.
            </p>
          </div>

          {/* Direct Bank Transfer Information Card */}
          <div className="mt-12 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 font-heading">
                  Alternative Direct Bank Transfer (Nigeria)
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1 font-heading">
                  Prefer Direct Bank Transfer over Selar Card Payment?
                </h4>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 block font-heading uppercase">Account Number:</span>
                    <span className="font-mono text-xl font-black text-slate-900 dark:text-white tracking-wider select-all">0100020970</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                  <div>
                    <span className="text-xs text-slate-400 block font-heading uppercase">Account Name:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Abdullateef Adedeji</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                  <div>
                    <span className="text-xs text-slate-400 block font-heading uppercase">Bank:</span>
                    <span className="font-bold text-amber-600">Sterling Bank</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.link/6685ik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md flex-shrink-0"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> Confirm Payment via WhatsApp <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROOF OF CREATION SANDBOX */}
      <ProofOfCreation />

      {/* 7. WHO IS THIS COURSE FOR */}
      <WhoIsThisCourseFor />

      {/* 8. MEET THE FACILITATOR */}
      <MeetTheFacilitator />

      {/* 9. ADDRESSING CONCERNS / FAQ */}
      <AddressingConcerns />

      {/* 10. FINAL ACTION PLAN & CALL TO ACTION */}
      <section className="py-20 bg-slate-900 text-white dark:bg-slate-950 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-xs font-heading">Your Next Step</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-6 font-heading">
            The Choice is Yours
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            You can continue operating under the unsustainable analog grind, or you can step into your era of high-impact, highly profitable digital educational leadership today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-10">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-3">1</span>
              <h3 className="font-bold text-sm text-white mb-1">Select Your Package</h3>
              <p className="text-xs text-slate-400">Choose Silver (₦10,500) or Gold (₦16,500) based on your ambition.</p>
            </div>
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-3">2</span>
              <h3 className="font-bold text-sm text-white mb-1">Complete Checkout</h3>
              <p className="text-xs text-slate-400">Pay securely online via Selar or via direct Nigeria bank transfer.</p>
            </div>
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-3">3</span>
              <h3 className="font-bold text-sm text-white mb-1">Join WhatsApp Community</h3>
              <p className="text-xs text-slate-400">Gain immediate access to course materials and dedicated support.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://geacademy.selar.com/papeacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-600/30 text-center flex items-center justify-center gap-2"
            >
              <span>Enroll on Selar Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.link/6685ik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" /> Questions? Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* 11. FOOTER */}
      <Footer />

    </div>
  );
}
