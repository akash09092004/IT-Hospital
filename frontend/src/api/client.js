import axios from "axios";

const rawBaseUrl = import.meta.env.VITE_API_URL?.trim();
const BASE_URL = rawBaseUrl
  ? rawBaseUrl.replace(/\/api\/?$/, "").replace(/\/$/, "")
  : "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;