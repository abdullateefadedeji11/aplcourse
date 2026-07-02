import React from 'react';
import { Music, Video, Laptop, BookOpen, CheckSquare, Layout } from 'lucide-react';

export function WhatYouWillLearn() {
  return (
    <section className="py-20 bg-slate-50 transition-colors duration-300 dark:bg-slate-900/60 border-t border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Interactive Learning Artifacts</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading dark:text-white">
            What You Will <span className="text-[#ff6b00]">Learn To Create</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base dark:text-slate-300">
            This is not just theory. You will master building rich, interactive media and educational assets that completely revolutionize classroom engagement.
          </p>
          <div className="w-20 h-1.5 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Asset 1: Educational Music Videos */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-6">
                <Music className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#ff6b00] font-heading bg-[#ff6b00]/10 px-2 py-0.5 rounded-md">Edutainment</span>
              <h4 className="text-xl font-black text-slate-950 mt-3 mb-3 font-heading dark:text-white">Educational Music Videos</h4>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                Transform dry curriculum lists (e.g. Science elements, math formulas, historical timelines) into catchy, memorable rhythmic songs using AI music synthesis. Students memorize your entire lesson by singing along!
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono font-bold text-slate-400">Deliverable: MP4 Video & Audio Tracks</span>
            </div>
          </div>

          {/* Asset 2: AI-Powered Animated Explainer Clips */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-6">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-blue-600 font-heading bg-blue-500/10 px-2 py-0.5 rounded-md dark:text-blue-400">Visual Lessons</span>
              <h4 className="text-xl font-black text-slate-950 mt-3 mb-3 font-heading dark:text-white">Animated Explainer Lessons</h4>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                Animate your educational content and lessons by bringing digital characters to life. Master avatar lip-sync, expressive speech rendering, and clean visual backgrounds that retain student interest seamlessly.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono font-bold text-slate-400">Deliverable: Custom Lesson Avatars</span>
            </div>
          </div>

          {/* Asset 3: Mobile Screencast Tutorials */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 font-heading bg-emerald-500/10 px-2 py-0.5 rounded-md dark:text-emerald-400">Rapid Content</span>
              <h4 className="text-xl font-black text-slate-950 mt-3 mb-3 font-heading dark:text-white">Smartphone Screen Lessons</h4>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                Learn to record, edit, and voiceover rapid, super-clean mobile screen capture lessons on your phone. Record once, and let your students review calculations, diagrams, or pronunciation at home 24/7.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono font-bold text-slate-400">Deliverable: Mobile-Optimized Screencasts</span>
            </div>
          </div>

          {/* Asset 4: Personalized AI Textbooks */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#ff6b00] font-heading bg-[#ff6b00]/10 px-2 py-0.5 rounded-md">Resources</span>
              <h4 className="text-xl font-black text-slate-950 mt-3 mb-3 font-heading dark:text-white">Personalized AI Textbooks</h4>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                Build custom textbook manuals, student reading files, and illustrated step-by-step notes completely tailored to your school curriculum and local syllables in less than 10 minutes.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono font-bold text-slate-400">Deliverable: Custom Curriculum Manuals</span>
            </div>
          </div>

          {/* Asset 5: Ethical, Cheat-Proof Assessments */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-6">
                <CheckSquare className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-purple-600 font-heading bg-purple-500/10 px-2 py-0.5 rounded-md dark:text-purple-400">Evaluations</span>
              <h4 className="text-xl font-black text-slate-950 mt-3 mb-3 font-heading dark:text-white">Cheat-Proof Assessments</h4>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                Formulate gamified, interactive quizzes and conceptual evaluations that focus strictly on critical thinking and high-order cognition, preventing copy-paste cheating and providing instant self-marking metrics.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono font-bold text-slate-400">Deliverable: Automated Interactive Quizzes</span>
            </div>
          </div>

          {/* Asset 6: Cloud Command Center & Slides */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between dark:bg-slate-850 dark:border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-teal-600 font-heading bg-teal-500/10 px-2 py-0.5 rounded-md dark:text-teal-400">Command Center</span>
              <h4 className="text-xl font-black text-slate-950 mt-3 mb-3 font-heading dark:text-white">Google Workspace Setup</h4>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                Build and structure a premium digital workspace using Google Classroom and Google Drive. Organize lessons, generate beautiful slides instantaneously with AI, and manage student communication automatically.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono font-bold text-slate-400">Deliverable: Structured Classroom Hub</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
