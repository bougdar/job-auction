import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connect.js"; 
import authRoutes from "./routers/authRoutes.js"
import categoryRoutes from "./routers/categoryRoutes.js";
import auctionRoutes from "./routers/auctionRoutes.js"
import userRoute from "./routers/userRoutes.js"
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.set("io", io);
connectDB();

app.get("/", (req, res) => {
  res.send("Hello MERN backend 🚀");
});

app.use("/api/auth",authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auctions", auctionRoutes);
app.use('/api/users', userRoute);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
