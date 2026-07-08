import React, { useState } from 'react';
import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AddressingConcerns() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "\"I don't have the time during the week for this.\"",
      a: "We completely eliminated the weekday stress! Every participant gets instant access to all their pre-recorded videos to watch anytime, along with a 24/7 dedicated WhatsApp support group. Furthermore, for our Advanced tier, all live review sessions are held on weekends (Saturdays)."
    },
    {
      q: "\"I am not very tech-savvy. Will I struggle?\"",
      a: "If you know how to send a WhatsApp message, you can master this course. We teach you the language of AI (Prompt Engineering), not complicated coding. We start from the absolute basics."
    },
    {
      q: "\"My school doesn't have high-end gadgets or strong Wi-Fi.\"",
      a: "We specifically designed high-impact, low-tech solutions for the African reality. We will show you how to do the heavy lifting on your smartphone at home, and bring the magical results into absolutely any classroom environment."
    },
    {
      q: "\"Will AI eventually replace me?\"",
      a: "AI will never replace a teacher. But a teacher who uses AI will absolutely replace the teacher who refuses to. This course ensures you are the one steering the machine."
    }
  ];

  return (
    <section className="py-24 bg-transparent text-slate-800 relative overflow-hidden dark:text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#ff6b00] font-black tracking-widest uppercase text-xs md:text-sm font-heading">Friction Killer</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 font-heading dark:text-white">Addressing Your Concerns</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Still on the fence? Let's dismantle every doubt and clear your path to success.</p>
          <div className="w-20 h-1.5 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-[#ff6b00]/30 dark:bg-slate-900 dark:border-slate-850">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-start gap-3 font-heading focus:outline-none dark:text-white cursor-pointer"
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className="text-[#ff6b00] w-6 h-6 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </span>
                {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 pl-9 text-slate-600 leading-relaxed text-sm dark:text-slate-300">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
