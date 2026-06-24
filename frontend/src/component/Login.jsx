import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Field = ({ label, ...props }) => (
  <Box>
    <Typography variant="body2" sx={{ mb: 0.75, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
      {label}
    </Typography>
    <TextField
      {...props}
      fullWidth
      variant="outlined"
      sx={{
        backgroundColor: "rgba(255,255,255,0.92)",
        borderRadius: 1,
      }}
      InputProps={{
        sx: { height: 56 },
      }}
    />
  </Box>
);

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password!");
      return;
    }

    try {
      setError("");
      const res = await login({ email, password });
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(res.user));
      navigate("/dashboard");
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      setError(err?.response?.data?.message || "Invalid email or password!");
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
      }}
    >
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Login to HospitalCare
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <Field
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Field
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end -mt-2">
            <a href="/forget" className="text-blue-200 underline text-sm">
              Forgot Password?
            </a>
          </div>

          {error && <Alert severity="error">{error}</Alert>}

          <Button
            variant="contained"
            color="primary"
            className="py-3! text-lg! font-semibold!"
            fullWidth
            type="submit"
          >
            Login
          </Button>

          <p className="text-white text-center mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-300 underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
