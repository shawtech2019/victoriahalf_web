// src/constants/types/InvoiceTypes.ts
export interface Invoice {
  id: string;
  clientName: string;
  amount: number;
  issuedDate: string;
  dueDate: string;
  status: "Paid" | "Pending" | "Overdue";
}
