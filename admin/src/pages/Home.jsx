import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Package,
  ShoppingBag,
  Users,
  IndianRupee,
} from "lucide-react";
import { authDataContext } from "../context/AuthContext";

function Home() {
  const { serverUrl } = useContext(authDataContext);

  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState(0);

  const fetchDashboard = async () => {
    // Products
    try {
      const productRes = await axios.get(
        `${serverUrl}/api/product/list`,
        {
          withCredentials: true,
        }
      );

      setProducts(productRes.data.products?.length || 0);
    } catch (err) {
      console.log("Products Error:", err);
    }

    // Orders
   // Orders
try {
  const orderRes = await axios.post(
    `${serverUrl}/api/order/list`,
    {},
    {
      withCredentials: true,
    }
  );

  setOrders(orderRes.data.orders || []);
} catch (err) {
  console.log("Orders Error:", err);
}

    // Users
    try {
      const userRes = await axios.get(
        `${serverUrl}/api/user/list`,
        {
          withCredentials: true,
        }
      );

      setUsers(userRes.data.users?.length || 0);
    } catch (err) {
      console.log("Users Error:", err);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const revenue = orders.reduce(
    (total, item) => total + Number(item.amount || 0),
    0
  );

  return (
    <div className="bg-[#FFF6FB] min-h-screen">
      <div className="flex">
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-[#312E81]">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your store from one place.
          </p>

          <div className="grid lg:grid-cols-4 gap-6 mt-10">
            <Card
              title="Products"
              value={products}
              icon={<Package size={32} />}
              color="from-pink-500 to-purple-500"
            />

            <Card
              title="Orders"
              value={orders.length}
              icon={<ShoppingBag size={32} />}
              color="from-blue-500 to-cyan-500"
            />

            <Card
              title="Users"
              value={users}
              icon={<Users size={32} />}
              color="from-green-500 to-emerald-500"
            />

            <Card
              title="Revenue"
              value={`₹${revenue}`}
              icon={<IndianRupee size={32} />}
              color="from-orange-500 to-red-500"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl mt-10 p-8">
            <h2 className="text-2xl font-bold mb-6">
              Recent Orders
            </h2>

            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3">Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>

              <tbody>
                {orders.length > 0 ? (
                  orders.slice(0, 5).map((order) => (
                    <tr key={order._id} className="border-b h-16">
                      <td>
                        {order.address?.firstName}{" "}
                        {order.address?.lastName}
                      </td>

                      <td>₹{order.amount}</td>

                      <td>
                        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                          {order.status}
                        </span>
                      </td>

                      <td>
                        {order.payment ? "Paid" : "Pending"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-8 text-gray-500"
                    >
                      No Orders Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon, color }) {
  return (
    <div
      className={`bg-gradient-to-r ${color} rounded-3xl p-6 text-white shadow-xl`}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-white/80">{title}</p>
          <h1 className="text-4xl font-bold mt-3">{value}</h1>
        </div>

        {icon}
      </div>
    </div>
  );
}

export default Home;