const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", createContact);                                        // POST /api/contact  (Public)
router.get("/", protect, getContacts);                       // GET /api/contact   (Admin)
router.put("/:id", protect, updateContactStatus);            // PUT /api/contact/:id
router.delete("/:id", protect, deleteContact);               // DELETE /api/contact/:id

module.exports = router;

