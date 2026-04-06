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
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Hero Section - Balanced Typography */}
      <div className="text-center mb-16 md:mb-24 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Gaon Ki <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Dukaan</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
          Search local shops, check availability, and grow together. ⚡
        </p>
        
        {/* Modern Search - Glowing Shadow Prop */}
        <div className="relative max-w-2xl mx-auto mt-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[2rem] blur-xl group-focus-within:blur-2xl transition duration-500"></div>
          <input 
            type="text" 
            placeholder="Search shops or products..." 
            className="relative w-full p-5 md:p-6 rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 outline-none transition-all text-lg font-medium placeholder:text-slate-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Shop Grid - Balanced Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredShops.length > 0 ? (
          filteredShops.map(shop => (
            <div key={shop._id} className="group relative">
              {/* Card Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-white rounded-[2rem] transition-all duration-500 group-hover:-translate-y-2">
                <ShopCard shop={shop} onUpdate={fetchShops} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-24 bg-slate-50/50 border border-dashed border-slate-200 rounded-[3rem]">
            <p className="text-xl text-slate-400 font-bold tracking-tight uppercase">No shops found near you 🔍</p>
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
        {/* Animated Background Mesh */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[120px]"></div>
        </div>

        <Navbar />
        
        {/* Floating Capsule Nav */}
        <div className="sticky top-6 z-50 flex justify-center px-4 my-8">
          <div className="flex items-center gap-2 md:gap-4 p-2 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <Link to="/" className="px-6 py-2.5 rounded-full font-bold text-slate-900 hover:bg-slate-100 transition-all text-xs md:text-sm tracking-tight">
              HOME
            </Link>
            <Link to="/login" className="px-4 py-2.5 text-xs md:text-sm font-bold text-slate-500 hover:text-blue-600 transition-all">
              LOGIN
            </Link>
            <Link to="/signup" className="px-4 py-2.5 text-xs md:text-sm font-bold text-slate-500 hover:text-blue-600 transition-all">
              REGISTER
            </Link>
            
            <Link to="/add-shop" className="relative group px-6 md:px-8 py-2.5 bg-slate-900 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95">
              <span className="relative z-10 text-white font-bold text-xs md:text-sm tracking-wide">
                + ADD SHOP
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        <main className="relative z-10 min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home shops={shops} searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchShops={fetchShops} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/add-shop" element={<AddShop onShopAdded={fetchShops} />} />
          </Routes>
        </main>

        <footer className="mt-20 py-16 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-8 text-center space-y-6">
            <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-[10px]">
              Gaon Ki Dukaan © 2026
            </p>
            <div className="flex justify-center gap-8 text-slate-300">
              <span className="text-sm font-medium hover:text-blue-500 cursor-pointer transition-colors">Privacy</span>
              <span className="text-sm font-medium hover:text-blue-500 cursor-pointer transition-colors">Terms</span>
              <span className="text-sm font-medium hover:text-blue-500 cursor-pointer transition-colors">Contact</span>
            </div>
          </div>
        </footer> 
      </div>
    </Router>
  );
}

export default App;