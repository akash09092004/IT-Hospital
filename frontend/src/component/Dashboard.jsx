import React, { useState } from "react";
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
  Menu,
  Close,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";

export default function AdminDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const adminLinks = [
    { to: "/dashboard", label: "Dashboard", icon: <Dashboard /> },
    { to: "/admin", label: "Home Dashboard", icon: <Dashboard /> },
    { to: "/admin/doctors", label: "Doctors", icon: <LocalHospital /> },
    { to: "/admin/patients", label: "Patients", icon: <Group /> },
    { to: "/admin/query", label: "Query", icon: <Group /> },
    { to: "/admin/appointments", label: "Appointments", icon: <Event /> },
    { to: "/admin/staff", label: "Staff", icon: <People /> },
    { to: "/admin/billing", label: "Billing", icon: <AccountBalance /> },
    { to: "/admin/reports", label: "Reports", icon: <Assessment /> },
    { to: "/admin/settings", label: "Settings", icon: <Settings /> },
    { to: "/logout", label: "Logout", icon: <Logout />, isLogout: true },
  ];

  const AdminNavigation = () => (
    <ul className="space-y-4">
      {adminLinks.map(({ to, label, icon, isLogout }) => (
        <li key={to}>
          <Link
            to={to}
            onClick={() => setIsMenuOpen(false)}
            className={`flex items-center gap-3 font-medium transition-colors ${
              isLogout
                ? "mt-5 text-red-600 hover:text-red-800"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {icon} {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ---------------- Sidebar ---------------- */}
      <aside className="w-64 bg-white shadow-xl p-5 hidden md:block">
        <h1 className="text-2xl font-bold text-blue-700 mb-8">Admin Panel</h1>

        <AdminNavigation />
      </aside>

      {/* Mobile admin navigation */}
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close admin menu"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">Admin Panel</h1>
          <button
            type="button"
            aria-label="Close admin menu"
            className="rounded-lg p-1 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            <Close />
          </button>
        </div>
        <AdminNavigation />
      </aside>


      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="min-w-0 flex-1 p-3 sm:p-6">

        <button
          type="button"
          aria-label="Open admin menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 font-semibold text-white shadow-md md:hidden"
        >
          <Menu /> Admin Menu
        </button>

        {/* Top Header */}
        <div className="flex justify-between items-center gap-3 bg-white p-4 rounded-xl shadow-md mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold">Dashboard Overview</h2>
          <div className="flex shrink-0 items-center gap-3 sm:gap-6">
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
