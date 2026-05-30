<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import SplitText from "./SplitText";
import { Card, CardContent } from "@mui/material";
=======
﻿import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@mui/material";

>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
import {
  LocalHospital,
  EmojiPeople,
  Science,
  HealthAndSafety,
} from "@mui/icons-material";

const Home = () => {
<<<<<<< HEAD
  const images = [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600",
    "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1600",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600",
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=1600",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1600",
    "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=1600",
=======
  const navigate = useNavigate();

  // ================= HERO IMAGES =================
  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=1920&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1920&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1920&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1920&auto=format&fit=crop",
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
  ];

  const [current, setCurrent] = useState(0);

<<<<<<< HEAD
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
=======
  // ================= AUTO SLIDER =================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
    return () => clearInterval(timer);
  }, [images.length]);

  return (
<<<<<<< HEAD
    <div>

      {/* ================= HERO SECTION ================= */}
      <div className="w-full h-screen relative">
=======
    <div className="overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622

        {/* Background Image */}
        <img
          src={images[current]}
          alt="Hospital Banner"
<<<<<<< HEAD
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

          <button className="mt-24 px-9 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
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
=======
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">

          {/* Small Top Text */}
          <p className="text-sm sm:text-lg md:text-2xl font-light tracking-wide text-gray-200 mb-6 max-w-5xl">
            World-class healthcare with compassion and advanced technology
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-8 drop-shadow-2xl">
            IT HOSPITAL
          </h1>

          {/* Paragraph */}
          <p className="max-w-4xl text-gray-200 text-base sm:text-lg md:text-2xl leading-relaxed">
            Providing advanced medical facilities, experienced doctors,
            24/7 emergency support, and compassionate healthcare services
            for every patient.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <button
              onClick={() => navigate("/doctors")}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg font-semibold shadow-2xl transition duration-300 hover:scale-105"
            >
              Book Appointment
            </button>

            <button
              onClick={() => navigate("/services")}
              className="px-10 py-4 border border-white hover:bg-white hover:text-black rounded-2xl text-lg font-semibold transition duration-300 hover:scale-105"
            >
              Explore Services
            </button>

          </div>
        </div>

        {/* ================= SLIDER DOTS ================= */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 h-3 bg-white"
                  : "w-3 h-3 bg-gray-400"
              }`}
            ></button>
          ))}

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto py-24 px-6">

        <Card className="rounded-[30px] shadow-2xl overflow-hidden">

          <CardContent className="grid md:grid-cols-2 gap-10 items-center p-10 md:p-16">

            {/* Left Content */}
            <div>

              <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
                Welcome to IT Hospital
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                We provide world-class healthcare services with modern
                infrastructure, highly experienced doctors, advanced ICU,
                diagnostics, emergency care, and compassionate treatment.
              </p>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Our mission is to ensure safe, affordable, and quality
                healthcare for every patient with the latest medical technology.
              </p>

              <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition">
                Learn More
              </button>

            </div>

            {/* Right Image */}
            <div className="flex justify-center">

              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop"
                alt="Hospital"
                className="rounded-3xl shadow-2xl w-full max-w-lg h-[420px] object-cover"
              />

>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
            </div>

          </CardContent>
        </Card>
      </section>

<<<<<<< HEAD
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
=======
      {/* ================= SERVICES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Our Medical Services
          </h2>

          <p className="text-gray-600 text-lg">
            Advanced healthcare services for every patient
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Emergency Care",
              image:
                "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop",
            },

            {
              title: "Cardiology",
              image:
                "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
            },

            {
              title: "Neurology",
              image:
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
            },

            {
              title: "Orthopedics",
              image:
                "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
            },

            {
              title: "Pediatrics",
              image:
                "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&auto=format&fit=crop",
            },

            {
              title: "Diagnostics",
              image:
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
            },
          ].map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  Advanced and reliable{" "}
                  {service.title.toLowerCase()} services with modern technology.
                </p>

              </div>

>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
<<<<<<< HEAD
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
=======
      <section className="bg-blue-50 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Why Choose IT Hospital?
            </h2>

            <p className="text-gray-600 text-lg">
              We provide the best healthcare experience
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              {
                title: "24/7 Emergency",
                icon: <LocalHospital sx={{ fontSize: 70 }} />,
              },

              {
                title: "Expert Doctors",
                icon: <EmojiPeople sx={{ fontSize: 70 }} />,
              },

              {
                title: "Modern Technology",
                icon: <Science sx={{ fontSize: 70 }} />,
              },

              {
                title: "Advanced ICU",
                icon: <HealthAndSafety sx={{ fontSize: 70 }} />,
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-lg text-center hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >

                <div className="flex justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY SECTION ================= */}
      <section className="bg-red-600 py-14 text-center text-white">

        <h2 className="text-4xl font-bold">
          Emergency? Call 108
        </h2>

        <p className="mt-4 text-lg">
          Our emergency medical team is available 24/7 for urgent healthcare.
        </p>

>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
      </section>

    </div>
  );
};

export default Home;