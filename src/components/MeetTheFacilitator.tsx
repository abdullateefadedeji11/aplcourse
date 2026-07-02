import React from 'react';
import { Globe, Tv } from 'lucide-react';
import { SafeImage } from './SafeImage';

export function MeetTheFacilitator() {
  return (
    <section className="py-24 bg-slate-50 text-slate-950 border-t border-b border-slate-200 transition-colors duration-300 dark:bg-slate-900 dark:text-white dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Your Master Coach</span>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading dark:text-white">Meet The Facilitator</h3>
          <div className="w-20 h-1.5 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 dark:bg-slate-850 dark:border-slate-800 dark:shadow-none">
          
          {/* Visual Block for photo */}
          <div className="lg:w-5/12 bg-slate-950 relative overflow-hidden min-h-[400px]">
            <SafeImage 
              src="/abdullateef.jpg" 
              alt="Abdullateef Adedeji" 
              fallbackType="coach" 
              className="w-full h-full object-cover absolute inset-0 z-10 hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent h-44 z-20"></div>
          </div>

          {/* Coach Details text */}
          <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#ff6b00] font-bold text-xs uppercase tracking-widest mb-2 font-heading">The Flipped Classroom Expert</span>
            <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-1 leading-tight font-heading dark:text-white">Abdullateef Adedeji</h4>
            <p className="text-[#ff6b00] font-semibold text-sm mb-6 pb-4 border-b border-slate-100 uppercase tracking-wider font-heading dark:border-slate-800">
              Educational Strategist & Innovative Trainer
            </p>
            
            <div className="space-y-4 text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 dark:text-slate-300">
              <p>Abdullateef Adedeji is a leading educational strategist and hands-on innovator widely recognized as "The Flipped Classroom Expert." With a proven track record of training over 1,000 educators across Nigeria, Ghana, Cameroon, and the USA, he specializes in transforming traditional teaching into dynamic, highly profitable technology-driven ecosystems.</p>
              <p>As a researcher at the International Centre for Applied Mathematical Modelling and Data Analytics and founder of the Growth-minded Educators Academy, Abdullateef operates at the cutting edge of modern pedagogy. His expertise on the digital economy and pedagogical reform has been featured in three high-profile television appearances, including Kaftan TV’s DayBreak Africa and News Central TV.</p>
              <p>By combining deep instructional insight with actionable frameworks, Abdullateef masterfully equips teachers to facilitate AI-powered learning environments. He moves educators from exhausted digital spectators to confident, thriving facilitators—ensuring you build the deeply rewarding legacy you deserve.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-slate-900 font-bold flex items-center gap-2 text-xs uppercase tracking-wide shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:text-white">
                <Globe className="text-[#ff6b00] w-4 h-4" /> 1,000+ Educators Trained
              </div>
              <div className="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-slate-900 font-bold flex items-center gap-2 text-xs uppercase tracking-wide shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:text-white">
                <Tv className="text-[#ff6b00] w-4 h-4" /> Featured on News Central TV
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
