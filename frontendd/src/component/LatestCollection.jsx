import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import Card from "./Card";
import { shopDataContext } from "../context/ShopContext";

function LatestCollection() {

  const { products } = useContext(shopDataContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 8));
    }
  }, [products]);

  return (
    <div className="w-full bg-[#fdf7fa] py-24 px-4 relative overflow-hidden">

      {/* Background circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[40px] border-pink-100 opacity-60"></div>

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-[40px] border-pink-100 opacity-60"></div>

      {/* Dots */}
      <div className="absolute left-8 top-12 grid grid-cols-4 gap-3">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-pink-300"
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-md">

          <span className="text-pink-500 text-xl">✦</span>

          <span className="uppercase tracking-wider font-medium text-pink-500">
            New Arrivals
          </span>

          <span className="text-pink-500 text-xl">✦</span>

        </div>

        {/* Heading */}
        <h2 className="mt-8 text-5xl md:text-7xl font-bold">

          <span className="text-[#0f172a]">
            LATEST
          </span>

          <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
            {" "}COLLECTIONS
          </span>

        </h2>

        {/* Line */}
        <div className="flex justify-center items-center gap-6 mt-8">

          <div className="w-28 h-[2px] bg-pink-500"></div>

          <span className="text-pink-500 text-xl">
            ✦
          </span>

          <div className="w-28 h-[2px] bg-pink-500"></div>

        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-8 text-gray-500 text-lg">

          Discover our newest fashion pieces crafted with elegance
          and designed to make you stand out.

        </p>

        {/* Products */}
        <div className="mt-20 flex flex-wrap justify-center gap-10">

          {
            latestProducts.length > 0 ? (

              latestProducts.map((item, index) => (

                <Card
                  key={index}
                  id={item._id}
                  name={item.name}
                  image={item.image1}
                  price={item.price}
                />

              ))

            ) : (

              <p className="text-gray-500 text-xl">
                No Products Available
              </p>

            )
          }

        </div>

      </div>

    </div>
  );
}

export default LatestCollection;