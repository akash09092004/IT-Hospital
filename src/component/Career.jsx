import React, { useState } from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ElderlyIcon from "@mui/icons-material/Elderly";
import BiotechIcon from "@mui/icons-material/Biotech";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleIcon from "@mui/icons-material/People";
import PsychologyIcon from "@mui/icons-material/Psychology";

export default function Career() {
    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [resume, setResume] = useState(null);

    const handleApply = (job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle file
    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    // Submit Handler
    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill all required fields!");
            return;
        }

        if (!resume) {
            alert("Please upload your resume (PDF).");
            return;
        }

        try {
            // Create FormData for file upload
            const formDataWithFile = new FormData();
            formDataWithFile.append("name", formData.name);
            formDataWithFile.append("email", formData.email);
            formDataWithFile.append("phone", formData.phone);
            formDataWithFile.append("message", formData.message);
            formDataWithFile.append("jobTitle", selectedJob);
            formDataWithFile.append("resume", resume);

            const res = await axios.post(
                "https://691af3a62d8d78557570d735.mockapi.io/careerform",
                formDataWithFile,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            alert("Application Submitted Successfully!");
            setOpen(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setResume(null);
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting application! Please try again.");
        }
    };

    // ============================
    // ALL HOSPITAL JOBS (48 total)
    // ============================

    const jobs = [
        // ---------------- TECHNICAL JOBS ----------------

        { title: "Senior Surgeon", icon: <LocalHospitalIcon />, desc: "Expert in critical surgery, 10+ yrs exp.", type: "Full-Time" },

        { title: "General Physician", icon: <MedicalServicesIcon />, desc: "Diagnose and treat OPD/IPD patients.", type: "Full-Time" },

        { title: "Cardiologist", icon: <LocalHospitalIcon />, desc: "Heart specialist, emergency care.", type: "Full-Time" },

        { title: "Neurologist", icon: <PsychologyIcon />, desc: "Brain & nerve disorders specialist.", type: "Full-Time" },

        { title: "Orthopedic Doctor", icon: <MedicalServicesIcon />, desc: "Bone and joint treatment expert.", type: "Full-Time" },

        { title: "Pediatrician", icon: <ElderlyIcon />, desc: "Child health specialist.", type: "Full-Time" },

        { title: "Anesthesiologist", icon: <MedicalServicesIcon />, desc: "Operation theatre anesthesia expert.", type: "Full-Time" },

        { title: "Radiologist", icon: <BiotechIcon />, desc: "X-Ray, CT Scan, MRI interpretation.", type: "Full-Time" },

        { title: "Dentist", icon: <MedicalServicesIcon />, desc: "Oral & dental specialist.", type: "Part-Time" },

        { title: "Lab Technician", icon: <ScienceIcon />, desc: "Handle lab tests & medical reports.", type: "Full-Time" },

        { title: "Pharmacist", icon: <MedicalServicesIcon />, desc: "Dispense medicines & maintain stock.", type: "Full-Time" },

        { title: "OT Technician", icon: <LocalHospitalIcon />, desc: "Assist in surgeries inside OT.", type: "Full-Time" },

        { title: "X-Ray Technician", icon: <BiotechIcon />, desc: "Perform digital X-ray imaging.", type: "Full-Time" },

        { title: "MRI/CT Technician", icon: <ScienceIcon />, desc: "Operate MRI & CT machines.", type: "Full-Time" },

        { title: "Physiotherapist", icon: <ElderlyIcon />, desc: "Rehabilitation and physical therapy.", type: "Full-Time" },

        { title: "Nursing Officer", icon: <SupportAgentIcon />, desc: "Patient care + emergency support.", type: "Full-Time" },

        { title: "Staff Nurse (ICU)", icon: <SupportAgentIcon />, desc: "Critical patient handling in ICU.", type: "Full-Time" },

        { title: "Ward Nurse", icon: <SupportAgentIcon />, desc: "General ward patient care.", type: "Full-Time" },

        { title: "Dialysis Technician", icon: <ScienceIcon />, desc: "Hemodialysis procedure specialist.", type: "Full-Time" },

        { title: "Blood Bank Technician", icon: <BiotechIcon />, desc: "Blood collection & storage.", type: "Full-Time" },

        { title: "Ambulance Driver", icon: <WorkIcon />, desc: "Transport emergency patients safely.", type: "Full-Time" },

        { title: "Emergency Medical Technician (EMT)", icon: <LocalHospitalIcon />, desc: "Provide pre-hospital emergency care.", type: "Full-Time" },

        // ---------------- NON-TECHNICAL JOBS ----------------

        { title: "Hospital Administrator", icon: <AdminPanelSettingsIcon />, desc: "Manage hospital operations.", type: "Full-Time" },

        { title: "HR Manager", icon: <PeopleIcon />, desc: "Recruitment & staff management.", type: "Full-Time" },

        { title: "Front Desk Executive", icon: <SupportAgentIcon />, desc: "Handle patient registration & queries.", type: "Full-Time" },

        { title: "Receptionist", icon: <SupportAgentIcon />, desc: "Front office handling and appointment booking.", type: "Full-Time" },

        { title: "Billing Executive", icon: <WorkIcon />, desc: "Patient billing, TPA, insurance.", type: "Full-Time" },

        { title: "Cashier", icon: <WorkIcon />, desc: "Payment and invoicing.", type: "Full-Time" },

        { title: "Hospital PRO", icon: <PeopleIcon />, desc: "Patient relations & communication.", type: "Full-Time" },

        { title: "Medical Records Officer", icon: <WorkIcon />, desc: "Maintain patient files & EMR system.", type: "Full-Time" },

        { title: "Hospital IT Support", icon: <EngineeringIcon />, desc: "Software, hardware & networking.", type: "Full-Time" },

        { title: "Ward Manager", icon: <WorkIcon />, desc: "Manage ward staff & schedules.", type: "Full-Time" },

        { title: "Security Guard", icon: <AdminPanelSettingsIcon />, desc: "Hospital security & safety.", type: "Full-Time" },

        { title: "Housekeeping Staff", icon: <WorkIcon />, desc: "Cleaning and sanitation.", type: "Full-Time" },

        { title: "Canteen Manager", icon: <WorkIcon />, desc: "Manage hospital kitchen food service.", type: "Full-Time" },

        { title: "Cook / Chef", icon: <WorkIcon />, desc: "Prepare food for patients & staff.", type: "Full-Time" },

        { title: "Electrician", icon: <EngineeringIcon />, desc: "Handle electrical maintenance.", type: "Full-Time" },

        { title: "Plumber", icon: <EngineeringIcon />, desc: "Water supply & plumbing repairs.", type: "Full-Time" },

        { title: "Hospital Driver", icon: <WorkIcon />, desc: "Transport staff & medical items.", type: "Full-Time" },

        { title: "Laundry Supervisor", icon: <WorkIcon />, desc: "Manage hospital laundry system.", type: "Full-Time" },

        { title: "Sanitation Staff", icon: <WorkIcon />, desc: "Maintain hygiene & waste disposal.", type: "Full-Time" },

        { title: "Store Keeper", icon: <WorkIcon />, desc: "Manage hospital inventory.", type: "Full-Time" },

        { title: "Maintenance Technician", icon: <EngineeringIcon />, desc: "Repair medical equipment & machines.", type: "Full-Time" },

        { title: "Bio-Medical Engineer", icon: <BiotechIcon />, desc: "Maintain hospital biomedical equipment.", type: "Full-Time" },
    ];

    return (
        <div className="py-20 px-6 md:px-20 bg-gray-100">

            <h1 className="text-5xl font-extrabold text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                Career Opportunities
            </h1>

            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4">
                Join IT Hospital and become a part of our mission to deliver world-class medical care.
            </p>

            {/* Job Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">

                {jobs.map((job, i) => (
                    <Card
                        key={i}
                        className="shadow-xl rounded-2xl transform hover:-translate-y-2 transition duration-300"
                        sx={{
                            background: "linear-gradient(135deg, #ffffff, #eef1ff)",
                            borderRadius: "18px",
                        }}
                    >
                        <CardContent>
                            <div className="text-5xl mb-3 text-blue-600">{job.icon}</div>

                            <h2 className="text-2xl font-bold text-blue-700 mb-2">{job.title}</h2>

                            <p className="text-gray-700 mb-4">{job.desc}</p>

                            <p className="font-semibold text-sm text-gray-600 mb-4">
                                Type: <span className="text-blue-700">{job.type}</span>
                            </p>

                            <Button
                                variant="contained"
                                onClick={() => handleApply(job.title)}
                                sx={{
                                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                                    borderRadius: "10px",
                                    padding: "10px 18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Apply Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}

            </div>

            {/* Apply Form */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle className="font-bold text-xl text-blue-700">
                    Apply for {selectedJob}
                </DialogTitle>

                 <DialogContent dividers>
        <div className="flex flex-col gap-4 py-2">

          <TextField
            label="Full Name"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Phone"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* PDF Upload */}
          <Button
            variant="outlined"
            component="label"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "16px",
            }}
          >
            Upload Resume (PDF Only)
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {resume && <p className="text-sm text-green-600">✓ {resume.name}</p>}

          <TextField
            label="Message"
            fullWidth
            multiline
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #4f46e5, #9333ea)",
            fontWeight: "bold",
          }}
          onClick={handleSubmit}
        >
          Submit Application
        </Button>
      </DialogActions>
            </Dialog>
        </div>
    );
}
