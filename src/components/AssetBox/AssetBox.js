// import React, { useState } from "react";

// const AssetBox = ({ title, count, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="bg-gray-200 p-4 mb-4 rounded-md">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} (${count})`}</div>
//         <div>{showDetails ? "-" : "+"}</div>
//       </div>
//       {showDetails && (
//         <div className="mt-4">
//           <div className="font-bold">{`${title} Details:`}</div>
//           <table className="mt-2 w-full">
//             <thead>
//               <tr>
//                 <th>Asset</th>
//                 <th>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {details.map((asset) => (
//                 <tr key={asset.name}>
//                   <td>{asset.name}</td>
//                   <td>{asset.details}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetBox;

import React, { useState } from "react";

const AssetBox = ({ title, count, assets, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-gray-200 p-4 mb-4 rounded-md">
      <div
        className={`flex justify-between items-center cursor-pointer ${
          showDetails ? "font-bold" : ""
        }`}
        onClick={toggleDetails}
      >
        <div>{`${title} Details`}</div>
        {/* <div>{showDetails ? "-" : "+"}</div> */}
      </div>
      {showDetails && (
        <div className="mt-4">
          <div className="font-bold mt-4">{`${title} Details:`}</div>
          <table className="mt-2 w-full">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {details.map((asset) => (
                <tr key={asset.name}>
                  <td>{asset.name}</td>
                  <td>{asset.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AssetBox;
