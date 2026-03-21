import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function HomeDashboard() {
  const stats = [
    {
      title: "Total Doctors",
      value: "42",
      icon: <LocalHospitalIcon className="text-blue-600" />,
      color: "from-blue-100 to-blue-200",
    },
    {
      title: "Total Patients",
      value: "320",
      icon: <PeopleIcon className="text-purple-600" />,
      color: "from-purple-100 to-purple-200",
    },
    {
      title: "Appointments Today",
      value: "58",
      icon: <EventAvailableIcon className="text-green-600" />,
      color: "from-green-100 to-green-200",
    },
    {
      title: "Active Staff",
      value: "87",
      icon: <MedicalServicesIcon className="text-pink-600" />,
      color: "from-pink-100 to-pink-200",
    },
    {
      title: "Revenue (Monthly)",
      value: "₹ 4,50,000",
      icon: <AttachMoneyIcon className="text-yellow-600" />,
      color: "from-yellow-100 to-yellow-200",
    },
    {
      title: "Reports Generated",
      value: "124",
      icon: <AssessmentIcon className="text-red-600" />,
      color: "from-red-100 to-red-200",
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-xl">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome to IT Hospital Admin Panel — Quick overview of important stats
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((item, i) => (
          <Card
            key={i}
            className="shadow-xl rounded-2xl transform hover:-translate-y-2 duration-300 hover:shadow-2xl"
            sx={{
              background: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(8px)",
              borderRadius: "20px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "white", width: 56, height: 56 }}
                  className="shadow-md"
                >
                  {item.icon}
                </Avatar>
              }
              title={
                <span className="font-bold text-lg text-gray-700">
                  {item.title}
                </span>
              }
            />

            <CardContent>
              <div
                className={`w-full text-center py-6 px-4 rounded-xl bg-gradient-to-br ${item.color} shadow-inner`}
              >
                <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow">
                  {item.value}
                </h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-14 max-w-4xl mx-auto">
        <Card
          className="shadow-xl rounded-2xl"
          sx={{
            background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
            borderRadius: "20px",
          }}
        >
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Hospital Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The IT Hospital Dashboard provides real-time data for doctors,
              patients, appointments, reports and operations. Stay updated with
              every activity and ensure seamless workflow inside the hospital.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
