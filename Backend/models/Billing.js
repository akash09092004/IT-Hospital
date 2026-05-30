const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
  {
    patient: { type: String, required: true },
    doctor: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "UPI", "Insurance"],
      default: "Cash",
    },
    status: {
      type: String,
      enum: ["Paid", "Unpaid", "Partial"],
      default: "Unpaid",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Billing", billingSchema);
