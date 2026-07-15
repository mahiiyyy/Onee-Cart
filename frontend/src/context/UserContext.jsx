import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const userDataContext = createContext();

const UserContext = ({ children }) => {

 const [userData, setUserData] = useState(null);

  const { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {

      let result = await axios.get(
        serverUrl + "/api/auth/getcurrentuser",
        { withCredentials: true }
      );

      setUserData(result.data);
console.log("Current User:", result.data);
    } catch (error) {
      console.log(error);
      setUserData(null);
    }
  };

  

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
  userData,
  setUserData,
  getCurrentUser
};

return (
  <userDataContext.Provider value={value}>
    {children}
  </userDataContext.Provider>
);
};

export default UserContext;
