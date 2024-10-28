"use client";
import DashboardNav from "@/components/DashboardNav";
import EarnerSidebar from "@/components/EarnerComponents/EarnerSidebar";
import Sidebar from "@/components/Sidebar";
import InvestorSidebar from "@/components/InvestorComponents/InvestorSidebar";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const EarnerPage = () => {
  // Manage sidebar open/close state
  const component = useSelector((state) => state.component.component);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [role, setRole] = useState(null);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Retrieve the role from localStorage
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

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
