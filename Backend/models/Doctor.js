const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String },
    qualification: { type: String },
    department: { type: String },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
