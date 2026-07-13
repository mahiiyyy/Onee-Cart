import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoutes.js";
import aiRouter from "./routes/aiRoute.js";
dotenv.config();


const app = express();
const port = process.env.PORT || 6000;


app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:["https://onee-cart-frontend.onrender.com" ,
     "https://onee-cart-admin.onrender.com"],
  credentials:true
}))

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/ai", aiRouter);

app.listen(port,()=>{
  console.log("hello from server")
  connectDb();
  
})
