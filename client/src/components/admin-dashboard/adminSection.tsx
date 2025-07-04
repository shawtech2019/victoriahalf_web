import { useState } from "react";
import {
  MdDashboard,
  MdPeople,
  MdDescription,
  MdBarChart,
  MdSettings,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/admin-board" },
    { name: "Profile", icon: <MdPeople />, path: "/profile-page" },
    { name: "Clients", icon: <MdPeople />, path: "/clients" },
    { name: "Invoices", icon: <MdDescription />, path: "/invoices" },
    { name: "Reports", icon: <MdBarChart />, path: "/reports" },
    { name: "Settings", icon: <MdSettings />, path: "/settings" },
    { name: "Settings", icon: <MdSettings />, path: "/settings" },

  ];

  return (
    <div className="flex h-screen bg-gray-100 mt-[4rem]">
      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <h2 className="text-2xl font-semibold text-center">Mr Shaw</h2>
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
        <button className="flex items-center w-full py-2.5 px-4 hover:bg-blue-700">
          <MdLogout className="mr-3 text-xl" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <button
          className="md:hidden mb-4 p-2 bg-blue-800 text-white rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
        </button>
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

export default Dashboard;
