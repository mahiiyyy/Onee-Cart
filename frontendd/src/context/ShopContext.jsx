import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { authDataContext } from "./AuthContext";
import { userDataContext } from "./UserContext";

export const shopDataContext = createContext();

function ShopContext({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState({});

  const { serverUrl } = useContext(authDataContext);
  const { userData } = useContext(userDataContext);

  const currency = "₹";
  const delivery_fee = 40;

  // ============================
  // GET PRODUCTS
  // ============================

  const getProducts = async () => {

    try {

      const result = await axios.get(
        `${serverUrl}/api/product/list`
      );

      if (result.data.success) {

        setProducts(result.data.products);

      }

    } catch (error) {

      console.log(error);

    }

  };

  // ============================
  // ADD TO CART
  // ============================

  const addToCart = async (itemId, size) => {

    if (!size) {

      alert("Please Select Size");
      return;

    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {

      if (cartData[itemId][size]) {

        cartData[itemId][size] += 1;

      } else {

        cartData[itemId][size] = 1;

      }

    } else {

      cartData[itemId] = {};

      cartData[itemId][size] = 1;

    }

    setCartItem(cartData);

    if (userData) {

      try {

        const result = await axios.post(

          `${serverUrl}/api/cart/add`,

          {
            itemId,
            size,
          },

          {
            withCredentials: true,
          }

        );

        console.log(result.data);

      } catch (error) {

        console.log(error);

      }

    }

  };
    // ============================
  // GET USER CART
  // ============================

  const getUserCart = async () => {

    try {

      const result = await axios.post(

        `${serverUrl}/api/cart/get`,

        {},

        {
          withCredentials: true,
        }

      );

      if (result.data.success) {

        setCartItem(result.data.cartData);

      }

    } catch (error) {

      console.log(error);

    }

  };

  // ============================
  // UPDATE QUANTITY
  // ============================

  const updateQuantity = async (
    itemId,
    size,
    quantity
  ) => {

    let cartData = structuredClone(cartItem);

    if (quantity <= 0) {

      delete cartData[itemId][size];

      if (
        Object.keys(cartData[itemId]).length === 0
      ) {

        delete cartData[itemId];

      }

    } else {

      cartData[itemId][size] = quantity;

    }

    setCartItem(cartData);

    if (userData) {

      try {

        await axios.post(

          `${serverUrl}/api/cart/update`,

          {
            itemId,
            size,
            quantity,
          },

          {
            withCredentials: true,
          }

        );

      } catch (error) {

        console.log(error);

      }

    }

  };

  // ============================
  // CART COUNT
  // ============================

  const getCartCount = () => {

    let totalCount = 0;

    for (const items in cartItem) {

      for (const size in cartItem[items]) {

        try {

          if (cartItem[items][size] > 0) {

            totalCount += cartItem[items][size];

          }

        } catch (error) {

          console.log(error);

        }

      }

    }

    return totalCount;

  };

  // ============================
  // CART TOTAL
  // ============================

  const getCartAmount = () => {

    let totalAmount = 0;

    for (const items in cartItem) {

      let itemInfo = products.find(
        (product) => product._id === items
      );

      if (!itemInfo) continue;

      for (const size in cartItem[items]) {

        try {

          if (cartItem[items][size] > 0) {

            totalAmount +=
              itemInfo.price *
              cartItem[items][size];

          }

        } catch (error) {

          console.log(error);

        }

      }

    }

    return totalAmount;

  };

  // ============================
  // LOAD DATA
  // ============================

  useEffect(() => {

    getProducts();

  }, []);

  useEffect(() => {

    if (userData) {

      getUserCart();

    }

  }, [userData]);

  // ============================
  // CONTEXT VALUE
  // ============================

  const value = {

    products,

    currency,

    delivery_fee,

    cartItem,

    setCartItem,

    getProducts,

    addToCart,

    getUserCart,

    updateQuantity,

    getCartCount,

    getCartAmount,

  };

  return (

    <shopDataContext.Provider value={value}>

      {children}

    </shopDataContext.Provider>

  );

}

export default ShopContext;