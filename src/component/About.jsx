import React from "react";
import {
  Card,
  CardContent,
  Button,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimelineIcon from "@mui/icons-material/Timeline";
import CommuteIcon from "@mui/icons-material/Commute";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";

export default function About() {
  // Local uploaded image path (you provided)
  const heroImage = "sandbox:/mnt/data/c8266dca-1297-4c63-b174-1aa990acdba2.png";

  const stats = [
    { label: "Doctors", value: "120+", icon: <LocalHospitalIcon /> },
    { label: "Staff", value: "520+", icon: <PeopleIcon /> },
    { label: "Departments", value: "24", icon: <HealthAndSafetyIcon /> },
    { label: "Satisfaction", value: "98%", icon: <StarIcon /> },
  ];

  const departments = [
    { name: "Cardiology", desc: "Heart care, cath lab & ICU" },
    { name: "Neurology", desc: "Stroke & neuro-surgery" },
    { name: "Orthopedics", desc: "Joint replacement & trauma" },
    { name: "Pediatrics", desc: "Child health & neonatal care" },
    { name: "Radiology", desc: "CT / MRI / Ultrasound" },
    { name: "Pathology", desc: "Advanced diagnostics" },
  ];

  const timeline = [
    { year: "1995", title: "Founded", text: "Started as a 30 bed clinic." },
    { year: "2005", title: "Expansion", text: "New OPD, more specialists." },
    { year: "2015", title: "Advanced Labs", text: "Digital radiology & labs." },
    { year: "2023", title: "AI Monitoring", text: "AI-driven ICU monitoring." },
  ];

  const team = [
    { name: "Dr. Ankit Verma", role: "Chief Surgeon", avatar: "" },
    { name: "Dr. Ritu Mehra", role: "Head - Pediatrics", avatar: "" },
    { name: "Ms. Pooja Singh", role: "Nursing Lead", avatar: "" },
    { name: "Mr. Suresh Rao", role: "Admin Head", avatar: "" },
  ];

  const testimonials = [
    {
      name: "Rajan K.",
      text: "Brilliant care. The staff treated me like family and the surgery outcome is excellent.",
    },
    {
      name: "Anjali M.",
      text: "Clean wards, punctual doctors and transparent billing — highly recommended.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section
        className="relative w-full h-[520px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7,10,30,0.45), rgba(7,10,30,0.6)), url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                IT Hospital — Advanced Care, Compassionate People
              </h1>
              <p className="text-lg text-gray-200">
                We combine modern technology, specialised teams and human-first
                care to deliver trusted medical services across a wide spectrum
                of specialties.
              </p>

              <div className="flex gap-4">
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(79,70,229,1), rgba(147,51,234,1))",
                    padding: "10px 20px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(79,70,229,0.18)",
                  }}
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    padding: "10px 18px",
                    
                  }}
                >
                <Link to="/contact" >Contact us</Link>
                </Button>
              </div>
            </div>

            {/* Hero 3D info card */}
            <div className="relative">
              <div
                className="p-6 rounded-2xl shadow-2xl transform hover:translate-y-[-6px] transition-all duration-400 bg-white/90"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 20px 60px rgba(2,6,23,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Instant Care Highlights
                </h3>

                <p className="text-gray-600 mb-5">
                  24/7 ER • Advanced ICU • Digital Diagnostics • Patient-first
                  protocols
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-inner flex items-start gap-3"
                    >
                      <div className="text-3xl text-indigo-600">{s.icon}</div>
                      <div>
                        <div className="text-lg font-semibold text-gray-800">
                          {s.value}
                        </div>
                        <div className="text-sm text-gray-500">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-8 right-0 hidden md:block">
                <Card
                  className="rounded-2xl shadow-2xl"
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(235,245,255,0.7))",
                    minWidth: 260,
                    borderRadius: 16,
                    transform: "translateY(0)",
                  }}
                >
                  {/* <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Rating</div>
                        <div className="text-2xl font-bold text-gray-800">
                          4.9/5
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-500">ER Wait</div>
                        <div className="text-2xl font-semibold text-green-600">
                          12 mins
                        </div>
                      </div>
                    </div>

                    <Divider sx={{ my: 2 }} />

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">Beds</div>
                      <div className="font-semibold text-gray-700">180</div>
                    </div>
                  </CardContent> */}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DETAILS */}
      <section className="container mx-auto px-6 -mt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: deeper text */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              A legacy of care, built on trust and innovation
            </h2>

            <p className="text-gray-600 mb-6">
              IT Hospital began with a simple goal: reliable, accessible and
              modern healthcare for every family. Over the years we've expanded
              into multiple specialties, brought in leading clinicians and
              invested in the latest diagnostic and therapeutic technologies.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4 rounded-xl shadow-inner">
                <CardContent>
                  <h3 className="font-bold text-gray-800 mb-2">Our Promise</h3>
                  <p className="text-gray-600 text-sm">
                    Patient safety, clinical excellence and transparent care
                    pathways.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 rounded-xl shadow-inner">
                <CardContent>
                  <h3 className="font-bold text-gray-800 mb-2">Our Tech</h3>
                  <p className="text-gray-600 text-sm">
                    AI monitoring in ICU, digital radiology & integrated EMR
                    platform.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Vision + Values */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">Vision</h4>
                <p className="text-gray-600 text-sm mt-2">
                  To be a center of medical excellence with ethical care.
                </p>
              </div>
              <div className="p-4 border rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">Values</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Compassion • Integrity • Innovation • Teamwork
                </p>
              </div>
              <div className="p-4 border rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">Quality</h4>
                <p className="text-gray-600 text-sm mt-2">
                  International quality standards & continuous audits.
                </p>
              </div>
            </div>
          </div>

          {/* Right: departments quick */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Key Departments</h3>

            <div className="grid gap-4">
              {departments.map((d, i) => (
                <Card
                  key={i}
                  className="p-4 rounded-xl transform hover:-translate-y-2 transition shadow-lg"
                >
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-indigo-50 p-3">
                        <HealthAndSafetyIcon className="text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{d.name}</h4>
                        <p className="text-sm text-gray-600">{d.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container mx-auto px-6 mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h3>

        <div className="relative">
          <div className="border-l-2 border-gray-200 absolute h-full left-6 top-0"></div>

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="z-10">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-3 rounded-full shadow-xl">
                    <TimelineIcon />
                  </div>
                </div>

                <div className="pl-4">
                  <div className="text-sm text-indigo-600 font-semibold">
                    {t.year}
                  </div>
                  <h4 className="font-bold text-gray-800">{t.title}</h4>
                  <p className="text-gray-600">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Leadership & Team</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white shadow-2xl hover:-translate-y-2 transition transform"
            >
              <div className="flex flex-col items-center">
                <Avatar sx={{ width: 80, height: 80 }} className="mb-4">
                  {m.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                </Avatar>
                <h4 className="font-semibold text-gray-800">{m.name}</h4>
                <p className="text-sm text-gray-600">{m.role}</p>

                <div className="mt-4 flex gap-3">
                  <IconButton sx={{ bgcolor: "#eef2ff" }}>
                    <SupportAgentIcon />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "#fef3c7" }}>
                    <CommuteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">What Patients Say</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl"
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <div className="mt-4 text-sm font-semibold text-gray-800">
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="container mx-auto px-6 mt-12 mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>

            <div className="space-y-4">
              <details className="p-4 bg-white rounded-xl shadow-sm">
                <summary className="font-semibold text-gray-800">Do you accept insurance?</summary>
                <p className="text-gray-600 mt-2">Yes — we accept most major insurance providers and have a dedicated insurance desk to help process claims.</p>
              </details>

              <details className="p-4 bg-white rounded-xl shadow-sm">
                <summary className="font-semibold text-gray-800">How to book appointments?</summary>
                <p className="text-gray-600 mt-2">You can book online, call our reception or walk-in for urgent cases. For specialists, we recommend booking in advance.</p>
              </details>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Need a Consultation?</h3>
            <p className="mb-4">Schedule a consultation with our top specialists. We offer in-person and telemedicine appointments.</p>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))",
                color: "#1f2937",
                fontWeight: "700",
                borderRadius: "12px",
                px: 4,
                py: 1.5,
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
