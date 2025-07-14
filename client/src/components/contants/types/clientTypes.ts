export interface Job {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
}

export interface Client {
  id: string;
  name: string;
  jobs: Job[];
}
