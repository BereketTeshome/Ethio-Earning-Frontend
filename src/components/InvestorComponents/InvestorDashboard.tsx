import React, { useState } from "react";

const InvestorDashboard = () => {
  const [youtubeProgress, setYoutubeProgress] = useState(65); // Example progress for YouTube subscribers
  const [instagramProgress, setInstagramProgress] = useState(40); // Example progress for Instagram engagement
  const [blogProgress, setBlogProgress] = useState(75); // Example progress for blog views

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen justify-center p-8 mt-14">
      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Active Campaigns
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            3
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            YouTube Subscriber Goals
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            5000 Subscribers
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Instagram Engagement Goals
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            2000 Likes
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            Blog Post View Goals
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            10,000 Views
          </p>
        </div>
      </div>

      {/* Progress Tracking Section */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Advertisement Campaign Progress
        </h2>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          {/* YouTube Subscription Progress */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
            YouTube Subscriber Goal - 5000 Subscribers
          </h3>
          <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-4">
            <div
              className="bg-blue-500 h-6 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${youtubeProgress}%` }}
            ></div>
            <span className="absolute left-1/2 top-0 transform -translate-x-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {youtubeProgress}%
            </span>
          </div>
          <p className="mb-8 text-gray-800 dark:text-gray-300">
            3,250 out of 5,000 subscribers achieved!
          </p>

          {/* Instagram Engagement Progress */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
            Instagram Engagement Goal - 2000 Likes
          </h3>
          <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-4">
            <div
              className="bg-pink-500 h-6 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${instagramProgress}%` }}
            ></div>
            <span className="absolute left-1/2 top-0 transform -translate-x-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {instagramProgress}%
            </span>
          </div>
          <p className="mb-8 text-gray-800 dark:text-gray-300">
            800 out of 2,000 likes achieved!
          </p>

          {/* Blog Views Progress */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
            Blog Post View Goal - 10,000 Views
          </h3>
          <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-4">
            <div
              className="bg-green-500 h-6 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${blogProgress}%` }}
            ></div>
            <span className="absolute left-1/2 top-0 transform -translate-x-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {blogProgress}%
            </span>
          </div>
          <p className="text-gray-800 dark:text-gray-300">
            7,500 out of 10,000 views achieved!
          </p>
        </div>
      </div>

      {/* Referral System Section */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Referral System
        </h2>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <p className="text-gray-800 dark:text-gray-300 mb-4">
            Refer new advertisers and grow your influence! Share your referral
            link below:
          </p>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-gray-800 dark:text-gray-300 mb-4">
            https://example.com/referral/investor123
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Copy Referral Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
