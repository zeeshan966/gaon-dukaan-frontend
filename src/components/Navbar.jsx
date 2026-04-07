import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {/* 1. Scrolling Animated Heading Section */}
      <div className="w-full text-center py-4 bg-gray-900 border-b border-white/10 overflow-hidden">
        <h2 className="inline-block text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-green-400 via-blue-500 via-indigo-600 to-purple-500 animate-[move_20s_linear_infinite] px-4 whitespace-nowrap">
          Welcome To Our Gaon Shop Status
        </h2>
      </div>

      {/* 2. Main Navbar */}
      <nav className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-white p-4 shadow-xl border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2">
          
          {/* Left Side: Logo / Gaon Status Shop Button */}
          <Link to="/" className="group transition-all duration-300">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 rounded-full border border-white/20 shadow-md hover:shadow-xl hover:scale-102 transition-all">
              <span className="text-xl group-hover:rotate-12 transition-transform">🏠</span>
              <h1 className="text-lg md:text-xl font-black tracking-tight text-white">
                Gaon Status Shop
              </h1>
            </div>
          </Link>

          {/* Right Side: Action-Oriented Live Status Button */}
          <button className="relative flex items-center gap-3 bg-gradient-to-tr from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-emerald-500/50 hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
            {/* Animated Ping Dot */}
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </div>
            
            <span className="uppercase tracking-widest text-xs">
              Live Status
            </span>
          </button>

        </div>
      </nav>
    </>
  );
}