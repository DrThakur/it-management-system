import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InfoBox = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedCategory); // Verify selectedCategory value on each change
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/${category.name.toLowerCase()}`);
    //  console.log("I am navigating to", category);
    //  console.log(selectedCategory);
  };

  const getRandomColor = (index) => {
    const colors = [
      "bg-green-100",
      "bg-blue-100",
      "bg-orange-100",
      "bg-yellow-100",
      "bg-lime-100",
      "bg-cyan-100",
      "bg-sky-100",
      "bg-indigo-100",
      "bg-fuchsia-100",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };
  return (
    <div className="w-full h-full ml-1 mr-0">
      <h1 className="mb-2 ml-2 font-semibold text-2xl">Dashboard</h1>
      <div className="grid grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-8 ${
              selectedCategory.name === category.name
                ? "bg-blue-200 rounded-lg"
                : getRandomColor(index)
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.count !== undefined && (
              <h3 className="font-bold text-6xl">{category.count}</h3>
            )}
            <p className=" text-gray-500 pt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
