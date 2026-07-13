import React,{useContext} from "react";
import {
 Home,
 PlusCircle,
 ClipboardList,
 ShoppingBag,
 Users,
 LogOut
} from "lucide-react";

import { useNavigate,useLocation } from "react-router-dom";

import axios from "axios";

import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";

function Sidebar() {

 let navigate=useNavigate();

 let location=useLocation();

 let {serverUrl}=useContext(authDataContext)

 let {getAdmin}=useContext(adminDataContext)


 const logOut=async()=>{

  try{

   await axios.get(
    serverUrl+"/api/auth/logout",
    {withCredentials:true}
   )

   await getAdmin()

   navigate("/login")

  }

  catch(error){

   console.log(error)

  }

 }

 const menu=[

 {
   name:"Dashboard",
   icon:<Home size={20}/>,
   path:"/"
 },

 {
   name:"Add Product",
   icon:<PlusCircle size={20}/>,
   path:"/add"
 },

 {
   name:"Product List",
   icon:<ClipboardList size={20}/>,
   path:"/list"
 },

 {
   name:"Orders",
   icon:<ShoppingBag size={20}/>,
   path:"/orders"
 },

 {
   name:"Users",
   icon:<Users size={20}/>,
   path:"/users"
 }

 ]

 return(

<div className="w-[260px] min-h-screen bg-gradient-to-b from-[#eef2ff] via-[#f9e7ff] to-[#dbeafe] shadow-2xl p-6">

    {/* Logo */}

    <div className="mb-10">

      <h1 className="text-3xl font-bold text-[#1e1b4b]">

        OneeCart
        <span className="text-pink-500">
         {" "}Admin
        </span>

      </h1>

    </div>


    {/* Menu */}

    <div className="flex flex-col gap-4">

      {

      menu.map((item,index)=>(

      <div

      key={index}

      onClick={()=>navigate(item.path)}

      className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition

      ${location.pathname===item.path ?

      "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"

      :

      "hover:bg-white text-[#1e1b4b]"
      }

      `}
      >

      {item.icon}

      <p className="font-medium">

      {item.name}

      </p>

      </div>

      ))

      }


      <div

      onClick={logOut}

      className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-red-100 text-red-500 mt-10"

      >

      <LogOut size={20}/>

      Logout

      </div>

    </div>

</div>

 )

}

export default Sidebar;