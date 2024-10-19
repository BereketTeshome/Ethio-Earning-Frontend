"use client";
import React, { useState } from "react";

const PackageSelectionPage = () => {
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [customBudget, setCustomBudget] = useState(500); // Example budget amount
  const [calculatedReach, setCalculatedReach] = useState(10000); // Example reach based on budget

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen p-8 mt-14">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
        Select and Customize Your Package
      </h2>

      {/* Predefined Package Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div
          className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg cursor-pointer ${
            selectedPackage === "basic" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => setSelectedPackage("basic")}
        >
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">
            Basic Package
          </h3>
          <p className="text-gray-800 dark:text-gray-300">
            Reach: 10,000 people
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            $500
          </p>
        </div>

        <div
          className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg cursor-pointer ${
            selectedPackage === "premium" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => setSelectedPackage("premium")}
        >
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">
            Premium Package
          </h3>
          <p className="text-gray-800 dark:text-gray-300">
            Reach: 25,000 people
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            $1000
          </p>
        </div>

        <div
          className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg cursor-pointer ${
            selectedPackage === "enterprise" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => setSelectedPackage("enterprise")}
        >
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">
            Enterprise Package
          </h3>
          <p className="text-gray-800 dark:text-gray-300">
            Reach: 50,000 people
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            $2000
          </p>
        </div>
      </div>

      {/* Custom Budget Section */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
          Customize Your Budget
        </h3>
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-2">
            Budget ($)
          </label>
          <input
            type="number"
            value={customBudget}
            onChange={(e) => setCustomBudget(Number(e.target.value))}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-300"
          />
        </div>
        <div>
          <p className="text-gray-800 dark:text-gray-300">
            Estimated Reach: {calculatedReach} people
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageSelectionPage;
