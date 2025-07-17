import React, { useState } from "react";

const DeleteAdminSection: React.FC = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      // TODO: Replace this with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Candidate profile deleted successfully.");
      // Redirect or update UI after deletion
    } catch (error) {
      alert("An error occurred while deleting the profile.");
    } finally {
      setIsDeleting(false);
      setConfirmDelete(false);
    }
  };

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-[28px] font-semibold font-inter text-red-600 mb-2">
        Warning
      </h2>
      <p className="text-sm text-gray-700 font-inter mb-6 max-w-xl">
        Deleting a candidate profile is permanent and cannot be undone.
        All associated data including resume, profile details, and preferences will be removed.
        Proceed only if you're absolutely sure.
      </p>

      {!confirmDelete ? (
        <button
          onClick={() => setConfirmDelete(true)}
          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition duration-150"
        >
          Delete Candidate Profile
        </button>
      ) : (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <p className="text-red-700 font-medium mb-4">
            Are you sure you want to permanently delete this candidate profile?
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-60 ease-in duration-300"
            >
              {isDeleting ? "Deleting..." : "Yes, Delete"}
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 ease-in duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAdminSection;
