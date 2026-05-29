import React, { useState } from "react";
import {
  Add,
  Delete,
  Edit,
  LocalHospital,
  Phone,
  Mail,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function Doctors() {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
  });

  const [doctors, setDoctors] = useState([
    {
      name: "Dr. Amit Sharma",
      email: "amit@example.com",
      phone: "9876543210",
      specialization: "Cardiologist",
    },
    {
      name: "Dr. Neha Verma",
      email: "neha@example.com",
      phone: "9876501234",
      specialization: "Dermatologist",
    },
  ]);

  const handleOpen = () => {
    setForm({ name: "", email: "", phone: "", specialization: "" });
    setEditIndex(null);
    setOpen(true);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...doctors];
      updated[editIndex] = form;
      setDoctors(updated);
    } else {
      setDoctors([...doctors, form]);
    }

    setOpen(false);
  };

  const handleEdit = (index) => {
    setForm(doctors[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    setDoctors(doctors.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <LocalHospital className="text-blue-600" />
          Doctors Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpen}
          sx={{ background: "linear-gradient(to right, #4f46e5, #9333ea)" }}
        >
          Add Doctor
        </Button>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-200"
          >
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              {doc.name}
            </h2>

            <p className="flex items-center gap-2 text-gray-700">
              <Mail fontSize="small" /> {doc.email}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <Phone fontSize="small" /> {doc.phone}
            </p>

            <p className="mt-2 text-sm font-semibold text-purple-700">
              Specialization: {doc.specialization}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => handleEdit(index)}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editIndex !== null ? "Edit Doctor" : "Add Doctor"}
        </DialogTitle>

        <DialogContent dividers>
          <div className="flex flex-col gap-4 py-2">

            <TextField
              label="Full Name"
              fullWidth
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <TextField
              label="Email"
              fullWidth
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <TextField
              label="Phone"
              fullWidth
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <TextField
              label="Specialization"
              fullWidth
              value={form.specialization}
              onChange={(e) =>
                setForm({ ...form, specialization: e.target.value })
              }
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #4f46e5, #9333ea)",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
