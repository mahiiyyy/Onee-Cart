import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Nav from "./component/Nav";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

import { userDataContext } from "./context/UserContext";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Ai from "./component/Ai";

function App() {

  const { userData } = useContext(userDataContext);
  console.log("App userData:", userData);

  const location = useLocation();

  return (
    <>

      {userData && <Nav />}

      <Routes>

        <Route
          path="/login"
          element={
            userData
              ? <Navigate to="/" />
              : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            userData
              ? <Navigate to="/" />
              : <Registration />
          }
        />

        <Route
          path="/"
          element={
            userData
              ? <Home />
              : <Navigate
                  to="/login"
                  state={{ from: location.pathname }}
                />
          }
        />

        <Route
          path="/about"
          element={
            userData
              ? <About />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/collection"
          element={
            userData
              ? <Collections />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/product/:productId"
          element={
            userData
              ? <Product />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/contact"
          element={
            userData
              ? <Contact />
              : <Navigate to="/login" />
          }
        />

        <Route
  path="/cart"
  element={
    userData
      ? <Cart />
      : <Navigate to="/login" />
  }


/>

<Route
  path="/place-order"
  element={
    userData
      ? <PlaceOrder />
      : <Navigate to="/login" />
  }
/>
<Route path="/orders" element={<Order />} />

      </Routes>



<Ai />

    </>
  );
}

export default App;