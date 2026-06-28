/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const REDESIGNED_HTML = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The AI-Powered Learning Course | Growth-Minded Educators Academy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        window.tailwind = window.tailwind || {};
        window.tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            navy: '#0B1120',
                            dark: '#030712',
                            slate: '#1E293B',
                            orange: '#FF6B00',
                            orangeHover: '#EA580C',
                            gold: '#FBBF24',
                            light: '#F8FAFC',
                        }
                    },
                    fontFamily: {
                        heading: ['Montserrat', 'sans-serif'],
                        body: ['"Plus Jakarta Sans"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                    },
                    boxShadow: {
                        'neon-orange': '0 0 30px rgba(255, 107, 0, 0.45)',
                        'neon-gold': '0 0 30px rgba(251, 191, 36, 0.4)',
                        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    }
                }
            }
        }
    </script>
    <style>
        body { 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            background-color: #030712;
        }
        h1, h2, h3, h4, h5, h6 { 
            font-family: 'Montserrat', sans-serif; 
        }
        
        /* Premium Background mesh */
        .tech-grid {
            background-image: 
                radial-gradient(circle at 1px 1px, rgba(255,107,0,0.08) 1px, transparent 0),
                radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0);
            background-size: 40px 40px, 20px 20px;
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
        }
        .video-container iframe, .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        /* Shine Effect */
        .btn-shine {
            position: relative;
            overflow: hidden;
        }
        .btn-shine::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -60%;
            width: 30%;
            height: 200%;
            background: rgba(255, 255, 255, 0.25);
            transform: rotate(30deg);
            transition: none;
        }
        .btn-shine:hover::after {
            left: 120%;
            transition: all 1.2s ease-in-out;
        }

        /* Glassmorphism card */
        .glass-card {
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glass-card-orange {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 107, 0, 0.2);
        }

        .pulse-btn {
            animation: pulse-orange 2.2s infinite;
        }
        @keyframes pulse-orange {
            0% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(255, 107, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); }
        }

        .pulse-gold {
            animation: pulse-g 2.2s infinite;
        }
        @keyframes pulse-g {
            0% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(251, 191, 36, 0); }
            100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0); }
        }
    </style>
