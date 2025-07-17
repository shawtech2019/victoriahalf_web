import React, { JSX, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaUser, FaUsers, FaBars} from 'react-icons/fa6';
import {
  MdDashboard,
  MdPeople,
  MdDescription,
  MdBarChart,
  MdSettings,
  MdLogout,
  MdDelete,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

// Define interface for menu items
interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

// Menu items array
const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: <MdDashboard />, path: '/admin-dashboard' },
  { name: 'Profile', icon: <FaUser />, path: '/profile-page' },
  { name: 'Clients', icon: <FaUsers />, path: '/clients' },
  { name: 'Invoices', icon: <MdDescription />, path: '/invoices' },
  { name: 'Reports', icon: <MdBarChart />, path: '/reports' },
  { name: 'Settings', icon: <MdSettings />, path: '/settings' },
  { name: 'Delete', icon: <MdDelete />, path: '/delete' },
];

const SideBarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Bar for Mobile */}
      <div className="bg-[#004aac] text-white flex items-center justify-between px-4 py-3 md:hidden fixed w-full top-0 left-0 z-50">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
        <button onClick={toggle}>
          {isOpen ? <FaTimes size={20} color='#ccffff' /> : <FaBars size={20} color='#ffffff' />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white w-64  mt-[4rem] space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}
      >
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-6">
          {/* <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full mb-2 border-2 border-white object-cover"
          /> */}
          <h2 className="text-xl font-semibold font-inter cursor-pointer">Mr Shaw</h2>
        </div>

        {/* Navigation Menu */}
       <nav>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center font-sans py-2.5 px-4 font-bold rounded transition duration-200 ${
                  isActive
                    ? 'bg-blue-700 font-semibold my-2'
                    : 'hover:bg-blue-600 py-2'
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <Link to="/logout">
          <button
            className="flex items-center w-full py-2.5 px-4 font-sans rounded transition duration-200 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            <MdLogout className="mr-3 text-xl" />
            Logout
          </button>
        </Link>
      </div>

      {/* Optional Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={toggle}
        />
      )}
    </>
  );
};

export default SideBarMenu;
