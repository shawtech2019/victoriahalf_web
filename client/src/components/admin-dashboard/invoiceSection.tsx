import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Legend,
} from "recharts";

// Mock invoice data
const invoices = [
  { id: "1", clientName: "Acme Corp", amount: 1200, status: "Paid" },
  { id: "2", clientName: "Beta LLC", amount: 950, status: "Pending" },
  { id: "3", clientName: "Gamma Inc", amount: 2000, status: "Overdue" },
  { id: "4", clientName: "Delta Co", amount: 1350, status: "Paid" },
  { id: "5", clientName: "Epsilon Ltd", amount: 800, status: "Pending" },
  { id: "6", clientName: "Zeta Solutions", amount: 1600, status: "Overdue" },
  { id: "7", clientName: "Omega Group", amount: 720, status: "Paid" },
];

// Status color mapping
const statusColors: Record<string, string> = {
  Paid: "#16a34a",
  Pending: "#facc15",
  Overdue: "#dc2626",
};

// Pie chart data (invoice count per status)
const invoiceStatusData = [
  { name: "Paid", value: invoices.filter((inv) => inv.status === "Paid").length },
  { name: "Pending", value: invoices.filter((inv) => inv.status === "Pending").length },
  { name: "Overdue", value: invoices.filter((inv) => inv.status === "Overdue").length },
];

// Bar chart data (amount per client)
const amountPerClientData = invoices.map((inv) => ({
  name: inv.clientName,
  amount: inv.amount,
}));

const CandidateInvoices: React.FC = () => {
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto mt-20 font-inter">
      <h1 className="text-3xl font-bold text-[#004aac] mb-6">Candidate Invoice Dashboard</h1>

      <div className="bg-white shadow-md rounded-lg p-4 mb-8">
        <p className="text-lg">
          <strong>Total Invoiced Amount:</strong>{" "}
          <span className="text-blue-600 font-semibold">${totalAmount.toLocaleString()}</span>
        </p>
      </div>

      {/* Graphs Section */}
      <div className="mb-8 grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-[#004aac]">Invoice Status Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                dataKey="value"
                data={invoiceStatusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {invoiceStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={statusColors[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-[#004aac]">Amount Per Client</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={amountPerClientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#004aac" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Invoice Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{inv.clientName}</h2>
            <p className="text-gray-600">
              Amount:{" "}
              <span className="font-medium text-blue-600">${inv.amount.toLocaleString()}</span>
            </p>
            <p className="text-gray-600">
              Status:{" "}
              <span
                className={`font-semibold ${
                  inv.status === "Paid"
                    ? "text-green-600"
                    : inv.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {inv.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateInvoices;
