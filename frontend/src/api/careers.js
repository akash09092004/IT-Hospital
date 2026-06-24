import api from "./client";
import { getAuthHeaders } from "./utils";

export const submitCareerApplication = (data) =>
  api.post("/api/careers", data);

export const listCareerApplications = () =>
  api.get("/api/careers", {
    headers: getAuthHeaders(),
  });

export const updateCareerApplicationStatus = (id, status) =>
  api.put(
    `/api/careers/${id}`,
    { status },
    {
      headers: getAuthHeaders(),
    }
  );

export const deleteCareerApplication = (id) =>
  api.delete(`/api/careers/${id}`, {
    headers: getAuthHeaders(),
  });
