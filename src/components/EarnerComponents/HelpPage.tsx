import React from "react";
import {
  FaQuestionCircle,
  FaMoneyCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

const HelpPage = () => {
  const faqItems = [
    {
      question: "How does the earning system work?",
      answer:
        "Earners complete tasks like watching YouTube videos or subscribing to social media channels to earn coins. These coins can be converted to ETB or USD and withdrawn through Chapa or Stripe.",
      icon: <FaMoneyCheck />,
    },
    {
      question: "What should I do if a transaction fails?",
      answer:
        "If a transaction fails, please wait for a few minutes and check your balance again. If the issue persists, you can contact support by clicking the chat icon at the bottom right.",
      icon: <FaExclamationTriangle />,
    },
    {
      question: "How do I withdraw my earnings?",
      answer:
        "To withdraw your earnings, navigate to the 'Earnings' page, choose the currency (ETB or USD), and select the preferred payment method (Chapa for ETB or Stripe for USD). Enter your details and confirm.",
      icon: <FaMoneyCheck />,
    },
    {
      question: "How can I track my completed tasks?",
      answer:
        "You can view your completed tasks under the 'Tasks' section. All completed tasks are marked, and the corresponding coins are added to your balance.",
      icon: <AiOutlineCheckCircle />,
    },
    {
      question: "What are the types of tasks available?",
      answer:
        "You can complete tasks like watching YouTube videos, subscribing to channels, or engaging with Instagram content. Each task has a specific reward in coins.",
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen mt-14">
      <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        Help Center
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Here you can find all the information you need about how our system
        works. If you have any other questions, feel free to contact us by
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

export default HelpPage;
