import axios from "axios";

export const signup = (data) => axios.post("/api/auth/signup", data);
export const contact = (data) => axios.post("/api/auth/register", data);

export const login = async (data) => {
  const res = await axios.post("/api/auth/signin", data);

  localStorage.setItem("token", res.data.token);

  return res.data;
};

export const getDashboard = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get("/api/auth/dashboard", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.data;
};
