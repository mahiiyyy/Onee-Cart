import React, { createContext } from "react";

export const authDataContext = createContext();

export const AuthContext = ({ children }) => {
let serverUrl = "https://onee-cart-x2ok.onrender.com";

  let value = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
