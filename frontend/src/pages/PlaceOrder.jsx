import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
const PlaceOrder = () => {
const navigate = useNavigate();

const {
  products,
  cartItem,
  setCartItem,
  getCartAmount,
  delivery_fee,
} = useContext(shopDataContext);

const { serverUrl } = useContext(authDataContext);

const [method, setMethod] = useState("COD");

const [formData, setFormData] = useState({

  firstName: "",

  lastName: "",

  email: "",

  street: "",

  city: "",

  state: "",

  pinCode: "",

  country: "",

  phone: "",

});

const onChangeHandler = (e) => {

  const name = e.target.name;

  const value = e.target.value;

  setFormData((data) => ({
    ...data,
    [name]: value,
  }));

};

const initPay = (order) => {

  const options = {

    key: import.meta.env.VITE_RAZORPAY_KEY_ID,

    amount: order.amount,

    currency: order.currency,

    name: "OneeCart",

    description: "Order Payment",

    order_id: order.id,

    receipt: order.receipt,

    handler: async (response) => {

      try {

        const verify = await axios.post(

          serverUrl + "/api/order/verifyrazorpay",

          {

            razorpay_order_id: response.razorpay_order_id,

            razorpay_payment_id: response.razorpay_payment_id,

            razorpay_signature: response.razorpay_signature,

            orderId: order.receipt,

          },

          {

            withCredentials: true,

          }

        );

        if (verify.data.success) {

          setCartItem({});

          navigate("/orders");

        }

        else {

          alert(verify.data.message);

        }

      }

      catch (error) {

        console.log(error);

      }

    },

    theme: {

      color: "#7C3AED",

    },

  };

  const rzp = new window.Razorpay(options);

  rzp.open();

};

const onSubmitHandler = async (e) => {

  e.preventDefault();

  try {

    let orderItems = [];

    for (const itemId in cartItem) {

      const product = products.find(
        (item) => item._id === itemId
      );

      if (!product) continue;

      for (const size in cartItem[itemId]) {

        if (cartItem[itemId][size] > 0) {

          const itemInfo = {
            ...product,
            size,
            quantity: cartItem[itemId][size],
          };

          orderItems.push(itemInfo);

        }

      }

    }

    const orderData = {

      address: formData,

      items: orderItems,

      amount: getCartAmount() + delivery_fee,

    };

    switch (method) {

      // ==========================
      // CASH ON DELIVERY
      // ==========================

      case "COD":

        const codResult = await axios.post(

          serverUrl + "/api/order/place",

          {
            ...orderData,
            paymentMethod: "COD",
          },

          {
            withCredentials: true,
          }

        );

        if (codResult.data.success) {

          setCartItem({});

          navigate("/orders");

        } else {

          alert(codResult.data.message);

        }

        break;

      // ==========================
      // RAZORPAY
      // ==========================

      case "Razorpay":

        const razorpayResult = await axios.post(

          serverUrl + "/api/order/placeorderbyrazorpay",

          orderData,

          {
            withCredentials: true,
          }

        );

        if (razorpayResult.data.success) {
console.log("Backend Response:", razorpayResult.data);

          initPay(razorpayResult.data.order);

        } else {

          alert(razorpayResult.data.message);

        }

        break;

      default:

        break;

    }

  }

  catch (error) {

    console.log(error);

  }

};


return (

<form onSubmit={onSubmitHandler} className="max-w-7xl mx-auto px-4 md:px-8 py-10">

<div className="grid lg:grid-cols-3 gap-8">

{/* LEFT */}

<div className="lg:col-span-2 space-y-8">

{/* Shipping Address */}

<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-2xl font-bold mb-6">

Shipping Address

</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
required
name="firstName"
placeholder="First Name"
value={formData.firstName}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none"
/>

<input
required
name="lastName"
placeholder="Last Name"
value={formData.lastName}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none"
/>

<input
required
name="email"
type="email"
placeholder="Email"
value={formData.email}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none md:col-span-2"
/>

<input
required
name="street"
placeholder="Street"
value={formData.street}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none md:col-span-2"
/>

<input
required
name="city"
placeholder="City"
value={formData.city}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none"
/>

<input
required
name="state"
placeholder="State"
value={formData.state}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none"
/>

<input
required
name="pinCode"
placeholder="Pin Code"
value={formData.pinCode}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none"
/>

<input
required
name="country"
placeholder="Country"
value={formData.country}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none"
/>

<input
required
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={onChangeHandler}
className="border rounded-lg p-3 outline-none md:col-span-2"
/>

</div>

</div>

{/* Payment */}

<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-2xl font-bold mb-5">

Payment Method

</h2>

<div className="space-y-4">

<div
onClick={() => setMethod("COD")}
className={`border rounded-xl p-4 cursor-pointer transition ${
method === "COD"
? "border-purple-600 bg-purple-50"
: "border-gray-300"
}`}
>

<div className="font-semibold">

Cash On Delivery

</div>

<p className="text-gray-500 text-sm">

Pay after delivery

</p>

</div>

<div
onClick={() => setMethod("Razorpay")}
className={`border rounded-xl p-4 cursor-pointer transition ${
method === "Razorpay"
? "border-purple-600 bg-purple-50"
: "border-gray-300"
}`}
>

<div className="font-semibold">

Razorpay

</div>

<p className="text-gray-500 text-sm">

UPI / Cards / Net Banking

</p>

</div>

</div>

</div>

</div>

{/* RIGHT */}

<div>

<div className="bg-white rounded-2xl shadow p-6 sticky top-24">

<h2 className="text-2xl font-bold mb-5">

Order Summary

</h2>

<div className="flex justify-between py-2">

<span>Subtotal</span>

<span>₹{getCartAmount()}</span>

</div>

<div className="flex justify-between py-2">

<span>Delivery Fee</span>

<span>₹{delivery_fee}</span>

</div>

<hr className="my-4"/>

<div className="flex justify-between font-bold text-lg">

<span>Total</span>

<span>

₹{getCartAmount()+delivery_fee}

</span>

</div>

<button
type="submit"
className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition"
>

Place Order

</button>

</div>

</div>

</div>

</form>

);
}

export default PlaceOrder;