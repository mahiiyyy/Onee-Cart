import Product from "../model/productModel.js"
import uploadOnCloudinary from "../config/cloudinary.js"

export const addProduct = async (req, res) => {

  try {

    let {
      name,
      description,
      price,
      category,
      subCategory,
      bestseller,
      sizes
    } = req.body

    const image1 =
      req.files?.image1?.[0]
        ? await uploadOnCloudinary(
            req.files.image1[0].path
          )
        : ""

    const image2 =
      req.files?.image2?.[0]
        ? await uploadOnCloudinary(
            req.files.image2[0].path
          )
        : ""

    const image3 =
      req.files?.image3?.[0]
        ? await uploadOnCloudinary(
            req.files.image3[0].path
          )
        : ""

    const image4 =
      req.files?.image4?.[0]
        ? await uploadOnCloudinary(
            req.files.image4[0].path
          )
        : ""

    if (!image1) {
      return res.status(400).json({
        success: false,
        message: "Image1 is required"
      })
    }

    const productData = {

      name,

      description,

      price: Number(price),

      category,

      subCategory,

      bestseller:
        bestseller === "true"
          ? true
          : false,

      sizes: sizes ? JSON.parse(sizes) : [],

      image1,
      image2,
      image3,
      image4,

      date: Date.now()

    }
console.log(productData)
    const product =
      await Product.create(productData)

    return res.status(201).json({
      success: true,
      product
    })

  }

  catch (error) {

    console.log("FULL ERROR =>", error)

    return res.status(500).json({
      success: false,
      message: error.message
    })

}

}

export const listProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Product deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};