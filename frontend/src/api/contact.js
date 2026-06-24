import api from "./client";
import { getAuthHeaders } from "./utils";

export const createContact = (data) => api.post("/api/contact", data);

export const listContacts = () =>
  api.get("/api/contact", {
    headers: getAuthHeaders(),
  });

export const updateContactStatus = (id, status) =>
  api.put(
    `/api/contact/${id}`,
    { status },
    {
      headers: getAuthHeaders(),
    }
  );

export const deleteContact = (id) =>
  api.delete(`/api/contact/${id}`, {
    headers: getAuthHeaders(),
  });
