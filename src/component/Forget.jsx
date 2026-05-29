import React from "react";
import { TextField, Button } from "@mui/material";

export default function Forget() {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
            }}

        >
            <div className="backdrop-blur-xl bg-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md border border-white/30">
                <h2 className="text-3xl font-bold text-white text-center mb-4 drop-shadow-lg">
                    Forgot Password?
                </h2>

                <p className="text-blue-100 text-center mb-6">
                    Enter your registered email and we will send you a reset link.
                </p>

                <form className="flex flex-col gap-5">
                    <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        className="bg-white rounded-md"
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="!py-3 !text-lg !font-semibold"
                    >
                        Send Reset Link
                    </Button>

                    <p className="text-white text-center mt-3">
                        Remember your password?{" "}
                        <a href="/login" className="text-blue-300 underline">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
