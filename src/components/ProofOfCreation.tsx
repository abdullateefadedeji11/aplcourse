import React from 'react';
import { Video, Music, Presentation, Headphones, Podcast, ExternalLink } from 'lucide-react';

export function ProofOfCreation() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-900">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-proof" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-proof)"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Aesthetic & Practical Proof</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6 font-heading">
            Imagine Creating <span className="text-[#ff6b00]">THIS</span> For Your Students...
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            During this course, you won't just learn theory. You will build a captivating automated resource factory. Here is a taste of what you will master.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b00] to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Video 1 */}
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300">
            <div>
              <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2 font-heading">
                <Video className="text-[#ff6b00] w-5 h-5" /> AI-Powered Video Lessons
              </h4>
              <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-850">
                <iframe 
                  src="https://www.youtube.com/embed/eQZrRzVnSr8?si=wdTQqTerRQ0FMRbf" 
                  title="AI-Powered Video Lessons Demonstration" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-none"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
              Learn to convert text scripts into highly engaging educational videos with avatars and b-roll in minutes.
            </p>
          </div>

          {/* Video 2 */}
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300">
            <div>
              <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2 font-heading">
                <Music className="text-[#ff6b00] w-5 h-5" /> Educational Music Videos
              </h4>
              <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-850">
                <iframe 
                  src="https://www.youtube.com/embed/rmQLg9Tbdwk?si=vEUrurFIV2Ku565z" 
                  title="Educational Music Videos Demonstration" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-none"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
              Turn complex formulas or historical facts into catchy, memorable songs that students can't stop singing.
            </p>
          </div>

          {/* Slides 3 */}
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300">
            <div>
              <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2 font-heading">
                <Presentation className="text-[#ff6b00] w-5 h-5" /> AI-Generated Slide Decks
              </h4>
              <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-850">
                <iframe 
                  src="https://docs.google.com/presentation/d/e/2PACX-1vRNwdK9ivYzeZ6G9F04pfeWEZOscArDrCK7TFWkfFuYNlvxa9z67rfviN-WuEw17s079mYFNIPUxqlA/pubembed?start=true&loop=true&delayms=3000" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-none"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
              Turn raw text into beautifully structured, professional slide decks using tools like Manus and NotebookLM in under 3 minutes.
            </p>
          </div>

          {/* Audio 4 */}
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-[#ff6b00]/30 transition-all duration-300">
            <div>
              <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2 font-heading">
                <Headphones className="text-[#ff6b00] w-5 h-5" /> NotebookLM Audio Overviews
              </h4>
              <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 text-center flex flex-col justify-center items-center h-[234px]">
                <div className="w-12 h-12 rounded-full bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] mb-3">
                  <Podcast className="w-6 h-6 animate-bounce text-[#ff6b00]" />
                </div>
                <p className="text-white font-semibold text-sm mb-4">Listen to an AI-Generated Audio Summary</p>
                
                <div className="w-full h-[60px] rounded-lg overflow-hidden border border-slate-850 bg-slate-900 shadow-inner">
                  <iframe src="https://drive.google.com/file/d/1uaGbur57RUU7-THO_BR1DuX8Pz8IcfwM/preview" width="100%" height="60" allow="autoplay" className="border-none w-full h-full" loading="lazy"></iframe>
                </div>
                
                <p className="text-[11px] text-slate-400 mt-3 text-center">
                  Having trouble playing? <a href="https://drive.google.com/file/d/1uaGbur57RUU7-THO_BR1DuX8Pz8IcfwM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#ff6b00] hover:underline font-bold flex items-center justify-center gap-1">Listen on Google Drive <ExternalLink className="w-3 h-3" /></a>
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-slate-800/60 pt-3">
              Generate interactive podcast-style audio summaries of your lesson notes for students to consume on the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
