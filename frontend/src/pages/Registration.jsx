import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ShoppingCart,
  User,
  Mail,
  Lock,
  Eye,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Menu,
} from "lucide-react";

import axios from "axios";

import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";

import { auth, provider } from "../utils/Firebase";
import { signInWithPopup } from "firebase/auth";

import google from "../assets/google logo.png"

const Registration = () => {

  let [show, setShow] = useState(false);

  let [name, setName] = useState("");

  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  let { serverUrl } = useContext(authDataContext);

  let { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      let result = await axios.post(
        serverUrl + "/api/auth/registration",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      await getCurrentUser();

      navigate("/");

    } catch (error) {

      console.log(error);

    }
  };

  const googleSignup = async () => {

    try {

      const response = await signInWithPopup(auth, provider);

      let user = response.user;

      let name = user.displayName;

      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );

      console.log(result.data);

      await getCurrentUser();

      navigate("/");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#f9e7ff] to-[#dbeafe] overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-300/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-300/30 blur-[120px] rounded-full"></div>

      
         

        {/* Mobile Menu */}
        <Menu
          className="md:hidden text-[#1e1b4b]"
          size={32}
        />

     

      {/* Main Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 px-6 md:px-12 pt-44 pb-10 relative z-10">
        {/* Left Content */}
        <div className="max-w-lg text-center lg:text-left">

          <p className="uppercase tracking-[5px] text-purple-500 font-semibold mb-4">
            Welcome To OneeCart
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1e1b4b]">

            Create Your <br />

            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Account
            </span>

          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Join OneeCart and enjoy a seamless shopping experience like never before.
          </p>

          {/* Floating Circle */}
          <div className="hidden lg:flex mt-16">

            <div className="w-56 h-56 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl items-center justify-center flex">

              <ShoppingCart
                size={90}
                className="text-purple-500"
              />

            </div>

          </div>

        </div>

        {/* Register Card */}
        <div className="w-full max-w-xl bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[40px] shadow-2xl p-8 md:p-12">

          {/* Top Icon */}
          <div className="flex justify-center">

            <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">

              <ShoppingCart
                className="text-purple-500"
                size={35}
              />

            </div>

          </div>

          {/* Heading */}
          <p className="text-center uppercase tracking-[4px] text-purple-500 font-semibold mt-6">
            Welcome To OneeCart
          </p>

          <h1 className="text-center text-4xl font-bold text-[#1e1b4b] mt-4">
            Create Your Account
          </h1>

          <div className="flex justify-center mt-3">
            <div className="w-20 h-[2px] bg-pink-400 rounded-full"></div>
          </div>

          <p className="text-center text-gray-600 mt-5 leading-7">
            Create your account and start shopping with OneeCart.
          </p>

          {/* Google Button */}
          <button
            className="w-full h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 mt-10 flex items-center justify-center gap-4"
            onClick={googleSignup}
          >

            <img
              src={google}
              alt="google"
              className="w-7 h-7"
            />

            <span className="text-gray-700 font-semibold text-lg">
              Continue with Google
            </span>

          </button>

          {/* Divider */}
          <div className="flex items-center gap-5 my-8">

            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="text-gray-500 font-medium">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>

          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">

            {/* Name */}
            <div className="w-full h-16 bg-white/70 rounded-2xl shadow-md flex items-center px-5">

              <User className="text-purple-500" />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none px-4 text-gray-700"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

            </div>

            {/* Email */}
            <div className="w-full h-16 bg-white/70 rounded-2xl shadow-md flex items-center px-5">

              <Mail className="text-purple-500" />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none px-4 text-gray-700"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

            </div>

            {/* Password */}
            <div className="w-full h-16 bg-white/70 rounded-2xl shadow-md flex items-center px-5">

              <Lock className="text-purple-500" />

              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent outline-none px-4 text-gray-700"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <Eye
                className="text-gray-400 cursor-pointer"
                onClick={() => setShow(!show)}
              />

            </div>

            {/* Register Button */}
            <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold shadow-xl hover:scale-[1.02] transition duration-300 mt-8">

              Create Account

            </button>

          </form>

          {/* Bottom Text */}
          <p className="text-center text-gray-600 mt-7">

            Already have an account?

            <span
              onClick={() => navigate("/login")}
              className="text-purple-600 font-semibold ml-2 cursor-pointer hover:underline"
            >
              Login
            </span>

          </p>

        </div>

      </div>

      {/* Bottom Features */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-10 relative z-10">

        {/* Feature 1 */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg flex items-center justify-center">

            <ShieldCheck className="text-purple-500" />

          </div>

          <div>

            <h1 className="font-semibold text-[#1e1b4b]">
              Secure & Safe
            </h1>

            <p className="text-sm text-gray-500">
              Your data is protected
            </p>

          </div>

        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg flex items-center justify-center">

            <Truck className="text-purple-500" />

          </div>

          <div>

            <h1 className="font-semibold text-[#1e1b4b]">
              Fast Delivery
            </h1>

            <p className="text-sm text-gray-500">
              Get your order quickly
            </p>

          </div>

        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg flex items-center justify-center">

            <BadgeCheck className="text-purple-500" />

          </div>

          <div>

            <h1 className="font-semibold text-[#1e1b4b]">
              Best Quality
            </h1>

            <p className="text-sm text-gray-500">
              Premium products only
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Registration;