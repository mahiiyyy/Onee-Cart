import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import genToken, { genToken1 } from "../config/token.js";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Enter valid Email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Enter strong Password",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = await genToken(user._id);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);

  } catch (error) {
    console.log("registration error", error);

    return res.status(500).json({
      message: `registration error ${error}`,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User is not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    const token = await genToken(user._id);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ user });

  } catch (error) {
    console.log("login error", error);

    return res.status(500).json({
      message: `login error ${error}`,
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.userToken;

    if (!token) {
      return res.status(401).json({
        message: "No token found",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(
      decoded.userId
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);

  } catch (error) {
    console.log("getCurrentUser error", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("userToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });

  } catch (error) {
    console.log("logout error", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    const token = await genToken(user._id);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);

  } catch (error) {
    console.log("googleLogin error", error);

    return res.status(500).json({
      message: `googleLogin error ${error}`,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = await genToken1(email);

      res.cookie("adminToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        token,
      });
    }

    return res.status(400).json({
      message: "Invalid credentials",
    });

  } catch (error) {
    console.log("AdminLogin error", error);

    return res.status(500).json({
      message: `AdminLogin error: ${error.message}`,
    });
  }
};
