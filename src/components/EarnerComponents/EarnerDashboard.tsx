import React from "react";

const EarnerDashboard = () => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen justify-center p-8 mt-14">
      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Completed Tasks
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            25
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Current Coins
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            1,500
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            ETB Conversion
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            ETB 3,000
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            USD Conversion
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            $100
          </p>
        </div>
      </div>

      {/* Task History Section */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Task History
        </h2>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          {/* Example task history, you can map over actual data here */}
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
            <li>Youtube Video Watched - Completed - 100 coins</li>
            <li>10 Accounts Subscribed - 200 coins</li>
            <li>Read a blog - Completed - 150 coins</li>
            {/* More tasks can be listed here */}
          </ul>
        </div>
      </div>

      {/* Coin Conversion Section */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Convert Coins to Currency
        </h2>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <p className="text-gray-800 dark:text-gray-300 mb-4">
            You have <strong>1,500</strong> coins available for conversion.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Convert to ETB
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Convert to USD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnerDashboard;
