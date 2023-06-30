// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AssetLocation = () => {
//   const locationData = [
//     {
//       id: 1,
//       location: "Gurgaon",
//       total: 10,
//       assigned: 5,
//       user: 3,
//     },
//     {
//       id: 2,
//       location: "Bangalore",
//       total: 15,
//       assigned: 10,
//       user: 7,
//     },
//     {
//       id: 3,
//       location: "Ahemdabad",
//       total: 20,
//       assigned: 15,
//       user: 12,
//     },
//     {
//       id: 4,
//       location: "Hyderabad",
//       total: 20,
//       assigned: 15,
//       user: 12,
//     },
//   ];

//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate("/asset-location");
//   };

//   const visibleLocations = showAll ? locationData : locationData.slice(0, 5);

//   return (
//     <div className="bg-white p-4 shadow rounded-lg h-108 -mb-6">
//       <h2 className="text-2xl font-bold mb-4">Asset Location</h2>
//       <div className="overflow-x-auto">
//         <div
//           className="max-h-72 overflow-y-auto"
//           style={{ scrollbarWidth: "thin" }}
//         >
//           <table className="table-auto w-full">
//             <thead className="sticky top-0">
//               <tr className="bg-gray-200 text-gray-600">
//                 <th className="py-2 px-4">Location</th>
//                 <th className="py-2 px-4">Total</th>
//                 <th className="py-2 px-4">Assigned</th>
//                 <th className="py-2 px-4">User</th>
//               </tr>
//             </thead>
//             <tbody>
//               {visibleLocations.map((location) => (
//                 <tr key={location.id}>
//                   <td className="py-2 px-4">{location.location}</td>
//                   <td className="py-2 px-4">{location.total}</td>
//                   <td className="py-2 px-4">{location.assigned}</td>
//                   <td className="py-2 px-4">{location.user}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {!showAll && (
//         <button
//           className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={handleViewAll}
//         >
//           View All
//         </button>
//       )}
//     </div>
//   );
// };

// export default AssetLocation;

