import React, { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Alert, Button } from "@mui/material";
import { deleteContact, listContacts, updateContactStatus } from "../api/contact";

export default function Query() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const clearAuthAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await listContacts();
      setData(Array.isArray(res?.data?.data) ? res.data.data : []);
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to load queries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError("");
      await deleteContact(id);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to delete query.");
    } finally {
      setLoading(false);
    }
  };

  const handleResolve = async (id, status) => {
    try {
      setLoading(true);
      setError("");
      const res = await updateContactStatus(id, status);
      const updated = res?.data?.data;
      if (updated) {
        setData((prev) => prev.map((item) => (item._id === id ? updated : item)));
      }
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        clearAuthAndRedirect();
        return;
      }
      setError(err?.response?.data?.message || "Failed to update status.");
    } finally {
      setLoading(false);
    }
  };

  const filtered = data.filter(
    (item) =>
      (item.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (item.email || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold flex items-center gap-3">
          📬 User Queries
        </h1>

        <button
          onClick={fetchData}
          className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg shadow-purple-500/40 transition"
          disabled={loading}
        >
          <RefreshIcon />
        </button>
      </div>

      {error ? <Alert severity="error" className="mb-6">{error}</Alert> : null}

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl text-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 mb-10 focus:ring-2 focus:ring-purple-500 outline-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <div
            key={item._id}
            className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-xl hover:scale-[1.02] hover:shadow-purple-900/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <PersonIcon className="text-purple-400" />
              <h2 className="text-xl font-semibold text-white">
                {item.name}
              </h2>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <EmailIcon className="text-blue-400" />
              <p className="text-gray-300">{item.email}</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {item.message}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="contained"
                color={item.status === "Resolved" ? "success" : "secondary"}
                startIcon={<CheckCircleIcon />}
                onClick={() => handleResolve(item._id, "Resolved")}
                disabled={loading}
              >
                Mark Resolved
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(item._id)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
