import React from 'react';
import { FaUserShield, FaLock, FaRegChartBar, FaCog, FaBell } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineSafety } from 'react-icons/ai';

const AdminSettingsPage = () => {
  const settingsSections = [
    {
      title: "User Management",
      description: "Manage users, ban/unban users, edit roles, and more.",
      icon: <FaUserShield />,
      link: "/admin/user-management",
    },
    {
      title: "Payment Settings",
      description: "Manage payment gateways, track transactions and configure Stripe and Chapa settings.",
      icon: <FaLock />,
      link: "/admin/payment-settings",
    },
    {
      title: "Rule Management",
      description: "Update and manage platform rules and regulations.",
      icon: <AiOutlineSetting />,
      link: "/admin/rule-management",
    },
    {
      title: "Security Settings",
      description: "Enable two-factor authentication, manage password policies.",
      icon: <AiOutlineSafety />,
      link: "/admin/security-settings",
    },
    {
      title: "Notification Settings",
      description: "Configure email notifications using SendGrid, Mailgun.",
      icon: <FaBell />,
      link: "/admin/notification-settings",
    },
    {
      title: "Analytics",
      description: "Track user behavior, website traffic, and performance metrics.",
      icon: <FaRegChartBar />,
      link: "/admin/analytics",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen mt-14">
      <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        Admin Settings
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Manage all essential settings of the platform from this page. Customize, update, and secure your platform in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {settingsSections.map((section, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl text-blue-600 mr-3">{section.icon}</span>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {section.description}
            </p>
            <a href={section.link} className="text-blue-600 dark:text-blue-400 hover:underline">
              Go to {section.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSettingsPage;
