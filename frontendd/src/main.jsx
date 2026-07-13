import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import UserContext from "./context/UserContext";
import ShopContext from "./context/ShopContext";

createRoot(document.getElementById('root')).render(
  <AuthContext>
  <UserContext>
    <BrowserRouter>
    <ShopContext>
      <App />
      </ShopContext>
    </BrowserRouter>
  </UserContext>
</AuthContext>
);
