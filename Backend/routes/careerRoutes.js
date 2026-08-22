const express = require("express");
const router = express.Router();
const {
  getCareerApplications,
  createCareerApplication,
  updateCareerStatus,
  deleteCareerApplication,
} = require("../controllers/careerController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/", createCareerApplication);
router.get("/", protect, adminOnly, getCareerApplications);
router.put("/:id", protect, adminOnly, updateCareerStatus);
router.delete("/:id", protect, adminOnly, deleteCareerApplication);

module.exports = router;
