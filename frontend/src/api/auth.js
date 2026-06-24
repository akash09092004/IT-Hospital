import api from "./client";

export const signup = (data) => api.post("/api/auth/signup", data);
export const contact = (data) => api.post("/api/auth/register", data);

export const login = async (data) => {
  const res = await api.post("/api/auth/signin", data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("currentUser", JSON.stringify(res.data.user));

  return res.data;
};

export const getDashboard = async () => {
  const token = localStorage.getItem("token");

  const res = await api.get("/api/auth/dashboard", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await api.get("/api/auth/profile", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.data;
};
