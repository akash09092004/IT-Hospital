const express = require("express");
const router = express.Router();
const {
  getPatients,
  getPatient,
  addPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Sab protected - login karna zaroori
router.get("/", protect, getPatients);                         // GET /api/patients
router.get("/:id", protect, getPatient);                       // GET /api/patients/:id
router.post("/", protect, adminOnly, addPatient);              // POST /api/patients
router.put("/:id", protect, adminOnly, updatePatient);         // PUT /api/patients/:id
router.delete("/:id", protect, adminOnly, deletePatient);      // DELETE /api/patients/:id

module.exports = router;
