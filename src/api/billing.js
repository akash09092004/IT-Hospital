import axios from "axios";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const listBillings = () =>
  axios.get("/api/billing", {
    headers: getAuthHeaders(),
  });

export const createBilling = (data) =>
  axios.post("/api/billing", data, {
    headers: getAuthHeaders(),
  });

export const deleteBillingById = (id) =>
  axios.delete(`/api/billing/${id}`, {
    headers: getAuthHeaders(),
  });
