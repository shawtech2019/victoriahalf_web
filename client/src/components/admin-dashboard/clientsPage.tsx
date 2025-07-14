import React from "react";
import { Client, Job } from "../contants/types/clientTypes";

const mockClients: Client[] = [
  {
    id: "1",
    name: "Acme Corp",
    jobs: [
      { id: "j1", title: "Tax Filing Q1", description: "Quarterly tax filing.", status: "Pending" },
      { id: "j2", title: "Payroll Setup", description: "Set up monthly payroll system.", status: "In Progress" },
      { id: "j3", title: "Audit Report", description: "Conduct internal audit.", status: "Completed" },
    ],
  },
  {
    id: "2",
    name: "Beta LLC",
    jobs: [
      { id: "j4", title: "Expense Review", description: "Review past 6 months' expenses.", status: "In Progress" },
      { id: "j5", title: "VAT Registration", description: "Handle VAT registration process.", status: "Pending" },
    ],
  },
  {
    id: "3",
    name: "Gamma Inc",
    jobs: [
      { id: "j6", title: "Year-End Financials", description: "Prepare year-end statements.", status: "Completed" },
    ],
  },
  {
    id: "4",
    name: "Delta Co",
    jobs: [],
  },
];

const ClientsPage: React.FC = () => {
  const totalJobs = mockClients.reduce((sum, client) => sum + client.jobs.length, 0);

  return (
    <div className="p-6 max-w-6xl mt-[4rem] mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#004aac] font-inter">Clients Overview</h1>

      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <p className="text-[#000000] text-lg">
          <strong>Total Jobs Being Managed:</strong>{" "}
          <span className="text-blue-600 font-semibold">{totalJobs}</span>
        </p>
      </div>

      {mockClients.map((client) => (
        <div key={client.id} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{client.name}</h2>

          {client.jobs.length === 0 ? (
            <p className="text-gray-500 italic mb-4">No jobs assigned yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {client.jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-medium text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{job.description}</p>
                  <span
                    className={`inline-block mt-2 text-xs font-semibold px-2 py-1 rounded-full ${
                      job.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : job.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ClientsPage;
