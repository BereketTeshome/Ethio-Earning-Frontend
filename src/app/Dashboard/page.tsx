"use client";
import DashboardNav from "@/components/DashboardNav";
import EarnerSidebar from "@/components/EarnerComponents/EarnerSidebar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const EarnerPage = () => {
  // Manage sidebar open/close state
  const component = useSelector((state: any) => state.component.component);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const role = "earner";

  return (
    <div>
      {/* Pass toggleSidebar to DashboardNav */}
      <DashboardNav toggleSidebar={toggleSidebar} />

      {/* Pass isSidebarOpen state to Sidebar */}
      {role === "earner" ? (
        <EarnerSidebar isSidebarOpen={isSidebarOpen} />
      ) : (
        <Sidebar isSidebarOpen={isSidebarOpen} />
      )}

      <div
        className={`p-10 pt-16 ${
          isSidebarOpen ? "sm:ml-64" : "ml-0"
        } transition-all`}
      >
        {component}
      </div>
    </div>
  );
};

export default EarnerPage;
