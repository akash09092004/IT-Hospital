import React from "react";
import {
  Switch,
  TextField,
  Button,
  Slider,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Notifications,
  VolumeUp,
  DeleteForever,
  CameraAlt,
} from "@mui/icons-material";

export default function Settings() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#1e1e2f] to-[#111119] flex justify-center">
      <div
        className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20
        transform transition-all duration-300 hover:scale-[1.01] hover:shadow-[0px_0px_40px_5px_rgba(144,202,249,0.4)]"
      >
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide drop-shadow-lg">
          ⚙️ Settings Panel
        </h1>

        {/* Profile Section */}
        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">Profile</h2>

          <div className="flex items-center gap-6 mb-6">
            <Avatar
              src="/user.png"
              sx={{ width: 70, height: 70, border: "3px solid #8b5cf6" }}
            />
            <IconButton
              sx={{
                color: "white",
                background: "#8b5cf6",
                "&:hover": { background: "#7c3aed" },
              }}
            >
              <CameraAlt />
            </IconButton>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <TextField fullWidth label="Full Name" variant="outlined" />
            <TextField fullWidth label="Email" variant="outlined" />
          </div>
        </div>

        {/* Theme Settings */}
        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">
            Theme Preferences
          </h2>

          <div className="flex items-center justify-between text-white">
            <p className="text-lg flex items-center gap-2">
              <DarkMode /> Dark Mode
            </p>
            <Switch color="primary" />
          </div>

          <div className="flex items-center justify-between mt-5 text-white">
            <p className="text-lg flex items-center gap-2">
              <LightMode /> Light Mode
            </p>
            <Switch color="warning" />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">
            Notifications
          </h2>

          <div className="flex items-center justify-between text-white mb-5">
            <p className="text-lg flex items-center gap-2">
              <Notifications /> Enable Alerts
            </p>
            <Switch color="success" />
          </div>

          <div className="flex items-center gap-3 text-white">
            <VolumeUp />
            <Slider defaultValue={50} aria-label="Volume" />
          </div>
        </div>

        {/* Password Change */}
        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">
            Change Password
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <TextField
              type="password"
              fullWidth
              label="Current Password"
              variant="outlined"
            />
            <TextField
              type="password"
              fullWidth
              label="New Password"
              variant="outlined"
            />
            <TextField
              type="password"
              fullWidth
              label="Confirm New Password"
              variant="outlined"
            />
          </div>

          <Button
            className="mt-6"
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(90deg, #4f46e5, #9333ea)",
              fontWeight: "bold",
              borderRadius: "12px",
              py: 1.4,
              mt: 3,
            }}
          >
            Update Password
          </Button>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-500/10 p-6 rounded-xl shadow-lg border border-red-500">
          <h2 className="text-xl font-semibold text-red-400 mb-5">
            Danger Zone
          </h2>

          <p className="text-red-300 mb-3">
            Once deleted, your account cannot be recovered.
          </p>

          <Button
            variant="contained"
            startIcon={<DeleteForever />}
            sx={{
              background: "red",
              color: "white",
              fontWeight: "bold",
              "&:hover": { background: "#b91c1c" },
            }}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
