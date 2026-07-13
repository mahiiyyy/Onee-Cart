
import React, { useState, useContext } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  Search,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { shopDataContext } from "../context/ShopContext";

const Nav = () => {

  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
const { getCartCount } = useContext(shopDataContext);
  const handleLogout = async () => {

    try {

      const result = await axios.get(
        serverUrl + "/api/auth/logout",
        { withCredentials: true }
      );

      console.log(result.data);

      await getCurrentUser();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <nav className="w-full flex justify-center pt-6 px-4 relative top-0 left-0 z-50">

      <div className="w-full max-w-7xl min-h-[90px] rounded-[35px] bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.15)] px-5 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/50 shadow-lg flex items-center justify-center">

            <ShoppingCart
              className="text-purple-500"
              size={28}
            />

          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-[#1e1b4b]">

            Onee
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cart
            </span>

          </h1>

        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-14">

          <a className="text-purple-500 font-semibold" onClick={()=>navigate("/")} >
            Home
          </a>

          <a className="text-[#1e1b4b] hover:text-purple-500"  onClick={()=>navigate("/collection")}>
           Collections
          </a>

         <a className="text-[#1e1b4b] hover:text-purple-500"  onClick={()=>navigate("/about")}>
           About
          </a>
          <a className="text-[#1e1b4b] hover:text-purple-500" onClick={()=>navigate("/contact")} >
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          {showSearch ? (

            <div className="hidden md:flex items-center h-14 px-4 w-[260px] rounded-2xl bg-white/60 shadow-lg">

              <Search
                className="text-purple-500"
                size={20}
              />

              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none px-3"
              />

              <X
                size={20}
                onClick={() => setShowSearch(false)}
                className="cursor-pointer"
              />

            </div>

          ) : (

            <div
              onClick={() => setShowSearch(true)}
              className="hidden md:flex w-14 h-14 rounded-2xl bg-white/50 shadow-lg items-center justify-center cursor-pointer"
            >

              <Search
                className="text-purple-500"
                size={24}
              />

            </div>

          )}

          {/* Profile */}
          <div className="relative hidden md:block">

            <div
              onClick={() => setShowMenu(!showMenu)}
              className="w-14 h-14 rounded-full bg-white/50 shadow-lg flex items-center justify-center cursor-pointer"
            >

              <User
                className="text-purple-500"
                size={26}
              />

            </div>

            {showMenu && (

              <div className="absolute top-16 right-0 bg-white rounded-xl shadow-lg w-36 p-2">

                {!userData ? (

                  <p
                    onClick={() => {
                      navigate("/login");
                      setShowMenu(false);
                    }}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    Login
                  </p>

                ) : (

                  <>
                    <p
                      onClick={() => navigate("/orders")}
                      className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      Orders
                    </p>

                    <p
                      className="p-2 hover:bg-gray-100 rounded cursor-pointer text-red-500"
                      onClick={async () => {

                        await handleLogout();

                        navigate("/login");

                        setShowMenu(false);

                      }}
                    >
                      Logout
                    </p>

                  </>

                )}

              </div>

            )}

          </div>

          {/* Cart */}
          <button
  onClick={() => navigate("/cart")}
  className="hidden md:flex items-center gap-3 px-6 h-14 rounded-2xl bg-white/50 border border-white/40 shadow-lg relative hover:scale-105 transition-all"
>

  <ShoppingCart
    className="text-purple-500"
    size={24}
  />

  <span className="font-semibold">
    Cart
  </span>

  <span
    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs flex items-center justify-center font-bold"
  >
    {getCartCount()}
  </span>

</button>
          {/* Mobile Menu */}
          <div className="md:hidden relative">

            <div
              onClick={() => setMobileMenu(!mobileMenu)}
              className="w-14 h-14 rounded-2xl bg-white/50 shadow-lg flex items-center justify-center cursor-pointer"
            >

              <Menu
                className="text-purple-500"
                size={30}
              />

            </div>

            {mobileMenu && (

              <div className="absolute top-16 right-0 w-56 rounded-2xl bg-white shadow-xl p-4 flex flex-col gap-4">

                <p onClick={() => navigate("/")}>
                  Home
                </p>

                <p>
                  Features
                </p>

                <p>
                  About
                </p>

                <p>
                  Contact
                </p>

                <hr />

                {!userData ? (

                  <p
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </p>

                ) : (

                  <>
                    <p
                      onClick={() => navigate("/orders")}
                    >
                      Orders
                    </p>

                    <p
                      className="text-red-500"
                      onClick={async () => {

                        await handleLogout();

                        navigate("/login");

                      }}
                    >
                      Logout
                    </p>

                  </>

                )}

              </div>

            )}

          </div>

        </div>

      </div>

    </nav>

  );
};

export default Nav;







