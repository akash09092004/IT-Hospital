import axios from "axios";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
};

export const createAppointment = (data) =>
  axios.post("/api/appointments", data, {
    headers: getAuthHeaders(),
  });

export const listAppointments = () =>
  axios.get("/api/appointments", {
    headers: getAuthHeaders(),
  });

export const updateAppointment = (id, data) =>
  axios.put(`/api/appointments/${id}`, data, {
    headers: getAuthHeaders(),
  });

export const deleteAppointment = (id) =>
  axios.delete(`/api/appointments/${id}`, {
    headers: getAuthHeaders(),
  });
