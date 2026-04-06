import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await axios.post('https://gaon-dukaan-backend-2.onrender.com/api/auth/signup', formData);
      // Premium Success State (Optional: can use a toast here)
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || "Signup fail ho gaya! ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-12 selection:bg-blue-500/30">
      
      {/* Background Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-breath"></div>

      {/* Elite Glass Signup Card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 ring-1 ring-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-10 md:p-12 transition-all duration-700 hover:border-white/20">
        
        {/* Modern Auth Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif italic text-white/90 tracking-tight mb-2">
            Join the <span className="font-sans font-black not-italic text-blue-400">Revolution</span>
          </h2>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
            Digital Gaon, Empowered Bharat
          </p>
        </div>

        {/* Premium Error UI */}
        {error && (
          <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold animate-in fade-in slide-in-from-top-2 duration-300">
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-5">
            
            {/* Full Name Input */}
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 ml-2 group-focus-within:text-blue-400 transition-colors">
                Full Name
              </label>
              <input
                type="text" 
                placeholder="Zeeshan Ahmad" 
                required
                className="w-full p-4 rounded-2xl border border-white/5 bg-white/5 text-base font-medium text-white placeholder:text-white/10 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all duration-300"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email Address Input */}
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 ml-2 group-focus-within:text-blue-400 transition-colors">
                Email Address
              </label>
              <input
                type="email" 
                placeholder="admin@gaonyatru.com" 
                required
                className="w-full p-4 rounded-2xl border border-white/5 bg-white/5 text-base font-medium text-white placeholder:text-white/10 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all duration-300"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 ml-2 group-focus-within:text-blue-400 transition-colors">
                Secret Password
              </label>
              <input
                type="password" 
                placeholder="••••••••" 
                required
                className="w-full p-4 rounded-2xl border border-white/5 bg-white/5 text-base font-medium text-white placeholder:text-white/10 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all duration-300"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          {/* Premium Launch Button with Shine Sweep */}
          <div className="pt-4">
            <button
              disabled={loading}
              className="group relative w-full py-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              {/* Shine Sweep Effect */}
              <div className="absolute inset-0 z-0 group-hover:animate-shine-sweep">
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />
              </div>

              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Create Account 🚀"
                )}
              </span>
            </button>
          </div>
        </form>

        {/* Clean Footer Link */}
        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            Pehle se account hai?{' '}
            <Link to="/login" className="text-blue-400 font-black hover:text-blue-300 transition-all ml-1 hover:underline underline-offset-4">
              Login Karein
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}