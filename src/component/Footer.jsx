import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-14 mt-16 shadow-[0_-10px_30px_rgba(0,0,0,0.7)]">

            {/* Main Container */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

                {/* About Section */}
                <div className="transform hover:scale-105 transition duration-300">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        HospitalCare
                    </h2>
                    <p className="text-gray-300 leading-7">
                        World-class medical care with cutting-edge technology, professional
                        doctors and 24/7 emergency support.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-5">
                        <FacebookIcon className="text-blue-500 hover:scale-125 cursor-pointer transition" />
                        <InstagramIcon className="text-pink-500 hover:scale-125 cursor-pointer transition" />
                        <TwitterIcon className="text-blue-300 hover:scale-125 cursor-pointer transition" />
                        <YouTubeIcon className="text-red-500 hover:scale-125 cursor-pointer transition" />
                    </div>
                </div>


                {/* Quick Links */}


                <div className="transform hover:scale-105 transition duration-300">
                    <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Quick Links
                    </h2>

                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>
                            <Link to="/"
                                onClick={() => window.scrollTo(0, 0)}
                                className="hover:text-blue-400 transition">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/about"
                                onClick={() => window.scrollTo(0, 0)}
                                className="hover:text-blue-400 transition">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/services"
                                onClick={() => window.scrollTo(0, 0)}
                                className="hover:text-blue-400 transition"
                            >
                                Services
                            </Link>

                        </li>

                        <li>
                            <Link to="/doctors"
                                onClick={() => window.scrollTo(0, 0)}
                                className="hover:text-blue-400 transition">
                                Doctors
                            </Link>
                        </li>

                        <li>
                            <Link to="/appointments"
                                onClick={() => window.scrollTo(0, 0)}
                                className="hover:text-blue-400 transition">
                                Appointments
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact"
                                onClick={() => window.scrollTo(0, 0)}
                                className="hover:text-blue-400 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>



                {/* Contact Section */}
                <div className="transform hover:scale-105 transition duration-300">
                    <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-300 to-lime-300 bg-clip-text text-transparent">
                        Contact
                    </h2>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-center gap-2">
                            <LocationOnIcon className="text-red-400" /> Mumbai, India
                        </li>
                        <li className="flex items-center gap-2">
                            <LocalPhoneIcon className="text-blue-400" /> +91 9876543210
                        </li>
                        <li className="flex items-center gap-2">
                            <EmailIcon className="text-yellow-400" /> support@hospitalcare.com
                        </li>
                    </ul>
                </div>


                {/* Search Section */}
                <div className="transform hover:scale-105 transition duration-300">
                    <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                        Search
                    </h2>
                    <div className="flex items-center bg-gray-800 px-4 py-3 rounded-xl shadow-lg shadow-blue-900/40">
                        <SearchIcon className="text-blue-300 mr-2" />
                        <input
                            type="text"
                            placeholder="Search services, doctors..."
                            className="bg-transparent outline-none text-gray-200 w-full"
                        />
                    </div>

                    <p className="text-gray-400 text-xs mt-3">
                        Find doctors, services, departments, facilities & more.
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
                © {new Date().getFullYear()} HospitalCare. All Rights Reserved.
            </div>
        </footer>
    );
}
