import React from "react";
import { Card, CardContent } from "@mui/material";
import {
  LocalHospital,
  Healing,
  Vaccines,
  MonitorHeart,
  Emergency,
  Psychology,
  Medication,
  Bloodtype,
} from "@mui/icons-material";

export default function Services() {
  const services = [
    {
      icon: <LocalHospital fontSize="large" className="text-blue-600" />,
      title: "General Treatment",
      desc: "Regular checkups, diagnosis and primary care by trained doctors.",
    },
    {
      icon: <Healing fontSize="large" className="text-green-600" />,
      title: "Surgery",
      desc: "Safe and advanced surgical procedures with expert surgeons.",
    },
    {
      icon: <Vaccines fontSize="large" className="text-purple-600" />,
      title: "Vaccination",
      desc: "Vaccines for children, adults and senior citizens.",
    },
    {
      icon: <MonitorHeart fontSize="large" className="text-red-600" />,
      title: "Cardiology",
      desc: "Heart health checkup, ECG, echo & advanced cardiac care.",
    },
    {
      icon: <Emergency fontSize="large" className="text-orange-600" />,
      title: "Emergency Care",
      desc: "24×7 emergency services with immediate medical support.",
    },
    {
      icon: <Psychology fontSize="large" className="text-yellow-600" />,
      title: "Mental Health",
      desc: "Counselling, mental wellness and psychological care.",
    },
    {
      icon: <Medication fontSize="large" className="text-pink-600" />,
      title: "Pharmacy",
      desc: "All medicines available with 24/7 pharmacy service.",
    },
    {
      icon: <Bloodtype fontSize="large" className="text-red-700" />,
      title: "Blood Bank",
      desc: "Safe blood donation and availability in emergencies.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-blue-700 mb-10">
        Our Medical Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <Card
            key={i}
            className="shadow-lg p-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>

            <CardContent>
              <h2 className="text-xl font-semibold text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center mt-2">
                {service.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
