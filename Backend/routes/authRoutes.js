const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  getDashboard,
  contactRegister,
  getProfile,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Public Routes
router.post("/signup", signup);           // POST /api/auth/signup
router.post("/signin", signin);           // POST /api/auth/signin
router.post("/register", contactRegister); // POST /api/auth/register (Contact form)

// Protected Routes (JWT required)
router.get("/dashboard", protect, getDashboard);  // GET /api/auth/dashboard
router.get("/profile", protect, getProfile);       // GET /api/auth/profile

module.exports = router;
