import React, { useState,useContext } from "react";
import {
  ShoppingCart,
  Bell,
  Search,
  User,
  LogOut,
  ClipboardList
} from "lucide-react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";

function Nav() {

  let [showSearch,setShowSearch]=useState(false)

  let [showProfile,setShowProfile]=useState(false)

  let navigate=useNavigate()

  let {serverUrl}=useContext(authDataContext)

  let {getAdmin}=useContext(adminDataContext)


  const logOut=async()=>{

    try{

      await axios.get(
       serverUrl+"/api/auth/logout",
       {withCredentials:true}
      )

      getAdmin()

      navigate("/login")

    }
    catch(error){
      console.log(error)
    }

  }

  return (

    <div className="w-full h-[80px] bg-gradient-to-r from-[#eef2ff] via-[#f9e7ff] to-[#dbeafe] shadow-lg px-8 flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md">

          <ShoppingCart
          className="text-purple-500"
          size={25}
          />

        </div>

        <h1 className="text-3xl font-bold text-[#1e1b4b]">
          OneeCart
          <span className="text-pink-500">
            {" "}Admin
          </span>
        </h1>

      </div>


      {/* Right */}

      <div className="flex items-center gap-5 relative">

        {/* Search */}

        {showSearch && (

          <input
          type="text"
          placeholder="Search..."
          className="w-[220px] h-[45px] rounded-xl px-4 outline-none bg-white shadow-md"
          />

        )}

        <div
        onClick={()=>setShowSearch(!showSearch)}
        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
        >

          <Search size={20}/>

        </div>


        {/* Notification */}

        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center relative">

          <Bell size={20}/>

          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">

            3

          </div>

        </div>


        {/* Profile */}

        <div
        onClick={()=>setShowProfile(!showProfile)}
        className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white cursor-pointer"
        >

          <User size={18}/>

        </div>


        {/* Dropdown */}

        {showProfile && (

          <div className="absolute top-[65px] right-0 w-[180px] bg-white rounded-2xl shadow-xl p-3">

            <div
            onClick={()=>navigate("/orders")}
            className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer"
            >

              <ClipboardList size={18}/>
              Orders

            </div>


            <div
            onClick={logOut}
            className="flex items-center gap-3 p-3 hover:bg-red-100 rounded-xl cursor-pointer text-red-500"
            >

              <LogOut size={18}/>
              Logout

            </div>

          </div>

        )}

      </div>

    </div>

  )
}

export default Nav;