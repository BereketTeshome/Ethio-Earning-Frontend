import React from "react";
import PaymentTransactionsTable from "./PaymentTransactionsTable";
import UserManagementTable from "./UserManagementTable";
import PieChartSection from "./PieChartSection";

const AdminDashboard = () => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen justify-center p-8 mt-10">
      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Total Users
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            1,245
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Tasks Completed
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            980
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            ETB Payments
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            ETB 45,500
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            USD Payments
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            $1,230
          </p>
        </div>
      </div>

      {/* User Management Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          User Management
        </h2>
        <UserManagementTable />
      </div>

      {/* Payment Management Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Payment Transactions
        </h2>
        <PaymentTransactionsTable />
      </div>

      {/* Pie Chart Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Payments Distribution
        </h2>
        <PieChartSection />
      </div>
    </div>
  );
};

export default AdminDashboard;
