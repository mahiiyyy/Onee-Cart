import express from "express";
import { chatWithAI } from "../controller/aiController.js";

const aiRouter = express.Router();

aiRouter.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "AI Route Working",
  });
});

aiRouter.post("/chat", chatWithAI);

export default aiRouter;