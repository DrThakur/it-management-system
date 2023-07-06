// import React from "react";
// import AssetBox from "../AssetBox/AssetBox";

// const AssetsComponent = () => {
//   const assetCategories = [
//     {
//       title: "Individual Assets",
//       count: 2,
//       details: [
//         { name: "Desktop", details: "Desktop details" },
//         { name: "Laptop", details: "Laptop details" },
//       ],
//     },
//     {
//       title: "Project Asset",
//       count: 1,
//       details: [{ name: "Projector", details: "Projector details" }],
//     },
//     {
//       title: "Isolated Asset",
//       count: 3,
//       details: [
//         { name: "Printer", details: "Printer details" },
//         { name: "Scanner", details: "Scanner details" },
//         { name: "Phone", details: "Phone details" },
//       ],
//     },
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-4">Asset Categories</h1>
//       {assetCategories.map((category) => (
//         <AssetBox
//           key={category.title}
//           title={category.title}
//           count={category.count}
//           details={category.details}
//         />
//       ))}
//     </div>
//   );
// };

// export default AssetsComponent;

// import React, { useState } from "react";
// import AssetBox from "../AssetBox/AssetBox";

// const AssetsComponent = () => {
//   const assetCategories = [
//     {
//       title: "Individual Assets",
//       count: 2,
//       details: [
//         { name: "Desktop", details: "Desktop details" },
//         { name: "Laptop", details: "Laptop details" },
//       ],
//     },
//     {
//       title: "Project Asset",
//       count: 1,
//       details: [{ name: "Projector", details: "Projector details" }],
//     },
//     {
//       title: "Isolated Asset",
//       count: 3,
//       details: [
//         { name: "Printer", details: "Printer details" },
//         { name: "Scanner", details: "Scanner details" },
//         { name: "Phone", details: "Phone details" },
//       ],
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-4">Asset Categories</h1>
//       <div className="flex mb-4">
//         {assetCategories.map((category, index) => (
//           <div
//             key={index}
//             className={`bg-gray-200 px-4 py-2 mr-4 cursor-pointer ${
//               index === activeTab ? "font-bold" : ""
//             }`}
//             onClick={() => handleTabClick(index)}
//           >
//             {category.title}
//           </div>
//         ))}
//       </div>
//       {assetCategories[activeTab] && (
//         <AssetBox
//           title={assetCategories[activeTab].title}
//           count={assetCategories[activeTab].count}
//           details={assetCategories[activeTab].details}
//         />
//       )}
//     </div>
//   );
// };

// export default AssetsComponent;

import React, { useState } from "react";
import AssetBox from "../AssetBox/AssetBox";

const AssetsComponent = () => {
  const assetCategories = [
    {
      title: "Individual Assets",
      count: 2,
      assets: [
        { name: "Desktops", count: 1 },
        { name: "Laptops", count: 1 },
      ],
      details: [
        { name: "Desktop", details: "Desktop details" },
        { name: "Laptop", details: "Laptop details" },
      ],
    },
    {
      title: "Project Assets",
      count: 1,
      assets: [{ name: "Projectors", count: 1 }],
      details: [{ name: "Projector", details: "Projector details" }],
    },
    {
      title: "Isolated Assets",
      count: 3,
      assets: [
        { name: "Printers", count: 1 },
        { name: "Scanners", count: 1 },
        { name: "Phones", count: 1 },
      ],
      details: [
        { name: "Printer", details: "Printer details" },
        { name: "Scanner", details: "Scanner details" },
        { name: "Phone", details: "Phone details" },
      ],
    },
  ];

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

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto py-8 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Asset Categories</h1>
      <div className="flex mb-4 flex-wrap">
        {assetCategories.map((category, index) => (
          <div
            key={index}
            className={`text-center px-4 py-2 mr-4 mb-4 cursor-pointer flex flex-col flex-grow-0 font-bold shadow-md rounded-lg w-1/4 ${
              index === activeTab
                ? `shadow-lg shadow-green-500`
                : getRandomColor(index)
            }`}
            onClick={() => handleTabClick(index)}
          >
            {category.title}
            <span className="mb-2">({category.count})</span>
            {category.assets.map((asset, index) => (
              <div
                key={index}
                className="flex items-center ml-6 text-blue-500 text-left font-semibold"
              >
                <span className="mr-2">{asset.name}</span>
                <span>:</span>
                <span className="ml-2">{asset.count}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {assetCategories[activeTab] && (
        <AssetBox
          title={assetCategories[activeTab].title}
          count={assetCategories[activeTab].count}
          assets={assetCategories[activeTab].assets}
          details={assetCategories[activeTab].details}
        />
      )}
    </div>
  );
};

export default AssetsComponent;
