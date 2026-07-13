import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const serverUrl = "https://onee-cart-x2ok.onrender.com";

  // ===========================================
  // FETCH ORDERS
  // ===========================================

  const fetchOrders = async () => {

    try {

      const { data } = await axios.post(

        `${serverUrl}/api/order/list`,

        {},

        {
          withCredentials: true,
        }

      );

      if (data.success) {

        setOrders(data.orders);

      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // ===========================================
  // UPDATE STATUS
  // ===========================================

  const statusHandler = async (orderId, status) => {

    try {

      const { data } = await axios.post(

        `${serverUrl}/api/order/status`,

        {
          orderId,
          status,
        },

        {
          withCredentials: true,
        }

      );

      if (data.success) {

        fetchOrders();

      }

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchOrders();

  }, []);

  // ===========================================
  // LOADING
  // ===========================================

  if (loading) {

    return (

      <div className="flex items-center justify-center h-screen">

        <h1 className="text-3xl font-bold text-purple-600">

          Loading Orders...

        </h1>

      </div>

    );

  }

  // ===========================================
  // NO ORDERS
  // ===========================================

  if (!loading && orders.length === 0) {

    return (

      <div className="flex items-center justify-center h-screen">

        <h1 className="text-3xl font-bold text-gray-500">

          No Orders Found 📦

        </h1>

      </div>

    );

  }

  return (
  <div className="min-h-screen bg-gray-50 p-6">

    <div className="flex justify-between items-center mb-8">

      <h1 className="text-3xl font-bold text-gray-800">
        📦 All Orders
      </h1>

      <button
        onClick={fetchOrders}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl transition"
      >
        Refresh
      </button>

    </div>

    <div className="space-y-6">

      {orders.map((order) => (

        <div
          key={order._id}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        >

          <div className="grid lg:grid-cols-3 gap-8">

            {/* PRODUCTS */}

            <div>

              <h2 className="font-bold text-lg mb-4">
                Products
              </h2>

              {order.items.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-4 mb-5"
                >

                  <img
                    src={item.image1}
                    alt=""
                    className="w-20 h-20 rounded-xl object-cover border"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Size : {item.size}
                    </p>

                    <p className="text-gray-500">
                      Qty : {item.quantity}
                    </p>

                    <p className="font-semibold text-purple-600">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* CUSTOMER */}

            <div>

              <h2 className="font-bold text-lg mb-4">
                Customer Details
              </h2>

              <p>
                <b>Name :</b>{" "}
                {order.address.firstName}{" "}
                {order.address.lastName}
              </p>

              <p>
                <b>Email :</b>{" "}
                {order.address.email}
              </p>

              <p>
                <b>Phone :</b>{" "}
                {order.address.phone}
              </p>

              <div className="mt-3">

                <b>Address</b>

                <p className="text-gray-600 mt-2">

                  {order.address.street},

                  <br />

                  {order.address.city},

                  {order.address.state},

                  <br />

                  {order.address.country}

                  <br />

                  {order.address.pinCode}

                </p>

              </div>

            </div>

            {/* ORDER DETAILS */}

            <div>

              <h2 className="font-bold text-lg mb-4">
                Order Details
              </h2>

              <div className="space-y-2">

                <p>

                  <b>Total :</b>

                  ₹{order.amount}

                </p>

                <p>

                  <b>Payment :</b>

                  {order.paymentMethod}

                </p>

                <div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.payment
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >

                    {order.payment
                      ? "Paid"
                      : "Pending"}

                  </span>

                </div>

                <p>

                  <b>Date :</b>

                  {new Date(
                    order.createdAt || order.date
                  ).toLocaleString()}

                </p>

              </div>

              <div className="mt-5">

                <label className="font-semibold">

                  Order Status

                </label>

                <select
                  value={order.status}
                  onChange={(e) =>
                    statusHandler(
                      order._id,
                      e.target.value
                    )
                  }
                  className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-purple-500"
                >

                  <option>Order Placed</option>

                  <option>Packed</option>

                  <option>Shipped</option>

                  <option>Out for Delivery</option>

                  <option>Delivered</option>

                </select>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
);
}
export default Orders;
