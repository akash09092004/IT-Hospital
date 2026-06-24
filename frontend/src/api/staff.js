import api from "./client";
import { getAuthHeaders } from "./utils";

export const listStaff = () =>
  api.get("/api/staff", {
    headers: getAuthHeaders(),
  });

export const createStaff = (data) =>
  api.post("/api/staff", data, {
    headers: getAuthHeaders(),
  });

export const updateStaff = (id, data) =>
  api.put(`/api/staff/${id}`, data, {
    headers: getAuthHeaders(),
  });

export const deleteStaff = (id) =>
  api.delete(`/api/staff/${id}`, {
    headers: getAuthHeaders(),
  });
