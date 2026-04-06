import { useState } from 'react'







export default function Dashboard() {



  const [isOpen, setIsOpen] = useState(true);







  return (



    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">



     



      <div className="relative w-full max-w-md rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl shadow-2xl p-8 overflow-hidden">







        {/* Glow Background */}



        <div className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30 transition-all duration-700 ${



          isOpen ? 'bg-emerald-400' : 'bg-rose-400'



        }`} />







        <div className="relative z-10">



         



          {/* Header */}



          <div className="text-center mb-8">



            <h2 className="text-3xl font-bold tracking-tight text-gray-900">



              Shop Manager <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">🛠️</span>



            </h2>



            <p className="text-sm text-gray-500 mt-1">



              Control your shop status instantly



            </p>



          </div>







          {/* Status Card */}



          <div className="flex flex-col items-center gap-8">







            {/* Glowing Status Indicator */}



            <div className="relative flex items-center justify-center">



             



              {/* Outer Glow Ring */}



              <div className={`absolute w-28 h-28 rounded-full blur-2xl opacity-40 ${



                isOpen ? 'bg-emerald-400' : 'bg-rose-400'



              }`} />







              {/* Animated Pulse Ring */}



              <div className={`absolute w-20 h-20 rounded-full ${



                isOpen ? 'bg-emerald-400/30 animate-ping' : 'bg-rose-400/30 animate-ping'



              }`} />







              {/* Core Circle */}



              <div className={`relative w-16 h-16 flex items-center justify-center rounded-full text-white text-xl font-bold shadow-lg transition-all duration-500 ${



                isOpen



                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-300'



                : 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-rose-300'



              }`}>



                {isOpen ? "✔" : "✖"}



              </div>



            </div>







            {/* Status Text */}



            <div className={`text-sm font-bold px-6 py-2 rounded-full uppercase tracking-widest border transition-all duration-500 ${



              isOpen



                ? 'text-emerald-600 bg-emerald-50 border-emerald-200'



                : 'text-rose-600 bg-rose-50 border-rose-200'



            }`}>



              {isOpen ? "Abhi Khuli Hai" : "Abhi Band Hai"}



            </div>







            {/* Action Button */}



            <button



              onClick={() => setIsOpen(!isOpen)}



              className={`group relative w-full overflow-hidden py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 active:scale-95 shadow-xl ${



                isOpen



                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-rose-300'



                  : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-emerald-300'



              }`}



            >



              <span className="relative z-10 flex items-center justify-center gap-2">



                {isOpen ? "🚩 Dukan Band Karein" : "🚀 Dukan Kholein"}



              </span>







              {/* Shine Effect */}



              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">



                <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/20 skew-x-[-20deg] animate-[shine_1s_ease]" />



              </div>



            </button>







            {/* Footer */}



            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold">



              Last Updated: Just Now



            </p>







          </div>



        </div>



      </div>







      {/* Custom Animation */}



      <style>



        {`



          @keyframes shine {



            0% { left: -50%; }



            100% { left: 120%; }



          }



        `}



      </style>



    </div>



  )



}