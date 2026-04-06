import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post('https://gaon-dukaan-backend-2.onrender.com/api/auth/login', { email, password });
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      navigate('/'); 
    } catch (err) {
      alert("Galat details! ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 selection:bg-blue-100">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-400/5 blur-[100px] -z-10"></div>

      <div className="w-full max-w-md bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[2rem] p-10 transition-all duration-500 hover:shadow-blue-500/5">
        
        {/* Balanced Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Welcome Back
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Apne credentials se dashboard access karein.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            {/* Medium Sized Inputs */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Email</label>
              <input
                type="email" 
                placeholder="naam@email.com" 
                required
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 text-base font-semibold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 placeholder:text-slate-300 placeholder:font-normal"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Password</label>
              <input
                type="password" 
                placeholder="••••••••" 
                required
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 text-base font-semibold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 placeholder:text-slate-300 placeholder:font-normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Premium Button - Medium Height */}
          <div className="pt-2">
            <button
              disabled={loading}
              className="relative w-full py-4 bg-slate-900 rounded-xl font-bold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Logging in..." : "Dashboard Login"}
              </span>
            </button>
          </div>
        </form>

        {/* Clean Footer Link */}
        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Account nahi hai?{' '}
            <Link to="/signup" className="text-blue-600 font-bold hover:text-blue-700 transition-colors ml-1">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}