import React, { useState } from "react";
import {
  Add,
  Edit,
  Delete,
  Event,
  Person,
  LocalHospital,
  AccessTime,
  Pending,
  Done,
  Cancel,
} from "@mui/icons-material";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

export default function Appointments() {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const [appointments, setAppointments] = useState([
    {
      patient: "Rahul Kumar",
      doctor: "Dr. Anuj Verma",
      date: "2025-02-10",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      patient: "Priya Sharma",
      doctor: "Dr. Ritu Mehta",
      date: "2025-02-11",
      time: "12:00 PM",
      status: "Pending",
    },
  ]);

  const handleOpen = () => {
    setForm({ patient: "", doctor: "", date: "", time: "", status: "Pending" });
    setEditIndex(null);
    setOpen(true);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...appointments];
      updated[editIndex] = form;
      setAppointments(updated);
    } else {
      setAppointments([...appointments, form]);
    }
    setOpen(false);
  };

  const handleEdit = (i) => {
    setEditIndex(i);
    setForm(appointments[i]);
    setOpen(true);
  };

  const handleDelete = (i) => {
    setAppointments(appointments.filter((_, index) => index !== i));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Confirmed":
        return <Done fontSize="small" />;
      case "Cancelled":
        return <Cancel fontSize="small" />;
      default:
        return <Pending fontSize="small" />;
    }
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Event className="text-blue-600" /> Appointments Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpen}
          sx={{ background: "linear-gradient(to right, #2563eb, #4f46e5)" }}
        >
          Add Appointment
        </Button>
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((app, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-200"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
              <Person /> {app.patient}
            </h2>

            <p className="text-gray-700 flex items-center gap-2">
              <LocalHospital fontSize="small" /> Doctor: {app.doctor}
            </p>

            <p className="text-gray-700 flex items-center gap-2">
              <Event fontSize="small" /> Date: {app.date}
            </p>

            <p className="text-gray-700 flex items-center gap-2">
              <AccessTime fontSize="small" /> Time: {app.time}
            </p>

            <p className={`font-medium mt-2 flex items-center gap-2 ${getStatusColor(app.status)}`}>
              {getStatusIcon(app.status)} Status: {app.status}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <Button variant="outlined" startIcon={<Edit />} onClick={() => handleEdit(i)}>
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => handleDelete(i)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editIndex !== null ? "Edit Appointment" : "Add Appointment"}
        </DialogTitle>

        <DialogContent dividers>
          <div className="flex flex-col gap-4 py-3">

            <TextField
              label="Patient Name"
              fullWidth
              value={form.patient}
              onChange={(e) => setForm({ ...form, patient: e.target.value })}
            />

            <TextField
              label="Doctor Name"
              fullWidth
              value={form.doctor}
              onChange={(e) => setForm({ ...form, doctor: e.target.value })}
            />

            <TextField
              type="date"
              label="Date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <TextField
              type="time"
              label="Time"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />

            {/* Status Dropdown */}
            <TextField
              select
              label="Status"
              fullWidth
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Confirmed">Confirmed</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </TextField>

          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(to right, #2563eb, #4f46e5)" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
