"use client";
import { useState } from "react";
import {
  FaUserCircle,
  FaCoins,
  FaTasks,
  FaWallet,
  FaBell,
} from "react-icons/fa";

export default function EarnerSettings() {
  // State for toggling notification preferences and tracking tasks
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Chapa");
  const [profilePicture, setProfilePicture] = useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-4xl mt-6 mx-auto p-6 space-y-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Page Title */}
      <div className="text-3xl font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
        <FaUserCircle />
        <h1>Earner Settings</h1>
      </div>

      {/* Profile Section */}
      <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Profile Settings
        </h2>
        <div className="flex space-x-6 items-center">
          {/* Profile Picture */}
          <div className="relative w-24 h-24 rounded-full border-2 border-blue-500 overflow-hidden">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="text-gray-400 w-full h-full" />
            )}
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              onChange={handleFileUpload}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-200
                dark:hover:file:bg-gray-600"
            />
          </label>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="johndoe@example.com"
            />
          </div>
        </div>
      </section>

      {/* Task Management Section */}
      <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Task Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Completed Tasks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have completed 12 tasks this week.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Pending Tasks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have 3 pending tasks awaiting verification.
            </p>
          </div>
        </div>
      </section>

      {/* Coin to Currency Conversion Section */}
      <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Earnings and Payments
        </h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <FaCoins className="text-yellow-500" />
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              Coins: 1,200
            </p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Convert to ETB/USD
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Payment Method
          </h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-2 p-2 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Chapa">Chapa</option>
            <option value="Paypal">Paypal</option>
          </select>
        </div>
      </section>

      {/* Notification Preferences */}
      <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Notification Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-800 dark:text-white">Email Notifications</p>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="h-6 w-6 text-blue-600 rounded focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 dark:text-white">SMS Notifications</p>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
              className="h-6 w-6 text-blue-600 rounded focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </section>

      {/* Referral System */}
      <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Referral System
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Invite friends to join and earn extra coins!
        </p>
        <div className="flex items-center space-x-2 mt-4">
          <input
            type="text"
            value="https://platform.com/referral/abc123"
            readOnly
            className="p-2 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Copy
          </button>
        </div>
      </section>
    </div>
  );
}
