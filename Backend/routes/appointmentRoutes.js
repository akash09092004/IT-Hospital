const express = require("express");
const router = express.Router();
const {
  getAppointments,
  getAppointment,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, getAppointments);                          // GET /api/appointments
router.get("/:id", protect, getAppointment);                        // GET /api/appointments/:id
router.post("/", protect, addAppointment);                          // POST /api/appointments
router.put("/:id", protect, adminOnly, updateAppointment);          // PUT /api/appointments/:id
router.delete("/:id", protect, adminOnly, deleteAppointment);       // DELETE /api/appointments/:id

module.exports = router;
