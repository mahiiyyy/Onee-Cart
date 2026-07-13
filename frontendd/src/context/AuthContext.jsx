import React, { createContext } from "react";

export const authDataContext = createContext();


const AuthContext = ({ children }) => {

  const serverUrl = "https://onee-cart-x2ok.onrender.com";

  const value = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
