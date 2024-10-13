import React, { useState } from "react";
import { FaYoutube, FaCoins, FaInstagram, FaTasks } from "react-icons/fa";

const initialTasks = [
  {
    id: 1,
    title: "Watch YouTube Video - Tech Review",
    description: "Earn 50 coins by watching this exciting tech review video.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reward: 50,
    completed: false,
    category: "YouTube",
  },
  {
    id: 2,
    title: "Subscribe to YouTube Channel - Music Artist",
    description: "Earn 40 coins by subscribing to this artist's channel.",
    videoUrl: "https://www.youtube.com/embed/music123",
    reward: 40,
    completed: false,
    category: "YouTube",
  },
  {
    id: 3,
    title: "Follow Instagram Account - Travel Enthusiast",
    description: "Earn 30 coins by following this Instagram travel account.",
    taskUrl: "https://www.instagram.com/example",
    reward: 30,
    completed: false,
    category: "Instagram",
  },
  {
    id: 4,
    title: "Read Blog Post - Fitness Tips",
    description: "Earn 20 coins by reading this fitness tips blog post.",
    taskUrl: "https://fitnessblog.com/post123",
    reward: 20,
    completed: false,
    category: "Blog",
  },
];

const EarnerTasksPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleTaskCompletion = (taskId: any) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleCategoryChange = (category: any) => {
    setActiveCategory(category);
  };

  const filteredTasks =
    activeCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === activeCategory);

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen mt-14">
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Available Tasks
      </h1>

      {/* Category Selector */}
      <div className="flex justify-center space-x-4 mb-6">
        {["All", "YouTube", "Instagram", "Blog"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg ${
              task.completed ? "opacity-50" : ""
            }`}
          >
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              {task.category === "YouTube" && (
                <FaYoutube className="text-red-600 mr-2" />
              )}
              {task.category === "Instagram" && (
                <FaInstagram className="text-pink-600 mr-2" />
              )}
              {task.category === "Blog" && (
                <FaTasks className="text-green-600 mr-2" />
              )}
              {task.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {task.description}
            </p>

            {/* Task Display (YouTube or URL) */}
            {task.videoUrl ? (
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="200"
                  src={task.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <a
                href={task.taskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Complete Task
              </a>
            )}

            <div className="flex items-center justify-between mt-6">
              <span className="text-lg font-medium text-green-500">
                <FaCoins className="inline-block mr-1" /> {task.reward} Coins
              </span>
              <button
                onClick={() => handleTaskCompletion(task.id)}
                disabled={task.completed}
                className={`p-2 rounded-lg text-white ${
                  task.completed
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {task.completed ? "Completed" : "Complete Task"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarnerTasksPage;
