import api from "./client";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const listBillings = () =>
  api.get("/api/billing", {
    headers: getAuthHeaders(),
  });

export const createBilling = (data) =>
  api.post("/api/billing", data, {
    headers: getAuthHeaders(),
  });

export const deleteBillingById = (id) =>
  api.delete(`/api/billing/${id}`, {
    headers: getAuthHeaders(),
  });
