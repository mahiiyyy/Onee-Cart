import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import RelatedProduct from "../component/RelatedProduct";

function Product() {
  const { productId } = useParams();
  const {
  products,
  currency,
  addToCart,
} = useContext(shopDataContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image1);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf7fa]">
        <div className="w-14 h-14 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  const images = [
    productData.image1,
    productData.image2,
    productData.image3,
    productData.image4,
  ].filter(Boolean);

  return (
    <div className="bg-[#fdf7fa] min-h-screen py-24 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8">

        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setImage(img)}
                className={`w-24 h-24 object-cover rounded-2xl cursor-pointer border-2 transition ${
                  image === img
                    ? "border-pink-500"
                    : "border-pink-100 hover:border-pink-300"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 bg-pink-50 rounded-3xl p-5">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-[520px] object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-pink-500 font-semibold uppercase">
            Premium Collection
          </span>

          <h1 className="text-5xl font-bold text-[#1e1b4b] mt-3">
            {productData.name}
          </h1>

          <div className="mt-6 text-4xl font-bold text-pink-600">
            {currency}{productData.price}
          </div>

          <p className="text-gray-600 leading-8 mt-6">
            {productData.description ||
              "Crafted with premium quality materials for comfort and elegance."}
          </p>

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Select Size</h3>

            <div className="flex flex-wrap gap-3">
              {productData.sizes?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-6 py-3 rounded-xl border transition ${
                    size === item
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-white border-pink-200 hover:bg-pink-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
  onClick={() => addToCart(productData._id, size)}
  className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 duration-300"
>
  Add To Cart
</button>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[
              ["Free Delivery","Orders above ₹999"],
              ["Easy Returns","7 day returns"],
              ["Secure Payment","100% protected"],
            ].map(([t,d])=>(
              <div key={t} className="bg-pink-50 rounded-2xl p-4">
                <h4 className="font-semibold">{t}</h4>
                <p className="text-sm text-gray-600 mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-3xl p-8 shadow">
        <h2 className="text-3xl font-bold text-[#1e1b4b] mb-4">
          Product Description
        </h2>
        <p className="text-gray-600 leading-8">
          {productData.description ||
            "Premium fashion product designed with comfort, durability and modern style."}
        </p>

        <RelatedProduct
  category={productData.category}
  subCategory={productData.subCategory}
  currentProductId={productData._id}
/>
      </div>
    </div>
  );
}

export default Product;
