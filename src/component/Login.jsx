import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please enter email and password!");
      return;
    }

    // LocalStorage se user data read
    const storedUser = JSON.parse(localStorage.getItem("hospitalUser"));

    // User data exist nahi karta
    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Credential match check
    if (storedUser.email === email && storedUser.password === password) {
      setError("");

      // User login session store:
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(storedUser));

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid email or password!");
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
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded-md"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white rounded-md"
          />

          {/* Forgot Link */}
          <div className="flex justify-end -mt-2">
            <a href="/forget" className="text-blue-200 underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Error Show */}
          {error && (
            <p className="text-red-300 text-center font-medium">{error}</p>
          )}

          {/* Login Button */}
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
