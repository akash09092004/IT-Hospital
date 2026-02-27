import React, { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

export default function Query() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    let res = await fetch(
      "https://691af3a62d8d78557570d735.mockapi.io/hospital"
    );
    let result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">

      {/* ---------- TITLE ---------- */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold flex items-center gap-3">
          📬 User Queries
        </h1>

        <button
          onClick={fetchData}
          className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg shadow-purple-500/40 transition"
        >
          <RefreshIcon />
        </button>
      </div>

      {/* ---------- SEARCH BOX ---------- */}
      <input
        type="text"
        placeholder="Search by name or email…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl text-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 mb-10 focus:ring-2 focus:ring-purple-500 outline-none"
      />

      {/* ---------- QUERY CARDS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data
          .filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.email.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-xl hover:scale-[1.02] hover:shadow-purple-900/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <PersonIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold text-white">
                  {item.name}
                </h2>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <EmailIcon className="text-blue-400" />
                <p className="text-gray-300">{item.email}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.message}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
