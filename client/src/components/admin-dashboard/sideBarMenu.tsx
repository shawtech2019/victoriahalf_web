import React, { JSX } from 'react';
import {
  MdDashboard,
  MdPeople,
  MdDescription,
  MdBarChart,
  MdSettings,
  MdLogout,
} from 'react-icons/md';

// Define interface for menu items
interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

// Define props interface
interface SideBarMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

// Menu items array with TypeScript typing
const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: <MdDashboard />, path: '/admin-dashboard' },
  { name: 'Profile', icon: <MdPeople />, path: '/profile-page' },
  { name: 'Clients', icon: <MdPeople />, path: '/clients' },
  { name: 'Invoices', icon: <MdDescription />, path: '/invoices' },
  { name: 'Reports', icon: <MdBarChart />, path: '/reports' },
  { name: 'Settings', icon: <MdSettings />, path: '/settings' },
];

const SideBarMenu: React.FC<SideBarMenuProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={`bg-blue-800 text-white w-64 mt-[4rem] space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}
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
      <button
        className="flex items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
        onClick={toggle}
      >
        <MdLogout className="mr-3 text-xl" />
        Logout
      </button>
    </div>
  );
};

export default SideBarMenu;