import React, { useState } from "react";

const InvestorSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="relative min-h-screen p-8">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Investor Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Account Settings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Profile Information */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Profile Information
          </h3>
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-gray-300"
              value="John Doe"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-gray-300"
              value="john.doe@example.com"
            />
          </div>
        </div>

        {/* Subscription Management */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Subscription & Packages
          </h3>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Current Package:{" "}
              <strong>YouTube Growth - 5000 Subscribers</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Next Billing Date: <strong>Nov 25, 2024</strong>
            </p>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Manage Subscription
          </button>
        </div>
      </div>

      {/* Notifications & Security Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Email Notifications */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Notifications
          </h3>
          <div className="flex items-center mt-4">
            <label className="text-gray-700 dark:text-gray-300 mr-2">
              Email Notifications
            </label>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Security
          </h3>
          <div className="flex items-center mt-4">
            <label className="text-gray-700 dark:text-gray-300 mr-2">
              Two-Factor Authentication
            </label>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={twoFactorAuth}
              onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            />
          </div>
        </div>
      </div>

      {/* Referral System Section */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
          Referral System
        </h3>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Share your referral link:
        </p>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 mt-4 rounded-lg text-gray-800 dark:text-gray-300">
          https://example.com/referral/investor123
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Copy Referral Link
        </button>
      </div>
    </div>
  );
};

export default InvestorSettings;
