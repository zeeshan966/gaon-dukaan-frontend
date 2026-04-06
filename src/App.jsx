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
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Hero Section - Refined Typography */}
      <div className="text-center mb-20 md:mb-32 space-y-8">
        <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tight text-slate-900">
          Gaon Ki <span className="font-serif italic bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">Dukaan</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Connecting rural hearts with digital ease. Search local shops, check availability, and grow together.
        </p>
        
        {/* Search Experience - Command Center Style */}
        <div className="relative max-w-2xl mx-auto mt-12 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[2.5rem] blur-2xl group-focus-within:bg-blue-500/20 transition-all duration-700"></div>
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search shops, products, or services..." 
              className="w-full p-6 md:p-7 rounded-[2rem] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-glass focus:ring-8 focus:ring-blue-500/5 focus:border-blue-400 outline-none transition-all text-lg font-medium placeholder:text-slate-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-6 hidden md:flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg border border-slate-200 text-slate-400 text-xs font-bold">
              <span>CMD</span>
              <span>K</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shop Grid - Sophisticated Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {filteredShops.length > 0 ? (
          filteredShops.map(shop => (
            <div key={shop._id} className="group relative perspective-1000">
              {/* Refined 3D-like Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-400/20 to-indigo-500/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm border border-slate-100 rounded-[2.2rem] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-3 group-hover:shadow-2xl overflow-hidden">
                <ShopCard shop={shop} onUpdate={fetchShops} />
                
                {/* Subtle Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-32 rounded-[3rem] border-2 border-dashed border-slate-200 bg-slate-50/30">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl text-slate-400 font-black tracking-widest uppercase">No shops found in this area</p>
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
      <div className="min-h-screen bg-[#f8fafc] selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans">
        
        {/* Refined Mesh Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full blur-[150px]"></div>
        </div>

        <Navbar />
        
        {/* Floating Apple-Style Capsule Nav */}
        <div className="sticky top-8 z-50 flex justify-center px-4 my-10">
          <div className="flex items-center p-1.5 bg-white/40 backdrop-blur-2xl border border-white/20 rounded-full shadow-glass ring-1 ring-black/5">
            <Link to="/" className="px-8 py-3 rounded-full font-bold text-slate-900 bg-white/80 shadow-sm hover:bg-white transition-all text-xs tracking-tighter uppercase">
              Home
            </Link>
            <Link to="/login" className="px-5 py-3 text-xs font-bold text-slate-500 hover:text-blue-600 transition-all uppercase">
              Login
            </Link>
            <Link to="/signup" className="px-5 py-3 text-xs font-bold text-slate-500 hover:text-blue-600 transition-all uppercase">
              Register
            </Link>
            
            <Link to="/add-shop" className="group relative px-8 py-3 bg-slate-900 rounded-full overflow-hidden transition-all duration-500 hover:ring-4 hover:ring-blue-500/20 active:scale-95">
              <span className="relative z-10 text-white font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="text-lg">+</span> Add Shop
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>
        </div>

        <main className="relative z-10 min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home shops={shops} searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchShops={fetchShops} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/add-shop" element={<AddShop onShopAdded={fetchShops} />} />
          </Routes>
        </main>

        <footer className="mt-32 py-20 border-t border-slate-200/50 bg-white/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 flex flex-col items-center space-y-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <p className="text-slate-400 font-black tracking-[0.4em] uppercase text-[10px]">
              Gaon Ki Dukaan © 2026
            </p>
            <div className="flex justify-center gap-12 text-slate-400">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <span key={item} className="text-xs font-bold hover:text-blue-600 cursor-pointer transition-colors uppercase tracking-widest">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </footer> 
      </div>
    </Router>
  );
}

export default App;