import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

 function adminDashboard() {

  return (
    <div className="flex h-screen bg-gray-100 mt-[4rem]">

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6">Welcome, Shaw</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Clients</h3>
            <p className="text-2xl">42</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pending Invoices</h3>
            <p className="text-2xl">15</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-2xl">$24,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminDashboard;