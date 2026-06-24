import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  IconButton,
  Slider,
  Switch,
  TextField,
} from "@mui/material";
import {
  CameraAlt,
  DeleteForever,
  DarkMode,
  LightMode,
  Notifications,
  VolumeUp,
} from "@mui/icons-material";
import { getProfile } from "../api/auth";

const STORAGE_KEYS = {
  theme: "settings.theme",
  alerts: "settings.alerts",
  volume: "settings.volume",
  profile: "settings.profile",
};

const defaultProfile = {
  name: "",
  email: "",
};

const clampVolume = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export default function Settings() {
  const [profile, setProfile] = useState(defaultProfile);
  const [originalProfile, setOriginalProfile] = useState(defaultProfile);
  const [darkMode, setDarkMode] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [volume, setVolume] = useState(50);
  const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" });
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const themeLabel = useMemo(() => (darkMode ? "Dark" : "Light"), [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    const savedAlerts = localStorage.getItem(STORAGE_KEYS.alerts);
    const savedVolume = localStorage.getItem(STORAGE_KEYS.volume);
    const savedProfile = localStorage.getItem(STORAGE_KEYS.profile);
    const currentUser = localStorage.getItem("currentUser");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
    if (savedAlerts !== null) {
      setAlertsEnabled(savedAlerts === "true");
    }
    if (savedVolume !== null) {
      setVolume(clampVolume(savedVolume));
    }

    const localProfile = savedProfile
      ? JSON.parse(savedProfile)
      : currentUser
      ? JSON.parse(currentUser)
      : null;

    if (localProfile) {
      const nextProfile = {
        name: localProfile.name || "",
        email: localProfile.email || "",
      };
      setProfile(nextProfile);
      setOriginalProfile(nextProfile);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = darkMode ? "dark" : "light";
    root.style.colorScheme = darkMode ? "dark" : "light";
    localStorage.setItem(STORAGE_KEYS.theme, darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.alerts, String(alertsEnabled));
  }, [alertsEnabled]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.volume, String(volume));
  }, [volume]);

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await getProfile();
        const apiUser = res?.user;
        if (!apiUser) return;

        const nextProfile = {
          name: apiUser.name || "",
          email: apiUser.email || "",
        };
        setProfile(nextProfile);
        setOriginalProfile(nextProfile);
        localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(nextProfile));

        const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ ...currentUser, ...nextProfile, role: apiUser.role })
        );
      } catch {
        // Profile prefill is best-effort; page should still work offline.
      }
    };

    loadProfile();
  }, []);

  const setFeedback = (nextMessage = "", nextError = "") => {
    setMessage(nextMessage);
    setError(nextError);
  };

  const handleSaveProfile = () => {
    if (!profile.name.trim() || !profile.email.trim()) {
      setFeedback("", "Please fill name and email.");
      return;
    }

    setSavingProfile(true);
    try {
      const nextProfile = {
        name: profile.name.trim(),
        email: profile.email.trim().toLowerCase(),
      };
      setProfile(nextProfile);
      setOriginalProfile(nextProfile);
      localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(nextProfile));

      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...currentUser, ...nextProfile })
      );

      setFeedback("Profile saved successfully.", "");
    } finally {
      setSavingProfile(false);
    }
  };

  const handleResetProfile = () => {
    setProfile(originalProfile);
    setFeedback("Profile changes reverted.", "");
  };

  const handleUpdatePassword = () => {
    if (!passwords.current || !passwords.next || !passwords.confirm) {
      setFeedback("", "Please fill all password fields.");
      return;
    }

    if (passwords.next.length < 6) {
      setFeedback("", "New password must be at least 6 characters.");
      return;
    }

    if (passwords.next !== passwords.confirm) {
      setFeedback("", "New password and confirmation do not match.");
      return;
    }

    setSavingPassword(true);
    try {
      setPasswords({ current: "", next: "", confirm: "" });
      setFeedback("Password updated locally. Backend password update route is not added yet.", "");
    } finally {
      setSavingPassword(false);
    }
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "This will clear your local login session. Continue?"
    );

    if (!confirmDelete) return;

    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem(STORAGE_KEYS.profile);
    localStorage.removeItem(STORAGE_KEYS.theme);
    localStorage.removeItem(STORAGE_KEYS.alerts);
    localStorage.removeItem(STORAGE_KEYS.volume);
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#1e1e2f] to-[#111119] flex justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-[0px_0px_40px_5px_rgba(144,202,249,0.4)]">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide drop-shadow-lg">
          Settings Panel
        </h1>

        {message ? <Alert severity="success" className="mb-6">{message}</Alert> : null}
        {error ? <Alert severity="error" className="mb-6">{error}</Alert> : null}

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={profile.name}
              onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={profile.email}
              onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Button
              variant="contained"
              onClick={handleSaveProfile}
              disabled={savingProfile}
              sx={{ background: "linear-gradient(90deg, #4f46e5, #9333ea)" }}
            >
              {savingProfile ? "Saving..." : "Save Profile"}
            </Button>
            <Button variant="outlined" onClick={handleResetProfile} sx={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              Reset
            </Button>
          </div>
        </div>

        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">Theme Preferences</h2>

          <div className="flex items-center justify-between text-white">
            <p className="text-lg flex items-center gap-2">
              <DarkMode /> Dark Mode
            </p>
            <Switch
              color="primary"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between mt-5 text-white">
            <p className="text-lg flex items-center gap-2">
              <LightMode /> Light Mode
            </p>
            <Switch
              color="warning"
              checked={!darkMode}
              onChange={(e) => setDarkMode(!e.target.checked)}
            />
          </div>

          <p className="text-white/70 mt-4 text-sm">
            Current theme: {themeLabel}
          </p>
        </div>

        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">Notifications</h2>

          <div className="flex items-center justify-between text-white mb-5">
            <p className="text-lg flex items-center gap-2">
              <Notifications /> Enable Alerts
            </p>
            <Switch
              color="success"
              checked={alertsEnabled}
              onChange={(e) => setAlertsEnabled(e.target.checked)}
            />
          </div>

          <div className="flex items-center gap-3 text-white">
            <VolumeUp />
            <Slider
              value={volume}
              onChange={(_, value) => setVolume(Array.isArray(value) ? value[0] : value)}
              aria-label="Volume"
            />
          </div>
        </div>

        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-5">Change Password</h2>

          <div className="grid grid-cols-1 gap-6">
            <TextField
              type="password"
              fullWidth
              label="Current Password"
              variant="outlined"
              value={passwords.current}
              onChange={(e) => setPasswords((prev) => ({ ...prev, current: e.target.value }))}
            />
            <TextField
              type="password"
              fullWidth
              label="New Password"
              variant="outlined"
              value={passwords.next}
              onChange={(e) => setPasswords((prev) => ({ ...prev, next: e.target.value }))}
            />
            <TextField
              type="password"
              fullWidth
              label="Confirm New Password"
              variant="outlined"
              value={passwords.confirm}
              onChange={(e) => setPasswords((prev) => ({ ...prev, confirm: e.target.value }))}
            />
          </div>

          <Button
            className="mt-6"
            variant="contained"
            fullWidth
            onClick={handleUpdatePassword}
            disabled={savingPassword}
            sx={{
              background: "linear-gradient(90deg, #4f46e5, #9333ea)",
              fontWeight: "bold",
              borderRadius: "12px",
              py: 1.4,
              mt: 3,
            }}
          >
            {savingPassword ? "Updating..." : "Update Password"}
          </Button>
          <p className="text-white/70 mt-3 text-sm">
            Password changes are currently stored only as validation feedback. A backend password update API is not yet available.
          </p>
        </div>

        <div className="bg-red-500/10 p-6 rounded-xl shadow-lg border border-red-500">
          <h2 className="text-xl font-semibold text-red-400 mb-5">Danger Zone</h2>

          <p className="text-red-300 mb-3">
            Once deleted, your local session data will be cleared and you will be sent back to login.
          </p>

          <Button
            variant="contained"
            startIcon={<DeleteForever />}
            onClick={handleDeleteAccount}
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
