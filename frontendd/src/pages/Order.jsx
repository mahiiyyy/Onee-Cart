import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import Title from "../component/Title";


const Order = () => {
    
  const { currency } = useContext(shopDataContext);
const { serverUrl } = useContext(authDataContext);

  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {

      const { data } = await axios.post(
        `${serverUrl}/api/order/userorders`,
        {},
        { withCredentials: true }
      );

      if (data.success) {

        let allOrders = [];

        data.orders.forEach((order) => {

          order.items.forEach((item) => {

            allOrders.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });

          });

        });

        setOrders(allOrders.reverse());

      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <Title text1="MY" text2="ORDERS" />

      {orders.length === 0 ? (

        <div className="flex justify-center items-center h-96">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-gray-700">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Start shopping to see your orders here.
            </p>

          </div>

        </div>

      ) : (

        <div className="space-y-6 mt-10">

          {orders.map((item, index) => (

            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between gap-6"
            >

              {/* Left */}

              <div className="flex gap-5">

                <img
                  src={item.image1}
                  alt=""
                  className="w-28 h-28 object-cover rounded-lg border"
                />

                <div>

                  <h2 className="font-semibold text-xl">
                    {item.name}
                  </h2>

                  <div className="flex gap-5 mt-3 text-gray-600">

                    <p>
                      {currency}
                      {item.price}
                    </p>

                    <p>Qty : {item.quantity}</p>

                  </div>

                  <p className="mt-2 text-gray-500">

                    Ordered on{" "}
                    {new Date(item.date).toDateString()}

                  </p>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col justify-between gap-3">

                <div>

                  <span
                    className={`px-4 py-1 rounded-full text-white text-sm ${
                      item.payment
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.payment ? "Paid" : "Pending"}
                  </span>

                </div>

                <div>

                  <p className="font-medium">

                    Payment :
                    <span className="text-gray-600 ml-2">
                      {item.paymentMethod}
                    </span>

                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                  <p className="font-medium">
                    {item.status}
                  </p>

                </div>

                <button
                  onClick={loadOrders}
                  className="border px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
                >
                  Track Order
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default Order;