import express from "express";
import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";

import {
  placeOrder,
  placeOrderRazorpay,
  verifyRazorpay,
  userOrders,
  listOrders,
  updateStatus,
} from "../controller/orderController.js";

const orderRouter = express.Router();

// =========================================
// USER ROUTES
// =========================================

// Cash On Delivery
orderRouter.post(
  "/place",
  isAuth,
  placeOrder
);

// Razorpay
orderRouter.post(
  "/placeorderbyrazorpay",
  isAuth,
  placeOrderRazorpay
);

// Verify Razorpay
orderRouter.post(
  "/verifyrazorpay",
  isAuth,
  verifyRazorpay
);

// User Orders
orderRouter.post(
  "/userorders",
  isAuth,
  userOrders
);

// =========================================
// ADMIN ROUTES
// =========================================

// All Orders
orderRouter.post(
  "/list",
  adminAuth,
  listOrders
);

// Update Status
orderRouter.post(
  "/status",
  adminAuth,
  updateStatus
);

export default orderRouter;