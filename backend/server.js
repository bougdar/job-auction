const express = require("express");
const app = express();
const connectDB = require('./config/connect');
require("dotenv").config();


connectDB()

app.get("/", (req, res) => {
  res.send("Hello MERN backend 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
