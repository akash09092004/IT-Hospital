import api from "./client";
import { getAuthHeaders } from "./utils";

export const listDoctors = () =>
  api.get("/api/doctors", {
    headers: getAuthHeaders(),
  });

export const createDoctor = (data) =>
  api.post("/api/doctors", data, {
    headers: getAuthHeaders(),
  });

export const updateDoctor = (id, data) =>
  api.put(`/api/doctors/${id}`, data, {
    headers: getAuthHeaders(),
  });

export const deleteDoctor = (id) =>
  api.delete(`/api/doctors/${id}`, {
    headers: getAuthHeaders(),
  });
