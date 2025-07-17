import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Clients", value: 42 },
  { label: "Pending Invoices", value: 15 },
  { label: "Revenue", value: "$24,500" },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 4500 },
  { month: "Apr", revenue: 5000 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 8000 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 mt-[4rem] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#004aac] mb-8">Welcome, Shaw</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
            <p className="text-3xl text-blue-700 mt-2 font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#004aac" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
