import React, { useState } from "react";
import {
  Add,
  Receipt,
  AttachMoney,
  Person,
  LocalHospital,
  Delete,
  Visibility,
  Search,
  CalendarMonth,
} from "@mui/icons-material";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

export default function Billing() {
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    amount: "",
    date: "",
  });

  const [billList, setBillList] = useState([
    { id: 1, patient: "Amit Sharma", doctor: "Dr. Mehta", amount: 1500, date: "2025-01-10" },
    { id: 2, patient: "Riya Singh", doctor: "Dr. Gupta", amount: 2200, date: "2025-01-12" },
  ]);

  const [selectedBill, setSelectedBill] = useState(null);

  const handleSubmit = () => {
    setBillList([...billList, { ...form, id: Date.now() }]);
    setOpen(false);
    setForm({ patient: "", doctor: "", amount: "", date: "" });
  };

  const deleteBill = (id) => {
    setBillList(billList.filter((b) => b.id !== id));
  };

  const filteredBills = billList.filter((b) =>
    b.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* ---------- Header ---------- */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold flex items-center gap-3 text-indigo-600 drop-shadow-xl">
          <Receipt className="text-indigo-700 scale-125" />
          Billing & Payments
        </h1>

        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          startIcon={<Add />}
          sx={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            borderRadius: "12px",
            padding: "10px 20px",
          }}
        >
          Create Bill
        </Button>
      </div>

      {/* ---------- 3D Stats Row ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/60 backdrop-blur-md shadow-2xl p-6 rounded-2xl border transform hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-teal-700">
            <AttachMoney /> Total Revenue
          </h2>
          <p className="text-3xl font-bold mt-3 text-teal-600">₹ 3,70,000</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md shadow-2xl p-6 rounded-2xl border transform hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-purple-700">
            <Person /> Patients Billed
          </h2>
          <p className="text-3xl font-bold mt-3 text-purple-600">243</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md shadow-2xl p-6 rounded-2xl border transform hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-rose-700">
            <LocalHospital /> Doctors Involved
          </h2>
          <p className="text-3xl font-bold mt-3 text-rose-600">38</p>
        </div>

      </div>

      {/* ---------- Search ---------- */}
      <div className="mb-6 flex items-center gap-3">
        <Search className="text-gray-600" />
        <TextField
          label="Search by Patient Name"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ---------- Table ---------- */}
      <div className="overflow-x-auto shadow-xl rounded-xl border bg-white">
        <table className="w-full text-left">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBills.map((bill) => (
              <tr key={bill.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{bill.patient}</td>
                <td className="p-3">{bill.doctor}</td>
                <td className="p-3 font-semibold text-green-600">₹ {bill.amount}</td>
                <td className="p-3 flex items-center gap-1">
                  <CalendarMonth className="text-gray-600" /> {bill.date}
                </td>
                <td className="p-3 flex justify-center gap-4">

                  {/* View Button */}
                  <Button
                    variant="outlined"
                    startIcon={<Visibility />}
                    sx={{ borderRadius: "10px" }}
                    onClick={() => {
                      setSelectedBill(bill);
                      setViewOpen(true);
                    }}
                  >
                    View
                  </Button>

                  {/* Delete Button */}
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<Delete />}
                    sx={{ borderRadius: "10px" }}
                    onClick={() => deleteBill(bill.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- Add Bill Dialog ---------- */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create New Bill</DialogTitle>

        <DialogContent className="flex flex-col gap-4 mt-2">
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
            label="Amount (₹)"
            type="number"
            fullWidth
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <TextField
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
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
            Create Bill
          </Button>
        </DialogActions>
      </Dialog>

      {/* ---------- View Bill Dialog ---------- */}
      {selectedBill && (
        <Dialog open={viewOpen} onClose={() => setViewOpen(false)}>
          <DialogTitle>Invoice Details</DialogTitle>

          <DialogContent className="space-y-3 mt-2">
            <p><b>Patient:</b> {selectedBill.patient}</p>
            <p><b>Doctor:</b> {selectedBill.doctor}</p>
            <p><b>Amount:</b> ₹ {selectedBill.amount}</p>
            <p><b>Date:</b> {selectedBill.date}</p>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setViewOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
