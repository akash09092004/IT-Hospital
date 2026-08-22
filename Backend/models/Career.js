const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    message: { type: String },
    jobTitle: { type: String, required: true },
    resumeName: { type: String },
    resumeType: { type: String },
    resumeData: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Shortlisted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);
