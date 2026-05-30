const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/", createContact);                                        // POST /api/contact  (Public)
router.get("/", protect, adminOnly, getContacts);                       // GET /api/contact   (Admin)
router.put("/:id", protect, adminOnly, updateContactStatus);            // PUT /api/contact/:id
router.delete("/:id", protect, adminOnly, deleteContact);               // DELETE /api/contact/:id

module.exports = router;
