const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require ("dns");

dns.setServers(["1.1.1.1","8.8.8.8"])


const connectDB = require("./config/db");

// Environment variables load karo
dotenv.config();

// MongoDB connect karo
connectDB();

const app = express();

// ===== MIDDLEWARE =====
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== ROUTES =====
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/staff", require("./routes/staffRoutes"));
app.use("/api/billing", require("./routes/billingRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// ===== HOME ROUTE =====
app.get("/", (req, res) => {
  res.json({
    message: "🏥 Hospital Management System API is running!",
    version: "1.0.0",
    routes: {
      auth: "/api/auth",
      doctors: "/api/doctors",
      patients: "/api/patients",
      appointments: "/api/appointments",
      staff: "/api/staff",
      billing: "/api/billing",
      contact: "/api/contact",
    },
  });
});

// ===== 404 HANDLER =====
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
