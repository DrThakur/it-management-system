// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { RiUserLine, RiShoppingCartLine, RiMailLine } from "react-icons/ri";

// const InfoBox = ({ categories, title }) => {
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log(selectedCategory); // Verify selectedCategory value on each change
//   }, [selectedCategory]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     navigate(`/${category.name.replace(/\s+/g, "-").toLowerCase()}`);
//     //  console.log("I am navigating to", category);
//     //  console.log(selectedCategory);
//   };

//   const getRandomColor = (index) => {
//     const colors = [
//       "bg-green-100",
//       "bg-blue-100",
//       "bg-orange-100",
//       "bg-yellow-100",
//       "bg-lime-100",
//       "bg-cyan-100",
//       "bg-sky-100",
//       "bg-indigo-100",
//       "bg-fuchsia-100",
//     ];
//     const colorIndex = index % colors.length;
//     return colors[colorIndex];
//   };
//   return (
//     <div className="w-full h-full ml-1 mr-0">
//       <h1 className="mb-2 ml-2 font-semibold text-2xl">{title}</h1>
//       <div className="grid grid-cols-4 gap-4">
//         {categories.map((category, index) => (
//           //  const Icon = eval(category.icon);
//           <div
//             key={index}
//             className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 ${
//               selectedCategory.name === category.name
//                 ? "bg-blue-200 rounded-lg"
//                 : getRandomColor(index)
//             }`}
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category.count !== undefined && (
//               <div className="flex flex-col ">
//                 <div className="flex flex-row justify-center items-center space-x-4">
//                   <span className="text-4xl">{category.icon}</span>
//                   <h3 className="font-bold text-4xl">{category.count}</h3>
//                 </div>
//                 {category.assigned && category.remaining && (
//                   <div className="flex flex-col justify-center items-center mt-2">
//                     <h2 className="text-gray-500 text-sm">
//                       Assigned: {category.assigned}
//                     </h2>
//                     <h2 className="text-gray-500 text-sm">
//                       Remaining: {category.remaining}
//                     </h2>
//                   </div>
//                 )}
//               </div>
//             )}
//             <p className=" text-gray-500 font-bold pt-2 text-lg">
//               {category.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfoBox;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiUserLine, RiShoppingCartLine, RiMailLine } from "react-icons/ri";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const InfoBox = ({ categories, title }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedCategory); // Verify selectedCategory value on each change
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/${category.name.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const getRandomColor = (index) => {
    const colors = [
      "bg-green-500",
      "bg-emerald-700",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-fuchsia-600",
      "bg-cyan-600",
      "bg-slate-500",
      "bg-indigo-500",
      "bg-fuchsia-500",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };
  const getLightRandomColor = (index) => {
    const colors = [
      "bg-green-400",
      "bg-blue-400",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-lime-400",
      "bg-cyan-400",
      "bg-sky-400",
      "bg-indigo-400",
      "bg-fuchsia-400",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  return (
    <div className="w-full h-full ml-1 mr-0">
      <h1 className="mb-2 ml-2 font-semibold text-2xl">{title}</h1>
      <div className="grid grid-cols-4 gap-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 ${
              selectedCategory.name === category.name
                ? "bg-red-700 rounded-lg"
                : getRandomColor(index)
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.count !== undefined && category.count !== null && (
              <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center">
                  {/* <span className="text-4xl text-white">{category.icon}</span> */}
                  <h3 className="font-bold text-4xl text-white transition-all duration-300 ease-in-out ">
                    {category.count}
                  </h3>
                </div>
                {category.assigned !== undefined &&
                  category.remaining !== undefined && (
                    <div className="flex flex-col justify-start items-start mt-0 ml-4">
                      {Object.keys(category).map((key) => {
                        if (
                          key.includes("assigned") ||
                          key.includes("remaining") ||
                          key.includes("open") ||
                          key.includes("closed")
                        ) {
                          return (
                            // <h2 className="text-white text-sm" key={key}>
                            //   {key.charAt(0).toUpperCase() + key.slice(1)} :
                            //   {category[key]}
                            // </h2>
                            <div className="flex items-center" key={key}>
                              <h2 className="text-white text-sm">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </h2>
                              <span className="text-white text-sm mx-1">:</span>
                              <h2 className="text-white text-sm">
                                {category[key]}
                              </h2>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
              </div>
            )}
            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out ${
                category.count === undefined ? "-mt-4" : ""
              }`}
            >
              {category.name}
            </p>
            <div
              className={`flex flex-row justify-center items-center space-x-4 ml-2 border-t-2 text-white mt-2 -mb-6 text-center rounded-b-lg hover:font-bold ${
                selectedCategory.name === category.name
                  ? ""
                  : getRandomColor(index)
              }`}
              style={{ width: "100%" }}
            >
              <span>View All </span>
              <BsFillArrowRightCircleFill className="hover:font-bold" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
