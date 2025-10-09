import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connect.js"; 
import authRoutes from "./routers/authRoutes.js"
import categoryRoutes from "./routers/categoryRoutes.js";
import auctionRoutes from "./routers/auctionRoutes.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello MERN backend 🚀");
});

app.use("/api/auth",authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auctions", auctionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
