import Order from "../model/orderModel.js";
import User from "../model/userModel.js";
import Razorpay from "razorpay";
import crypto from "crypto";

// ==========================================
// Razorpay Instance
// ==========================================

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ==========================================
// CASH ON DELIVERY
// ==========================================

export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address, paymentMethod } = req.body;

    const order = await Order.create({
      userId: req.userId,
      items,
      amount,
      address,
      paymentMethod,
      payment: false,
      status: "Order Placed",
      date: Date.now(),
    });

    await User.findByIdAndUpdate(req.userId, {
      cartData: {},
    });

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// RAZORPAY ORDER
// ==========================================

export const placeOrderRazorpay = async (req, res) => {
  try {
    const { items, amount, address } = req.body;

    const order = await Order.create({
      userId: req.userId,
      items,
      amount,
      address,
      paymentMethod: "Razorpay",
      payment: false,
      status: "Pending",
      date: Date.now(),
    });

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY || "INR",
      receipt: order._id.toString(),
    };
console.log("Order Data:", {
  amount,
  options,
});
    const razorpayOrder = await razorpayInstance.orders.create(options);
console.log("Razorpay Order:", razorpayOrder);

    res.status(200).json({
      success: true,
      order: razorpayOrder,
      orderId: order._id,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// VERIFY PAYMENT
// ==========================================

export const verifyRazorpay = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId,
    } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment Verification Failed",
      });
    }

    await Order.findByIdAndUpdate(orderId, {
      payment: true,
      status: "Order Placed",
    });

    const order = await Order.findById(orderId);

    if (order) {
      await User.findByIdAndUpdate(order.userId, {
        cartData: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment Successful",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// USER ORDERS
// ==========================================

export const userOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.userId,
    }).sort({ date: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// ADMIN - LIST ALL ORDERS
// ==========================================

export const listOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("userId", "name email")
      .sort({ date: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// UPDATE STATUS
// ==========================================

export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await Order.findByIdAndUpdate(orderId, {
      status,
    });

    res.json({
      success: true,
      message: "Order Status Updated",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};