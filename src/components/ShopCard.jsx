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
        setIsEditing(false);
        if (onUpdate) onUpdate();
      } catch (error) {
        console.error("Update fail ho gaya!");
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
          if (onUpdate) onUpdate(); 
        } catch (error) {
          console.error("Delete fail ho gaya!");
        }
      }
    } else if (password !== null) {
      alert("❌ Galat Password!");
    }
  };

  return (
    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 ring-1 ring-white/10 rounded-[2.5rem] p-8 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:ring-blue-500/50 hover:border-blue-500/20">
      
      {/* Dynamic Background Orb (Visible on Hover) */}
      <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000 ${
        shop.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
      }`}></div>

      {isEditing ? (
        /* --- 📝 NEXT-GEN EDIT MODE --- */
        <div className="space-y-5 animate-in fade-in zoom-in-95 duration-500">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Edit Dashboard</h4>
          </div>
          
          <div className="space-y-4">
            <input 
              type="text" 
              className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all font-bold text-white text-sm placeholder:text-white/20"
              value={editData.name}
              onChange={(e) => setEditData({...editData, name: e.target.value})}
              placeholder="Shop Name"
            />
            
            <input 
              type="tel" 
              className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 outline-none transition-all font-bold text-white text-sm placeholder:text-white/20"
              value={editData.phone}
              onChange={(e) => setEditData({...editData, phone: e.target.value})}
              placeholder="Phone Number"
            />
            
            {/* iOS Style Toggle in Edit Mode */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Shop Open?</span>
              <button
                type="button"
                onClick={() => setEditData({ ...editData, isOpen: !editData.isOpen })}
                className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-500 ${
                  editData.isOpen ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "bg-white/10"
                }`}
              >
                <div className={`bg-white w-4 h-4 rounded-full transition-transform duration-500 ${editData.isOpen ? "translate-x-6" : "translate-x-0"}`} />
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={handleUpdate} 
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:shadow-blue-500/20 shadow-lg active:scale-95 transition-all"
            >
              Save Changes
            </button>
            <button 
              onClick={() => setIsEditing(false)} 
              className="flex-1 bg-white/5 text-white/60 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        /* --- 👁️ PREMIUM GLASS DISPLAY --- */
        <div className="flex flex-col h-full">
          <div>
            {/* Header: Category & Status */}
            <div className="flex justify-between items-start mb-8">
              <span className="text-[9px] font-black tracking-[0.3em] uppercase px-3 py-1.5 bg-white/5 text-white/40 border border-white/5 rounded-xl">
                {shop.category || "General"}
              </span>
              
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-700 ${
                shop.isOpen 
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
                : "bg-rose-500/10 border-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${shop.isOpen ? "bg-emerald-400 animate-breath" : "bg-rose-500"}`}></span>
                <span className="text-[9px] font-black uppercase tracking-widest">
                  {shop.isOpen ? "Live" : "Closed"}
                </span>
              </div>
            </div>

            {/* Shop Title with Serif Touch */}
            <h3 className="text-2xl font-serif italic text-white/90 tracking-tight mb-3 group-hover:text-blue-400 transition-colors duration-500">
              {shop.name}
            </h3>
            
            <div className="flex items-center gap-3 text-white/40 mb-10 group/phone">
              <div className="p-2 bg-white/5 rounded-xl group-hover/phone:bg-blue-500 transition-all duration-500 group-hover/phone:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <svg className="w-3.5 h-3.5 text-blue-400 group-hover/phone:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-white/60 group-hover/phone:text-white transition-colors">{shop.phone}</span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto transition-all duration-500 opacity-40 group-hover:opacity-100">
            <button 
              onClick={() => setIsEditing(true)}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-blue-400 transition-all flex items-center gap-2"
            >
              <span className="text-lg">⚙️</span> Edit Shop
            </button>
            
            <button 
              onClick={handleDelete}
              className="p-3 text-white/20 hover:text-rose-400 hover:bg-rose-500/10 rounded-2xl transition-all duration-300 active:scale-90"
              title="Remove Shop"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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