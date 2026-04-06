import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddShop({ onShopAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    phone: '',
    isOpen: true
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const secretKey = prompt("Admin Password dalo dukan register karne ke liye:");

    if (secretKey === "Gaon123") {
      try {
        setLoading(true);
        setMessage(null);
        const response = await axios.post('https://gaon-dukaan-backend-2.onrender.com/api/shops', formData);

        if (response.status === 201) {
          setMessage({ type: "success", text: `"${formData.name}" successfully add ho gayi 🎉` });
          if (onShopAdded) onShopAdded();
          setTimeout(() => navigate('/'), 1500);
        }
      } catch (error) {
        setMessage({ type: "error", text: "Backend connection fail ho gaya ❌" });
      } finally {
        setLoading(false);
      }
    } else {
      setMessage({ type: "error", text: "❌ Galat Password!" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4 py-12">
      
      {/* Next-Gen Glass Card */}
      <div className="relative w-full max-w-md p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-3xl ring-1 ring-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
        
        {/* Decorative Inner Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Header Section */}
        <div className="relative text-center mb-10">
          <h2 className="text-3xl font-black tracking-tight text-white/90">
            Add New <span className="text-blue-400 font-serif italic">Shop</span>
          </h2>
          <p className="text-sm text-white/40 mt-2 font-medium tracking-wide">
            Register your shop in the digital ecosystem
          </p>
        </div>

        {/* Elegant Feedback UI */}
        {message && (
          <div className={`mb-8 flex items-center gap-3 px-5 py-4 rounded-2xl backdrop-blur-md border animate-in fade-in slide-in-from-top-4 duration-500 ${
            message.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
              : "bg-rose-500/10 border-rose-500/20 text-rose-300"
          }`}>
            <span className="text-lg">{message.type === "success" ? "✅" : "⚠️"}</span>
            <span className="text-sm font-bold tracking-wide">{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="relative space-y-7">
          
          {/* Enhanced Floating Inputs */}
          {[
            { label: "Shop Name", key: "name", icon: "🏢" },
            { label: "Category", key: "category", icon: "🏷️" },
            { label: "Mobile Number", key: "phone", icon: "📞" }
          ].map((field) => (
            <div key={field.key} className="group relative">
              <input
                type="text"
                required
                value={formData[field.key]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="peer w-full px-5 pt-6 pb-2 text-sm text-white bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 transition-all duration-300 placeholder-transparent"
                placeholder={field.label}
              />
              <label className="absolute left-5 top-4 text-white/30 text-sm transition-all duration-300 pointer-events-none
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-sm
                peer-focus:top-2
                peer-focus:text-[10px]
                peer-focus:text-blue-400
                peer-focus:font-black
                peer-[:not(:placeholder-shown)]:top-2
                peer-[:not(:placeholder-shown)]:text-[10px]
                peer-[:not(:placeholder-shown)]:text-blue-400">
                {field.label.toUpperCase()}
              </label>
            </div>
          ))}

          {/* iOS Style Modern Toggle */}
          <div className="flex items-center justify-between bg-white/5 px-5 py-4 rounded-2xl border border-white/5 transition-all hover:bg-white/10">
            <div className="flex flex-col">
              <span className="text-xs font-black text-white/60 tracking-widest uppercase">Availability</span>
              <span className="text-sm font-medium text-white/90">Shop Currently Open?</span>
            </div>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, isOpen: !formData.isOpen })}
              className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-500 ${
                formData.isOpen ? "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-white/10"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] transform transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                  formData.isOpen ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Premium Button with Shine Effect */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full py-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-xs tracking-[0.2em] shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.6)] active:scale-95 disabled:opacity-50"
          >
            <span className="relative z-10 uppercase">
              {loading ? "Registering..." : "Register Shop 🚀"}
            </span>
            
            {/* Hover Shine Sweep */}
            <div className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
          </button>
        </form>
      </div>
    </div>
  );
}