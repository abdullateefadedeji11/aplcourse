import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType: 'logo' | 'coach' | 'footer-logo';
}

export function SafeImage({ src, alt, className = "", fallbackType }: SafeImageProps) {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    if (fallbackType === 'logo') {
      return (
        <div className={`flex items-center justify-center bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] rounded-xl font-black font-heading ${className}`}>
          GEA
        </div>
      );
    } else if (fallbackType === 'coach') {
      return (
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center p-6 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00] mb-4 shadow-lg shadow-[#ff6b00]/10">
            <Users className="w-10 h-10 animate-pulse text-[#ff6b00]" />
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
