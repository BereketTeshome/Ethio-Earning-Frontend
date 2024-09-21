"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { FaHome, FaCog, FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { changeComponent } from "../store/ComponentSlice"; // import your action

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const dispatch = useDispatch();

  const sidebarItems = [
    { label: "Dashboard", icon: <FaHome />, action: "dashboard" },
    { label: "Settings", icon: <FaCog />, action: "settings" },
    {
      label: "Earnings",
      icon: <FaMoneyBillAlt />,
      action: "earnings",
    },
    {
      label: "Back to Home",
      icon: <RiArrowGoBackLine />,
      href: "/",
      action: "menu",
    },
  ];

  const handleItemClick = (action: string) => {
    dispatch(changeComponent(action)); // dispatch the redux action to change components
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between`}
    >
      <div className="px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleItemClick(item.action)}
                className="flex items-center mt-6 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-[#6366F] dark:hover:bg-gray-700 cursor-pointer"
              >
                <span className="flex-shrink-0 text-lg">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-3 py-4">
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-white bg-[#6366F1] rounded-lg hover:bg-blue-700"
            >
              <span className="flex-shrink-0 text-lg">
                <FaSignOutAlt />
              </span>
              <span className="ml-3">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
