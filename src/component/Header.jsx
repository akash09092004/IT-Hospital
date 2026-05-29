import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" className="bg-blue-600 shadow-md">
        <Toolbar className="flex justify-between px-4 py-2">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
            IT HOSPITAL    </h1>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex gap-6 text-lg font-medium text-white">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-blue-200">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            <li><Link to="/career" className="hover:text-blue-200">Career</Link></li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex gap-4">
            <Link to="/login">
              <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="contained" sx={{ background: "white", color: "#1976d2" }}>
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🔥 Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 100, padding: 2, marginTop: "64px", bgcolor: "black" }  // ⭐ Drawer height below AppBar
        }}
      >
        <div className="flex flex-col gap-5 text-lg bg-black text-indigo-50">

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/doctors" onClick={() => setOpen(false)}>Doctors</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <hr />

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="text-blue-600 font-medium"
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="text-blue-600 font-medium"
          >
            Sign Up
          </Link>

        </div>
      </Drawer>

    </>
  );
}
