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







          setTimeout(() => navigate('/'), 1200);



        }



      } catch (error) {



        console.error("Dukan save nahi hui:", error);



        setMessage({ type: "error", text: "Backend connection fail ho gaya ❌" });



      } finally {



        setLoading(false);



      }



    } else {



      setMessage({ type: "error", text: "❌ Galat Password!" });



    }



  };







  return (



    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">



     



      <div className="w-full max-w-md backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-3xl p-8">



       



        {/* Heading */}



        <div className="text-center mb-6">



          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">



            Add New Shop



          </h2>



          <p className="text-sm text-gray-500 mt-1">



            Register your shop in the system



          </p>



        </div>







        {/* Message */}



        {message && (



          <div className={`mb-4 text-sm px-4 py-2 rounded-lg ${



            message.type === "success"



              ? "bg-green-100 text-green-700"



              : "bg-red-100 text-red-700"



          }`}>



            {message.text}



          </div>



        )}







        <form onSubmit={handleSubmit} className="space-y-5">



         



          {/* Floating Input */}



          {[



            { label: "Shop Name", key: "name" },



            { label: "Category", key: "category" },



            { label: "Mobile Number", key: "phone" }



          ].map((field) => (



            <div key={field.key} className="relative">



              <input



                type="text"



                required



                value={formData[field.key]}



                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}



                className="peer w-full px-4 pt-5 pb-2 text-sm border border-gray-300 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"



                placeholder=" "



              />



              <label className="absolute left-3 top-2 text-gray-500 text-xs transition-all



                peer-placeholder-shown:top-3.5



                peer-placeholder-shown:text-sm



                peer-placeholder-shown:text-gray-400



                peer-focus:top-2



                peer-focus:text-xs



                peer-focus:text-blue-600">



                {field.label}



              </label>



            </div>



          ))}







          {/* Toggle Switch */}



          <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl border">



            <span className="text-sm text-gray-700">Shop Open?</span>







            <button



              type="button"



              onClick={() => setFormData({ ...formData, isOpen: !formData.isOpen })}



              className={`w-11 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${



                formData.isOpen ? "bg-blue-600" : "bg-gray-300"



              }`}



            >



              <div



                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all ${



                  formData.isOpen ? "translate-x-5" : ""



                }`}



              />



            </button>



          </div>







          {/* Button */}



          <button



            type="submit"



            disabled={loading}



            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-60"



          >



            {loading ? "Processing..." : "Register Shop 🚀"}



          </button>



        </form>



      </div>



    </div>



  );



}