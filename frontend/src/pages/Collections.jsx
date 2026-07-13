
import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Card from "../component/Card";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";

function Collections() {

  const { products } = useContext(shopDataContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filterProduct, setFilterProduct] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relevant");

  // ===============================
  // Toggle Category
  // ===============================

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {

      setCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );

    } else {

      setCategory((prev) => [
        ...prev,
        e.target.value,
      ]);

    }

  };

  // ===============================
  // Toggle SubCategory
  // ===============================

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {

      setSubCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );

    } else {

      setSubCategory((prev) => [
        ...prev,
        e.target.value,
      ]);

    }

  };

  // ===============================
  // Apply Filters
  // ===============================

  const applyFilter = () => {

    let productsCopy = [...products];

    if (category.length > 0) {

      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );

    }

    if (subCategory.length > 0) {

      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );

    }

    setFilterProduct(productsCopy);

  };

  // ===============================
  // Sort Products
  // ===============================

  const sortProduct = () => {

    let fpCopy = [...filterProduct];

    switch (sortType) {

      case "low-high":

        setFilterProduct(
          fpCopy.sort((a, b) => a.price - b.price)
        );

        break;

      case "high-low":

        setFilterProduct(
          fpCopy.sort((a, b) => b.price - a.price)
        );

        break;

      default:

        applyFilter();

        break;

    }

  };

  useEffect(() => {

    applyFilter();

  }, [category, subCategory, products]);

  useEffect(() => {

    sortProduct();

  }, [sortType]);

  return (

<div className="w-full min-h-screen bg-[#fdf7fa] pt-28 pb-20 px-6">

  {/* Background Decoration */}

  <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[40px] border-pink-100 opacity-50"></div>

  <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-[40px] border-pink-100 opacity-50"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}

    <div className="text-center mb-16">

      <div className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-md">

        <span className="text-pink-500">✦</span>

        <span className="uppercase tracking-[4px] text-pink-500 font-semibold">
          Explore Fashion
        </span>

        <span className="text-pink-500">✦</span>

      </div>

      <h1 className="mt-8 text-5xl md:text-7xl font-bold">

        <span className="text-[#1e1b4b]">
          OUR
        </span>

        <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
          {" "}COLLECTIONS
        </span>

      </h1>

      <div className="flex justify-center items-center gap-5 mt-8">

        <div className="w-24 h-[2px] bg-pink-500"></div>

        <span className="text-pink-500">✦</span>

        <div className="w-24 h-[2px] bg-pink-500"></div>

      </div>

      <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
        Browse our premium fashion collection crafted with elegance and designed for every occasion.
      </p>

    </div>

    <div className="flex flex-col lg:flex-row gap-10">

      {/* Sidebar */}

      <div className="lg:w-[280px]">

        <div
          onClick={() => setShowFilter(!showFilter)}
          className="lg:hidden flex items-center justify-between bg-white rounded-2xl p-4 shadow cursor-pointer mb-5"
        >

          <span className="font-semibold">
            Filters
          </span>

          {
            showFilter ?

            <FaChevronDown/>

            :

            <FaChevronRight/>

          }

        </div>

        <div
          className={`bg-white rounded-[30px] shadow-xl p-8 ${
            showFilter ? "block" : "hidden"
          } lg:block`}
        >

          <h2 className="text-2xl font-bold text-[#1e1b4b]">
            Filters
          </h2>

          {/* Categories */}

          <div className="mt-8">

            <p className="font-semibold mb-4">
              Categories
            </p>

            <div className="space-y-3">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  value="Men"
                  onChange={toggleCategory}
                />

                Men

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  value="Women"
                  onChange={toggleCategory}
                />

                Women

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  value="Kids"
                  onChange={toggleCategory}
                />

                Kids

              </label>

            </div>

          </div>

          {/* Types */}

          <div className="mt-10">

            <p className="font-semibold mb-4">
              Type
            </p>

            <div className="space-y-3">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  value="Topwear"
                  onChange={toggleSubCategory}
                />

                Topwear

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  value="Bottomwear"
                  onChange={toggleSubCategory}
                />

                Bottomwear

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  value="Winterwear"
                  onChange={toggleSubCategory}
                />

                Winterwear

              </label>

            </div>

          </div>

        </div>

      </div>

      {/* Products */}

      <div className="flex-1">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-10">

          <Title
            text1={"ALL"}
            text2={"COLLECTIONS"}
          />

          <select
            className="border border-pink-300 rounded-xl px-4 py-3 outline-none"
            onChange={(e)=>setSortType(e.target.value)}
          >

            <option value="relevant">
              Sort by : Relevant
            </option>

            <option value="low-high">
              Price : Low to High
            </option>

            <option value="high-low">
              Price : High to Low
            </option>

          </select>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

          {
            filterProduct.map((item,index)=>(

              <Card
                key={index}
                id={item._id}
                image={item.image1}
                name={item.name}
                price={item.price}
              />

            ))
          }

        </div>

      </div>

    </div>

  </div>

</div>

  );

}

export default Collections;

