const express = require("express");
const router = express.Router();
const {
  getBillings,
  getBilling,
  addBilling,
  updateBilling,
  deleteBilling,
  getBillingSummary,
} = require("../controllers/billingController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/summary", protect, adminOnly, getBillingSummary);   // GET /api/billing/summary
router.get("/", protect, getBillings);                           // GET /api/billing
router.get("/:id", protect, getBilling);                         // GET /api/billing/:id
router.post("/", protect, adminOnly, addBilling);                // POST /api/billing
router.put("/:id", protect, adminOnly, updateBilling);           // PUT /api/billing/:id
router.delete("/:id", protect, adminOnly, deleteBilling);        // DELETE /api/billing/:id

module.exports = router;
