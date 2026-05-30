const Billing = require("../models/Billing");

// ✅ GET ALL BILLS
const getBillings = async (req, res) => {
  try {
    const billings = await Billing.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: billings.length, data: billings });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ GET SINGLE BILL
const getBilling = async (req, res) => {
  try {
    const billing = await Billing.findById(req.params.id);
    if (!billing) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json({ success: true, data: billing });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ ADD BILL
const addBilling = async (req, res) => {
  try {
    const billing = await Billing.create(req.body);
    res.status(201).json({ success: true, message: "Bill created", data: billing });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ UPDATE BILL
const updateBilling = async (req, res) => {
  try {
    const billing = await Billing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!billing) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json({ success: true, message: "Bill updated", data: billing });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ DELETE BILL
const deleteBilling = async (req, res) => {
  try {
    const billing = await Billing.findByIdAndDelete(req.params.id);
    if (!billing) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json({ success: true, message: "Bill deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ GET BILLING SUMMARY (total revenue, paid, unpaid)
const getBillingSummary = async (req, res) => {
  try {
    const all = await Billing.find();
    const total = all.reduce((sum, b) => sum + b.amount, 0);
    const paid = all.filter((b) => b.status === "Paid").reduce((sum, b) => sum + b.amount, 0);
    const unpaid = all.filter((b) => b.status === "Unpaid").reduce((sum, b) => sum + b.amount, 0);

    res.status(200).json({
      success: true,
      summary: { totalRevenue: total, paid, unpaid, totalBills: all.length },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getBillings, getBilling, addBilling, updateBilling, deleteBilling, getBillingSummary };
