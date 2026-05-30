<<<<<<< HEAD
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const token = localStorage.getItem('token')
    if(!token){
        return <Navigate to="/login" replace/>
    }
    return children
}
=======
﻿import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem("token");
  const currentUser = localStorage.getItem("currentUser");
  const user = currentUser ? JSON.parse(currentUser) : null;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
>>>>>>> 5c6c36bfa0044bb29ff1e488d287aec5d0784622
