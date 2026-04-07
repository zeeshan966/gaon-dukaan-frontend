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
      } catch (error) { alert("Update fail!"); }
    } else if (password !== null) alert("❌ Galat Password!");
  };

  const handleDelete = async () => {
    const password = prompt("Dukan hatane ke liye Admin Password dalo:");
    if (password === "Gaon123") {
      if (window.confirm(`Kya aap "${shop.name}" hataana chahte hain?`)) {
        try {
          await axios.delete(`https://gaon-dukaan-backend-2.onrender.com/api/shops/${shop._id}`);
          if (onUpdate) onUpdate(); 
        } catch (error) { alert("Delete fail!"); }
      }
    } else if (password !== null) alert("❌ Galat Password!");
  };

  return (
    <div 
      tabIndex="0" 
      className="group relative p-[1px] rounded-[2.5rem] transition-all duration-500 outline-none
                 /* Desktop Hover & Mobile Touch States */
                 hover:bg-gradient-to-br focus-within:bg-gradient-to-br active:bg-gradient-to-br
                 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 
                 focus-within:from-blue-600 focus-within:to-indigo-600
                 shadow-sm hover:shadow-[0_30px_70px_-10px_rgba(79,70,229,0.3)]
                 focus-within:shadow-[0_30px_70px_-10px_rgba(79,70,229,0.25)]"
    >
      
      {/* Main Glassy Container */}
      <div className="relative bg-white/95 backdrop-blur-3xl rounded-[2.4rem] p-7 md:p-8 h-full transition-all duration-500 
                      group-hover:-translate-y-2 group-focus-within:-translate-y-2 overflow-hidden border border-white/20">
        
        {/* Animated Background Blob */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full 
                        group-hover:bg-purple-500/15 group-focus-within:bg-purple-500/15 transition-all duration-700"></div>

        {isEditing ? (
          /* --- 📝 EDIT MODE --- */
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600">Quick Edit</h4>
            <div className="space-y-3">
              <input 
                type="text" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 outline-none transition-all font-bold text-slate-800 text-sm"
                value={editData.name}
                onChange={(e) => setEditData({...editData, name: e.target.value})}
              />
              <input 
                type="tel" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 outline-none transition-all font-bold text-slate-800 text-sm"
                value={editData.phone}
                onChange={(e) => setEditData({...editData, phone: e.target.value})}
              />
              <div 
                onClick={() => setEditData({...editData, isOpen: !editData.isOpen})}
                className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border ${editData.isOpen ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}
              >
                <span className="text-[10px] font-black uppercase italic text-slate-600 tracking-wider">Is Shop Open?</span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${editData.isOpen ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                   <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${editData.isOpen ? 'left-6' : 'left-1'}`}></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={handleUpdate} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-100">Save</button>
              <button onClick={() => setIsEditing(false)} className="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all">Cancel</button>
            </div>
          </div>
        ) : (
          /* --- 👁️ DISPLAY MODE --- */
          <div className="flex flex-col h-full">
            {/* Top Status & Category */}
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[9px] font-black italic tracking-widest uppercase border border-slate-200/50">
                {shop.category || "General"}
              </span>
              
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 ${
                shop.isOpen ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-rose-50 border-rose-100 text-rose-600"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${shop.isOpen ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`}></span>
                <span className="text-[9px] font-black uppercase italic tracking-wider">
                  {shop.isOpen ? "Open Now" : "Closed"}
                </span>
              </div>
            </div>

            {/* Shop Info */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter leading-tight italic 
                             group-hover:text-blue-600 group-focus-within:text-blue-600 transition-all duration-500">
                {shop.name}
              </h3>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white group-focus-within:bg-blue-600 group-focus-within:text-white transition-all duration-500 shadow-sm">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-base font-extrabold text-slate-500 tracking-tight group-hover:text-slate-900 group-focus-within:text-slate-900 transition-colors">
                  {shop.phone}
                </span>
              </div>
            </div>

            {/* --- 🚀 FIXED ACTIONS AREA (Hamesha Visible) --- */}
            <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between transition-all duration-500">
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-sm"
              >
                <span>Edit Shop</span>
              </button>
              
              <button 
                onClick={handleDelete}
                className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopCard;