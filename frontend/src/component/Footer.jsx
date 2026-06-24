import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "Appointments", path: "/appointments" },
  { label: "Contact", path: "/contact" },
];

const contactInfo = [
  { Icon: LocationOnIcon, text: "Mumbai, India" },
  { Icon: LocalPhoneIcon, text: "+91 98765 43210", href: "tel:+919876543210" },
  { Icon: EmailIcon, text: "care@itHospital.in", href: "mailto:care@itHospital.in" },
];

const socialLinks = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: TwitterIcon, label: "Twitter", href: "#" },
  { Icon: YouTubeIcon, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <footer className="relative bg-[#0B1F29] text-white pt-16 sm:pt-20 overflow-hidden">
      {/* Brand font — consider moving to a global stylesheet if also loaded by Header/Home */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        a:focus-visible, button:focus-visible, input:focus-visible {
          outline: 2px solid #0D7C77;
          outline-offset: 2px;
        }
      `}</style>

      {/* Top brand accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0D7C77] via-[#176B66] to-[#E8553F]" />

      {/* Soft ambient glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0D7C77]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 sm:gap-12 px-4 sm:px-6 lg:px-8 pb-14">

        {/* Brand Section */}
        <div>
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center gap-2.5 mb-5">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D7C77] to-[#102A36] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
              <LocalHospitalIcon sx={{ fontSize: 20 }} className="text-white" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              IT <span className="italic font-medium text-[#9FE3DC]">Hospital</span>
            </span>
          </Link>

          <p className="font-body text-white/65 text-sm leading-relaxed max-w-xs">
            World-class medical care with cutting-edge technology,
            experienced doctors, and 24/7 emergency support.
          </p>

          <div className="flex gap-3 mt-6">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0D7C77] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Icon sx={{ fontSize: 18 }} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-1.5">Quick Links</h2>
          <span className="block w-8 h-[3px] bg-[#0D7C77] rounded-full mb-5" />

          <ul className="space-y-3 font-body text-sm">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group inline-flex items-center gap-2.5 text-white/65 hover:text-white transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-[#0D7C77] group-hover:w-2.5 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-1.5">Contact</h2>
          <span className="block w-8 h-[3px] bg-[#0D7C77] rounded-full mb-5" />

          <ul className="space-y-4 font-body text-sm">
            {contactInfo.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icon sx={{ fontSize: 16 }} className="text-[#9FE3DC]" />
                </span>
                {href ? (
                  <a href={href} className="text-white/70 hover:text-white transition-colors duration-200 pt-1.5">
                    {text}
                  </a>
                ) : (
                  <span className="text-white/70 pt-1.5">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Search Section */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-1.5">Search</h2>
          <span className="block w-8 h-[3px] bg-[#0D7C77] rounded-full mb-5" />

          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white/10 border border-white/15 focus-within:border-[#0D7C77] px-4 py-3 rounded-2xl transition-colors duration-300"
          >
            <SearchIcon sx={{ fontSize: 20 }} className="text-white/50 mr-2 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, doctors..."
              className="bg-transparent outline-none text-white placeholder:text-white/40 w-full text-sm font-body"
            />
            <button
              type="submit"
              aria-label="Search"
              className="ml-2 text-white/60 hover:text-[#0D7C77] transition-colors duration-200 shrink-0"
            >
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </button>
          </form>

          <p className="font-body text-white/40 text-xs mt-3 leading-relaxed">
            Find doctors, services, departments, facilities & more.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="font-body text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} IT Hospital. All rights reserved.
          </p>
          <p className="font-body text-white/35 text-xs">
            Designed for better healthcare, every day.
          </p>
        </div>
      </div>
    </footer>
  );
}