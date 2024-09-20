"use client";
import React from "react";
import { FaHome, FaCog, FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";

// Define the props interface
interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const sidebarItems = [
    { label: "Dashboard", icon: <FaHome />, href: "#" },
    { label: "Settings", icon: <FaCog />, href: "#" },
    { label: "Earnings", icon: <FaMoneyBillAlt />, href: "#" },
    { label: "Sign out", icon: <FaSignOutAlt />, href: "#" },
    { label: "Back to menu", icon: <FaSignOutAlt />, href: "/" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
    >
      <div className="px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center mt-6 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 text-lg">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
