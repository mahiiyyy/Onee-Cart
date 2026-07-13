import User from "../model/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;

    const userData = await User.findById(req.userId);

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(201).json({
      success: true,
      message: "Added to cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "addToCart error",
    });
  }
};

export const UpdateCart = async (req, res) => {
  try {
    const { itemId, size, quantity } = req.body;

    const userData = await User.findById(req.userId);

    let cartData = userData.cartData;

    cartData[itemId][size] = quantity;

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(201).json({
      success: true,
      message: "Cart Updated",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "UpdateCart Error",
    });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);

    let cartData = userData.cartData;

    return res.status(200).json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "getUserCart Error",
    });
  }
};