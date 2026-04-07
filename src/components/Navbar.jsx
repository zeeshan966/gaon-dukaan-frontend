import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] shadow-2xl">
      
      {/* 1. Scrolling Animated Heading Section */}
      {/* group class yahan pause karne ke liye help karegi */}
      <div className="w-full bg-gray-900 border-b border-white/10 py-3 overflow-hidden group">
        <div className="whitespace-nowrap inline-block animate-move group-hover:[animation-play-state:paused]">
          <h2 className="inline-block text-2xl md:text-4xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-green-400 via-blue-500 via-indigo-600 to-purple-500 px-10">
            Welcome To Our Gaon Shop Status — Stay Updated with Local Shop Timings and Availability!
          </h2>
          {/* Loop ko smooth rakhne ke liye ek hi div mein text repeat hota hai automatic */}
          <h2 className="inline-block text-2xl md:text-4xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-green-400 via-blue-500 via-indigo-600 to-purple-500 px-10">
            Welcome To Our Gaon Shop Status — Stay Updated with Local Shop Timings and Availability!
          </h2>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-white p-4 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2">
          
          <Link to="/" className="group">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-full border border-white/20 shadow-md hover:scale-105 transition-all">
              <span className="text-xl">🏠</span>
              <h1 className="text-lg md:text-xl font-black tracking-tight italic text-white">
                Gaon Status Shop
              </h1>
            </div>
          </Link>

          <button className="relative flex items-center gap-3 bg-gradient-to-tr from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-emerald-500/40 hover:scale-105 hover:brightness-110 transition-all cursor-pointer">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </div>
            <span className="uppercase tracking-widest text-[10px] italic">
              Live Status
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}