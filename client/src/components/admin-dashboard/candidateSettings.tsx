import React, { useState } from "react";

const CandidateSettings: React.FC = () => {
  const [accountStatus, setAccountStatus] = useState<"active" | "suspended">("active");
  const [preferredRole, setPreferredRole] = useState("Accountant");
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const handleSave = () => {
    // Placeholder for API integration
    console.log("Saving settings:", {
      accountStatus,
      preferredRole,
      emailUpdates,
      notifications,
    });
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-[4rem] p-10 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-semibold text-[#004aac] mb-8">
        Candidate Settings
      </h1>

      {/* Account Details */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Account Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Account Status */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Account Status
              </label>
              <select
                value={accountStatus}
                onChange={(e) =>
                  setAccountStatus(e.target.value as "active" | "suspended")
                }
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#004aac] focus:border-[#004aac]"
              >
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            {/* Preferred Role */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Preferred Role
              </label>
              <input
                type="text"
                value={preferredRole}
                onChange={(e) => setPreferredRole(e.target.value)}
                placeholder="e.g., Senior Auditor"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#004aac] focus:border-[#004aac]"
              />
            </div>
          </div>
        </div>

        {/* Communication Preferences */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Communication Preferences
          </h2>
          <div className="space-y-4 mt-2">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={() => setEmailUpdates(!emailUpdates)}
                className="mt-1 h-4 w-4 text-[#004aac] border-gray-300 rounded focus:ring-[#004aac]"
              />
              <label className="text-gray-700">
                Receive job alerts, updates, and newsletters via email
              </label>
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="mt-1 h-4 w-4 text-[#004aac] border-gray-300 rounded focus:ring-[#004aac]"
              />
              <label className="text-gray-700">
                Enable in-app and push notifications
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-[#004aac] text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSettings;
