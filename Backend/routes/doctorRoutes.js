const express = require("express");
const router = express.Router();
const {
  getDoctors,
  getDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Public - sab log dekh sakte hain
router.get("/", getDoctors);            // GET /api/doctors
router.get("/:id", getDoctor);          // GET /api/doctors/:id

// Admin only
router.post("/", protect, adminOnly, addDoctor);            // POST /api/doctors
router.put("/:id", protect, adminOnly, updateDoctor);       // PUT /api/doctors/:id
router.delete("/:id", protect, adminOnly, deleteDoctor);    // DELETE /api/doctors/:id

module.exports = router;
