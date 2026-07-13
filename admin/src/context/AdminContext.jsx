import React,{
 createContext,
 useState,
 useEffect,
 useContext
} from "react";

import axios from "axios";
import { authDataContext } from "./AuthContext";

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {

  const { serverUrl } = useContext(authDataContext);

  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAdmin = async () => {

    try {

      const result = await axios.get(

        serverUrl + "/api/user/getadmin",

        {
          withCredentials: true,
        }

      );

      setAdminData(result.data);

    } catch (error) {

      setAdminData(null);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    getAdmin();

  }, []);

  const value = {

    adminData,

    setAdminData,

    getAdmin,

    loading,

  };

  return (

    <adminDataContext.Provider value={value}>

      {children}

    </adminDataContext.Provider>

  );

};

export default AdminContext;