const express = require("express");
const router = express.Router();
const {
  getDoctors,
  getDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");
const { protect } = require("../middleware/authMiddleware");

// Public - sab log dekh sakte hain
router.get("/", getDoctors);            // GET /api/doctors
router.get("/:id", getDoctor);          // GET /api/doctors/:id

// Admin only
router.post("/", protect, addDoctor);            // POST /api/doctors
router.put("/:id", protect, updateDoctor);       // PUT /api/doctors/:id
router.delete("/:id", protect, deleteDoctor);    // DELETE /api/doctors/:id

module.exports = router;

