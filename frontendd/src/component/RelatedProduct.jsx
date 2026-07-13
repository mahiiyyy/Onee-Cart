import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Title from "./Title";
import { shopDataContext } from "../context/ShopContext";

function RelatedProduct({ category, subCategory, currentProductId }) {
  const { products } = useContext(shopDataContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // Same Category
      productsCopy = productsCopy.filter(
        (item) => item.category === category
      );

      // Same Sub Category
      productsCopy = productsCopy.filter(
        (item) => item.subCategory === subCategory
      );

      // Remove Current Product
      productsCopy = productsCopy.filter(
        (item) => item._id !== currentProductId
      );

      // Show only 4 products
      setRelated(productsCopy.slice(0, 4));
    }
  }, [products, category, subCategory, currentProductId]);

  return (
    <div className="py-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {related.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            image={item.image1}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;