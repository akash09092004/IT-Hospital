import React from "react";
import {
  Dashboard,
  LocalHospital,
  Group,
  Event,
  AccountBalance,
  People,
  Assessment,
  Settings,
  Logout,
  Notifications,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ---------------- Sidebar ---------------- */}
      <aside className="w-64 bg-white shadow-xl p-5 hidden md:block">
        <h1 className="text-2xl font-bold text-blue-700 mb-8">Admin Panel</h1>

        <ul className="space-y-4">

          <li>
            <Link to="/dashboard" className="flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-800">
              <Dashboard /> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/admin" className="flex items-center gap-3 hover:text-blue-600">
              <Dashboard /> Home Dashboard
            </Link>
          </li>

          <li>
            <Link to="/admin/doctors" className="flex items-center gap-3 hover:text-blue-600">
              <LocalHospital /> Doctors
            </Link>
          </li>

          <li>
            <Link to="/admin/patients" className="flex items-center gap-3 hover:text-blue-600">
              <Group /> Patients
            </Link>
          </li>
           
           <li>
            <Link to="/admin/query" className="flex items-center gap-3 hover:text-blue-600">
              <Group /> Query
            </Link>
          </li>

          <li>
            <Link to="/admin/appointments" className="flex items-center gap-3 hover:text-blue-600">
              <Event /> Appointments
            </Link>
          </li>

          <li>
            <Link to="/admin/staff" className="flex items-center gap-3 hover:text-blue-600">
              <People /> Staff
            </Link>
          </li>

          <li>
            <Link to="/admin/billing" className="flex items-center gap-3 hover:text-blue-600">
              <AccountBalance /> Billing
            </Link>
          </li>

          <li>
            <Link to="/admin/reports" className="flex items-center gap-3 hover:text-blue-600">
              <Assessment /> Reports
            </Link>
          </li>

          <li>
            <Link to="/admin/settings" className="flex items-center gap-3 hover:text-blue-600">
              <Settings /> Settings
            </Link>
          </li>

          <li>
            <Link to="/logout" className="flex items-center gap-3 text-red-600 hover:text-red-800 mt-5">
              <Logout /> Logout
            </Link>
          </li>

        </ul>
      </aside>


      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 p-6">

        {/* Top Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center gap-6">
            <Notifications className="text-gray-500 cursor-pointer hover:text-gray-700" />
            <div className="font-medium">Admin</div>
          </div>
        </div>

        {/* ---------------- HOME DASHBOARD CONTENT ---------------- */}
        <h1 className="text-2xl font-bold mb-5">Welcome to Admin Home Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { title: "Total Beds", value: "180", color: "from-blue-200 to-blue-300" },
            { title: "Occupied Beds", value: "132", color: "from-purple-200 to-purple-300" },
            { title: "Available Ambulances", value: "05", color: "from-green-200 to-green-300" },
            { title: "Active Departments", value: "12", color: "from-pink-200 to-pink-300" },
          ].map((item, i) => (
            <Card
              key={i}
              sx={{ borderRadius: "20px", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
              className="shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <CardContent className="text-center py-6">
                <h3 className="font-semibold text-gray-700 text-lg mb-2">{item.title}</h3>
                <p
                  className={`text-4xl font-extrabold bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                >
                  {item.value}
                </p>
              </CardContent>
            </Card>
          ))}

        </div>

        {/* Charts & Overview Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          {/* Chart Placeholder */}
          <Card className="shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Patient Flow Chart</h3>
            <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Chart Placeholder
            </div>
          </Card>

          {/* Activity Log */}
          <Card className="shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Recent Activity</h3>

            <ul className="space-y-4 text-gray-700">
              <li>• New patient registered: <b>Rohit Sharma</b></li>
              <li>• Dr. Mehta updated surgery schedule</li>
              <li>• Billing report generated for Ward 3</li>
              <li>• 4 new appointment requests received</li>
              <li>• Nurse staff shift updated</li>
            </ul>
          </Card>

        </div>

        {/* Hospital Notice */}
        <Card className="mt-10 shadow-xl rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-2">Hospital Announcement</h3>
          <p className="text-center text-gray-600 text-lg">
            New ICU wing opening next month with upgraded medical equipment and AI-powered monitoring.
          </p>
        </Card>

      </main>
    </div>
  );
}
