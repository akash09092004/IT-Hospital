import api from "./client";
import { getAuthHeaders } from "./utils";

export const listPatients = () =>
  api.get("/api/patients", {
    headers: getAuthHeaders(),
  });

export const createPatient = (data) =>
  api.post("/api/patients", data, {
    headers: getAuthHeaders(),
  });

export const updatePatient = (id, data) =>
  api.put(`/api/patients/${id}`, data, {
    headers: getAuthHeaders(),
  });

export const deletePatient = (id) =>
  api.delete(`/api/patients/${id}`, {
    headers: getAuthHeaders(),
  });
