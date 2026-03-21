import React, { useState } from "react";
import {
  Add,
  Edit,
  Delete,
  Person,
  Mail,
  Phone,
  Wc,
  Badge,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function Patients() {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const [patients, setPatients] = useState([
    {
      name: "Rahul Kumar",
      email: "rahul@example.com",
      phone: "9876543211",
      age: "29",
      gender: "Male",
    },
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "9899001123",
      age: "25",
      gender: "Female",
    },
  ]);

  const handleOpen = () => {
    setForm({ name: "", email: "", phone: "", age: "", gender: "" });
    setEditIndex(null);
    setOpen(true);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...patients];
      updated[editIndex] = form;
      setPatients(updated);
    } else {
      setPatients([...patients, form]);
    }
    setOpen(false);
  };

  const handleEdit = (index) => {
    setForm(patients[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    setPatients(patients.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Person className="text-green-600" />
          Patients Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpen}
          sx={{ background: "linear-gradient(to right, #16a34a, #22c55e)" }}
        >
          Add Patient
        </Button>
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((pat, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-200"
          >
            <h2 className="text-xl font-bold text-green-700 mb-2">
              {pat.name}
            </h2>

            <p className="flex items-center gap-2 text-gray-700">
              <Mail fontSize="small" /> {pat.email}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <Phone fontSize="small" /> {pat.phone}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <Badge fontSize="small" /> Age: {pat.age}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <Wc fontSize="small" /> Gender: {pat.gender}
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

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editIndex !== null ? "Edit Patient" : "Add Patient"}
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
              label="Age"
              fullWidth
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />

            <TextField
              label="Gender (Male/Female/Other)"
              fullWidth
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #16a34a, #22c55e)",
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

