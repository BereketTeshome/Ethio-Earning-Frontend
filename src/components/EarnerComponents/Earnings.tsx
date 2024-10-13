import React, { useState } from "react";
import { FaCoins, FaMoneyBillAlt, FaExchangeAlt } from "react-icons/fa";
import { SiStripe, SiMoneygram } from "react-icons/si";

// Sample earnings data
const earningsData = {
  totalCoins: 2500,
  totalETB: 1250,
  totalUSD: 300,
};

const Earnings = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("ETB"); // Default ETB

  const handleWithdrawal = () => {
    if (currency === "ETB") {
      // Handle Chapa withdrawal logic here
      console.log(`Withdrawing ${withdrawalAmount} ETB via Chapa`);
    } else if (currency === "USD") {
      // Handle Stripe withdrawal logic here
      console.log(`Withdrawing ${withdrawalAmount} USD via Stripe`);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen mt-14">
      {/* Earnings Overview */}
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        My Earnings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Total Coins
          </h3>
          <p className="text-3xl font-bold text-green-500 dark:text-green-300 flex items-center">
            <FaCoins className="mr-2" /> {earningsData.totalCoins}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Total ETB Earnings
          </h3>
          <p className="text-3xl font-bold text-blue-500 dark:text-blue-300 flex items-center">
            <FaMoneyBillAlt className="mr-2" /> ETB {earningsData.totalETB}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Total USD Earnings
          </h3>
          <p className="text-3xl font-bold text-yellow-500 dark:text-yellow-300 flex items-center">
            <FaMoneyBillAlt className="mr-2" /> ${earningsData.totalUSD}
          </p>
        </div>
      </div>

      {/* Withdrawal Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Withdraw Your Earnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="withdrawal-amount"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Withdrawal Amount
            </label>
            <input
              type="number"
              id="withdrawal-amount"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="currency"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Select Currency
            </label>
            <select
              id="currency"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="ETB">ETB</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleWithdrawal}
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Withdraw <FaExchangeAlt className="inline-block ml-2" />
        </button>
      </div>

      {/* Payment Methods Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center">
          <SiMoneygram className="text-green-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Chapa - ETB Withdrawals
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use Chapa for withdrawing your ETB earnings easily and securely.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center">
          <SiStripe className="text-blue-600 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Stripe - USD Withdrawals
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use Stripe for USD withdrawals to your preferred bank account.
            </p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Transaction History
        </h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center text-gray-800 dark:text-gray-300">
            <span>Withdrawal of ETB 500</span>
            <span className="text-green-500">Completed</span>
          </li>
          <li className="flex justify-between items-center text-gray-800 dark:text-gray-300">
            <span>Withdrawal of $100</span>
            <span className="text-green-500">Completed</span>
          </li>
          <li className="flex justify-between items-center text-gray-800 dark:text-gray-300">
            <span>Withdrawal of ETB 750</span>
            <span className="text-red-500">Failed</span>
          </li>
          <li className="flex justify-between items-center text-gray-800 dark:text-gray-300">
            <span>Withdrawal of $50</span>
            <span className="text-green-500">Completed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Earnings;
