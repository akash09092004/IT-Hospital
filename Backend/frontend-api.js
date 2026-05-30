import axios from "axios";

// Base URL - backend se connect karo
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ Har request mein auto token add karo
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ===== AUTH APIs =====

// Signup
export const signup = (data) => API.post("/auth/signup", data);

// Login
export const login = async (data) => {
  const res = await API.post("/auth/signin", data);
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("currentUser", JSON.stringify(res.data.user));
  return res.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
};

// Dashboard
export const getDashboard = () => API.get("/auth/dashboard");

// Profile
export const getProfile = () => API.get("/auth/profile");

// Contact form submit
export const contact = (data) => API.post("/contact", data);

// ===== DOCTORS APIs =====
export const getDoctors = () => API.get("/doctors");
export const getDoctorById = (id) => API.get(`/doctors/${id}`);
export const addDoctor = (data) => API.post("/doctors", data);
export const updateDoctor = (id, data) => API.put(`/doctors/${id}`, data);
export const deleteDoctor = (id) => API.delete(`/doctors/${id}`);

// ===== PATIENTS APIs =====
export const getPatients = () => API.get("/patients");
export const getPatientById = (id) => API.get(`/patients/${id}`);
export const addPatient = (data) => API.post("/patients", data);
export const updatePatient = (id, data) => API.put(`/patients/${id}`, data);
export const deletePatient = (id) => API.delete(`/patients/${id}`);

// ===== APPOINTMENTS APIs =====
export const getAppointments = () => API.get("/appointments");
export const addAppointment = (data) => API.post("/appointments", data);
export const updateAppointment = (id, data) => API.put(`/appointments/${id}`, data);
export const deleteAppointment = (id) => API.delete(`/appointments/${id}`);

// ===== STAFF APIs =====
export const getStaff = () => API.get("/staff");
export const addStaff = (data) => API.post("/staff", data);
export const updateStaff = (id, data) => API.put(`/staff/${id}`, data);
export const deleteStaff = (id) => API.delete(`/staff/${id}`);

// ===== BILLING APIs =====
export const getBillings = () => API.get("/billing");
export const getBillingSummary = () => API.get("/billing/summary");
export const addBilling = (data) => API.post("/billing", data);
export const updateBilling = (id, data) => API.put(`/billing/${id}`, data);
export const deleteBilling = (id) => API.delete(`/billing/${id}`);
