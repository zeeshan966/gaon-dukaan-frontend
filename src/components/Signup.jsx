import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('https://gaon-dukaan-backend-2.onrender.com/api/auth/signup', formData);
      alert("Account ban gaya! ✅ Ab Login karein.");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Signup fail ho gaya! ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-10 selection:bg-blue-100">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400/5 blur-[100px] -z-10"></div>

      <div className="w-full max-w-md bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[2rem] p-10 transition-all duration-500 hover:shadow-blue-500/5">
        
        {/* Balanced Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Join the Revolution
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Apni dukan ko digital banayein aur gaon ko badhayein.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-4">
            {/* Medium Sized Inputs */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Full Name</label>
              <input
                type="text" 
                placeholder="Full Name" 
                required
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 text-base font-semibold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 placeholder:text-slate-300 placeholder:font-normal"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Email Address</label>
              <input
                type="email" 
                placeholder="naam@email.com" 
                required
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 text-base font-semibold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 placeholder:text-slate-300 placeholder:font-normal"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">Create Password</label>
              <input
                type="password" 
                placeholder="Create Strong Password" 
                required
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 text-base font-semibold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 placeholder:text-slate-300 placeholder:font-normal"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          {/* Premium Submit Button */}
          <div className="pt-2">
            <button
              disabled={loading}
              className="relative w-full py-4 bg-slate-900 rounded-xl font-bold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Creating Account...
                  </>
                ) : (
                  "Create Account 🚀"
                )}
              </span>
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Pehle se account hai?{' '}
            <Link to="/login" className="text-blue-600 font-bold hover:text-blue-700 transition-colors ml-1">
              Login Karein
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}