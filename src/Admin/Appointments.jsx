<<<<<<< HEAD
import React, { useState } from "react";
=======
﻿import React, { useEffect, useState } from "react";
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
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
<<<<<<< HEAD
} from "@mui/icons-material";

import {
=======
  Refresh,
} from "@mui/icons-material";

import {
  Alert,
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

<<<<<<< HEAD
export default function Appointments() {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
=======
import {
  createAppointment,
  deleteAppointment,
  listAppointments,
  updateAppointment,
} from "../api/appointments";

export default function Appointments() {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending",
<<<<<<< HEAD
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
=======
    notes: "",
  });

  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setAppointments([]);
      setError("Please login to view appointments.");
      return;
    }

    try {
      setLoading(true);
      const res = await listAppointments();
      setAppointments(Array.isArray(res?.data?.data) ? res.data.data : []);
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to load appointments.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleOpen = () => {
    setError("");
    setForm({
      patient: "",
      doctor: "",
      date: "",
      time: "",
      status: "Pending",
      notes: "",
    });
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
    setEditIndex(null);
    setOpen(true);
  };

<<<<<<< HEAD
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
=======
  const handleSave = async () => {
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login first.");
      return;
    }

    if (!form.patient || !form.doctor || !form.date || !form.time) {
      setError("Please fill patient, doctor, date and time.");
      return;
    }

    try {
      setLoading(true);
      if (editIndex !== null) {
        const existing = appointments[editIndex];
        const id = existing?._id;
        if (!id) {
          setError("Missing appointment id.");
          return;
        }
        const res = await updateAppointment(id, form);
        const updated = [...appointments];
        updated[editIndex] = res?.data?.data || { ...existing, ...form };
        setAppointments(updated);
      } else {
        const res = await createAppointment(form);
        const created = res?.data?.data || form;
        setAppointments([created, ...appointments]);
      }
      setOpen(false);
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Save failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (i) => {
    setError("");
    setEditIndex(i);
    setForm({
      patient: appointments[i]?.patient || "",
      doctor: appointments[i]?.doctor || "",
      date: appointments[i]?.date || "",
      time: appointments[i]?.time || "",
      status: appointments[i]?.status || "Pending",
      notes: appointments[i]?.notes || "",
    });
    setOpen(true);
  };

  const handleDelete = async (i) => {
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login first.");
      return;
    }

    const id = appointments[i]?._id;
    if (!id) {
      setAppointments(appointments.filter((_, index) => index !== i));
      return;
    }

    try {
      setLoading(true);
      await deleteAppointment(id);
      setAppointments(appointments.filter((_, index) => index !== i));
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Delete failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
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
<<<<<<< HEAD

      {/* Header */}
=======
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Event className="text-blue-600" /> Appointments Management
        </h1>

<<<<<<< HEAD
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
=======
        <div className="flex gap-2">
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={fetchAppointments}
            disabled={loading}
          >
            Refresh
          </Button>

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleOpen}
            sx={{ background: "linear-gradient(to right, #2563eb, #4f46e5)" }}
            disabled={loading}
          >
            Add Appointment
          </Button>
        </div>
      </div>

      {error ? (
        <div className="mb-4">
          <Alert severity="error">{error}</Alert>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((app, i) => (
          <div
            key={app?._id || i}
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
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

<<<<<<< HEAD
            <p className={`font-medium mt-2 flex items-center gap-2 ${getStatusColor(app.status)}`}>
              {getStatusIcon(app.status)} Status: {app.status}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <Button variant="outlined" startIcon={<Edit />} onClick={() => handleEdit(i)}>
=======
            <p
              className={`font-medium mt-2 flex items-center gap-2 ${getStatusColor(
                app.status
              )}`}
            >
              {getStatusIcon(app.status)} Status: {app.status}
            </p>

            <div className="flex justify-between mt-4">
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => handleEdit(i)}
                disabled={loading}
              >
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => handleDelete(i)}
<<<<<<< HEAD
=======
                disabled={loading}
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

<<<<<<< HEAD
      {/* Dialog */}
=======
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editIndex !== null ? "Edit Appointment" : "Add Appointment"}
        </DialogTitle>

        <DialogContent dividers>
          <div className="flex flex-col gap-4 py-3">
<<<<<<< HEAD

=======
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
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

<<<<<<< HEAD
            {/* Status Dropdown */}
=======
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
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

<<<<<<< HEAD
=======
            <TextField
              label="Notes (optional)"
              fullWidth
              multiline
              minRows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
          </div>
        </DialogContent>

        <DialogActions>
<<<<<<< HEAD
          <Button onClick={() => setOpen(false)}>Cancel</Button>
=======
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(to right, #2563eb, #4f46e5)" }}
            onClick={handleSave}
<<<<<<< HEAD
          >
            Save
=======
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
