// src/components/admin-dashboard/CandidateInvoices.tsx
import React, { useState } from "react";
import { Invoice } from "../contants/types/InvoiceTypes";

const mockInvoices: Invoice[] = [
  {
    id: "inv001",
    clientName: "Acme Corp",
    amount: 1200,
    issuedDate: "2025-07-01",
    dueDate: "2025-07-15",
    status: "Pending",
  },
  {
    id: "inv002",
    clientName: "Beta LLC",
    amount: 950,
    issuedDate: "2025-06-15",
    dueDate: "2025-06-30",
    status: "Paid",
  },
  {
    id: "inv003",
    clientName: "Gamma Inc",
    amount: 1700,
    issuedDate: "2025-06-01",
    dueDate: "2025-06-10",
    status: "Overdue",
  },
];

const CandidateInvoices: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);

  const markAsPaid = (id: string) => {
    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === id ? { ...invoice, status: "Paid" } : invoice
      )
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto mt-[4rem]">
      <h2 className="text-2xl font-bold mb-6 text-[#004aac]">Candidate Invoices</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {invoice.clientName}
            </h3>
            <p className="text-sm text-gray-600">Invoice ID: {invoice.id}</p>
            <p className="mt-2">
              <strong>Amount:</strong>{" "}
              <span className="text-blue-600 font-medium">${invoice.amount}</span>
            </p>
            <p>
              <strong>Issued:</strong> {invoice.issuedDate}
            </p>
            <p>
              <strong>Due:</strong> {invoice.dueDate}
            </p>

            <span
              className={`inline-block mt-3 text-xs font-bold px-2 py-1 rounded-full ${
                invoice.status === "Paid"
                  ? "bg-green-100 text-green-700"
                  : invoice.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {invoice.status}
            </span>

            {invoice.status !== "Paid" && (
              <button
                onClick={() => markAsPaid(invoice.id)}
                className="block mt-4 w-full bg-[#004aac] hover:bg-blue-700 text-white text-sm py-2 px-4 rounded transition"
              >
                Mark as Paid
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateInvoices;
