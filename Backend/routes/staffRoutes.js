const express = require("express");
const router = express.Router();
const {
  getStaff,
  getStaffById,
  addStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getStaff);                           // GET /api/staff
router.get("/:id", protect, getStaffById);                    // GET /api/staff/:id
router.post("/", protect, addStaff);               // POST /api/staff
router.put("/:id", protect, updateStaff);          // PUT /api/staff/:id
router.delete("/:id", protect, deleteStaff);       // DELETE /api/staff/:id

module.exports = router;

