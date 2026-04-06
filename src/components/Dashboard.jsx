import { useState } from 'react';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-1000 px-4 ${
      isOpen ? 'bg-emerald-950/20' : 'bg-rose-950/20'
    }`}>
      
      {/* Adaptive Glassmorphism Container */}
      <div className={`relative w-full max-w-md p-10 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-700 shadow-2xl overflow-hidden ${
        isOpen 
          ? 'bg-white/5 border-emerald-500/20 shadow-emerald-500/10' 
          : 'bg-white/5 border-rose-500/20 shadow-rose-500/10'
      }`}>

        {/* Dynamic Glow Atmosphere (Pulsating) */}
        <div className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] animate-breath transition-colors duration-1000 ${
          isOpen ? 'bg-emerald-500/20' : 'bg-rose-500/20'
        }`} />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Header with Serif Typography */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic text-white/90 tracking-tight">
              Shop <span className="font-sans font-black not-italic text-blue-400">Manager</span>
            </h2>
            <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-white/30 mt-3">
              Real-time Status Control
            </p>
          </div>

          {/* Status Core Indicator (3D Glass Orb) */}
          <div className="relative mb-12 group">
            {/* Breathing Outer Ring */}
            <div className={`absolute -inset-6 rounded-full blur-2xl animate-breath transition-colors duration-700 ${
              isOpen ? 'bg-emerald-500/30' : 'bg-rose-500/30'
            }`} />
            
            {/* The Orb */}
            <div className={`relative w-28 h-28 rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all duration-700 transform group-hover:scale-110 ${
              isOpen 
                ? 'bg-[var(--bg-emerald-orb)] text-emerald-50 shadow-emerald-500/50 ring-4 ring-emerald-400/20' 
                : 'bg-[var(--bg-rose-orb)] text-rose-50 shadow-rose-500/50 ring-4 ring-rose-400/20'
            }`}>
              <span className="drop-shadow-lg">{isOpen ? "✓" : "✕"}</span>
              {/* Inner Glass Reflection */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50" />
            </div>
          </div>

          {/* Status Text with Scale-up Effect */}
          <div className={`mb-10 text-xs font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full border transition-all duration-700 scale-100 hover:scale-110 ${
            isOpen
              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
              : 'text-rose-400 bg-rose-500/10 border-rose-500/20'
          }`}>
            {isOpen ? "Store is Open" : "Store is Closed"}
          </div>

          {/* Haptic-Feel Action Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`group relative w-full py-5 rounded-[1.8rem] font-sans font-black text-xs tracking-[0.2em] uppercase text-white transition-all duration-500 active:scale-95 overflow-hidden ${
              isOpen
                ? 'bg-gradient-to-r from-rose-600 to-rose-700 shadow-[0_10px_40px_-10px_rgba(244,63,94,0.5)] hover:shadow-rose-500/40'
                : 'bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-emerald-500/40'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isOpen ? "🚩 Close Shop" : "🚀 Open Shop"}
            </span>

            {/* High-Speed Shine Sweep */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:animate-[shine_1s_ease-in-out_infinite]" />
            </div>
          </button>

          {/* Footer Metadata */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="h-px w-12 bg-white/10" />
            <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black">
              System Verified: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}