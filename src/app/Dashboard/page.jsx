"use client";
import DashboardNav from "@/components/DashboardNav";
import EarnerSidebar from "@/components/EarnerComponents/EarnerSidebar";
import Sidebar from "@/components/Sidebar";
import InvestorSidebar from "@/components/InvestorComponents/InvestorSidebar"; // Import InvestorSidebar
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Define the possible roles
// type Role = "earner" | "admin" | "investor";

const EarnerPage = () => {
  // Manage sidebar open/close state
  const component = useSelector((state) => state.component.component);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const role = "admin"; // Set role dynamically based on actual logic

  return (
    <div>
      {/* Pass toggleSidebar to DashboardNav */}
      <DashboardNav toggleSidebar={toggleSidebar} />

      {/* Display the appropriate sidebar based on the role */}
      {role === "earner" && <EarnerSidebar isSidebarOpen={isSidebarOpen} />}
      {role === "investor" && <InvestorSidebar isSidebarOpen={isSidebarOpen} />}
      {role === "admin" && <Sidebar isSidebarOpen={isSidebarOpen} />}

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
