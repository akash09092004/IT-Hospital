import React, { useEffect, useState } from "react";
import {
  Add,
  Delete,
  Edit,
  LocalHospital,
  Phone,
  Mail,
} from "@mui/icons-material";
import {
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import {
  createDoctor,
  deleteDoctor,
  listDoctors,
  updateDoctor,
} from "../api/doctors";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  specialization: "",
  experience: "",
  qualification: "",
  department: "",
};

export default function Doctors() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);

  const clearAuthAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await listDoctors();
      setDoctors(Array.isArray(res?.data?.data) ? res.data.data : []);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to load doctors.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleOpen = (doctor = null) => {
    setError("");
    if (doctor) {
      setSelectedId(doctor._id);
      setForm({
        name: doctor.name || "",
        email: doctor.email || "",
        phone: doctor.phone || "",
        specialization: doctor.specialization || "",
        experience: doctor.experience || "",
        qualification: doctor.qualification || "",
        department: doctor.department || "",
      });
    } else {
      setSelectedId(null);
      setForm(emptyForm);
    }
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.email || !form.phone || !form.specialization) {
      setError("Please fill name, email, phone and specialization.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        ...form,
        email: form.email.trim().toLowerCase(),
      };

      const res = selectedId
        ? await updateDoctor(selectedId, payload)
        : await createDoctor(payload);

      const savedDoctor = res?.data?.data;
      if (savedDoctor) {
        setDoctors((prev) =>
          selectedId
            ? prev.map((item) => (item._id === selectedId ? savedDoctor : item))
            : [savedDoctor, ...prev]
        );
      } else {
        fetchDoctors();
      }

      setOpen(false);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to save doctor.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError("");
      await deleteDoctor(id);
      setDoctors((prev) => prev.filter((doctor) => doctor._id !== id));
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to delete doctor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <LocalHospital className="text-blue-600" />
          Doctors Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpen()}
          sx={{ background: "linear-gradient(to right, #4f46e5, #9333ea)" }}
          disabled={loading}
        >
          Add Doctor
        </Button>
      </div>

      {error ? <Alert severity="error" className="mb-4">{error}</Alert> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc._id}
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

            {doc.experience ? (
              <p className="mt-1 text-sm text-gray-600">Experience: {doc.experience}</p>
            ) : null}

            <div className="flex justify-between mt-4">
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => handleOpen(doc)}
                disabled={loading}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => handleDelete(doc._id)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{selectedId ? "Edit Doctor" : "Add Doctor"}</DialogTitle>

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
              onChange={(e) => setForm({ ...form, specialization: e.target.value })}
            />

            <TextField
              label="Experience"
              fullWidth
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />

            <TextField
              label="Qualification"
              fullWidth
              value={form.qualification}
              onChange={(e) => setForm({ ...form, qualification: e.target.value })}
            />

            <TextField
              label="Department"
              fullWidth
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(to right, #4f46e5, #9333ea)" }}
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
