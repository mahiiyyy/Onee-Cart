import express from "express";
import {login, registration, logOut, googleLogin, adminLogin, getCurrentUser} from "../controller/authController.js";
const authRoutes = express.Router();


authRoutes.post("/registration",registration)
authRoutes.post("/login" ,login)
authRoutes.get ("/logout" ,logOut)
authRoutes.post ("/googlelogin" ,googleLogin)
authRoutes.post ("/adminLogin" ,adminLogin)
authRoutes.get("/getcurrentuser", getCurrentUser);
export default authRoutes;