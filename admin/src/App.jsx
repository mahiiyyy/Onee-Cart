import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Nav from "./component/Nav"
import Sidebar from "./component/Sidebar"

import { adminDataContext } from "./context/AdminContext";
import User from "./pages/User";

function App() {

  const { adminData, loading } =
    useContext(adminDataContext);

  if (loading) {

    return (
      <div className="h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );

  }

  if (!adminData) {

    return <Login />;

  }

  return (

    <div className="flex bg-[#FFF7FC] min-h-screen">

      {/* Sidebar */}

      <Sidebar />

      {/* Right Side */}

      <div className="flex-1">

        <Nav />

        <div className="p-8">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/add" element={<Add />} />

            <Route path="/list" element={<List />} />

            <Route path="/orders" element={<Orders />} />
           
           <Route path="/users" element={<User />} />

          </Routes>

        </div>

      </div>

    </div>

  );

}

export default App;