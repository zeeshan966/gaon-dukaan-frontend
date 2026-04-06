import { useState } from 'react';
import axios from 'axios';

function ShopCard({ shop, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ 
    name: shop.name, 
    phone: shop.phone, 
    isOpen: shop.isOpen 
  });

  const handleUpdate = async () => {
    const password = prompt("Update karne ke liye Admin Password dalo:");
    if (password === "Gaon123") {
      try {
        await axios.put(`https://gaon-dukaan-backend-2.onrender.com/api/shops/${shop._id}`, editData);
        alert("Dukan ki details update ho gayi! ✅");
        setIsEditing(false);
        if (onUpdate) onUpdate();
      } catch (error) {
        alert("Galti hui! Update nahi ho paya.");
      }
    } else if (password !== null) {
      alert("❌ Galat Password!");
    }
  };

  const handleDelete = async () => {
    const password = prompt("Dukan hatane ke liye Admin Password dalo:");
    if (password === "Gaon123") {
      if (window.confirm(`Kya aap "${shop.name}" ko sach mein hataana chahte hain?`)) {
        try {
          await axios.delete(`https://gaon-dukaan-backend-2.onrender.com/api/shops/${shop._id}`);
          alert("Dukan hata di gayi! ✅");
          if (onUpdate) onUpdate(); 
        } catch (error) {
          alert("Delete fail ho gaya!");
        }
      }
    } else if (password !== null) {
      alert("❌ Galat Password!");
    }
  };

  return (
    <div className="group relative overflow-hidden bg-white border border-slate-100 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
      
      {/* Background Decorative Gradient (Visible on Hover) */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {isEditing ? (
        /* --- 📝 BALANCED EDIT MODE --- */
        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Editing Mode</h4>
          </div>
          
          <input 
            type="text" 
            className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 outline-none transition-all font-bold text-slate-800 text-sm"
            value={editData.name}
            onChange={(e) => setEditData({...editData, name: e.target.value})}
            placeholder="Shop Name"
          />
          
          <input 
            type="tel" 
            className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 outline-none transition-all font-bold text-slate-800 text-sm"
            value={editData.phone}
            onChange={(e) => setEditData({...editData, phone: e.target.value})}
            placeholder="Phone Number"
          />
          
          <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer group/label">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">Currently Open?</span>
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-blue-600 rounded-md"
              checked={editData.isOpen}
              onChange={(e) => setEditData({...editData, isOpen: e.target.checked})}
            />
          </label>

          <div className="flex gap-3 pt-2">
            <button 
              onClick={handleUpdate} 
              className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              Save
            </button>
            <button 
              onClick={() => setIsEditing(false)} 
              className="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        /* --- 👁️ PREMIUM DISPLAY MODE --- */
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Header: Category & Status */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1 bg-slate-100 text-slate-500 rounded-lg">
                {shop.category || "General"}
              </span>
              
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                shop.isOpen 
                ? "bg-emerald-50/50 border-emerald-100 text-emerald-600" 
                : "bg-rose-50/50 border-rose-100 text-rose-600"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${shop.isOpen ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`}></span>
                <span className="text-[9px] font-black uppercase tracking-wider">
                  {shop.isOpen ? "Active" : "Closed"}
                </span>
              </div>
            </div>

            {/* Shop Content */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {shop.name}
            </h3>
            
            <div className="flex items-center gap-2 text-slate-500 mb-8">
              <div className="p-1.5 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-colors duration-500">
                <svg className="w-3 h-3 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight">{shop.phone}</span>
            </div>
          </div>

          {/* Bottom Actions - Hidden until Hover (on desktop) */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
            <button 
              onClick={() => setIsEditing(true)}
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              Edit Details
            </button>
            
            <button 
              onClick={handleDelete}
              className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300"
              title="Remove Shop"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopCard;