import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import SideBarMenu from "./sideBarMenu";

interface AdminLayoutProps {
  element: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ element }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Toggle button for mobile */}
      <button
        className="md:hidden p-3 bg-blue-800 text-white rounded m-2 self-start"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Layout content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBarMenu
          isOpen={isSidebarOpen}
          toggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          {element}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
