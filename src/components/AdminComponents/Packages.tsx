import React, { useState } from "react";

interface Package {
  title: string;
  description: string;
  image: string;
}

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleAddPackage = () => {
    if (title && description && image) {
      const newPackage: Package = { title, description, image };
      setPackages([...packages, newPackage]);
      setTitle("");
      setDescription("");
      setImage("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      {/* Form to add new package */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add a New Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Package Title (e.g., YouTube)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Package Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Image URL (e.g., link to YouTube icon)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-2"
            onClick={handleAddPackage}
          >
            Add Package
          </button>
        </div>
      </div>

      {/* Display packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border rounded bg-gray-50 dark:bg-gray-800"
          >
            <img src={pkg.image} alt={pkg.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-2">
              {pkg.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {pkg.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
