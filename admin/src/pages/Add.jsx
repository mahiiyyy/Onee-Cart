import React, {
  useState,
  useContext
} from "react";

import axios from "axios";

import {
  Upload,
  Package,
  IndianRupee,
  Layers3,
  Tag,
  Type
} from "lucide-react";



import { authDataContext } from "../context/AuthContext";

function Add() {

  let { serverUrl } =
    useContext(authDataContext);

  const [image1, setImage1] =
    useState(false);

  const [image2, setImage2] =
    useState(false);

  const [image3, setImage3] =
    useState(false);

  const [image4, setImage4] =
    useState(false);

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("Men");

  const [price, setPrice] =
    useState("");

  const [subCategory, setSubCategory] =
    useState("Topwear");

  const [bestseller, setBestSeller] =
    useState(false);

  const [sizes, setSizes] =
    useState([]);




    const handleAddProduct = async (e) => {

  e.preventDefault()

  try {

    const formData = new FormData()

    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("subCategory", subCategory)
    formData.append("bestseller", bestseller)

    formData.append(
      "sizes",
      JSON.stringify(sizes)
    )

    if (image1) {
      formData.append("image1", image1)
    }

    if (image2) {
      formData.append("image2", image2)
    }

    if (image3) {
      formData.append("image3", image3)
    }

    if (image4) {
      formData.append("image4", image4)
    }

    const response = await axios.post(

      `${serverUrl}/api/product/addproduct`,

      formData,

      {
        withCredentials: true
      }

    )

    console.log(response.data)

    alert("Product Added")

    setName("")
    setDescription("")
    setPrice("")

    setImage1(false)
    setImage2(false)
    setImage3(false)
    setImage4(false)

    setSizes([])

    setBestSeller(false)

  }

  catch (error) {

    console.log(error)

    console.log("Response:", error.response?.data)

    alert(
      error.response?.data?.message ||
      "Error adding product"
    )

}
    }




  return (

    <div className="w-full min-h-screen flex bg-[#f4f7ff]">

     



      <div className="flex-1">

     



        <div className="pt-[100px] px-[40px] pb-[40px]">

          {/* Heading */}

          <div className="mb-10">

            <p className="uppercase tracking-[6px] text-purple-500 font-semibold text-[14px]">

              Admin Panel

            </p>

            <h1 className="text-[45px] font-bold text-[#1e1b4b] mt-2">

              Add New Product

            </h1>

            <p className="text-gray-500 mt-2 text-[17px]">

              Upload and manage your products easily

            </p>

          </div>




          {/* Form */}

          <form

            onSubmit={handleAddProduct}

            className="w-full bg-white rounded-[35px] p-[40px] shadow-xl border border-[#ececff] flex flex-col gap-[35px]"

          >



            {/* Product Name */}

            <div>

              <label className="text-[#1e1b4b] font-semibold text-[18px] flex items-center gap-[10px] mb-[15px]">

                <Type size={20} />

                Product Name

              </label>

              <input

                type="text"

                placeholder="Enter product name"

                value={name}

                onChange={(e) =>
                  setName(e.target.value)
                }

                className="w-full h-[60px] rounded-[18px] px-[20px] bg-[#f8f8ff] border border-[#ececff] outline-none focus:border-purple-400"

              />

            </div>




            {/* Description */}

            <div>

              <label className="text-[#1e1b4b] font-semibold text-[18px] flex items-center gap-[10px] mb-[15px]">

                <Package size={20} />

                Description

              </label>

              <textarea

                placeholder="Write product description..."

                value={description}

                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }

                className="w-full h-[140px] rounded-[18px] p-[20px] bg-[#f8f8ff] border border-[#ececff] outline-none resize-none focus:border-purple-400"

              />

            </div>




            {/* Category Section */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">




              {/* Price */}

              <div>

                <label className="text-[#1e1b4b] font-semibold text-[18px] flex items-center gap-[10px] mb-[15px]">

                  <IndianRupee size={20} />

                  Price

                </label>

                <input

                  type="number"

                  placeholder="Enter price"

                  value={price}

                  onChange={(e) =>
                    setPrice(e.target.value)
                  }

                  className="w-full h-[60px] rounded-[18px] px-[20px] bg-[#f8f8ff] border border-[#ececff] outline-none focus:border-purple-400"

                />

              </div>





              {/* Category */}

              <div>

                <label className="text-[#1e1b4b] font-semibold text-[18px] flex items-center gap-[10px] mb-[15px]">

                  <Layers3 size={20} />

                  Category

                </label>

                <select

                  value={category}

                  onChange={(e) =>
                    setCategory(
                      e.target.value
                    )
                  }

                  className="w-full h-[60px] rounded-[18px] px-[20px] bg-[#f8f8ff] border border-[#ececff] outline-none focus:border-purple-400"

                >

                  <option>
                    Men
                  </option>

                  <option>
                    Women
                  </option>

                  <option>
                    Kids
                  </option>

                </select>

              </div>





              {/* SubCategory */}

              <div>

                <label className="text-[#1e1b4b] font-semibold text-[18px] flex items-center gap-[10px] mb-[15px]">

                  <Tag size={20} />

                  SubCategory

                </label>

                <select

                  value={subCategory}

                  onChange={(e) =>
                    setSubCategory(
                      e.target.value
                    )
                  }

                  className="w-full h-[60px] rounded-[18px] px-[20px] bg-[#f8f8ff] border border-[#ececff] outline-none focus:border-purple-400"

                >

                  <option>
                    Topwear
                  </option>

                  <option>
                    Bottomwear
                  </option>

                  <option>
                    Winterwear
                  </option>

                </select>

              </div>

            </div>





            {/* Sizes */}

            <div>

              <p className="text-[#1e1b4b] font-semibold text-[18px] mb-[18px]">

                Product Sizes

              </p>

              <div className="flex gap-[15px] flex-wrap">

                {

                  ["S", "M", "L", "XL", "XXL"].map((item, index) => (

                    <div

                      key={index}

                      onClick={() =>

                        setSizes((prev) =>

                          prev.includes(item)

                            ? prev.filter(
                                (size) =>
                                  size !== item
                              )

                            : [...prev, item]

                        )

                      }

                      className={`w-[60px] h-[60px] rounded-[18px] flex items-center justify-center font-semibold cursor-pointer transition

                      ${sizes.includes(item)

                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"

                          : "bg-[#f8f8ff] border border-[#ececff] text-black"
                        }

                      `}
                    >

                      {item}

                    </div>

                  ))

                }

              </div>

            </div>





            {/* Upload Images */}

            <div>

              <label className="text-[#1e1b4b] font-semibold text-[18px] flex items-center gap-[10px] mb-[20px]">

                <Upload size={20} />

                Upload Product Images

              </label>





              <div className="grid grid-cols-2 md:grid-cols-4 gap-[25px]">




                {/* Image 1 */}

                <label className="h-[180px] bg-[#f8f8ff] rounded-[30px] border-2 border-dashed border-purple-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:scale-[1.02] transition">

                  <input

                    type="file"

                    hidden

                    onChange={(e) =>
                      setImage1(
                        e.target.files[0]
                      )
                    }

                  />

                  {

                    image1 ?

                      <img

                        src={URL.createObjectURL(image1)}

                        className="w-full h-full object-cover"

                      />

                      :

                      <>

                        <Upload
                          
                          className="text-purple-500"
                        />

                        <p className="mt-[10px] text-gray-500">

                          Upload Image

                        </p>

                      </>

                  }

                </label>





                {/* Image 2 */}

                <label className="h-[180px] bg-[#f8f8ff] rounded-[30px] border-2 border-dashed border-purple-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:scale-[1.02] transition">

                  <input

                    type="file"

                    hidden

                    onChange={(e) =>
                      setImage2(
                        e.target.files[0]
                      )
                    }

                  />

                  {

                    image2 ?

                      <img

                        src={URL.createObjectURL(image2)}

                        className="w-full h-full object-cover"

                      />

                      :

                      <>

                        <Upload
                          size={35}
                          className="text-purple-500"
                        />

                        <p className="mt-[10px] text-gray-500">

                          Upload Image

                        </p>

                      </>

                  }

                </label>





                {/* Image 3 */}

                <label className="h-[180px] bg-[#f8f8ff] rounded-[30px] border-2 border-dashed border-purple-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:scale-[1.02] transition">

                  <input

                    type="file"

                    hidden

                    onChange={(e) =>
                      setImage3(
                        e.target.files[0]
                      )
                    }

                  />

                  {

                    image3 ?

                      <img

                        src={URL.createObjectURL(image3)}

                        className="w-full h-full object-cover"

                      />

                      :

                      <>

                        <Upload
                          size={35}
                          className="text-purple-500"
                        />

                        <p className="mt-[10px] text-gray-500">

                          Upload Image

                        </p>

                      </>

                  }

                </label>





                {/* Image 4 */}

                <label className="h-[180px] bg-[#f8f8ff] rounded-[30px] border-2 border-dashed border-purple-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:scale-[1.02] transition">

                  <input

                    type="file"

                    hidden

                    onChange={(e) =>
                      setImage4(
                        e.target.files[0]
                      )
                    }

                  />

                  {

                    image4 ?

                      <img

                        src={URL.createObjectURL(image4)}

                        className="w-full h-full object-cover"

                      />

                      :

                      <>

                        <Upload
                          size={35}
                          className="text-purple-500"
                        />

                        <p className="mt-[10px] text-gray-500">

                          Upload Image

                        </p>

                      </>

                  }

                </label>

              </div>

            </div>





            {/* Bestseller */}

            <div className="w-[80%] flex items-center justify-start gap-[10px] mt-[20px]">

              <input

                type="checkbox"

                id="checkbox"

                checked={bestseller}

                onChange={() =>
                  setBestSeller(
                    prev => !prev
                  )
                }

                className="w-[25px] h-[25px] cursor-pointer"

              />

              <label

                htmlFor="checkbox"

                className="text-[18px] md:text-[22px] font-semibold"

              >

                Add to BestSeller

              </label>

            </div>





            {/* Button */}

            <button className="w-[220px] h-[60px] rounded-[18px] bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[18px] font-semibold shadow-lg hover:scale-[1.02] transition">

              Add Product

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Add;