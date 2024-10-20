import React, { useState } from "react";

const CampaignManagementPage = () => {
  const [campaigns] = useState([
    { id: 1, name: "YouTube Growth", status: "Active", progress: 65 },
    { id: 2, name: "Instagram Likes", status: "Completed", progress: 100 },
    { id: 3, name: "Blog Views", status: "Active", progress: 40 },
  ]);

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen p-8 mt-14">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
        Campaign Management
      </h2>

      {/* Active Campaigns List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">
              {campaign.name}
            </h3>
            <p
              className={`text-sm mb-2 ${
                campaign.status === "Completed"
                  ? "text-green-500"
                  : "text-blue-500"
              }`}
            >
              {campaign.status}
            </p>
            <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className={`${
                  campaign.status === "Completed"
                    ? "bg-green-500"
                    : "bg-blue-500"
                } h-4 rounded-full transition-all duration-500`}
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignManagementPage;
