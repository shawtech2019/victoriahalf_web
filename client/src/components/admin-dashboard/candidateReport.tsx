import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const candidateData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  appliedRole: "Senior Accountant",
  status: "In Review",
};

const reportStats = [
  { label: "Interviews Completed", value: 3 },
  { label: "Assessments Taken", value: 2 },
  { label: "Feedback Received", value: 5 },
];

const feedbackData = [
  { name: "Positive", value: 60 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 15 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const CandidateReport: React.FC = () => {
  return (
    <div className="p-6 mt-[4rem] max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#004aac] mb-6">
        Candidate Report: {candidateData.name}
      </h1>

      {/* Candidate Info */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <p className="text-lg font-medium text-gray-800">
          <strong>Email:</strong> {candidateData.email}
        </p>
        <p className="text-lg font-medium text-gray-800">
          <strong>Role Applied:</strong> {candidateData.appliedRole}
        </p>
        <p className="text-lg font-medium text-gray-800">
          <strong>Status:</strong>{" "}
          <span className="text-blue-600 font-semibold">
            {candidateData.status}
          </span>
        </p>
      </div>

      {/* Report Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {reportStats.map((item) => (
          <div
            key={item.label}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-700">{item.label}</h3>
            <p className="text-3xl text-[#004aac] mt-2 font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Feedback Pie Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Feedback Summary
        </h2>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={feedbackData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {feedbackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CandidateReport;
