import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import { shopDataContext } from "../context/ShopContext";
import Title from "../component/Title";
import { Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const {

    products,

    currency,

    delivery_fee,

    cartItem,

    updateQuantity,

    getCartAmount,

  } = useContext(shopDataContext);

  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    let tempData = [];

    for (const items in cartItem) {

      for (const size in cartItem[items]) {

        if (cartItem[items][size] > 0) {

          tempData.push({

            _id: items,

            size,

            quantity: cartItem[items][size],

          });

        }

      }

    }

    setCartData(tempData);

  }, [cartItem]);

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2ff] to-[#dbeafe] pt-28 pb-16 px-5">

      <div className="max-w-7xl mx-auto">

        <Title
          text1={"SHOPPING"}
          text2={"CART"}
        />

        {
          cartData.length === 0 ?

          (

            <div className="flex flex-col items-center justify-center mt-24">

              <img

                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"

                className="w-44"

                alt=""

              />

              <h2 className="text-3xl font-bold mt-8">

                Your Cart is Empty

              </h2>

              <button

                onClick={() => navigate("/collection")}

                className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full"

              >

                Continue Shopping

              </button>

            </div>

          )

          :

          (

            <div className="grid lg:grid-cols-3 gap-8 mt-12">

              <div className="lg:col-span-2 space-y-6">

                {

                  cartData.map((item, index) => {

                    const productData = products.find(
  (product) => product._id === item._id
);

const images = [
  productData?.image1,
  productData?.image2,
  productData?.image3,
  productData?.image4,
].filter(Boolean);
                    if (!productData) return null;

                    return (

                      <div

                        key={index}

                        className="bg-white rounded-3xl shadow-xl p-5 flex gap-5"

                      >

                        <img

                         src={images[0]}

                          className="w-28 h-28 rounded-2xl object-cover"

                          alt=""

                        />

                        <div className="flex-1">

                          <h2 className="text-xl font-bold">

                            {productData.name}

                          </h2>

                          <p className="text-pink-600 font-bold mt-2">

                            {currency}{productData.price}

                          </p>

                          <div className="mt-3">

                            <span className="bg-pink-100 px-4 py-1 rounded-full">

                              Size : {item.size}

                            </span>

                          </div>

                          <div className="flex items-center gap-4 mt-5">

                            <button

                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }

                              className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center"

                            >

                              <Minus size={16} />

                            </button>

                            <span className="font-bold">

                              {item.quantity}

                            </span>

                            <button

                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }

                              className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center"

                            >

                              <Plus size={16} />

                            </button>

                          </div>

                        </div>

                        <button

                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              0
                            )
                          }

                        >

                          <Trash2

                            size={24}

                            className="text-red-500"

                          />

                        </button>

                      </div>

                    );

                  })

                }

              </div>
                            {/* ORDER SUMMARY */}

              <div className="bg-white rounded-[35px] shadow-2xl p-8 h-fit sticky top-28">

                <h2 className="text-3xl font-bold text-[#1e1b4b] mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between text-gray-600">

                    <span>Subtotal</span>

                    <span>
                      {currency}
                      {getCartAmount()}
                    </span>

                  </div>

                  <div className="flex justify-between text-gray-600">

                    <span>Delivery Fee</span>

                    <span>
                      {currency}
                      {getCartAmount() === 0
                        ? 0
                        : delivery_fee}
                    </span>

                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold text-[#1e1b4b]">

                    <span>Total</span>

                    <span>
                      {currency}
                      {getCartAmount() === 0
                        ? 0
                        : getCartAmount() + delivery_fee}
                    </span>

                  </div>

                </div>

                <button
                  onClick={() => navigate("/place-order")}
                  className="w-full mt-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:scale-105 duration-300"
                >
                  Proceed To Checkout
                </button>

                <button
                  onClick={() => navigate("/collection")}
                  className="w-full mt-4 py-4 rounded-full border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 duration-300"
                >
                  Continue Shopping
                </button>

              </div>

            </div>

          )

        }

      </div>

    </div>

  );

}

export default Cart;