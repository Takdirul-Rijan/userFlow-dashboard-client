import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Projects", path: "/dashboard/projects" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-gray-200"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
