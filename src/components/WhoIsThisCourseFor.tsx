import React from 'react';
import { BookOpen, Building, Laptop, GraduationCap, Rocket } from 'lucide-react';

export function WhoIsThisCourseFor() {
  return (
    <section className="py-24 bg-slate-50 text-slate-950 dark:bg-slate-900/40 dark:text-slate-100 transition-colors duration-300 border-t border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Empower Your Future</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading dark:text-white">
            Who Is This <span className="text-[#ff6b00]">Course For?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The AI-Powered Learning framework is customized for growth-minded individuals ready to rewrite their educational legacy.
          </p>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group dark:bg-slate-850 dark:border-slate-800">
            <div className="bg-orange-50 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-colors duration-300 dark:bg-[#ff6b00]/10">
              <BookOpen className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors dark:text-white font-heading">Exhausted Classroom Teachers</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">Who desperately want to reclaim their weekends, eliminate burnout, and become highly valued, well-paid 21st-century educators.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group dark:bg-slate-850 dark:border-slate-800">
            <div className="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] transition-colors duration-300 dark:bg-slate-800">
              <Building className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors dark:text-white font-heading">Visionary School Owners & Admins</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">Who want to standardise global excellence across their faculty, eradicate staff turnover, and turn their school into a highly profitable premium brand.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group dark:bg-slate-850 dark:border-slate-800">
            <div className="bg-orange-50 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-colors duration-300 dark:bg-[#ff6b00]/10">
              <Laptop className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors dark:text-white font-heading">Online Teachers & Creators</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">Who want to scale their impact across borders, package their knowledge into premium virtual programs, and stand out in the digital economy.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group dark:bg-slate-850 dark:border-slate-800">
            <div className="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] transition-colors duration-300 dark:bg-slate-800">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors dark:text-white font-heading">Private Tutors & Consultants</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">Who want to deliver mind-blowing, personalised learning experiences that effortlessly justify charging premium, high-ticket rates.</p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group dark:bg-slate-850 dark:border-slate-800">
            <div className="bg-orange-50 text-[#ff6b00] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] group-hover:text-white transition-colors duration-300 dark:bg-[#ff6b00]/10">
              <Laptop className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors dark:text-white font-heading">Ed-Tech & Curriculum Developers</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">Who want to master rapid resource creation and stay lightyears ahead of the curve in the competitive global education market.</p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100 hover:border-[#ff6b00]/40 hover:-translate-y-2 transition-all duration-300 group dark:bg-slate-850 dark:border-slate-800">
            <div className="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff6b00] transition-colors duration-300 dark:bg-slate-800">
              <Rocket className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff6b00] transition-colors dark:text-white font-heading">Forward-Thinking Graduates</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">Who want to enter the competitive job market not as novices, but as highly sought-after, highly paid digital learning experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
