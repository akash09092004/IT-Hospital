import React, { useEffect, useState } from "react";
import { Add, Delete, Edit, Work, Phone, Email, People } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { createStaff, deleteStaff, listStaff, updateStaff } from "../api/staff";

const emptyForm = {
  name: "",
  role: "",
  phone: "",
  email: "",
  department: "",
  shift: "Morning",
};

const Field = ({ label, ...props }) => (
  <Box>
    <Typography variant="body2" sx={{ mb: 0.75, color: "text.secondary", fontWeight: 600 }}>
      {label}
    </Typography>
    <TextField {...props} fullWidth variant="outlined" />
  </Box>
);

export default function Staff() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const clearAuthAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const fetchStaff = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await listStaff();
      setStaffList(Array.isArray(res?.data?.data) ? res.data.data : []);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to load staff.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleOpen = (staff = null) => {
    setError("");
    if (staff) {
      setSelectedId(staff._id);
      setForm({
        name: staff.name || "",
        role: staff.role || "",
        phone: staff.phone || "",
        email: staff.email || "",
        department: staff.department || "",
        shift: staff.shift || "Morning",
      });
    } else {
      setSelectedId(null);
      setForm(emptyForm);
    }
    setOpen(true);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.role || !form.phone || !form.email) {
      setError("Please fill name, role, phone and email.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = { ...form, email: form.email.trim().toLowerCase() };
      const res = selectedId ? await updateStaff(selectedId, payload) : await createStaff(payload);

      const savedStaff = res?.data?.data;
      if (savedStaff) {
        setStaffList((prev) =>
          selectedId ? prev.map((item) => (item._id === selectedId ? savedStaff : item)) : [savedStaff, ...prev]
        );
      } else {
        fetchStaff();
      }

      setOpen(false);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to save staff.");
    } finally {
      setLoading(false);
    }
  };

  const deleteStaffById = async (id) => {
    try {
      setLoading(true);
      setError("");
      await deleteStaff(id);
      setStaffList((prev) => prev.filter((staff) => staff._id !== id));
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to delete staff.");
    } finally {
      setLoading(false);
    }
  };

  const filteredStaff = staffList.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <People className="text-purple-600" /> Staff Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpen()}
          sx={{ background: "linear-gradient(to right, #4f46e5, #9333ea)", borderRadius: "10px" }}
          disabled={loading}
        >
          Add Staff
        </Button>
      </div>

      {error ? <Alert severity="error" className="mb-4">{error}</Alert> : null}

      <div className="mb-6">
        <TextField label="Search Staff" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStaff.map((staff) => (
          <div
            key={staff._id}
            className="p-5 bg-white rounded-xl shadow-2xl border transform hover:scale-[1.02] transition-all duration-300"
            style={{ boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">{staff.name}</h2>

            <p className="flex items-center gap-2 text-gray-700"><Work /> {staff.role}</p>
            <p className="flex items-center gap-2 text-gray-700 mt-1"><Phone /> {staff.phone}</p>
            <p className="flex items-center gap-2 text-gray-700 mt-1"><Email /> {staff.email}</p>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outlined" startIcon={<Edit />} onClick={() => handleOpen(staff)} sx={{ borderRadius: "10px" }} disabled={loading}>
                Edit
              </Button>
              <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => deleteStaffById(staff._id)} sx={{ borderRadius: "10px" }} disabled={loading}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{selectedId ? "Edit Staff" : "Add Staff"}</DialogTitle>

        <DialogContent sx={{ pt: 1, pb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Field
              label="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <Field
              label="Role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />

            <Field
              label="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <Field
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <Field
              label="Department"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
            />

            <Field
              label="Shift"
              value={form.shift}
              onChange={(e) => setForm({ ...form, shift: e.target.value })}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(to right, #4f46e5, #9333ea)", borderRadius: "10px" }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Staff"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