</head>
<body class="bg-brand-dark text-slate-100 antialiased selection:bg-brand-orange selection:text-white tech-grid">

    <!-- Top Alert Banner -->
    <div class="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white text-center py-3 px-4 text-xs md:text-sm font-black tracking-widest uppercase relative z-50 shadow-lg flex items-center justify-center gap-2">
        <span class="inline-flex h-2.5 w-2.5 rounded-full bg-white animate-ping"></span>
        🚨 LIVE MASTERCLASS: July 11th & 12th, 2026. Secure Your Spot Now! 🚨
    </div>

    <!-- Navigation Header -->
    <nav class="w-full bg-brand-navy/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-40 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <img src="growth-minded ea.svg" alt="GEA Logo" class="h-10 w-auto object-contain rounded-lg border border-slate-800 p-1 bg-brand-dark" onerror="this.src='https://placehold.co/150x50/0f172a/f97316?text=GEA+Academy'">
                <span class="font-heading font-extrabold text-sm md:text-base tracking-tight text-white hidden sm:block">
                    Growth-Minded <span class="text-brand-orange">Educators</span>
                </span>
            </div>
            <div class="flex items-center gap-4">
                <a href="#checkout" class="bg-gradient-to-r from-brand-orange to-red-600 text-white px-5 py-2.5 rounded-full font-black text-sm tracking-wide hover:shadow-neon-orange hover:scale-105 transition-all duration-300 btn-shine uppercase">
                    Enroll Now
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero-section" class="relative pt-12 pb-24 md:pt-20 md:pb-36 px-4 overflow-hidden">
        <!-- Ambient Background Lights -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-10 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="max-w-5xl mx-auto text-center relative z-10">
            <div class="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-bold px-5 py-2 rounded-full text-xs md:text-sm mb-6 tracking-widest uppercase shadow-sm">
                <i data-lucide="sparkles" class="w-4 h-4 animate-spin" style="animation-duration: 4s;"></i>
                The Rules of Education Have Changed
            </div>
            
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-8">
                Master AI. Eliminate Burnout. <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-500 to-yellow-400">Multiply Your Income & Impact.</span>
            </h1>
            
            <p class="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                Welcome to the <strong class="text-white font-semibold">Two-Tiered AI-Powered Learning (APL) Certification Course.</strong> Transition from an exhausted "Content Dispenser" to a highly respected, highly paid <strong class="text-brand-orange font-semibold">"Global Guide."</strong>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#checkout" class="w-full sm:w-auto bg-gradient-to-r from-brand-orange to-red-600 text-white px-8 py-5 rounded-full font-black text-lg tracking-wide hover:shadow-neon-orange hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 pulse-btn btn-shine">
                    SECURE YOUR TIER NOW 👉
                </a>
                <a href="#course-pitch" class="w-full sm:w-auto bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-white px-8 py-5 rounded-full font-bold text-lg tracking-wide hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2">
                    <i data-lucide="info" class="w-5 h-5"></i> See How It Works
                </a>
            </div>
        </div>
    </section>

    <!-- Pitch Section -->
    <section id="course-pitch" class="py-20 md:py-28 px-4 bg-white text-slate-950 relative z-20 rounded-t-[40px] md:rounded-t-[60px] shadow-2xl">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">The Paradigm Shift</span>
                <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy mt-2 leading-tight">
                    You Deserve Profound Fulfillment <span class="text-brand-orange">&</span> True Financial Reward.
                </h2>
                <div class="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
            </div>

            <div class="prose prose-lg md:prose-xl text-slate-700 space-y-8 leading-relaxed">
                <p class="text-lg md:text-xl">At the heart of every educator is a deep, burning desire for two things: <strong class="text-brand-navy font-bold">Profound Fulfillment and True Financial Reward.</strong></p>
                <p>You didn't choose this noble profession to drown in paperwork or struggle from paycheck to paycheck. You want a career where you actively change lives. Where a child’s eyes light up because you finally helped them understand a complex concept. But let us be brutally honest: <strong class="text-brand-orange font-black">you also desire a career that is highly profitable.</strong> You want your expertise to command premium value, and you want to provide for your family without burning the candle at both ends.</p>
                <p>Similarly, if you are a <strong class="text-brand-navy font-bold">School Owner</strong>, you desire an institution that isn't just surviving on tight, stressful margins. You want a beacon of excellence—a highly profitable, premium brand with a waitlist of eager parents and a loyal team of energetic teachers.</p>
                
                <!-- The Tape Recorder Trap Component -->
                <div class="my-12 p-8 md:p-10 bg-slate-50 border-l-8 border-brand-orange rounded-r-2xl shadow-md relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <i data-lucide="alert-triangle" class="w-32 h-32"></i>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-black text-brand-navy mb-4 flex items-center gap-3">
                        <i data-lucide="alert-triangle" class="text-brand-orange w-8 h-8 flex-shrink-0"></i>
                        The Tape Recorder Trap
                    </h3>
                    <p class="mb-6">But right now, there is a massive wall standing between you and that dream. Trying to teach a 21st-century mind with 19th-century tools is like trying to grow a lush garden in the middle of a desert.</p>
                    <p class="mb-6">Think about your typical weekend. Instead of resting and recharging, you are buried under a mountain of paper. Your hand aches from manually copying endless lesson notes into a diary that half your students will barely glance at. You are grading dozens of scripts, writing terminal reports, and trying to plan engaging activities, all while the clock aggressively ticks down to Monday morning. You are giving everything, yet feeling like you are constantly falling behind.</p>
                    
                    <div class="bg-gradient-to-r from-brand-navy to-slate-900 p-6 md:p-8 rounded-xl shadow-lg border border-slate-800 text-white my-8 relative">
                        <p class="font-extrabold text-brand-orange text-xl md:text-2xl text-center leading-relaxed">
                            "You have become a 'Tape Recorder' in a Spotify world—spending hours delivering basic facts that a smartphone can pull up in three seconds."
                        </p>
                    </div>
                    
                    <p>If this cycle does not break, the passion that brought you to the classroom will be completely suffocated by this general overload. For school owners, an exhausted faculty leads to high staff turnover, frustrated parents, eroding academic standards, and the painful loss of your school's prestige to more innovative competitors down the street.</p>
                </div>
                
                <!-- Step Out of the Factory Line Component -->
                <div class="my-12 p-8 md:p-10 bg-brand-navy text-white rounded-2xl shadow-2xl border border-slate-800 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <i data-lucide="rocket" class="w-32 h-32"></i>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-black text-brand-orange mb-4 flex items-center gap-3">
                        <i data-lucide="check-circle-2" class="text-brand-orange w-8 h-8 flex-shrink-0"></i>
                        Step Out of the Factory Line
                    </h3>
                    <p class="text-slate-200 mb-6">What if AI became your high-performance engine, and YOU became the master pilot? In the AI-Powered Learning (APL) Course model, you step out of the factory line and into the highly respected role of a <strong class="text-brand-orange font-extrabold">Learning Architect</strong>.</p>
                    <p class="text-slate-200 mb-6">By automating the heavy lifting—the lesson planning, the grading, the slide creation—you reclaim your time, your energy, and your joy. But this is not just about saving you time; it is about saving your students' futures. Because you are no longer chained to the chalkboard reciting facts, you finally have the space to mentor. You empower your students with the elite 21st-century skills they desperately need to survive the 2030 job market: critical thinking, complex problem-solving, and deep collaboration. You become the visionary guide who teaches them <em>how</em> to think, not just <em>what</em> to think.</p>
                    <p class="text-slate-200 mb-6">When you achieve this, everything changes. You suddenly have the time and the elite skills to charge premium rates, build a highly profitable digital presence, or elevate your school into the undisputed flagship academy of your city. The APL Framework is the ultimate key to the legacy and the income you deserve.</p>
                    
                    <p class="font-black text-brand-orange text-xl mt-8">It is time to transition from knowing what an AI-Powered Learning Facilitator is, to actually <span class="underline">becoming one</span>.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Dark Sub-Banner -->
    <section class="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-slate-900">
        <div class="absolute inset-0 opacity-5">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-sub" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" stroke-width="2"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-sub)"/></svg>
        </div>
        
        <div class="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <span class="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 inline-block">The Solution is Here</span>
            <h3 class="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl mx-auto">
                Welcome to the 2-Tiered <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">AI-Powered Learning Certification Course</span>
            </h3>
            <div class="w-20 h-1 bg-gradient-to-r from-brand-orange to-yellow-400 mx-auto rounded-full"></div>
        </div>
    </section>

    <!-- NEW WEBINAR SUMMARY VIDEO SECTION -->
    <section class="py-24 bg-slate-950 text-white border-t border-b border-slate-900 relative overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div class="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-4">
                <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
                See It In Action
            </div>
            
            <h3 class="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Watch the AI-Powered Learning Facilitator Webinar Summary
            </h3>
            
            <!-- MacBook Device Frame Mockup -->
            <div class="relative mx-auto max-w-3xl mb-12 shadow-2xl rounded-2xl border border-slate-800 bg-slate-900 p-2 md:p-4 shadow-neon-orange/20">
                <div class="flex items-center gap-1.5 pb-2 px-2 border-b border-slate-800 mb-2">
                    <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    <span class="text-xs text-slate-500 ml-4 font-mono tracking-widest uppercase">GEA WEBINAR SUMMIT</span>
                </div>
                <div class="video-container bg-slate-950 rounded-xl overflow-hidden shadow-inner border border-slate-800">
                    <iframe 
                        src="https://www.youtube.com/embed/BJd8VWjPnRM?si=tf_TVFg9I-BdlCvp" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full rounded-xl"
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            
            <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Discover exactly how this framework will transform your teaching, eliminate burnout, and elevate your income in the digital age.
            </p>
        </div>
    </section>

    <!-- Target Audience (Bento Grid) -->
    <section class="py-24 bg-slate-50 text-slate-950">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Empower Your Future</span>
                <h2 class="text-3xl md:text-5xl font-black text-brand-navy mt-2 mb-4">Who Is This Course For?</h2>
                <p class="text-lg text-slate-600">The AI-Powered Learning framework is customized for growth-minded individuals ready to rewrite their educational legacy.</p>
                <div class="w-20 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 group">
                    <div class="bg-orange-50 text-brand-orange w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                        <i data-lucide="book-open" class="w-7 h-7"></i>
                    </div>
                    <h4 class="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Exhausted Classroom Teachers</h4>
                    <p class="text-slate-600 leading-relaxed">Who desperately want to reclaim their weekends, eliminate burnout, and become highly valued, well-paid 21st-century educators.</p>
                </div>
                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 group">
                    <div class="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange transition-colors duration-300">
                        <i data-lucide="building" class="w-7 h-7"></i>
                    </div>
                    <h4 class="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Visionary School Owners & Admins</h4>
                    <p class="text-slate-600 leading-relaxed">Who want to standardise global excellence across their faculty, eradicate staff turnover, and turn their school into a highly profitable premium brand.</p>
                </div>
                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 group">
                    <div class="bg-orange-50 text-brand-orange w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                        <i data-lucide="monitor" class="w-7 h-7"></i>
                    </div>
                    <h4 class="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Online Teachers & Creators</h4>
                    <p class="text-slate-600 leading-relaxed">Who want to scale their impact across borders, package their knowledge into premium virtual programs, and stand out in the digital economy.</p>
                </div>
                <!-- Card 4 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 group">
                    <div class="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange transition-colors duration-300">
                        <i data-lucide="graduation-cap" class="w-7 h-7"></i>
                    </div>
                    <h4 class="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Private Tutors & Consultants</h4>
                    <p class="text-slate-600 leading-relaxed">Who want to deliver mind-blowing, personalised learning experiences that effortlessly justify charging premium, high-ticket rates.</p>
                </div>
                <!-- Card 5 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 group">
                    <div class="bg-orange-50 text-brand-orange w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                        <i data-lucide="laptop" class="w-7 h-7"></i>
                    </div>
                    <h4 class="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Ed-Tech & Curriculum Developers</h4>
                    <p class="text-slate-600 leading-relaxed">Who want to master rapid resource creation and stay lightyears ahead of the curve in the competitive global education market.</p>
                </div>
                <!-- Card 6 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 group">
                    <div class="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange transition-colors duration-300">
                        <i data-lucide="rocket" class="w-7 h-7"></i>
                    </div>
                    <h4 class="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Forward-Thinking Graduates</h4>
                    <p class="text-slate-600 leading-relaxed">Who want to enter the competitive job market not as novices, but as highly sought-after, highly paid digital learning experts.</p>
                </div>
            </div>

            <div class="text-center mt-16">
                <a href="#checkout" class="inline-flex bg-brand-orange text-white px-10 py-5 rounded-full font-black text-xl hover:bg-brand-orangeHover transition-all duration-300 shadow-neon-orange uppercase tracking-wide pulse-btn">
                    YES, I AM READY TO ENROLL NOW 👉
                </a>
            </div>
        </div>
    </section>

    <!-- Proof of Creation / Bento Sandbox Section -->
    <section class="py-24 bg-brand-navy text-white relative overflow-hidden border-t border-slate-900">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots-proof" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots-proof)"/></svg>
        </div>
        
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Aesthetic & Practical Proof</span>
                <h2 class="text-3xl md:text-5xl font-black text-white mt-2 mb-6">Imagine Creating <span class="text-brand-orange">THIS</span> For Your Students...</h2>
                <p class="text-lg text-slate-300 leading-relaxed">During this course, you won't just learn theory. You will build a captivating automated resource factory. Here is a taste of what you will master.</p>
                <div class="w-20 h-1 bg-gradient-to-r from-brand-orange to-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-2 gap-10">
                <!-- Video 1 -->
                <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-300">
                    <div>
                        <h4 class="font-bold text-white text-xl mb-3 flex items-center gap-2">
                            <i data-lucide="video" class="text-brand-orange w-5 h-5"></i> AI-Powered Video Lessons
                        </h4>
                        <div class="video-container bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                            <iframe 
                                src="https://www.youtube.com/embed/eQZrRzVnSr8?si=wdTQqTerRQ0FMRbf" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen 
                                class="absolute top-0 left-0 w-full h-full rounded-xl"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
                        Learn to convert text scripts into highly engaging educational videos with avatars and b-roll in minutes.
                    </p>
                </div>

                <!-- Video 2 -->
                <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-300">
                    <div>
                        <h4 class="font-bold text-white text-xl mb-3 flex items-center gap-2">
                            <i data-lucide="music" class="text-brand-orange w-5 h-5"></i> Educational Music Videos
                        </h4>
                        <div class="video-container bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                            <iframe 
                                src="https://www.youtube.com/embed/rmQLg9Tbdwk?si=vEUrurFIV2Ku565z" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen 
                                class="absolute top-0 left-0 w-full h-full rounded-xl"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
                        Turn complex formulas or historical facts into catchy, memorable songs that students can't stop singing.
                    </p>
                </div>

                <!-- Slides 3 -->
                <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-300">
                    <div>
                        <h4 class="font-bold text-white text-xl mb-3 flex items-center gap-2">
                            <i data-lucide="presentation" class="text-brand-orange w-5 h-5"></i> AI-Generated Slide Decks
                        </h4>
                        <div class="video-container bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                            <iframe 
                                src="https://docs.google.com/presentation/d/e/2PACX-1vRNwdK9ivYzeZ6G9F04pfeWEZOscArDrCK7TFWkfFuYNlvxa9z67rfviN-WuEw17s079mYFNIPUxqlA/pubembed?start=true&loop=true&delayms=3000" 
                                frameborder="0" 
                                allowfullscreen="true" 
                                mozallowfullscreen="true" 
                                webkitallowfullscreen="true"
                                class="absolute top-0 left-0 w-full h-full rounded-xl animate-pulse-glow"
                                style="animation-duration: 8s;"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
                        Turn raw text into beautifully structured, professional slide decks using tools like Manus and NotebookLM in under 3 minutes.
                    </p>
                </div>

                <!-- Audio 4 -->
                <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-300">
                    <div>
                        <h4 class="font-bold text-white text-xl mb-3 flex items-center gap-2">
                            <i data-lucide="headphones" class="text-brand-orange w-5 h-5"></i> NotebookLM Audio Overviews
                        </h4>
                        <div class="bg-slate-950/80 rounded-xl border border-slate-800 p-6 text-center flex flex-col justify-center items-center h-[234px]">
                            <div class="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3 animate-bounce" style="animation-duration: 3s;">
                                <i data-lucide="podcast" class="w-6 h-6"></i>
                            </div>
                            <p class="text-white font-semibold text-sm mb-4">Listen to an AI-Generated Audio Summary</p>
                            
                            <div class="w-full h-[60px] rounded-lg overflow-hidden border border-slate-800 bg-brand-dark shadow-inner">
                                <iframe src="https://drive.google.com/file/d/1uaGbur57RUU7-THO_BR1DuX8Pz8IcfwM/preview" width="100%" height="60" allow="autoplay" class="border-none" loading="lazy"></iframe>
                            </div>
                            
                            <p class="text-[11px] text-slate-400 mt-3 text-center">
                                Having trouble playing? <a href="https://drive.google.com/file/d/1uaGbur57RUU7-THO_BR1DuX8Pz8IcfwM/view?usp=drive_link" target="_blank" class="text-brand-orange hover:underline font-bold">Listen on Google Drive <i data-lucide="external-link" class="inline w-3 h-3"></i></a>
                            </p>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
                        Generate interactive podcast-style audio summaries of your lesson notes for students to consume on the go.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Course Curriculum Section -->
    <section class="py-24 bg-brand-navy text-white relative overflow-hidden border-t border-slate-900">
        <!-- Grid overlay -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="10 10"/></svg>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Step-by-Step Blueprint</span>
                <h2 class="text-3xl md:text-5xl font-black mb-4">The 2-Tier Course <span class="text-brand-orange">Curriculum</span></h2>
                <p class="text-lg text-slate-300">Choose the path that fits your goals. The Basic tier builds your unbreakable foundation, while the Advanced tier transforms you into a complete Digital Architect.</p>
                <div class="w-20 h-1 bg-gradient-to-r from-brand-orange to-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
                <!-- Basic Course Card -->
                <div class="bg-slate-950/70 border border-slate-800 rounded-3xl p-8 shadow-2xl relative flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300">
                    <div>
                        <div class="inline-block bg-blue-600/10 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-sm">
                            THE BASIC COURSE
                        </div>
                        <p class="text-slate-300 italic mb-3 font-light leading-relaxed">The ultimate foundation. We destroy the exhausting "Sage on the Stage" identity and empower you with high-impact, low-tech AI strategies.</p>
                        <p class="text-blue-400 font-bold text-sm mb-8 flex items-center gap-2">
                            <i data-lucide="play-circle" class="w-4 h-4"></i> Instant Pre-Recorded Videos + Dedicated WhatsApp Support
                        </p>
                        
                        <div class="space-y-5">
                            <!-- Modules 1 to 6 -->
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600/10 text-blue-400 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 1: Intro to AI-Powered Learning</h5><p class="text-slate-400 text-sm mt-0.5">Grasping the "What" and "Why" to future-proof your career and boost your value.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600/10 text-blue-400 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 2: Fundamentals of AI & Data Ethics</h5><p class="text-slate-400 text-sm mt-0.5">Demystifying tech and protecting privacy so you teach with absolute confidence.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600/10 text-blue-400 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 3: The AI-Mindset & AI-Proof Teacher</h5><p class="text-slate-400 text-sm mt-0.5">Amplifying the human empathy that algorithms can't replicate to make you indispensable.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600/10 text-blue-400 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 4: The Low-Tech Revolution</h5><p class="text-slate-400 text-sm mt-0.5">Implementing high-level AI pedagogy even in low-tech/low-bandwidth environments.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600/10 text-blue-400 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 5: NotebookLM & 10-Minute Factory</h5><p class="text-slate-400 text-sm mt-0.5">Building a personal AI textbook to create incredible study guides instantly.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600/10 text-blue-400 rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-blue-500/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 6: Music Video Creation</h5><p class="text-slate-400 text-sm mt-0.5">Turning complex academic concepts into highly engaging musical hits your students will love.</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Advanced Course Card -->
                <div class="bg-slate-950/90 border-2 border-brand-orange rounded-3xl p-8 shadow-2xl relative flex flex-col justify-between hover:shadow-neon-orange/20 transition-all duration-300">
                    <div class="absolute -top-4 right-8 bg-brand-orange text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-md">
                        RECOMMENDED TRACK
                    </div>
                    <div>
                        <div class="inline-block bg-brand-orange/10 border border-brand-orange/30 text-brand-orange px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-sm">
                            THE ADVANCED COURSE
                        </div>
                        <p class="text-slate-200 italic mb-3 font-semibold leading-relaxed">You get <strong class="text-brand-orange font-bold">everything in the Basic Course</strong> PLUS the ultimate execution blueprint for video, slide creation, and gamification.</p>
                        <p class="text-brand-orange font-bold text-sm mb-8 flex items-center gap-2">
                            <i data-lucide="video-off" class="w-4 h-4"></i> Instant Pre-Recorded Videos + Live Saturday Review Sessions
                        </p>
                        
                        <div class="space-y-5">
                            <div class="flex items-start gap-4 bg-brand-orange/5 p-3 rounded-xl border border-brand-orange/10 mb-4">
                                <div class="bg-brand-orange/20 text-brand-orange rounded-xl p-2 flex-shrink-0"><i data-lucide="plus" class="w-5 h-5"></i></div>
                                <div>
                                    <h5 class="text-brand-orange font-bold text-base">Includes All Modules 1-6</h5>
                                    <p class="text-slate-400 text-xs">Everything in Basic is included and pre-unlocked.</p>
                                </div>
                            </div>
                            
                            <!-- Modules 7 to 12 -->
                            <div class="flex items-start gap-4">
                                <div class="bg-brand-orange/10 text-brand-orange rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-brand-orange/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 7: AI-Powered Flipped Classroom</h5><p class="text-slate-400 text-sm mt-0.5">Effortlessly shifting students from passive listeners to highly engaged problem solvers.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-brand-orange/10 text-brand-orange rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-brand-orange/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 8: Rapid Slide Creation & Lesson Planning</h5><p class="text-slate-400 text-sm mt-0.5">Using AI to generate weeks of brilliant notes in mere minutes.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-brand-orange/10 text-brand-orange rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-brand-orange/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 9: AI-Powered Video Creation</h5><p class="text-slate-400 text-sm mt-0.5">Screen recording and video generation to create premium, customized content.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-brand-orange/10 text-brand-orange rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-brand-orange/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 10: Gamified Assessment</h5><p class="text-slate-400 text-sm mt-0.5">Designing AI-proof quizzes and addictive classroom games that make learning irresistible.</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-brand-orange/10 text-brand-orange rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-brand-orange/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 11: Google Drive Mastery</h5><p class="text-slate-400 text-sm mt-0.5">Elite cloud architecture for modern teachers (never lose a file or lesson note again).</p></div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-brand-orange/10 text-brand-orange rounded-xl p-2.5 flex-shrink-0 mt-0.5 border border-brand-orange/20"><i data-lucide="check" class="w-5 h-5"></i></div>
                                <div><h5 class="text-white font-bold text-base">Module 12: Google Classroom</h5><p class="text-slate-400 text-sm mt-0.5">Integrating your AI resources into a world-class digital environment for seamless teaching.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-20 text-center">
                <a href="#checkout" class="inline-flex bg-gradient-to-r from-brand-orange to-red-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-neon-orange uppercase tracking-wide pulse-btn btn-shine">
                    I AM READY FOR THIS TRANSFORMATION 👉
                </a>
            </div>
        </div>
    </section>

    <!-- Exclusive Course Bonuses (Grid) -->
    <section class="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-slate-900">
        <!-- Accent Glow -->
        <div class="absolute top-1/4 right-10 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Unbeatable Value Bundle</span>
                <h2 class="text-3xl md:text-5xl font-black mb-4">Exclusive <span class="text-brand-orange">Course Bonuses</span></h2>
                <p class="text-lg text-slate-300">When you enroll today, you unlock a treasure chest of premium resources designed to skyrocket your teaching income and visibility.</p>
                <div class="w-20 h-1 bg-gradient-to-r from-brand-orange to-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Bonus 1 -->
                <div class="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange/30 flex flex-col justify-between">
                    <span class="absolute top-0 right-0 bg-blue-600/20 text-blue-400 border-l border-b border-slate-800 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Basic & Advanced</span>
                    <div>
                        <div class="w-12 h-12 bg-orange-500/10 border border-brand-orange/20 rounded-xl flex items-center justify-center mb-5 text-brand-orange">
                            <i data-lucide="brain-circuit" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-bold text-lg text-white mb-2">6 Videos on The Empowered Educator Mindset</h4>
                        <p class="text-sm text-slate-400 leading-relaxed">Rewire your psychology for absolute success. Break free from limiting beliefs and step into your true power and worth as a Global Guide.</p>
                    </div>
                </div>
                
                <!-- Bonus 2 -->
                <div class="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange/30 flex flex-col justify-between">
                    <span class="absolute top-0 right-0 bg-blue-600/20 text-blue-400 border-l border-b border-slate-800 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Basic & Advanced</span>
                    <div>
                        <div class="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-5 text-green-400">
                            <i data-lucide="trending-up" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-bold text-lg text-white mb-2">Teach Smart, Earn Big</h4>
                        <p class="text-sm text-slate-400 leading-relaxed">The exact roadmap to monetizing your new skills. Learn how to stop undercharging and start building multiple, highly profitable streams of income.</p>
                    </div>
                </div>

                <!-- Bonus 3 -->
                <div class="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange/30 flex flex-col justify-between">
                    <span class="absolute top-0 right-0 bg-blue-600/20 text-blue-400 border-l border-b border-slate-800 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Basic & Advanced</span>
                    <div>
                        <div class="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-5 text-blue-400">
                            <i data-lucide="book-open-check" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-bold text-lg text-white mb-2">AI Prompts for Teachers Playbook</h4>
                        <p class="text-sm text-slate-400 leading-relaxed">A copy-and-paste library of elite, battle-tested AI prompts. Never stare at a blank screen again; just plug these in and get magic instantly.</p>
                    </div>
                </div>

                <!-- Bonus 4 (LIVE) -->
                <div class="bg-slate-900/80 rounded-2xl p-6 border-2 border-brand-orange/40 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange shadow-lg flex flex-col justify-between">
                    <span class="absolute top-0 right-0 bg-brand-orange text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-widest shadow-sm">Basic & Advanced (Live Access)</span>
                    <div>
                        <div class="w-12 h-12 bg-brand-orange/20 border border-brand-orange/40 rounded-xl flex items-center justify-center mb-5 text-brand-orange animate-pulse">
                            <i data-lucide="video" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-bold text-lg text-white mb-2">LIVE MASTERCLASS: Personal Branding & Visibility</h4>
                        <p class="text-sm text-slate-300 leading-relaxed">If you are a hidden gem, you cannot charge a premium. Discover live how to build a magnetic personal brand leveraging AI that attracts premium clients and opportunities.</p>
                    </div>
                </div>

                <!-- Bonus 5 (LIVE) -->
                <div class="bg-slate-900/80 rounded-2xl p-6 border-2 border-brand-orange/40 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange shadow-lg flex flex-col justify-between">
                    <span class="absolute top-0 right-0 bg-brand-orange text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-widest shadow-sm">Basic & Advanced (Live Access)</span>
                    <div>
                        <div class="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-xl flex items-center justify-center mb-5 text-yellow-400 animate-pulse">
                            <i data-lucide="building-2" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-bold text-lg text-white mb-2">LIVE MASTERCLASS: Profitable AI-Powered Educator</h4>
                        <p class="text-sm text-slate-300 leading-relaxed">Specifically designed for School Owners and Ambitious Teachers: Learn how to leverage your new AI skills to drastically boost your enrollment and brand value.</p>
                    </div>
                </div>

                <!-- Bonus 6 -->
                <div class="bg-slate-950 rounded-2xl p-6 border border-slate-800 relative pt-10 hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange/50 flex flex-col justify-between shadow-inner">
                    <span class="absolute top-0 right-0 bg-yellow-400 text-brand-navy text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Advanced Only</span>
                    <div>
                        <div class="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center mb-5 text-pink-400">
                            <i data-lucide="download" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-bold text-lg text-white mb-2">Lifetime Access to All Recordings</h4>
                        <p class="text-sm text-slate-400 leading-relaxed">While Basic users only get live access to the Masterclasses and Reviews, Advanced users receive the full library of recordings to replay, study, and master forever.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Addressing Concerns (FAQ Accordion style) -->
    <section class="py-24 bg-white text-slate-950">
        <div class="max-w-4xl mx-auto px-4">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Friction Killer</span>
                <h2 class="text-3xl md:text-5xl font-black text-brand-navy mt-2 mb-4">Addressing Your Concerns</h2>
                <p class="text-lg text-slate-600">Still on the fence? Let's dismantle every doubt and clear your path to success.</p>
                <div class="w-20 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div class="space-y-6">
                <!-- FAQ 1 -->
                <div class="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 class="font-bold text-lg md:text-xl text-brand-navy mb-3 flex items-start gap-3">
                        <i data-lucide="help-circle" class="text-brand-orange w-6 h-6 flex-shrink-0 mt-0.5"></i>
                        "I don't have the time during the week for this."
                    </h4>
                    <div class="pl-9 text-slate-600 leading-relaxed">
                        <p><strong class="text-brand-navy">We completely eliminated the weekday stress!</strong> Every participant gets <strong class="text-brand-orange">instant access</strong> to all their pre-recorded videos to watch anytime, along with a 24/7 dedicated WhatsApp support group. Furthermore, for our Advanced and School tiers, all live review sessions are strictly held on <strong class="text-brand-navy font-semibold">weekends</strong> (Saturdays).</p>
                    </div>
                </div>
                <!-- FAQ 2 -->
                <div class="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 class="font-bold text-lg md:text-xl text-brand-navy mb-3 flex items-start gap-3">
                        <i data-lucide="help-circle" class="text-brand-orange w-6 h-6 flex-shrink-0 mt-0.5"></i>
                        "I am not very tech-savvy. Will I struggle?"
                    </h4>
                    <div class="pl-9 text-slate-600 leading-relaxed">
                        <p>If you know how to send a WhatsApp message, you can master this course. We teach you the language of AI (Prompt Engineering), not complicated coding. We start from the absolute basics.</p>
                    </div>
                </div>
                <!-- FAQ 3 -->
                <div class="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 class="font-bold text-lg md:text-xl text-brand-navy mb-3 flex items-start gap-3">
                        <i data-lucide="help-circle" class="text-brand-orange w-6 h-6 flex-shrink-0 mt-0.5"></i>
                        "My school doesn't have high-end gadgets or strong Wi-Fi."
                    </h4>
                    <div class="pl-9 text-slate-600 leading-relaxed">
                        <p>We specifically designed <strong class="text-brand-navy">Module 4: The Low-Tech Revolution</strong> for the African reality. We will show you how to do the heavy lifting on your smartphone at home, and bring the magical results into a low-tech classroom.</p>
                    </div>
                </div>
                <!-- FAQ 4 -->
                <div class="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 class="font-bold text-lg md:text-xl text-brand-navy mb-3 flex items-start gap-3">
                        <i data-lucide="help-circle" class="text-brand-orange w-6 h-6 flex-shrink-0 mt-0.5"></i>
                        "Will AI eventually replace me?"
                    </h4>
                    <div class="pl-9 text-slate-600 leading-relaxed">
                        <p>AI will never replace a teacher. But a teacher who uses AI will absolutely replace the teacher who refuses to. This course ensures you are the one steering the machine.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Checkout / Pricing Tiers Section -->
    <section id="checkout" class="py-24 bg-slate-900 text-white relative z-10 border-t border-slate-800">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.05),transparent_45%)]"></div>
        
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16 max-w-3xl mx-auto">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Invest in Excellence</span>
                <h2 class="text-4xl md:text-6xl font-black text-white mt-2 mb-6">Choose Your <span class="text-brand-orange">Transformation Tier</span></h2>
                <p class="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                    Global educators pay hundreds of dollars to acquire these elite skills. Because the future of African education is an emergency, we have heavily subsidized this course. Lock in your package now.
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-brand-orange to-yellow-400 mx-auto mt-6 rounded-full"></div>
            </div>

            <!-- INDIVIDUAL PACKAGES -->
            <div class="text-center mt-12 mb-12">
                <h3 class="text-2xl md:text-4xl font-black text-white border-b-4 border-brand-orange inline-block pb-3 uppercase tracking-wide">
                    INDIVIDUAL PACKAGES
                </h3>
                <p class="text-slate-400 mt-4 max-w-2xl mx-auto font-medium">100% Virtual Training for the dedicated educator. Choose your path to mastery.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-24 items-stretch">
                <!-- Basic Individual -->
                <div class="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 relative pt-12">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 text-slate-300 px-5 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase">
                        The Foundation
                    </div>
                    <div>
                        <div class="text-center border-b border-slate-800/80 pb-6 mb-8">
                            <h4 class="text-2xl font-black text-white tracking-wide uppercase">BASIC COURSE</h4>
                            <p class="text-xs text-slate-400 mt-2 font-medium">Pre-Recorded Videos + Premium WhatsApp Support</p>
                            
                            <div class="mt-6 flex flex-col justify-center items-center gap-1">
                                <span class="text-lg text-slate-500 line-through font-bold">₦10,000</span>
                                <span class="text-5xl md:text-6xl font-black text-white tracking-tight">₦7,500</span>
                                <span class="text-green-400 font-bold mt-3 bg-green-500/10 border border-green-500/25 inline-block px-4 py-1 rounded-full text-xs">Discount Applied!</span>
                            </div>
                        </div>
                        
                        <ul class="space-y-4 mb-8 text-slate-300">
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-500 w-4 h-4 flex-shrink-0"></i> Instant Access to All Pre-Recorded Videos</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-500 w-4 h-4 flex-shrink-0"></i> Dedicated WhatsApp Group for Q&A</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-500 w-4 h-4 flex-shrink-0"></i> Access to Modules 1 - 6</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-500 w-4 h-4 flex-shrink-0"></i> Live Access: July 11/12 Masterclasses</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-500 w-4 h-4 flex-shrink-0"></i> Basic Bonuses Included</li>
                            <li class="flex items-center gap-3 text-sm text-slate-500 line-through"><i data-lucide="x-circle" class="text-slate-600 w-4 h-4 flex-shrink-0"></i> No Live Review Sessions</li>
                            <li class="flex items-center gap-3 text-sm text-slate-500 line-through"><i data-lucide="x-circle" class="text-slate-600 w-4 h-4 flex-shrink-0"></i> No Course Recordings</li>
                        </ul>
                    </div>
                </div>

                <!-- Advanced Individual -->
                <div class="bg-slate-950/90 text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative pt-12 border-4 border-brand-orange shadow-neon-orange/20">
                    <div class="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-red-600 text-white px-6 py-2 rounded-full font-black text-xs tracking-widest uppercase shadow-lg whitespace-nowrap">
                        BEST VALUE TIER
                    </div>
                    <div>
                        <div class="text-center border-b border-slate-800 pb-6 mb-8">
                            <h4 class="text-2xl font-black text-white tracking-wide uppercase">ADVANCED COURSE</h4>
                            <p class="text-xs text-brand-orange mt-2 font-black">Pre-Recorded Videos + Live Saturday Review Sessions</p>
                            
                            <div class="mt-6 flex flex-col justify-center items-center gap-1">
                                <span class="text-lg text-slate-500 line-through font-bold">₦15,000</span>
                                <span class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400 tracking-tight">₦12,000</span>
                                <span class="text-brand-orange font-bold mt-3 bg-brand-orange/10 border border-brand-orange/30 inline-block px-4 py-1 rounded-full text-xs animate-pulse">Most Popular</span>
                            </div>
                        </div>
                        
                        <ul class="space-y-4 mb-8 text-slate-200">
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Instant Access to All Pre-Recorded Videos</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Dedicated WhatsApp Group for Q&A</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> <strong>Live Saturday Review Sessions</strong></li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Access to ALL Modules 1 - 12</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Live Access: July 11/12 Masterclasses</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> <strong>Lifetime Access to All Recordings</strong></li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> All Premium Bonuses Included</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- SCHOOL PACKAGES -->
            <div class="text-center mb-12">
                <h3 class="text-2xl md:text-4xl font-black text-white border-b-4 border-brand-orange inline-block pb-3 uppercase tracking-wide">
                    SCHOOL PACKAGES
                </h3>
                <p class="text-slate-400 mt-4 max-w-2xl mx-auto font-medium">100% Virtual Training designed for teams of 5 teachers. Empower your entire staff and save massively.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16 items-stretch">
                <!-- Basic School -->
                <div class="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 relative">
                    <div>
                        <div class="text-center border-b border-slate-800 pb-6 mb-8">
                            <h4 class="text-2xl font-black text-blue-400 tracking-wide uppercase">BASIC SCHOOL TIER</h4>
                            <p class="text-xs text-slate-400 mt-2 font-medium">Pre-Recorded Videos + 1 Live Review Session</p>
                            
                            <div class="mt-6 flex flex-col justify-center items-center gap-1">
                                <span class="text-lg text-slate-500 line-through font-bold">₦50,000</span>
                                <span class="text-5xl font-black text-blue-400 tracking-tight">₦40,000</span>
                                <span class="text-blue-400 font-bold mt-3 bg-blue-500/10 border border-blue-500/30 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider">For 5 Teachers</span>
                            </div>
                        </div>
                        
                        <ul class="space-y-4 mb-8 text-slate-300">
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-400 w-4 h-4 flex-shrink-0"></i> Instant Access to All Pre-Recorded Videos</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-400 w-4 h-4 flex-shrink-0"></i> <strong>1 Exclusive Live Review Session for your team</strong></li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-400 w-4 h-4 flex-shrink-0"></i> Personalised Group Support for all 5 teachers</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-400 w-4 h-4 flex-shrink-0"></i> Access to Modules 1 - 6</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-400 w-4 h-4 flex-shrink-0"></i> Live Access: July 11/12 Masterclasses</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-blue-400 w-4 h-4 flex-shrink-0"></i> Basic Bonuses Included</li>
                        </ul>
                    </div>
                </div>

                <!-- Advanced School -->
                <div class="bg-slate-950/80 border-2 border-brand-orange rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:shadow-neon-orange/10 transition-all duration-300 relative">
                    <div>
                        <div class="text-center border-b border-slate-800 pb-6 mb-8">
                            <h4 class="text-2xl font-black text-brand-orange tracking-wide uppercase">ADVANCED SCHOOL TIER</h4>
                            <p class="text-xs text-slate-400 mt-2 font-medium">Pre-Recorded Videos + 2 Live Review Sessions</p>
                            
                            <div class="mt-6 flex flex-col justify-center items-center gap-1">
                                <span class="text-lg text-slate-500 line-through font-bold">₦75,000</span>
                                <span class="text-5xl font-black text-brand-orange tracking-tight">₦60,000</span>
                                <span class="text-brand-orange font-bold mt-3 bg-brand-orange/10 border border-brand-orange/30 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider">For 5 Teachers</span>
                            </div>
                        </div>
                        
                        <ul class="space-y-4 mb-8 text-slate-200">
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Instant Access to All Pre-Recorded Videos</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> <strong>2 Exclusive Live Review Sessions for your team</strong></li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Personalised Group Support for all 5 teachers</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> Access to ALL Modules 1 - 12</li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> <strong>Lifetime Access to All Recordings</strong></li>
                            <li class="flex items-center gap-3 text-sm"><i data-lucide="check-circle-2" class="text-brand-orange w-4 h-4 flex-shrink-0"></i> All Premium Bonuses Included</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Physical Training Option (Callout) -->
            <div class="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-navy border border-slate-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-2xl relative overflow-hidden group">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.08),transparent_70%)] pointer-events-none"></div>
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-orange opacity-5 rounded-full blur-2xl"></div>
                
                <div class="relative z-10 flex flex-col items-center">
                    <div class="bg-brand-orange/10 text-brand-orange w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-brand-orange/20 shadow-inner">
                        <i data-lucide="users" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-black text-white mb-2">Prefer Physical Training?</h3>
                    <p class="text-brand-orange font-bold text-lg mb-4 uppercase tracking-wider">Available strictly for August 2026</p>
                    <p class="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Want us to train your entire staff in person? Book an exclusive, highly interactive physical session tailored specifically for your school's unique needs.
                    </p>
                    <a href="tel:09154667467" class="inline-flex bg-white text-brand-navy px-8 py-4.5 rounded-full font-black text-base hover:bg-brand-orange hover:text-white hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 animate-float">
                        <i data-lucide="phone-call" class="w-5 h-5 animate-pulse"></i> Call or Message: 09154667467
                    </a>
                </div>
            </div>

            <!-- PAYMENT STEPS BOX -->
            <div class="mt-20 bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800/80 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange to-yellow-500"></div>
                <h3 class="text-2xl md:text-3xl font-black text-white mb-10">How To Secure Your Seat Right Now:</h3>
                
                <div class="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                    
                    <!-- Step 1 -->
                    <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 flex-1 w-full text-left flex flex-col justify-between">
                        <div>
                            <div class="bg-brand-orange text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg mb-5 shadow-neon-orange/20">1</div>
                            <h4 class="font-bold text-lg mb-4 text-white uppercase tracking-wide">Make Payment</h4>
                            
                            <div class="space-y-4">
                                <div class="bg-brand-dark/90 p-5 rounded-xl border border-slate-800 relative overflow-hidden group">
                                    <div class="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                                    <p class="font-bold text-slate-400 mb-1.5 text-[10px] uppercase tracking-wider">🇳🇬 For Nigerian Residents (Naira):</p>
                                    <p class="font-mono text-2xl font-black text-white tracking-widest select-all">3138340156</p>
                                    <p class="font-black text-brand-orange text-sm mt-1">FIRST BANK</p>
                                </div>
                                
                                <div class="bg-brand-dark/90 p-5 rounded-xl border border-slate-800 relative overflow-hidden">
                                    <div class="absolute top-0 left-0 w-1 h-full bg-brand-orange"></div>
                                    <p class="font-bold text-slate-400 mb-2.5 text-[10px] uppercase tracking-wider">🌍 For International Participants:</p>
                                    <a href="https://geacademy.selar.com/aplbootcamp" target="_blank" class="block w-full bg-gradient-to-r from-brand-orange to-red-600 text-white text-center py-3 rounded-lg font-black hover:shadow-neon-orange transition-all duration-300 text-xs uppercase tracking-wider">
                                        Pay Securely via Selar <i data-lucide="external-link" class="inline w-3 h-3 ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Arrow -->
                    <div class="text-brand-orange self-center hidden md:block">
                        <i data-lucide="arrow-right" class="w-8 h-8"></i>
                    </div>

                    <!-- Step 2 -->
                    <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 flex-1 w-full text-left flex flex-col justify-between">
                        <div>
                            <div class="bg-brand-orange text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg mb-5 shadow-neon-orange/20">2</div>
                            <h4 class="font-bold text-lg mb-3 text-white uppercase tracking-wide">Upload Receipt</h4>
                            <p class="text-slate-300 text-sm leading-relaxed mb-6">
                                Click the button below to fill out the secure registration form and upload your proof of payment to get immediate access to the course tier and bonuses you selected.
                            </p>
                        </div>
                        <a href="https://forms.gle/xWbfNu9aQKytwxaZ9" target="_blank" class="block w-full bg-white text-brand-navy text-center py-4 rounded-lg font-black hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-md uppercase tracking-wider text-xs">
                            Open Registration Form <i data-lucide="external-link" class="inline w-3.5 h-3.5 ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Facilitator Biography Section -->
    <section class="py-24 bg-slate-50 text-slate-950 border-t border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-brand-orange font-black tracking-widest uppercase text-sm">Your Master Coach</span>
                <h3 class="text-3xl md:text-5xl font-black text-brand-navy mt-2 mb-4">Meet The Facilitator</h3>
                <div class="w-20 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div class="bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                <!-- Facilitator Image container -->
                <div class="lg:w-5/12 bg-brand-navy relative overflow-hidden min-h-[400px]">
                    <div class="absolute inset-0 opacity-10 pointer-events-none">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots-fac" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="currentColor"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots-fac)"/></svg>
                    </div>
                    <img src="Abdullateef Adedeji.jpg" alt="Coach Abdullateef Adedeji" class="w-full h-full object-cover absolute inset-0 z-10 hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800'">
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent h-44 z-20"></div>
                </div>
                
                <!-- Facilitator Bio Content -->
                <div class="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                    <span class="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">The Flipped Classroom Expert</span>
                    <h4 class="text-3xl md:text-4xl font-black text-brand-navy mb-1 leading-tight">Abdullateef Adedeji</h4>
                    <p class="text-brand-navy/80 font-semibold text-sm mb-6 pb-4 border-b border-slate-100 uppercase tracking-wider">
                        Founder, Growth-Minded Educators Academy
                    </p>
                    
                    <div class="space-y-4 text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
                        <p>Abdullateef Adedeji is a leading educational strategist and hands-on innovator widely recognized as "The Flipped Classroom Expert." With a proven track record of training over 1,000 educators across Nigeria, Ghana, Cameroon, and the USA, he specializes in transforming traditional teaching into dynamic, highly profitable technology-driven ecosystems.</p>
                        <p>As a researcher at the International Centre for Applied Mathematical Modelling and Data Analytics and founder of the Growth-minded Educators Academy, Abdullateef operates at the cutting edge of modern pedagogy. His expertise on the digital economy and pedagogical reform has been featured in three high-profile television appearances, including Kaftan TV’s DayBreak Africa and News Central TV.</p>
                        <p>By combining deep instructional insight with actionable frameworks, Abdullateef masterfully equips teachers to facilitate AI-powered learning environments. He moves educators from exhausted digital spectators to confident, thriving facilitators—ensuring you build the deeply rewarding legacy you deserve.</p>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <div class="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-brand-navy font-bold flex items-center gap-2 text-xs uppercase tracking-wide shadow-sm">
                            <i data-lucide="globe" class="text-brand-orange w-4 h-4"></i> 1,000+ Educators Trained
                        </div>
                        <div class="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-brand-navy font-bold flex items-center gap-2 text-xs uppercase tracking-wide shadow-sm">
                            <i data-lucide="tv" class="text-brand-orange w-4 h-4"></i> Featured on News Central TV
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <a href="#checkout" class="inline-flex bg-brand-orange text-white px-10 py-5 rounded-full font-black text-xl hover:bg-brand-orangeHover transition-all duration-300 shadow-neon-orange uppercase tracking-wide pulse-btn">
                    SECURE YOUR COURSE TIER NOW 👉
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-dark text-slate-400 py-16 border-t border-slate-900">
        <div class="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
            <img src="GEA LOGO.jpg" alt="GEA Logo" class="h-14 w-auto object-contain rounded-lg mb-6 border border-slate-800 p-1 bg-brand-navy/50 opacity-80" onerror="this.style.display='none'">
            <h3 class="text-white font-extrabold text-xl mb-2 font-heading tracking-wide uppercase">Growth-Minded Educators Academy</h3>
            <p class="mb-8 max-w-md mx-auto text-sm leading-relaxed text-slate-400">
                Empowering African educators to transition from Content Dispensers to Global Guides.
            </p>
            
            <div class="flex flex-wrap justify-center items-center gap-4 mb-10">
                <a href="https://chat.whatsapp.com/Gb5pEtxsQFG2LUzEjUYCcZ" target="_blank" class="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="Join our WhatsApp Community">
                    <i data-lucide="message-circle" class="w-4 h-4"></i> WhatsApp
                </a>
                <a href="https://web.facebook.com/geacademypage/" target="_blank" class="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="Facebook Page">
                    <i data-lucide="facebook" class="w-4 h-4"></i> Facebook
                </a>
                <a href="https://www.linkedin.com/company/geacademypage" target="_blank" class="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#095bb0] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="LinkedIn Page">
                    <i data-lucide="linkedin" class="w-4 h-4"></i> LinkedIn
                </a>
                <a href="https://www.youtube.com/@geacademy_yt" target="_blank" class="flex items-center gap-2 bg-[#FF0000] hover:bg-[#e60000] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-1" title="YouTube Channel">
                    <i data-lucide="youtube" class="w-4 h-4"></i> YouTube
                </a>
            </div>

            <p class="text-xs text-slate-500 font-mono">
                &copy; 2026 Growth-Minded Educators Academy. All rights reserved.
            </p>
        </div>
    </footer>

    <script>
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        } else {
            window.addEventListener('load', () => lucide.createIcons());
        }
    </script>
</body>
</html>`;
