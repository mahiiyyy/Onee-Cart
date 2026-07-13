 import express from "express";
import {
  addToCart,
  UpdateCart,
  getUserCart,
} from "../controller/cartController.js";
import isAuth from "../middleware/isAuth.js";

const cartRouter = express.Router();

cartRouter.post("/add", isAuth, addToCart);

cartRouter.post("/update", isAuth, UpdateCart);

cartRouter.post("/get", isAuth, getUserCart);

export default cartRouter;