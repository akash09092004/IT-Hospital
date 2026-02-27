import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const Navigate=useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!form.name || !form.email || !form.password) {
            alert("Please fill all fields!");
            return;
        }

        // Save to LocalStorage with correct key
        localStorage.setItem("hospitalUser", JSON.stringify(form));

        alert("Signup Successfully!");
        Navigate('/login')

    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
            }}

        >
            {/* 3D GLASS CARD */}
            <div className="backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 rounded-3xl p-10 w-full max-w-md transform hover:scale-105 transition-all duration-500">

                <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">
                    Create Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="flex items-center gap-2">
                        <AccountCircle className="text-white" />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Full Name"
                            name="name"
                            onChange={handleChange}
                            InputProps={{ className: "text-white" }}
                            InputLabelProps={{ className: "text-white" }}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Email className="text-white" />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            InputProps={{ className: "text-white" }}
                            InputLabelProps={{ className: "text-white" }}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Lock className="text-white" />
                        <TextField
                            fullWidth
                            type="password"
                            variant="outlined"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            InputProps={{ className: "text-white" }}
                            InputLabelProps={{ className: "text-white" }}
                        />
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            paddingY: "10px",
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
