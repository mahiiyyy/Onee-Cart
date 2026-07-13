import userModel from "../model/userModel.js";

// ==========================================
// CURRENT USER
// ==========================================
export const getCurrentUser = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.userId)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// ADMIN DETAILS
// ==========================================
export const getAdmin = async (req, res) => {
  try {
    const adminEmail = req.admin?.email;

    if (!adminEmail) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      success: true,
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// LIST ALL USERS (ADMIN)
// ==========================================
export const listUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};