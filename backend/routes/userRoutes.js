import express from "express";
import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";

import {
  getAdmin,
  getCurrentUser,
  listUsers,
} from "../controller/userController.js";

const userRoutes = express.Router();

// Current Logged In User
userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);

// Admin Details
userRoutes.get("/getadmin", adminAuth, getAdmin);

// List All Users (Admin)
userRoutes.get("/list", adminAuth, listUsers);

export default userRoutes;