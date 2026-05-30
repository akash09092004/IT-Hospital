import api from "./client";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
};

export const createAppointment = (data) =>
  api.post("/api/appointments", data, {
    headers: getAuthHeaders(),
  });

export const listAppointments = () =>
  api.get("/api/appointments", {
    headers: getAuthHeaders(),
  });

export const updateAppointment = (id, data) =>
  api.put(`/api/appointments/${id}`, data, {
    headers: getAuthHeaders(),
  });

export const deleteAppointment = (id) =>
  api.delete(`/api/appointments/${id}`, {
    headers: getAuthHeaders(),
  });
