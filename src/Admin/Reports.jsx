import React, { useState } from "react";
import {
  Assessment,
  Download,
  CalendarMonth,
  BarChart,
  Timeline,
  Insights,
} from "@mui/icons-material";

import {
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import {
  LineChart,
  Line,
  BarChart as BarGraph,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


export default function Reports() {

  const [filter, setFilter] = useState({
    from: "",
    to: "",
    type: "all",
  });

  const revenueData = [
    { month: "Jan", amount: 30000 },
    { month: "Feb", amount: 45000 },
    { month: "Mar", amount: 52000 },
    { month: "Apr", amount: 61000 },
    { month: "May", amount: 70000 },
  ];

  const patientData = [
    { month: "Jan", count: 120 },
    { month: "Feb", count: 160 },
    { month: "Mar", count: 180 },
    { month: "Apr", count: 210 },
    { month: "May", count: 260 },
  ];

  const doctorData = [
    { doctor: "Mehta", patients: 42 },
    { doctor: "Gupta", patients: 51 },
    { doctor: "Sharma", patients: 38 },
    { doctor: "Khan", patients: 65 },
  ];


  const exportCSV = () => {
    const csv = [
      ["Month", "Revenue", "Patients"],
      ...revenueData.map((r, i) => [
        r.month,
        r.amount,
        patientData[i].count,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "hospital-report.csv";
    a.click();
  };


  return (
    <div className="p-6">

      {/* ---------- Header ---------- */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold flex items-center gap-3 text-blue-700 drop-shadow-xl">
          <Assessment className="scale-125 text-blue-700" />
          Hospital Reports
        </h1>

        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={exportCSV}
          sx={{
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            borderRadius: "12px",
            padding: "10px 22px",
          }}
        >
          Export CSV
        </Button>
      </div>

      {/* ---------- Filters Section ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <TextField
          label="From Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={filter.from}
          onChange={(e) => setFilter({ ...filter, from: e.target.value })}
        />

        <TextField
          label="To Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={filter.to}
          onChange={(e) => setFilter({ ...filter, to: e.target.value })}
        />

        <TextField
          select
          label="Report Type"
          fullWidth
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
        >
          <MenuItem value="all">All Reports</MenuItem>
          <MenuItem value="revenue">Revenue</MenuItem>
          <MenuItem value="patient">Patient Growth</MenuItem>
          <MenuItem value="doctor">Doctor Activity</MenuItem>
        </TextField>
      </div>

      {/* ---------- 3D Statistics Cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white/60 backdrop-blur-xl border shadow-2xl rounded-2xl p-6 transform hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
            <Insights /> Total Revenue
          </h2>
          <p className="text-4xl font-bold mt-4 text-indigo-600">₹ 3,70,000</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border shadow-2xl rounded-2xl p-6 transform hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-emerald-700">
            <Timeline /> Patient Growth
          </h2>
          <p className="text-4xl font-bold mt-4 text-emerald-600">+26%</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border shadow-2xl rounded-2xl p-6 transform hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-rose-700">
            <BarChart /> Doctor Activity
          </h2>
          <p className="text-4xl font-bold mt-4 text-rose-600">+14%</p>
        </div>

      </div>

      {/* ---------- Charts Section ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Revenue Chart */}
        <div className="bg-white/80 backdrop-blur-xl border shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Revenue Overview
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Patient Chart */}
        <div className="bg-white/80 backdrop-blur-xl border shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Patient Increase
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarGraph data={patientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" />
            </BarGraph>
          </ResponsiveContainer>
        </div>

      </div>


      {/* Doctor Activity Chart */}
      <div className="mt-12 bg-white/80 backdrop-blur-xl border shadow-xl p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Doctor Activity Report
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarGraph data={doctorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="doctor" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="patients" fill="#ef4444" />
          </BarGraph>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
