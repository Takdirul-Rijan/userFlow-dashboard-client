import React from "react";
import UserManagement from "./UserManagement";

const DashboardContent = () => {
  return (
    <div className="flex-1 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
      <p className="text-gray-700 mb-8">
        Below is the user management panel. This demonstrates API handling,
        state management, search, and delete functionality.
      </p>
      <UserManagement />
    </div>
  );
};

export default DashboardContent;
