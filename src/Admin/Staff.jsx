import React, { useState } from "react";
import {
  Add,
  Delete,
  Edit,
  Work,
  Phone,
  Email,
  People,
} from "@mui/icons-material";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

export default function Staff() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
  });

  const [staffList, setStaffList] = useState([
    { id: 1, name: "Rohan Sharma", role: "Nurse", phone: "9876224210", email: "rohan@example.com" },
    { id: 2, name: "Priya Verma", role: "Receptionist", phone: "9876501234", email: "priya@example.com" },
    { id: 3, name: "Rohit", role: "Nurse", phone: "9876543210", email: "rohit@example.com" },
    { id: 4, name: "Priti", role: "nurse", phone: "9876505634", email: "priti@example.com" },
  ]);

  const handleSubmit = () => {
    if (form.name && form.role && form.phone) {
      setStaffList([...staffList, { ...form, id: Date.now() }]);
      setOpen(false);
      setForm({ name: "", role: "", phone: "", email: "" });
    }
  };

  const deleteStaff = (id) => {
    setStaffList(staffList.filter((s) => s.id !== id));
  };

  const filteredStaff = staffList.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">

      {/* ---------- Header ---------- */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <People className="text-purple-600" /> Staff Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
          sx={{
            background: "linear-gradient(to right, #4f46e5, #9333ea)",
            borderRadius: "10px",
          }}
        >
          Add Staff
        </Button>
      </div>

      {/* ---------- Search ---------- */}
      <div className="mb-6">
        <TextField
          label="Search Staff"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ---------- Staff Cards (3D Style) ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredStaff.map((staff) => (
          <div
            key={staff.id}
            className="p-5 bg-white rounded-xl shadow-2xl border transform hover:scale-[1.02] transition-all duration-300"
            style={{ boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              {staff.name}
            </h2>

            <p className="flex items-center gap-2 text-gray-700">
              <Work /> {staff.role}
            </p>

            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Phone /> {staff.phone}
            </p>

            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Email /> {staff.email}
            </p>

            <div className="flex justify-end gap-3 mt-4">
              <Button
                variant="outlined"
                startIcon={<Edit />}
                sx={{ borderRadius: "10px" }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                startIcon={<Delete />}
                onClick={() => deleteStaff(staff.id)}
                sx={{ borderRadius: "10px" }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- Add Staff Dialog ---------- */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Staff</DialogTitle>

        <DialogContent className="flex flex-col space-y-4 mt-2">

          <TextField
            label="Full Name"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            label="Role"
            fullWidth
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />

          <TextField
            label="Phone Number"
            fullWidth
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <TextField
            label="Email"
            fullWidth
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #4f46e5, #9333ea)",
              borderRadius: "10px",
            }}
            onClick={handleSubmit}
          >
            Add Staff
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
