import { Link } from 'react-router-dom';







export default function Navbar() {



  return (



    <nav className="bg-blue-600/80 backdrop-blur-xl text-white p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border-b border-white/20 sticky top-0 z-50 transition-all duration-300">



      <div className="max-w-7xl mx-auto flex justify-between items-center px-2">



       



        {/* Left Side: Logo Section */}



        <Link to="/" className="flex items-center gap-3 group cursor-pointer">



          <div className="bg-white/20 p-2.5 rounded-2xl group-hover:bg-white/30 group-hover:rotate-12 transition-all duration-300 shadow-lg">



            <span className="text-2xl">🏠</span>



          </div>



          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform">



            Gaon Shop Status



          </h1>



        </Link>







        {/* Right Side: Glowing Live Status Button */}



        <div className="relative group">



          {/* Outer Glow Effect */}



          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>



         



          {/* Main Button Body */}



          <div className="relative flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md">



           



            {/* Animated Ping Indicator */}



            <div className="relative flex h-3 w-3">



              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>



              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>



            </div>







            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-50 opacity-90">



              Live Status



            </span>



           



            {/* Hover Shine Effect */}



            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>



          </div>



        </div>







      </div>



      </nav>



   



  );



} 