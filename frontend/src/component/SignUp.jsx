import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import { signup } from "../api/auth";

const Field = ({ icon, label, ...props }) => (
  <Box className="flex items-start gap-2">
    <Box className="pt-4 text-white">{icon}</Box>
    <Box className="flex-1">
      <Typography variant="body2" sx={{ mb: 0.75, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
        {label}
      </Typography>
      <TextField {...props} fullWidth variant="outlined" />
    </Box>
  </Box>
);

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields!");
      return;
    }

    try {
      setError("");
      await signup(form);
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
      }}
    >
      <div className="backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 rounded-3xl p-10 w-full max-w-md transform hover:scale-105 transition-all duration-500">
        <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <Alert severity="error">{error}</Alert>}

          <Field
            icon={<AccountCircle />}
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{
              backgroundColor: "rgba(255,255,255,0.92)",
              borderRadius: 1,
            }}
            InputProps={{
              sx: {
                height: 56,
              },
            }}
          />

          <Field
            icon={<Email />}
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            sx={{
              backgroundColor: "rgba(255,255,255,0.92)",
              borderRadius: 1,
            }}
            InputProps={{
              sx: {
                height: 56,
              },
            }}
          />

          <Field
            icon={<Lock />}
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            sx={{
              backgroundColor: "rgba(255,255,255,0.92)",
              borderRadius: 1,
            }}
            InputProps={{
              sx: {
                height: 56,
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              paddingY: "9px",
              background: "linear-gradient(135deg, #00a8ff, #0072ff)",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
