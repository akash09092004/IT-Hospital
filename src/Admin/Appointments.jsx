import React, { useEffect, useState } from "react";
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
  Refresh,
} from "@mui/icons-material";

import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

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

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending",
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
    setEditIndex(null);
    setOpen(true);
  };

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Event className="text-blue-600" /> Appointments Management
        </h1>

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
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => handleDelete(i)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

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

            <TextField
              label="Notes (optional)"
              fullWidth
              multiline
              minRows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(to right, #2563eb, #4f46e5)" }}
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
