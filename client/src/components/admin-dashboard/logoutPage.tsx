import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // Example: Clearing user session or token
    localStorage.clear();
    sessionStorage.clear();
    // Redirect to login page or home page
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-semibold font-inter mb-4">Logout</h1>
        <p className="text-gray-700 mb-4">
          Are you sure you want to log out?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleLogout}
            className="bg-[#004aac] text-white py-2 px-4 rounded hover:bg-[#e1b04a]"
          >
            Logout
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#ac0003] text-[#fff] py-2 px-4 rounded hover:bg-gray-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
