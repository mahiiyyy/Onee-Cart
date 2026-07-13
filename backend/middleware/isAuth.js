import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;

    if (!token) {
      return res.status(401).json({
        message: "User does not have token",
      });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = verifyToken.userId;

    next();
  } catch (error) {
    console.log("isAuth error:", error);

    return res.status(500).json({
      message: `isAuth error: ${error.message}`,
    });
  }
};

export default isAuth;