import React from 'react';
import { Play } from 'lucide-react';

export function WebinarSummary() {
  return (
    <section id="webinar-summary" className="py-24 bg-slate-950 text-white border-t border-b border-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] font-bold px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-6 font-heading">
          <Play className="w-3.5 h-3.5 fill-[#ff6b00] animate-pulse text-[#ff6b00]" />
          See It In Action
        </div>
        
        <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight font-heading">
          Watch the AI-Powered Learning Facilitator Webinar Summary
        </h3>
        
        {/* MacBook Device Frame Mockup */}
        <div className="relative mx-auto max-w-3xl mb-12 shadow-2xl rounded-2xl border border-slate-800 bg-slate-900 p-2 md:p-4 shadow-[#ff6b00]/20">
          <div className="flex items-center justify-between pb-2 px-2 border-b border-slate-800 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-xs text-slate-500 font-mono tracking-widest uppercase font-heading">GEA WEBINAR SUMMIT</span>
            <div className="w-10"></div>
          </div>
          <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden shadow-inner border border-slate-800">
            <iframe 
              src="https://www.youtube.com/embed/BJd8VWjPnRM?si=tf_TVFg9I-BdlCvp" 
              title="APL Facilitator Webinar Summary" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl border-none"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Discover exactly how this framework will transform your teaching, eliminate burnout, and elevate your income in the digital age.
        </p>
      </div>
    </section>
  );
}
