import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplitText from "./SplitText";
import { Card, CardContent } from "@mui/material";
import {
  LocalHospital,
  EmojiPeople,
  Science,
  HealthAndSafety,
} from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();
  const images = [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600",
    "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1600",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600",
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=1600",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1600",
    "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=1600",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <div className="w-full h-screen relative">

        {/* Background Image */}
        <img
          src={images[current]}
          alt="Hospital Banner"
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">

          <p className="text-lg md:text-xl mb-3">
            World-class healthcare with compassion and advanced technology
          </p>

          <SplitText
            text="IT HOSPITAL"
            className="text-4xl md:text-6xl font-bold drop-shadow-xl"
          />

          <button className="mt-24 px-9 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-lg font-semibold" onClick={() => navigate("/doctors")}>
            Book Appointment
          </button>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <Card className="rounded-3xl shadow-2xl">
          <CardContent className="grid md:grid-cols-2 gap-8 p-10">

            <div>
              <h2 className="text-4xl font-bold text-blue-700 mb-4">
                Welcome to IT Hospital
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We provide world-class healthcare with modern facilities,
                experienced doctors, and advanced medical technology.
                Our mission is to offer safe, affordable, and compassionate
                treatment for every patient.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600"
                alt="Hospital"
                className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              />
            </div>

          </CardContent>
        </Card>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-10">
          Our Key Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Emergency Care",
            "Cardiology",
            "Neurology",
            "Orthopedics",
            "Pediatrics",
            "Diagnostics",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white shadow-md text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-600 mt-2">
                High-quality and reliable {service.toLowerCase()} service.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mt-20 py-16 px-6 bg-blue-50">
        <h2 className="text-4xl font-semibold text-center text-blue-700 mb-12">
          Why Choose IT Hospital?
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "24/7 Emergency Support",
              icon: <LocalHospital className="text-5xl text-blue-600" />,
            },
            {
              title: "Experienced Doctors",
              icon: <EmojiPeople className="text-5xl text-blue-600" />,
            },
            {
              title: "Modern Infrastructure",
              icon: <Science className="text-5xl text-blue-600" />,
            },
            {
              title: "Advanced ICU & Labs",
              icon: <HealthAndSafety className="text-5xl text-blue-600" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EMERGENCY ================= */}
      <section className="bg-red-600 text-white text-center py-10 mt-16">
        <h2 className="text-3xl font-bold">Emergency? Call 108</h2>
        <p className="mt-2 text-lg">
          Our emergency team is available 24/7.
        </p>
      </section>

    </div>
  );
};

export default Home;

