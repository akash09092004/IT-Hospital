import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AppointmentsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/doctors", { replace: true });
  }, [navigate]);

  return (
    <div className="p-6">
      <p className="text-center text-gray-700">
        Redirecting to Doctors for appointment booking...
      </p>
    </div>
  );
}
