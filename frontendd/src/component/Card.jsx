
import React from "react";
import { Link } from "react-router-dom";

function Card({ id, image, name, price }) {
  return (
    <Link
      to={`/product/${id}`}
      className="group w-[280px]"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-[28px] bg-[#f6f7fb] shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-[340px] object-cover group-hover:scale-110 duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">

        <h2 className="text-[20px] font-semibold text-[#1e1b4b] line-clamp-1">
          {name}
        </h2>

        <p className="mt-2 text-[22px] font-bold text-purple-600">
          ₹{price}
        </p>

      </div>
    </Link>
  );
}

export default Card;

