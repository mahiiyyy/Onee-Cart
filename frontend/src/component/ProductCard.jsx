import React, { useContext } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { addToCart } = useContext(shopDataContext);

  const image =
    product.image1 ||
    (Array.isArray(product.image) ? product.image[0] : "");

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden">

      <img
        src={image}
        alt={product.name}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">

        <h2 className="font-semibold">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <p className="text-pink-600 font-bold text-xl mt-2">
          ₹{product.price}
        </p>

        <div className="flex gap-2 mt-4">

          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-2 flex items-center justify-center gap-2"
          >
            <Eye size={18} />
            View
          </button>

          <button
            onClick={() =>
              addToCart(
                product._id,
                product.sizes?.[0] || "M"
              )
            }
            className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200"
          >
            <ShoppingCart size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;