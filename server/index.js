require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

// Middleware (for JSON)
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGODB_URL;

if (!MONGODB_URI) {
  console.error("Error: MongoDB connection string not found in .env file");
  console.error("Please add MONGODB_URI, MONGO_URL, or MONGODB_URL to your .env file");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  });

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Protected route example
const authenticate = require("./middleware/auth");
app.get("/api/profile", authenticate, (req, res) => {
  res.json({
    success: true,
    message: "Profile accessed successfully",
    user: req.user,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
  console.log(`📝 Auth routes available at http://localhost:${PORT}/api/auth`);
});
