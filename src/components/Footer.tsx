import React from 'react';
import { SafeImage } from './SafeImage';
import { MessageSquare, Facebook, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <SafeImage 
          src="/gea_logo.png" 
          alt="GEA Logo" 
          fallbackType="footer-logo" 
          className="h-14 w-auto object-contain rounded-lg mb-6 border border-slate-800 p-1 bg-slate-900/50 opacity-85" 
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
  );
}
