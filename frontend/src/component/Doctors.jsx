import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { MedicalServices } from "@mui/icons-material";
import { createAppointment } from "../api/appointments";

export default function Doctors() {
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState("");
  const [bookingError, setBookingError] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    patient: "",
    date: "",
    time: "",
    notes: "",
  });

  const departments = {
    Cardiology: [
      {
        name: "Dr. Rohan Sharma",
        specialty: "Heart Specialist",
        experience: "15 Years Experience",
        img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Kavita Jain",
        specialty: "Cardiologist",
        experience: "12 Years Experience",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Suresh Patil",
        specialty: "Heart Surgeon",
        experience: "18 Years Experience",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
      },
      {
        name: "Dr. Preeti Nanda",
        specialty: "Cardiology Expert",
        experience: "10 Years Experience",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ],

    Neurology: [
      {
        name: "Dr. Priya Verma",
        specialty: "Neurology Specialist",
        experience: "10 Years Experience",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Aman Singh",
        specialty: "Brain Surgeon",
        experience: "14 Years Experience",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Shalini Kapoor",
        specialty: "Nerve Specialist",
        experience: "9 Years Experience",
        img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=600",
      },
      {
        name: "Dr. Deepak Rao",
        specialty: "Neurosurgeon",
        experience: "16 Years Experience",
        img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&w=800&q=80",
      },
    ],

    Orthopedic: [
      {
        name: "Dr. Arjun Mehta",
        specialty: "Bone Specialist",
        experience: "8 Years Experience",
        img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Riya Bansal",
        specialty: "Joint Surgeon",
        experience: "11 Years Experience",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Satish Malhotra",
        specialty: "Spine Expert",
        experience: "15 Years Experience",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Megha Rana",
        specialty: "Orthopedic Doctor",
        experience: "7 Years Experience",
        img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      },
    ],

    Dermatology: [
      {
        name: "Dr. Shreya Mathur",
        specialty: "Cosmetologist",
        experience: "9 Years Experience",
        img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. Manish Tiwari",
        specialty: "Skin & Hair Expert",
        experience: "13 Years Experience",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Ananya Gupta",
        specialty: "Skin Specialist",
        experience: "6 Years Experience",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. Riddhima Shah",
        specialty: "Skin Consultant",
        experience: "5 Years Experience",
        img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&w=800&q=80",
      },
    ],

    Pediatrics: [
      {
        name: "Dr. Vedant Kohli",
        specialty: "Child Specialist",
        experience: "10 Years Experience",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Nisha Malani",
        specialty: "Pediatrician",
        experience: "12 Years Experience",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Dr. Harsh Soni",
        specialty: "Child Care",
        experience: "8 Years Experience",
        img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Dr. Neha Kulkarni",
        specialty: "Newborn Specialist",
        experience: "6 Years Experience",
        img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80",
      },
    ],

    Gynecology: [
      {
        name: "Dr. Pooja Sharma",
        specialty: "Women's Health",
        experience: "14 Years Experience",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Sneha Jadhav",
        specialty: "Pregnancy Care",
        experience: "9 Years Experience",
        img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Dr. Reema Saxena",
        specialty: "Gynecologist",
        experience: "11 Years Experience",
        img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&w=800&q=80",
      },
      {
        name: "Dr. Yasmin Ali",
        specialty: "Fertility Expert",
        experience: "7 Years Experience",
        img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  };

  const openBooking = (doctorName) => {
    setBookingError("");
    setBookingDoctor(doctorName);
    setBookingForm({ patient: "", date: "", time: "", notes: "" });
    setBookingOpen(true);
  };

  const submitBooking = async () => {
    setBookingError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setBookingOpen(false);
      navigate("/login");
      return;
    }

    if (!bookingForm.patient || !bookingForm.date || !bookingForm.time) {
      setBookingError("Please fill patient name, date and time.");
      return;
    }

    try {
      setBookingLoading(true);
      await createAppointment({
        patient: bookingForm.patient,
        doctor: bookingDoctor,
        date: bookingForm.date,
        time: bookingForm.time,
        notes: bookingForm.notes,
      });
      setBookingOpen(false);
    } catch (err) {
      if (err?.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        setBookingOpen(false);
        navigate("/login");
        return;
      }

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Booking failed. Please try again.";
      setBookingError(message);
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-blue-700 mb-10">
        Our Doctors (Department Wise)
      </h1>

      {Object.keys(departments).map((dept, i) => (
        <div key={i} className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">{dept}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments[dept].map((doc, index) => (
              <Card
                key={index}
                className="shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-56 object-cover"
                />

                <CardContent>
                  <h2 className="text-xl font-bold">{doc.name}</h2>
                  <p className="text-blue-600 font-medium">{doc.specialty}</p>
                  <p className="text-gray-500 mb-4">{doc.experience}</p>

                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full flex items-center gap-2"
                    onClick={() => openBooking(doc.name)}
                  >
                    <MedicalServices />
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Dialog
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Book Appointment {bookingDoctor ? `with ${bookingDoctor}` : ""}
        </DialogTitle>
        <DialogContent dividers>
          <div className="flex flex-col gap-4 py-2">
            {bookingError ? <Alert severity="error">{bookingError}</Alert> : null}

            <TextField
              label="Patient Name"
              fullWidth
              value={bookingForm.patient}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, patient: e.target.value })
              }
            />

            <TextField
              type="date"
              label="Date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={bookingForm.date}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, date: e.target.value })
              }
            />

            <TextField
              type="time"
              label="Time"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={bookingForm.time}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, time: e.target.value })
              }
            />

            <TextField
              label="Notes (optional)"
              fullWidth
              multiline
              minRows={3}
              value={bookingForm.notes}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, notes: e.target.value })
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBookingOpen(false)} disabled={bookingLoading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={submitBooking}
            disabled={bookingLoading}
          >
            {bookingLoading ? "Booking..." : "Confirm Booking"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
