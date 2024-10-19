"use client";
import React, { useState } from "react";

const PaymentBillingPage = () => {
  const [transactions] = useState([
    { id: 1, date: "2024-10-01", amount: "$500", status: "Completed" },
    { id: 2, date: "2024-09-15", amount: "$1000", status: "Pending" },
  ]);

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen p-8 mt-14">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
        Payment and Billing
      </h2>

      {/* Payment History */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
          Payment History
        </h3>
        <table className="w-full text-gray-800 dark:text-gray-300">
          <thead>
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2">{transaction.date}</td>
                <td className="py-2">{transaction.amount}</td>
                <td className="py-2">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Wallet and Deposits */}
      <div className="my-8 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
          Wallet Balance
        </h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          $1200
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Deposit Funds
        </button>
      </div>
    </div>
  );
};

export default PaymentBillingPage;