// // && locationData.length > 5
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AssetLocation = () => {
//   const locationData = [
//     {
//       id: 1,
//       location: "Gurgaon",
//       total: 10,
//       assigned: 5,
//       user: 3,
//     },
//     {
//       id: 2,
//       location: "Bangalore",
//       total: 15,
//       assigned: 10,
//       user: 7,
//     },
//     {
//       id: 3,
//       location: "Hyedrabad",
//       total: 20,
//       assigned: 15,
//       user: 12,
//     },
//     {
//       id: 4,
//       location: "Ahemdabad",
//       total: 20,
//       assigned: 15,
//       user: 12,
//     },
//     // Add more location items as needed
//   ];

//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate("/asset-location");
//   };

//   const handleLocationClick = (location) => {
//     navigate(`/location/${location}`);
//   };

//   const visibleLocations = showAll ? locationData : locationData.slice(0, 5);

//   return (
//     <div className="bg-white p-4 shadow rounded-lg h-108 -mb-6">
//       <h2 className="text-2xl font-bold mb-4">Asset Location</h2>
//       <div className="overflow-x-auto">
//         <div
//           className="max-h-72 overflow-y-auto"
//           style={{ scrollbarWidth: "thin" }}
//         >
//           <table className="table-auto w-full">
//             <thead className="sticky top-0">
//               <tr className="bg-gray-200 text-gray-600">
//                 <th className="py-2 px-4">Location</th>
//                 <th className="py-2 px-4">Total</th>
//                 <th className="py-2 px-4">Assigned</th>
//                 <th className="py-2 px-4">User</th>
//               </tr>
//             </thead>
//             <tbody>
//               {visibleLocations.map((location) => (
//                 <tr key={location.id}>
//                   <td
//                     className="py-2 px-4 cursor-pointer text-blue-500 hover:text-blue-700"
//                     onClick={() => handleLocationClick(location.location)}
//                   >
//                     {location.location}
//                   </td>
//                   <td className="py-2 px-4">{location.total}</td>
//                   <td className="py-2 px-4">{location.assigned}</td>
//                   <td className="py-2 px-4">{location.user}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {!showAll && (
//         <button
//           className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={handleViewAll}
//         >
//           View All
//         </button>
//       )}
//     </div>
//   );
// };

// export default AssetLocation;

// // && locationData.length > 5

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AssetLocation = () => {
//   const locationData = [
//     {
//       id: 1,
//       location: "Gurgaon",
//       total: 10,
//       assigned: 5,
//       user: 3,
//     },
//     {
//       id: 2,
//       location: "Bangalore",
//       total: 15,
//       assigned: 10,
//       user: 7,
//     },
//     {
//       id: 3,
//       location: "Heydrabad",
//       total: 20,
//       assigned: 15,
//       user: 12,
//     },
//     {
//       id: 3,
//       location: "Ahemdabad",
//       total: 20,
//       assigned: 15,
//       user: 12,
//     },
//     // Add more location items as needed
//   ];

//   const [showContent, setShowContent] = useState(true);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate("/asset-location");
//   };

//   const handleToggleContent = () => {
//     setShowContent(!showContent);
//   };

//   const handleLocationClick = (location) => {
//     navigate(`/location/${location}`);
//   };

//   const visibleLocations = showAll ? locationData : locationData.slice(0, 5);

//   return (
//     <div className="bg-white p-4 shadow rounded-lg -mb-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Asset By Location</h2>
//         <button
//           className="text-blue-500 focus:outline-none text-lg font-bold "
//           onClick={handleToggleContent}
//         >
//           {showContent ? "-" : "+"}
//         </button>
//       </div>
//       {showContent && (
//         <div className="overflow-x-auto">
//           <div
//             className="max-h-72 overflow-y-auto"
//             style={{ scrollbarWidth: "thin" }}
//           >
//             <table className="table-auto w-full">
//               <thead className="sticky top-0">
//                 <tr className="bg-gray-200 text-gray-600">
//                   <th className="py-2 px-4">Location</th>
//                   <th className="py-2 px-4">Total</th>
//                   <th className="py-2 px-4">Assigned</th>
//                   <th className="py-2 px-4">User</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleLocations.map((location) => (
//                   <tr key={location.id}>
//                     <td
//                       className="py-2 px-4 cursor-pointer text-blue-500 hover:underline"
//                       onClick={() => handleLocationClick(location.location)}
//                     >
//                       {location.location}
//                     </td>
//                     <td className="py-2 px-4">{location.total}</td>
//                     <td className="py-2 px-4">{location.assigned}</td>
//                     <td className="py-2 px-4">{location.user}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       {showContent && !showAll && (
//         <button
//           className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={handleViewAll}
//         >
//           View All
//         </button>
//       )}
//     </div>
//   );
// };

// export default AssetLocation;

// && locationData.length > 5

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssetLocation = () => {
  const locationData = [
    {
      id: 1,
      location: "Gurgaon",
      total: 10,
      assigned: 5,
      user: 3,
    },
    {
      id: 2,
      location: "Bangalore",
      total: 15,
      assigned: 10,
      user: 7,
    },
    {
      id: 3,
      location: "Heydrabad",
      total: 20,
      assigned: 15,
      user: 12,
    },
    {
      id: 4,
      location: "Ahemdabad",
      total: 20,
      assigned: 15,
      user: 12,
    },
    {
      id: 5,
      location: "Mumbai",
      total: 20,
      assigned: 15,
      user: 12,
    },
    {
      id: 6,
      location: "Pune",
      total: 20,
      assigned: 15,
      user: 12,
    },
    {
      id: 7,
      location: "Mangalore",
      total: 20,
      assigned: 15,
      user: 12,
    },
    // Add more location items as needed
  ];

  const [showContent, setShowContent] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/asset-location");
  };

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const handleLocationClick = (location) => {
    navigate(`/location/${location}`);
  };

  const visibleLocations = showAll ? locationData : locationData.slice(0);

  return (
    <div className="bg-white p-2 shadow rounded-lg -mb-6">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold ml-2">Asset By Location</h2>
        <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none mb-2 mt-2 mr-2"
          onClick={handleToggleContent}
        >
          <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
        </button>
      </div>
      {showContent && (
        <div className="overflow-x-auto mt-2" style={{ maxHeight: "300px" }}>
          <div
            className="max-h-72 overflow-y-auto"
            style={{ scrollbarWidth: "thin" }}
          >
            <table className="table-auto w-full">
              <thead className="sticky top-0">
                <tr className="bg-gray-200 text-gray-600">
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Assigned</th>
                  <th className="py-2 px-4">User</th>
                </tr>
              </thead>
              <tbody>
                {visibleLocations.map((location) => (
                  <tr key={location.id}>
                    <td
                      className="py-2 px-4 cursor-pointer text-blue-500 hover:text-blue-700 hover:font-semibold"
                      onClick={() => handleLocationClick(location.location)}
                    >
                      {location.location}
                    </td>
                    <td className="py-2 px-4">{location.total}</td>
                    <td className="py-2 px-4">{location.assigned}</td>
                    <td className="py-2 px-4">{location.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showContent && !showAll && (
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleViewAll}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default AssetLocation;
