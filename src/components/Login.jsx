import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Alert ki jagah premium error state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post('https://gaon-dukaan-backend-2.onrender.com/api/auth/login', { email, password });
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      navigate('/'); 
    } catch (err) {
      setError("Galat details! Please check again. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 selection:bg-blue-500/30">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-breath"></div>

      {/* Elite Glass Container */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 ring-1 ring-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-10 md:p-12 transition-all duration-700 hover:border-white/20">
        
        {/* Modern Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-serif italic text-white/90 tracking-tight mb-2">
            Welcome <span className="font-sans font-black not-italic text-blue-400">Back</span>
          </h2>
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">
            Admin Control Access
          </p>
        </div>

        {/* Premium Error UI */}
        {error && (
          <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-bold animate-in fade-in slide-in-from-top-2 duration-300">
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-7">
          <div className="space-y-5">
            
            {/* Email Field */}
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 ml-2 group-focus-within:text-blue-400 transition-colors">
                Email Address
              </label>
              <input
                type="email" 
                placeholder="admin@gaonyatru.com" 
                required
                className="w-full p-4 rounded-2xl border border-white/5 bg-white/5 text-base font-medium text-white placeholder:text-white/10 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all duration-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 ml-2 group-focus-within:text-blue-400 transition-colors">
                Secret Password
              </label>
              <input
                type="password" 
                placeholder="••••••••" 
                required
                className="w-full p-4 rounded-2xl border border-white/5 bg-white/5 text-base font-medium text-white placeholder:text-white/10 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all duration-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Premium Button with Shine Sweep */}
          <div className="pt-4">
            <button
              disabled={loading}
              className="group relative w-full py-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              {/* Shine Effect from index.css variable */}
              <div className="absolute inset-0 z-0 group-hover:animate-shine-sweep">
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />
              </div>

              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? "Authenticating..." : "Enter Dashboard 🚀"}
              </span>
            </button>
          </div>
        </form>

        {/* Clean Footer Link */}
        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            New Admin?{' '}
            <Link to="/signup" className="text-blue-400 font-black hover:text-blue-300 transition-all ml-1 hover:underline underline-offset-4">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}