import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "Contact", path: "/contact" },
  { label: "Career", path: "/career" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Brand font — move to index.html / global CSS if also used elsewhere, to avoid loading it twice */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        a:focus-visible, button:focus-visible {
          outline: 2px solid #0D7C77;
          outline-offset: 2px;
        }
      `}</style>

      <AppBar
        position="sticky"
        elevation={0}
        className="!bg-white/90 backdrop-blur-md border-b border-slate-100"
      >
        <Toolbar
          disableGutters
          className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-2 max-w-7xl mx-auto w-full"
        >
          {/* ================= LOGO ================= */}
          <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
            <span className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0D7C77] to-[#102A36] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <LocalHospitalIcon sx={{ fontSize: 22 }} className="text-white" />
            </span>
            <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#102A36] leading-none">
              IT <span className="italic font-medium text-[#0D7C77]">Hospital</span>
            </span>
          </Link>

          {/* ================= DESKTOP NAVBAR ================= */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`group relative font-body text-[15px] font-medium pb-1.5 transition-colors duration-200 ${
                    isActive(link.path) ? "text-[#0D7C77]" : "text-[#102A36] hover:text-[#0D7C77]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0 h-[2px] bg-[#0D7C77] transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* ================= DESKTOP AUTH ================= */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link to="/login">
              <Button
                variant="outlined"
                className="!font-body !font-medium !rounded-full !normal-case !px-5"
                sx={{
                  color: "#102A36",
                  borderColor: "#102A36",
                  "&:hover": { borderColor: "#0D7C77", color: "#0D7C77", background: "rgba(13,124,119,0.06)" },
                }}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="contained"
                disableElevation
                className="!font-body !font-semibold !rounded-full !normal-case !px-6 !shadow-md"
                sx={{ background: "#0D7C77", "&:hover": { background: "#0a6560" } }}
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <IconButton
            onClick={() => setOpen(true)}
            className="md:hidden"
            aria-label="Open navigation menu"
            sx={{ color: "#102A36" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER MENU ================= */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "!bg-white",
          sx: { width: "82vw", maxWidth: 340 },
        }}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D7C77] to-[#102A36] flex items-center justify-center shrink-0">
                <LocalHospitalIcon sx={{ fontSize: 16 }} className="text-white" />
              </span>
              <span className="font-display text-lg font-semibold text-[#102A36]">
                IT <span className="italic text-[#0D7C77]">Hospital</span>
              </span>
            </Link>
            <IconButton onClick={() => setOpen(false)} aria-label="Close navigation menu" sx={{ color: "#102A36" }}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 px-3 py-5 font-body text-base">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  isActive(link.path) ? "bg-[#0D7C77]/10 text-[#0D7C77]" : "text-[#102A36] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth actions, pinned to bottom */}
          <div className="mt-auto px-5 py-5 border-t border-slate-100 flex flex-col gap-3">
            <Link to="/login" onClick={() => setOpen(false)}>
              <Button
                fullWidth
                variant="outlined"
                className="!font-body !font-medium !rounded-full !normal-case"
                sx={{ color: "#102A36", borderColor: "#102A36" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setOpen(false)}>
              <Button
                fullWidth
                variant="contained"
                disableElevation
                className="!font-body !font-semibold !rounded-full !normal-case"
                sx={{ background: "#0D7C77" }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
}