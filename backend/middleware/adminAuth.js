import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please login again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.email) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin Token",
      });
    }

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({
        success: false,
        message: "Access Denied",
      });
    }

    req.admin = {
      email: decoded.email,
    };

    next();
  } catch (error) {
    console.log("adminAuth Error:", error);

    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;