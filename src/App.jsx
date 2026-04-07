import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShopCard from './components/ShopCard';
import Dashboard from './components/Dashboard';
import AddShop from './components/AddShop';
import Login from './components/Login'; 
import Signup from './components/Signup'; 

function Home({ shops, searchTerm, setSearchTerm, fetchShops }) {
  const filteredShops = shops.filter(shop => 
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight italic">
          Gaon Ki <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Dukaan</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto font-medium italic px-2">
          Search local shops, check availability, and grow together. ⚡
        </p>
        
        <div className="relative max-w-2xl mx-auto mt-6 md:mt-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[2rem] blur-xl transition duration-500"></div>
          <input 
            type="text" 
            placeholder="Search shops..." 
            className="relative w-full p-4 md:p-6 rounded-[1.5rem] md:rounded-[1.8rem] border border-slate-200 bg-white shadow-lg focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-base md:text-lg font-medium italic"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {filteredShops.length > 0 ? (
          filteredShops.map(shop => (
            <div key={shop._id} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-white rounded-[2rem] transition-all duration-500 group-hover:-translate-y-2">
                <ShopCard shop={shop} onUpdate={fetchShops} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-slate-50/50 border border-dashed border-slate-200 rounded-[2rem]">
            <p className="text-lg text-slate-400 font-bold tracking-tight uppercase italic">No shops found near you 🔍</p>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchShops = async () => {
    try {
      const response = await axios.get('https://gaon-dukaan-backend-2.onrender.com/api/shops');
      setShops(response.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => { fetchShops(); }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#fcfdfe] selection:bg-blue-600 selection:text-white overflow-x-hidden">
        
        <Navbar />
        
        {/* Floating Fixed Capsule Nav - Responsive Updated */}
        <div className="fixed top-48 md:top-46 left-0 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full max-w-5xl p-2 md:p-4 bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[1.5rem] md:rounded-[2.8rem] shadow-[0_25px_60px_rgba(0,0,0,0.1)] pointer-events-auto gap-2 md:gap-0">
            
            {/* HOME */}
            <Link to="/" className="flex-1 md:flex-none text-center relative group px-4 md:px-10 py-2 md:py-3 rounded-xl md:rounded-2xl font-black italic text-[10px] md:text-sm tracking-widest transition-all duration-300 
              bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              HOME
              <span className="hidden md:block absolute bottom-1 left-1/2 w-0 h-1 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></span>
            </Link>

            {/* LOGIN */}
            <Link to="/login" className="flex-1 md:flex-none text-center relative group px-4 md:px-10 py-2 md:py-3 rounded-xl md:rounded-2xl font-black italic text-[10px] md:text-sm tracking-widest transition-all duration-300 
              bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
              LOGIN
              <span className="hidden md:block absolute bottom-1 left-1/2 w-0 h-1 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></span>
            </Link>

            {/* REGISTER */}
            <Link to="/signup" className="flex-1 md:flex-none text-center relative group px-4 md:px-10 py-2 md:py-3 rounded-xl md:rounded-2xl font-black italic text-[10px] md:text-sm tracking-widest transition-all duration-300 
              bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg">
              REGISTER
              <span className="hidden md:block absolute bottom-1 left-1/2 w-0 h-1 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-3/5 group-hover:-translate-x-1/2"></span>
            </Link>
            
            {/* + SHOP */}
            <Link to="/add-shop" className="flex-1 md:flex-none text-center relative group px-4 md:px-10 py-2 md:py-3 bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 shadow-lg">
              <span className="relative z-10 text-white font-black italic text-[10px] md:text-sm tracking-widest">+ SHOP</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>

        {/* Content Area - Adjusted for mobile scrolling */}
        <main className="relative z-10 min-h-[70vh] pt-52 md:pt-64">
          <Routes>
            <Route path="/" element={<Home shops={shops} searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchShops={fetchShops} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/add-shop" element={<AddShop onShopAdded={fetchShops} />} />
          </Routes>
        </main>

        <footer className="mt-20 py-10 border-t border-slate-100 bg-white/50 backdrop-blur-sm italic text-center">
          <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px]">
            Gaon Ki Dukaan © 2026
          </p>
        </footer> 
      </div>
    </Router>
  );
}

export default App;