import React, { useEffect, useState } from "react";
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
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import {
  createPatient,
  deletePatient,
  listPatients,
  updatePatient,
} from "../api/patients";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  age: "",
  gender: "Male",
  bloodGroup: "",
  address: "",
  medicalHistory: "",
};

export default function Patients() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);

  const clearAuthAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await listPatients();
      setPatients(Array.isArray(res?.data?.data) ? res.data.data : []);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to load patients.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleOpen = (patient = null) => {
    setError("");
    if (patient) {
      setSelectedId(patient._id);
      setForm({
        name: patient.name || "",
        email: patient.email || "",
        phone: patient.phone || "",
        age: patient.age?.toString?.() || "",
        gender: patient.gender || "Male",
        bloodGroup: patient.bloodGroup || "",
        address: patient.address || "",
        medicalHistory: patient.medicalHistory || "",
      });
    } else {
      setSelectedId(null);
      setForm(emptyForm);
    }
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.email || !form.phone || !form.age || !form.gender) {
      setError("Please fill name, email, phone, age and gender.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        ...form,
        age: Number(form.age),
        email: form.email.trim().toLowerCase(),
      };

      const res = selectedId
        ? await updatePatient(selectedId, payload)
        : await createPatient(payload);

      const savedPatient = res?.data?.data;
      if (savedPatient) {
        setPatients((prev) =>
          selectedId
            ? prev.map((item) => (item._id === selectedId ? savedPatient : item))
            : [savedPatient, ...prev]
        );
      } else {
        fetchPatients();
      }

      setOpen(false);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to save patient.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError("");
      await deletePatient(id);
      setPatients((prev) => prev.filter((patient) => patient._id !== id));
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to delete patient.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Person className="text-green-600" />
          Patients Management
        </h1>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpen()}
          sx={{ background: "linear-gradient(to right, #16a34a, #22c55e)" }}
          disabled={loading}
        >
          Add Patient
        </Button>
      </div>

      {error ? <Alert severity="error" className="mb-4">{error}</Alert> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((pat) => (
          <div
            key={pat._id}
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

            <div className="flex justify-between mt-4">
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => handleOpen(pat)}
                disabled={loading}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => handleDelete(pat._id)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{selectedId ? "Edit Patient" : "Add Patient"}</DialogTitle>

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
              type="number"
              fullWidth
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />

            <TextField
              label="Gender"
              fullWidth
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            />

            <TextField
              label="Blood Group"
              fullWidth
              value={form.bloodGroup}
              onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
            />

            <TextField
              label="Address"
              fullWidth
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />

            <TextField
              label="Medical History"
              fullWidth
              multiline
              minRows={3}
              value={form.medicalHistory}
              onChange={(e) => setForm({ ...form, medicalHistory: e.target.value })}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(to right, #16a34a, #22c55e)" }}
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
