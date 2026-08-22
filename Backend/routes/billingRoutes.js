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
const { protect } = require("../middleware/authMiddleware");

router.get("/summary", protect, getBillingSummary);   // GET /api/billing/summary
router.get("/", protect, getBillings);                           // GET /api/billing
router.get("/:id", protect, getBilling);                         // GET /api/billing/:id
router.post("/", protect, addBilling);                // POST /api/billing
router.put("/:id", protect, updateBilling);           // PUT /api/billing/:id
router.delete("/:id", protect, deleteBilling);        // DELETE /api/billing/:id

module.exports = router;

