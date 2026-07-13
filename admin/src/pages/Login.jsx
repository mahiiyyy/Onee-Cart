import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  ShoppingCart,
  Mail,
  Lock,
  Eye,
  ShieldCheck,
  Truck,
  BadgeCheck
} from "lucide-react";
import { adminDataContext } from "../context/AdminContext";
import { authDataContext } from "../context/AuthContext";

function Login() {

  let navigate = useNavigate();

let [email,setEmail] = useState("");
let [password,setPassword] = useState("");
let {serverUrl}= useContext(authDataContext)
let{adminData,getAdmin}= useContext(adminDataContext)

let { setAdminData } =
    useContext(adminDataContext);

const AdminLogin = async(e)=>{
    e.preventDefault();

    try{

      const result = await axios.post(serverUrl + '/api/auth/adminLogin',
        
        {email,password},
        {withCredentials:true}
      );

      console.log(result.data);

      getAdmin(); // this was the key thing

      navigate("/");

    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#f9e7ff] to-[#dbeafe] overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-300/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-300/30 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-14 py-6 relative z-10">
        <h1 className="text-2xl font-bold text-[#1e1b4b]">
          OneeCart Admin
        </h1>

        <Menu
          className="md:hidden text-[#1e1b4b]"
          size={32}
        />
      </nav>

      {/* Main */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 px-6 md:px-12 pt-24 pb-10 relative z-10">

        {/* Left Side */}
        <div className="max-w-lg text-center lg:text-left">

          <p className="uppercase tracking-[5px] text-purple-500 font-semibold mb-4">
            Admin Panel
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1e1b4b]">
            Welcome To <br />

            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              OneeCart Admin
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Access your dashboard to manage products, users and orders.
          </p>

          <div className="hidden lg:flex mt-16">
            <div className="w-56 h-56 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl flex items-center justify-center">

              <ShoppingCart
                size={90}
                className="text-purple-500"
              />

            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-xl bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[40px] shadow-2xl p-8 md:p-12">

          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">

              <ShoppingCart
                className="text-purple-500"
                size={35}
              />

            </div>
          </div>

          <p className="text-center uppercase tracking-[4px] text-purple-500 font-semibold mt-6">
            Admin Access
          </p>

          <h1 className="text-center text-4xl font-bold text-[#1e1b4b] mt-4">
            Login to Admin Panel
          </h1>

          <div className="flex justify-center mt-3">
            <div className="w-20 h-[2px] bg-pink-400 rounded-full"></div>
          </div>

          <p className="text-center text-gray-600 mt-5 leading-7">
            Enter your admin credentials to continue.
          </p>

          <form
            onSubmit={AdminLogin}
            className="space-y-5 mt-10"
          >

            {/* Email */}
            <div className="w-full h-16 bg-white/70 rounded-2xl shadow-md flex items-center px-5">

              <Mail className="text-purple-500" />

              <input
                type="email"
                placeholder="Admin Email"
                className="w-full bg-transparent outline-none px-4 text-gray-700"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="w-full h-16 bg-white/70 rounded-2xl shadow-md flex items-center px-5">

              <Lock className="text-purple-500" />

              <input
                type="password"
                placeholder="Admin Password"
                className="w-full bg-transparent outline-none px-4 text-gray-700"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <Eye className="text-gray-400 cursor-pointer"/>
            </div>

            <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold shadow-xl hover:scale-[1.02] transition duration-300">

              Login

            </button>

          </form>

          <p className="text-center text-gray-600 mt-7">
            Authorized administrators only
          </p>

        </div>
      </div>

      {/* Bottom Features */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-10 relative z-10">

        <div className="flex items-center gap-4">
          <ShieldCheck className="text-purple-500" />

          <div>
            <h1 className="font-semibold text-[#1e1b4b]">
              Secure Access
            </h1>

            <p className="text-sm text-gray-500">
              Protected admin authentication
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Truck className="text-purple-500" />

          <div>
            <h1 className="font-semibold text-[#1e1b4b]">
              Order Control
            </h1>

            <p className="text-sm text-gray-500">
              Manage orders efficiently
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck className="text-purple-500" />

          <div>
            <h1 className="font-semibold text-[#1e1b4b]">
              Dashboard Access
            </h1>

            <p className="text-sm text-gray-500">
              Products & users management
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;