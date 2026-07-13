
import React, {
  useState,
  useEffect,
  useContext
} from "react";

import axios from "axios";



import { authDataContext } from "../context/AuthContext";

function List() {

  const { serverUrl } =
    useContext(authDataContext);

  const [list, setList] =
    useState([]);

  const fetchList = async () => {

    try {

      const result = await axios.get(
        `${serverUrl}/api/product/list`
      );

      if (result.data.success) {

        setList(
          result.data.products
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  const deleteProduct = async (id) => {

    try {

      const result = await axios.post(
        `${serverUrl}/api/product/remove/${id}`,
        {},
        {
          withCredentials: true
        }
      );

      if (result.data.success) {

        fetchList();

      }

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchList();

  }, []);

  return (

    <div className="w-full min-h-screen flex bg-[#f4f7ff]">

      

      <div className="flex-1">

        

        <div className="pt-[100px] px-[40px] pb-[40px]">

          <div className="mb-10">

            <p className="uppercase tracking-[6px] text-purple-500 font-semibold text-[14px]">
              Admin Panel
            </p>

            <h1 className="text-[45px] font-bold text-[#1e1b4b] mt-2">
              Product List
            </h1>

            <p className="text-gray-500 mt-2 text-[17px]">
              Manage and view all your products
            </p>

          </div>

          <div className="bg-white rounded-[35px] p-[30px] shadow-xl border border-[#ececff] overflow-x-auto">

            <div className="grid grid-cols-[100px_2fr_1fr_1fr_1fr_1fr_120px] gap-4 font-semibold text-[#1e1b4b] border-b pb-5 min-w-[1000px]">

              <p>Image</p>
              <p>Name</p>
              <p>Category</p>
              <p>SubCategory</p>
              <p>Price</p>
              <p>Sizes</p>
              <p>Action</p>

            </div>

            {
              list.length > 0 ?

                list.map((item) => (

                  <div
                    key={item._id}
                    className="grid grid-cols-[100px_2fr_1fr_1fr_1fr_1fr_120px] gap-4 items-center py-5 border-b min-w-[1000px]"
                  >

                    <img
                      src={item.image1}
                      alt=""
                      className="w-[70px] h-[70px] rounded-xl object-cover"
                    />

                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p>
                      {item.category}
                    </p>

                    <p>
                      {item.subCategory}
                    </p>

                    <p>
                      ₹{item.price}
                    </p>

                    <div className="flex gap-2 flex-wrap">

                      {
                        item.sizes?.map(
                          (size, index) => (

                            <span
                              key={index}
                              className="px-2 py-1 bg-[#f4f7ff] rounded-lg text-sm"
                            >
                              {size}
                            </span>

                          )
                        )
                      }

                    </div>

                    <button
                      onClick={() =>
                        deleteProduct(item._id)
                      }
                      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                    >
                      Delete
                    </button>

                  </div>

                ))

                :

                <div className="py-10 text-center text-gray-500">
                  No Products Found
                </div>
            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default List;

