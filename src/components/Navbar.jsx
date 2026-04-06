import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/10 backdrop-blur-2xl transition-all duration-500 shadow-navbar ring-1 ring-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* Left Side: Logo Section with Spring Animation */}
        <Link to="/" className="group flex items-center gap-4 transition-transform active:scale-95">
          <div className="relative flex items-center justify-center rounded-2xl bg-white/5 p-2.5 shadow-inner transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-xl group-hover:animate-[spring-bounce_0.5s_ease-out_forwards]">
            <span className="text-2xl drop-shadow-md">🏠</span>
            {/* Subtle glow behind icon */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <h1 className="bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-xl font-black tracking-tight text-transparent md:text-2xl">
            Gaon Shop Status
          </h1>
        </Link>

        {/* Right Side: Elite Live Status Button */}
        <div className="relative group cursor-pointer">
          {/* Breathing Glow Effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 blur-md opacity-20 transition duration-500 group-hover:opacity-60 group-hover:animate-pulse"></div>
          
          {/* Main Button Body - Refined Glass */}
          <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 md:px-6 md:py-2.5">
            
            {/* Minimal Ping Indicator */}
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-50/90 md:text-[11px]">
              Live Status
            </span>
            
            {/* Sophisticated Shine Sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}