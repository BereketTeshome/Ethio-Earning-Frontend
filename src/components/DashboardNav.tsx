"use client";
import React, { useState } from "react";
import ThemeChanger from "./DarkSwitch";

// Define the props interface
interface DashboardNavProps {
  toggleSidebar: () => void; // Assuming toggleSidebar is a function
}

const DashboardNav: React.FC<DashboardNavProps> = ({ toggleSidebar }) => {
  // State for the profile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { label: "Dashboard", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Earnings", href: "#" },
    { label: "Sign out", href: "#" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between relative">
        {" "}
        {/* Added relative here */}
        <div className="flex items-center">
          {/* Toggle Sidebar */}
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden dark:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button>
          <a href="#" className="flex ms-2">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="Logo"
            />
            <span className="text-xl font-semibold dark:text-white">
              Ethio Earning
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <button
            className="flex text-sm bg-gray-800 rounded-full mr-4 focus:ring-4 dark:focus:ring-gray-600"
            onClick={toggleDropdown}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
          <ThemeChanger />
          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-10 right-4 z-50 my-4 bg-white divide-y rounded shadow dark:bg-gray-700">
              {" "}
              {/* Changed to absolute */}
              <div className="px-4 py-3">
                <p className="text-sm dark:text-white">Bereket Teshome</p>
                <p className="text-sm font-medium truncate dark:text-gray-300">
                  bereket@gmail.com
                </p>
              </div>
              <ul className="py-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
