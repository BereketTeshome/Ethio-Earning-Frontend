import React from "react";
import {
  FaMoneyCheck,
  FaExclamationTriangle,
  FaRegChartBar,
  FaUserPlus,
} from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

const InvestorHelpPage = () => {
  const faqItems = [
    {
      question: "How does the investment system work?",
      answer:
        "Investors can select from a variety of social media packages to help grow their presence. Payment is handled through Chapa for ETB or Paypal for USD, and you can track your investments under the 'Investment Dashboard'.",
      icon: <FaRegChartBar />,
    },
    {
      question: "What should I do if a payment fails?",
      answer:
        "If a payment fails, please wait for a few minutes and check your balance again. If the issue persists, contact support by clicking the chat icon at the bottom right.",
      icon: <FaExclamationTriangle />,
    },
    {
      question: "How can I track my referrals?",
      answer:
        "You can track your referrals under the 'Referrals' section. You'll see how many users signed up using your referral link and the corresponding rewards you have earned.",
      icon: <AiOutlineCheckCircle />,
    },
    {
      question: "How do I withdraw my earnings?",
      answer:
        "To withdraw earnings from your investments or referral bonuses, navigate to the 'Earnings' page and choose your preferred method (Chapa or Paypal). Follow the steps to confirm the withdrawal.",
      icon: <FaMoneyCheck />,
    },
    {
      question: "How do I refer new users?",
      answer:
        "You can generate a unique referral link under the 'Referrals' section. Share this link with new users, and when they sign up, you'll be rewarded with convertible coins.",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen mt-14">
      <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        Investor Help Center
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Here you can find all the information you need about how our investment
        system works. If you have other questions, feel free to contact us by
        clicking the chat icon at the bottom right!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl text-blue-600 mr-3">{faq.icon}</span>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {faq.question}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          If your question is not listed above, don't worry! You can reach out
          to us directly. Just click the chat icon at the bottom right corner,
          and we'll assist you as soon as possible.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorHelpPage;
