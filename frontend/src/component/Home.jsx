import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  LocalHospital,
  EmojiPeople,
  Science,
  HealthAndSafety,
  AccessTimeFilled,
  Groups,
  Favorite,
  VerifiedUser,
  LocalPhone,
  ArrowForward,
  KeyboardArrowDown,
  EventAvailable,
} from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  // ================= IMAGE LIBRARY (deduped) =================
  const photo = {
    corridor: (w) =>
      `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=${w}&auto=format&fit=crop`,
    surgery: (w) =>
      `https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=${w}&auto=format&fit=crop`,
    doctor: (w) =>
      `https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=${w}&auto=format&fit=crop`,
    icu: (w) =>
      `https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=${w}&auto=format&fit=crop`,
    pediatric: (w) =>
      `https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=${w}&auto=format&fit=crop`,
  };

  const heroImages = [
    photo.corridor(1920),
    photo.surgery(1920),
    photo.doctor(1920),
    photo.icu(1920),
    photo.pediatric(1920),
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ================= AUTO SLIDER (pauses on hover) =================
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, heroImages.length]);

  // ================= DATA =================
  const trustStats = [
    { value: "24/7", label: "Emergency Response", icon: <AccessTimeFilled sx={{ fontSize: 26 }} /> },
    { value: "50+", label: "Specialist Doctors", icon: <Groups sx={{ fontSize: 26 }} /> },
    { value: "15,000+", label: "Patients Treated", icon: <Favorite sx={{ fontSize: 26 }} /> },
    { value: "Certified", label: "NABH Accredited", icon: <VerifiedUser sx={{ fontSize: 26 }} /> },
  ];

  const services = [
    { title: "Emergency Care", tag: "Always Open", image: photo.corridor(1200), description: "Round-the-clock trauma and critical care, ready the moment you need us." },
    { title: "Cardiology", tag: "Heart & Vascular", image: photo.doctor(1200), description: "Comprehensive heart screening, diagnostics, and surgical care." },
    { title: "Neurology", tag: "Brain & Spine", image: photo.surgery(1200), description: "Advanced treatment for the brain, spine, and nervous system." },
    { title: "Orthopedics", tag: "Bone & Joint", image: photo.icu(1200), description: "Joint replacement, sports injury care, and fracture treatment." },
    { title: "Pediatrics", tag: "Child Care", image: photo.pediatric(1200), description: "Gentle, specialized care for infants, children, and adolescents." },
    { title: "Diagnostics", tag: "Lab & Imaging", image: photo.corridor(1200), description: "On-site labs and imaging for fast, accurate results." },
  ];

  const whyChooseUs = [
    { title: "24/7 Emergency", description: "Round-the-clock critical care, every single day.", icon: <LocalHospital sx={{ fontSize: 34 }} /> },
    { title: "Expert Doctors", description: "200+ specialists across every major department.", icon: <EmojiPeople sx={{ fontSize: 34 }} /> },
    { title: "Modern Technology", description: "Latest diagnostic and surgical equipment.", icon: <Science sx={{ fontSize: 34 }} /> },
    { title: "Advanced ICU", description: "Critical care units with continuous monitoring.", icon: <HealthAndSafety sx={{ fontSize: 34 }} /> },
  ];

  return (
    <div className="overflow-x-hidden bg-[#F7FAF9]">
      {/* ================= GLOBAL STYLE (fonts, motion, focus) ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-1%, -1%); }
        }
        .animate-kenburns { animation: kenburns 16s ease-in-out infinite alternate; }

        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.45); }
          100% { box-shadow: 0 0 0 16px rgba(255,255,255,0); }
        }
        .animate-pulse-ring { animation: pulse-ring 1.8s ease-out infinite; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.7s ease-out both; }

        button:focus-visible, a:focus-visible {
          outline: 2px solid #0D7C77;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-kenburns, .animate-bounce-soft, .animate-pulse-ring, .animate-fade-up {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-screen min-h-[600px] max-h-[920px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Crossfading background images */}
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="IT Hospital facility"
            className={`absolute inset-0 w-full h-full object-cover animate-kenburns transition-opacity duration-[1500ms] ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Brand-toned overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F29]/80 via-[#112D3B]/55 to-[#0B1F29]/85" />

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-6">
          {/* Accreditation badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 font-body uppercase tracking-wide text-[10px] sm:text-xs px-4 py-1.5 rounded-full mb-6">
            <VerifiedUser sx={{ fontSize: 14 }} /> NABH Accredited Multispecialty Hospital
          </span>

          {/* Wordmark */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] drop-shadow-2xl">
            IT <span className="italic font-medium text-[#9FE3DC]">Hospital</span>
          </h1>

          {/* Supporting copy */}
          <p className="font-body max-w-2xl text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mt-6">
            Advanced medical care, experienced specialists, and round-the-clock
            emergency support — for every patient, every time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={() => navigate("/doctors")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0D7C77] hover:bg-[#0a6560] rounded-full font-body font-semibold shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <EventAvailable fontSize="small" /> Book Appointment
            </button>

            <button
              onClick={() => navigate("/services")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/70 hover:bg-white hover:text-[#102A36] rounded-full font-body font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Explore Services
              <ArrowForward fontSize="small" className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to learn more"
          className="hidden sm:flex absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white animate-bounce-soft"
        >
          <KeyboardArrowDown sx={{ fontSize: 32 }} />
        </button>

        {/* Slider dots */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= TRUST STRIP (overlaps hero) ================= */}
      <div className="relative z-20 -mt-14 sm:-mt-16 md:-mt-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl sm:rounded-3xl border border-slate-100 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 overflow-hidden animate-fade-up">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center gap-1.5 p-5 sm:p-6 text-center">
              <div className="text-[#0D7C77]">{stat.icon}</div>
              <p className="font-display text-lg sm:text-2xl font-semibold text-[#102A36]">{stat.value}</p>
              <p className="font-body text-[10px] sm:text-sm text-[#4A5A60] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section ref={aboutRef} className="relative max-w-7xl mx-auto pt-20 sm:pt-24 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#0D7C77]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8553F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-[28px] sm:rounded-[36px] shadow-xl border border-slate-100 p-6 sm:p-10 md:p-14">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#102A36] mb-5 leading-tight">
              Welcome to <span className="text-[#0D7C77]">IT Hospital</span>
            </h2>

            <p className="font-body text-[#4A5A60] text-base sm:text-lg leading-relaxed">
              We provide world-class healthcare with modern infrastructure,
              highly experienced doctors, advanced ICU, diagnostics, and
              compassionate treatment.
            </p>

            <p className="font-body text-[#4A5A60] mt-4 text-sm sm:text-base leading-relaxed">
              Our mission is safe, affordable, and quality healthcare for
              every patient, backed by the latest medical technology.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-body text-[#102A36]">
              {["200+ Beds", "ISO 9001 Certified", "Cashless Insurance"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D7C77]" /> {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/doctors")}
              className="group mt-8 inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#102A36] hover:bg-[#0D7C77] text-white rounded-full font-body font-medium shadow-lg transition-all duration-300"
            >
              Meet Our Doctors
              <ArrowForward fontSize="small" className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={photo.icu(1000)}
              alt="IT Hospital interior"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-lg h-64 sm:h-80 md:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#102A36] mb-4">
            Our Medical Services
          </h2>
          <p className="font-body text-[#4A5A60] text-base sm:text-lg">
            Specialist care across every major department, backed by modern
            diagnostic technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F29]/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0D7C77] font-body font-semibold uppercase tracking-wide text-[10px] sm:text-xs px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#102A36] mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-[#4A5A60] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[#0D7C77] font-body font-medium text-sm transition-all duration-300 group-hover:gap-2.5">
                  View Details <ArrowForward sx={{ fontSize: 16 }} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 sm:mt-14">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#102A36] text-[#102A36] hover:bg-[#102A36] hover:text-white rounded-full font-body font-medium transition-all duration-300"
          >
            View All Services <ArrowForward fontSize="small" />
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#E7F4F2] py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#102A36] mb-4">
              Why Choose IT Hospital?
            </h2>
            <p className="font-body text-[#4A5A60] text-base sm:text-lg">
              The standard of care we hold ourselves to, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0D7C77]/10 text-[#0D7C77] mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#102A36] mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[#4A5A60] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#7A1F12] via-[#C73E2C] to-[#E8553F] py-20 sm:py-24 px-4 sm:px-6 text-white overflow-hidden">
        {/* Wave divider blending in from the section above */}
        <svg className="absolute top-0 left-0 w-full h-8 sm:h-10 text-[#F7FAF9]" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,32 C360,80 1080,-16 1440,32 L1440,0 L0,0 Z" />
        </svg>

        {/* Soft dot texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "26px 26px" }}
        />

        {/* Radial spotlight glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.16),transparent_55%)] pointer-events-none" />

        {/* Oversized watermark icon */}
        <LocalPhone sx={{ fontSize: 300 }} className="absolute -right-16 -bottom-20 text-white/[0.06] pointer-events-none hidden lg:block" />

        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          {/* Layered icon badge */}
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 shrink-0">
            <span className="absolute inset-0 rounded-full border border-white/25" />
            <span className="absolute inset-0 rounded-full animate-pulse-ring" />
            <span className="absolute inset-2 rounded-full bg-white/10 backdrop-blur" />
            <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white shadow-2xl flex items-center justify-center">
              <LocalPhone sx={{ fontSize: 30 }} className="text-[#C73E2C]" />
            </div>
          </div>

          {/* Text + CTA */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 font-body uppercase tracking-wide text-[10px] sm:text-xs px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Emergency Line Always Active
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Medical Emergency? Call <span className="italic text-[#FFD9CF]">108</span>
            </h2>

            <p className="font-body text-white/90 text-base sm:text-lg max-w-xl mt-4 mx-auto md:mx-0">
              Our emergency medical team is on call 24/7, every day of the
              year, ready to respond.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-7 justify-center md:justify-start">
              <a
                href="tel:108"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#C73E2C] rounded-full font-body font-semibold shadow-2xl hover:bg-white/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <LocalPhone fontSize="small" /> Call 108 Now
              </a>
              <span className="font-body text-white/70 text-xs sm:text-sm">
                Toll-free • National emergency number
              </span>
            </div>
          </div>
        </div>

        {/* Bottom wave divider */}
        <svg className="absolute bottom-0 left-0 w-full h-8 sm:h-10 text-[#F7FAF9] rotate-180" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,32 C360,80 1080,-16 1440,32 L1440,0 L0,0 Z" />
        </svg>
      </section>
    </div>
  );
};

export default Home;