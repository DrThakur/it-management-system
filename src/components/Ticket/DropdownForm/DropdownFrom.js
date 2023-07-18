// import React, { useState } from "react";
// import employees from "../../../data/EmployeesData/EmployeesData";
// import Select from "react-select";

// const EmployeeOption = ({ employee }) => (
//   <div className="flex items-center">
//     <img
//       src={employee.imageUrl}
//       alt={`${employee.name}'s profile`}
//       className="w-8 h-8 rounded-full mr-2"
//     />
//     <div>
//       <p className="font-medium">{employee.name}</p>
//       <p className="text-sm text-gray-700">
//         {employee.position} ({employee.code})
//       </p>
//     </div>
//   </div>
// );

// const DropdownForm = () => {
//   const [requestType, setRequestType] = useState("");
//   const [selectedAsset, setSelectedAsset] = useState("");
//   const [description, setDescription] = useState("");
//   const [hasManagerApproval, setHasManagerApproval] = useState(false);
//   const [managerName, setManagerName] = useState("");
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleRequestTypeChange = (e) => {
//     setRequestType(e.target.value);
//     setSelectedAsset("");
//     setDescription("");
//     setHasManagerApproval(false);
//     setManagerName("");
//     setIsFormSubmitted(false);
//   };

//   const handleAssetSelect = (asset) => {
//     setSelectedAsset(asset);
//     setDescription("");
//     setIsFormSubmitted(false);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//     setIsFormSubmitted(false);
//   };

//   const handleManagerApprovalChange = (e) => {
//     setHasManagerApproval(e.target.value === "Yes");
//   };

//   const handleManagerNameChange = (selectedOption) => {
//     //  setManagerName(e.target.value);
//     setManagerName(selectedOption.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission logic here
//     // You can access the selected values: requestType, selectedAsset, description, hasManagerApproval, managerName
//     // For simplicity, let's just log the values to the console
//     console.log("Form submitted:");
//     console.log("Request type:", requestType);
//     console.log("Selected asset:", selectedAsset);
//     console.log("Description:", description);
//     console.log("Has manager approval:", hasManagerApproval);
//     console.log("Manager name:", managerName);

//     setIsFormSubmitted(true);
//   };

//   //   const employeeOptions = employees.map((employee) => ({
//   //     value: employee.name,
//   //     label: (
//   //       <div className="flex flex-row">
//   //         <img
//   //           src={employee.imageUrl}
//   //           alt={`${employee.name}'s profile`}
//   //           className="w-8 h-8 rounded-full mr-2"
//   //         />
//   //         {employee.name} - {employee.position} ({employee.code})
//   //       </div>
//   //     ),
//   //   }));

//   const employeeOptions = employees.map((employee) => ({
//     value: employee.name,
//     label: <EmployeeOption employee={employee} />,
//   }));

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-4 px-20">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="requestType" className="block mb-2 font-medium">
//             Request Type:
//           </label>
//           <select
//             id="requestType"
//             value={requestType}
//             onChange={handleRequestTypeChange}
//             className="w-full border rounded-md p-2"
//           >
//             <option value="">-- Select Request Type --</option>
//             <option value="Request Something">Request Something</option>
//             <option value="Report Something">Report Something</option>
//           </select>
//         </div>

//         {requestType === "Request Something" && (
//           <>
//             <div className="mb-4">
//               <label htmlFor="selectedAsset" className="block mb-2 font-medium">
//                 Select Asset:
//               </label>
//               <select
//                 id="selectedAsset"
//                 value={selectedAsset}
//                 onChange={(e) => handleAssetSelect(e.target.value)}
//                 className="w-full border rounded-md p-2"
//               >
//                 <option value="">-- Select Asset --</option>
//                 <option value="Laptop">Laptop</option>
//                 <option value="Desktop">Desktop</option>
//                 <option value="Accessories">Accessories</option>
//                 <option value="Consumables">Consumables</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>

//             {selectedAsset && (
//               <div className="mb-4">
//                 <label htmlFor="description" className="block mb-2 font-medium">
//                   Brief your requirement in details:
//                 </label>
//                 <textarea
//                   id="description"
//                   value={description}
//                   onChange={handleDescriptionChange}
//                   rows={4}
//                   className="w-full border rounded-md p-2"
//                 />
//               </div>
//             )}

//             <div className="mb-4">
//               <label className="block mb-2 font-medium">
//                 Do you have your manager's approval?
//               </label>
//               <div className="flex space-x-4">
//                 <label htmlFor="managerApprovalYes">
//                   <input
//                     type="radio"
//                     id="managerApprovalYes"
//                     name="managerApproval"
//                     value="Yes"
//                     checked={hasManagerApproval}
//                     onChange={handleManagerApprovalChange}
//                     className="mr-2"
//                   />
//                   Yes
//                 </label>
//                 <label htmlFor="managerApprovalNo">
//                   <input
//                     type="radio"
//                     id="managerApprovalNo"
//                     name="managerApproval"
//                     value="No"
//                     checked={!hasManagerApproval}
//                     onChange={handleManagerApprovalChange}
//                     className="mr-2"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>

//             {hasManagerApproval && (
//               <div className="mb-4">
//                 <label htmlFor="managerName" className="block mb-2 font-medium">
//                   Your Manager's Name:
//                 </label>
//                 {/* <select
//                   id="managerName"
//                   value={managerName}
//                   onChange={handleManagerNameChange}
//                   className="w-full border rounded-md p-2"
//                 >
//                   <option value="">-- Select Manager --</option>
//                   {employees.map((employee) => (
//                     <option key={employee.id} value={employee.name}>
//                       <img
//                         src={employee.imageUrl}
//                         alt={`${employee.name}'s profile`}
//                         className="w-8 h-8 rounded-full mr-2"
//                       />
//                       {employee.name} - {employee.position} ({employee.code})
//                     </option>
//                   ))}
//                 </select> */}
//                 {/* <Select
//                   id="managerName"
//                   value={{ value: managerName, label: managerName }}
//                   onChange={handleManagerNameChange}
//                   options={employeeOptions}
//                 /> */}

//                 <Select
//                   id="managerName"
//                   value={{ value: managerName, label: managerName }}
//                   onChange={handleManagerNameChange}
//                   options={employeeOptions}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         <button
//           type="submit"
//           disabled={
//             !requestType ||
//             !selectedAsset ||
//             !description ||
//             (hasManagerApproval && !managerName)
//           }
//           className="mt-4 p-2 bg-green-500 text-white rounded-md cursor-pointer mx-28"
//         >
//           Submit
//         </button>

//         {isFormSubmitted && (
//           <p className="text-green-500 mt-2">Form submitted successfully!</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import employees from "../../../data/EmployeesData/EmployeesData";
// import Select from "react-select";

// const EmployeeOption = ({ employee }) => (
//   <div className="flex items-center">
//     <img
//       src={employee.imageUrl}
//       alt={`${employee.name}'s profile`}
//       className="w-8 h-8 rounded-full mr-2"
//     />
//     <div>
//       <p className="font-medium">{employee.name}</p>
//       <p className="text-sm text-gray-700">
//         {employee.position} ({employee.code})
//       </p>
//     </div>
//   </div>
// );

// const DropdownForm = () => {
//   const [requestType, setRequestType] = useState("");
//   const [selectedAsset, setSelectedAsset] = useState("");
//   const [description, setDescription] = useState("");
//   const [hasManagerApproval, setHasManagerApproval] = useState(false);
//   const [managerName, setManagerName] = useState("");
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleRequestTypeChange = (e) => {
//     const selectedRequestType = e.target.value;
//     setRequestType(selectedRequestType);

//     if (selectedRequestType !== "Request Something") {
//       setSelectedAsset("");
//       setDescription("");
//       setHasManagerApproval(false);
//       setManagerName("");
//     }

//     setIsFormSubmitted(false);
//   };

//   const handleAssetSelect = (asset) => {
//     setSelectedAsset(asset);
//     setDescription("");
//     setHasManagerApproval(false);
//     setManagerName("");
//     setIsFormSubmitted(false);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//     setHasManagerApproval(false);
//     setManagerName("");
//     setIsFormSubmitted(false);
//   };

//   const handleManagerApprovalChange = (e) => {
//     setHasManagerApproval(e.target.value === "Yes");
//     setManagerName("");
//     setIsFormSubmitted(false);
//   };

//   const handleManagerNameChange = (selectedOption) => {
//     setManagerName(selectedOption.value);
//     setIsFormSubmitted(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission logic here
//     // You can access the selected values: requestType, selectedAsset, description, hasManagerApproval, managerName
//     // For simplicity, let's just log the values to the console
//     console.log("Form submitted:");
//     console.log("Request type:", requestType);
//     console.log("Selected asset:", selectedAsset);
//     console.log("Description:", description);
//     console.log("Has manager approval:", hasManagerApproval);
//     console.log("Manager name:", managerName);

//     setIsFormSubmitted(true);
//   };

//   const employeeOptions = employees.map((employee) => ({
//     value: employee.name,
//     label: <EmployeeOption employee={employee} />,
//   }));

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-4 px-20">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="requestType" className="block mb-2 font-medium">
//             Request Type:
//           </label>
//           <select
//             id="requestType"
//             value={requestType}
//             onChange={handleRequestTypeChange}
//             className="w-full border rounded-md p-2"
//           >
//             <option value="">-- Select Request Type --</option>
//             <option value="Request Something">Request Something</option>
//             <option value="Report Something">Report Something</option>
//           </select>
//         </div>

//         {requestType === "Request Something" && (
//           <>
//             <div className="mb-4">
//               <label htmlFor="selectedAsset" className="block mb-2 font-medium">
//                 Select Asset:
//               </label>
//               <select
//                 id="selectedAsset"
//                 value={selectedAsset}
//                 onChange={(e) => handleAssetSelect(e.target.value)}
//                 className="w-full border rounded-md p-2"
//               >
//                 <option value="">-- Select Asset --</option>
//                 <option value="Laptop">Laptop</option>
//                 <option value="Desktop">Desktop</option>
//                 <option value="Accessories">Accessories</option>
//                 <option value="Consumables">Consumables</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>

//             {selectedAsset && (
//               <div className="mb-4">
//                 <label htmlFor="description" className="block mb-2 font-medium">
//                   Brief your requirement in details:
//                 </label>
//                 <textarea
//                   id="description"
//                   value={description}
//                   onChange={handleDescriptionChange}
//                   rows={4}
//                   className="w-full border rounded-md p-2"
//                 />
//               </div>
//             )}

//             {description && (
//               <div className="mb-4">
//                 <label className="block mb-2 font-medium">
//                   Do you have your manager's approval?
//                 </label>
//                 <div className="flex space-x-4">
//                   <label htmlFor="managerApprovalYes">
//                     <input
//                       type="radio"
//                       id="managerApprovalYes"
//                       name="managerApproval"
//                       value="Yes"
//                       checked={hasManagerApproval}
//                       onChange={handleManagerApprovalChange}
//                       className="mr-2"
//                     />
//                     Yes
//                   </label>
//                   <label htmlFor="managerApprovalNo">
//                     <input
//                       type="radio"
//                       id="managerApprovalNo"
//                       name="managerApproval"
//                       value="No"
//                       checked={!hasManagerApproval}
//                       onChange={handleManagerApprovalChange}
//                       className="mr-2"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>
//             )}

//             {hasManagerApproval && (
//               <div className="mb-4">
//                 <label htmlFor="managerName" className="block mb-2 font-medium">
//                   Your Manager's Name:
//                 </label>
//                 <Select
//                   id="managerName"
//                   value={{ value: managerName, label: managerName }}
//                   onChange={handleManagerNameChange}
//                   options={employeeOptions}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={
//               !requestType ||
//               (!selectedAsset && requestType === "Request Something") ||
//               (!description && selectedAsset) ||
//               (hasManagerApproval && !managerName)
//             }
//             className="mt-4 p-2 bg-green-500 text-white rounded-md cursor-pointer"
//           >
//             Submit
//           </button>
//         </div>

//         {isFormSubmitted && (
//           <p className="text-green-500 mt-2">Form submitted successfully!</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

import React, { useState } from "react";
import employees from "../../../data/EmployeesData/EmployeesData";
import Select from "react-select";

const EmployeeOption = ({ employee }) => (
  <div className="flex items-center">
    <img
      src={employee.imageUrl}
      alt={`${employee.name}'s profile`}
      className="w-8 h-8 rounded-full mr-2"
    />
    <div>
      <p className="font-medium">{employee.name}</p>
      <p className="text-sm text-gray-700">
        {employee.position} ({employee.code})
      </p>
    </div>
  </div>
);

const DropdownForm = () => {
  const [requestType, setRequestType] = useState("");
  const [needAssetFor, setNeedAssetFor] = useState("");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [description, setDescription] = useState("");
  const [hasManagerApproval, setHasManagerApproval] = useState(false);
  const [managerName, setManagerName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleRequestTypeChange = (e) => {
    const selectedRequestType = e.target.value;
    setRequestType(selectedRequestType);

    if (selectedRequestType !== "Request Something") {
      setNeedAssetFor("");
      setSelectedAsset("");
      setDescription("");
      setHasManagerApproval(false);
      setManagerName("");
    }

    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleNeedAssetForChange = (e) => {
    setNeedAssetFor(e.target.value);
    setSelectedAsset("");
    setDescription("");
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleAssetSelect = (asset) => {
    setSelectedAsset(asset);
    setDescription("");
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleManagerApprovalChange = (e) => {
    setHasManagerApproval(e.target.value === "Yes");
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleManagerNameChange = (selectedOption) => {
    setManagerName(selectedOption.value);
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all input fields are filled
    if (
      requestType &&
      needAssetFor &&
      (requestType !== "Request Something" || selectedAsset) &&
      description &&
      (!hasManagerApproval || managerName)
    ) {
      // Perform form submission logic here
      // You can access the selected values: requestType, selectedAsset, description, hasManagerApproval, managerName
      // For simplicity, let's just log the values to the console
      console.log("Form submitted:");
      console.log("Request type:", requestType);
      console.log("Need the asset for:", needAssetFor);
      console.log("Selected asset:", selectedAsset);
      console.log("Description:", description);
      console.log("Has manager approval:", hasManagerApproval);
      console.log("Manager name:", managerName);

      setIsFormSubmitted(true);
    } else {
      setIsFormComplete(true);
    }
  };

  const employeeOptions = employees.map((employee) => ({
    value: employee.name,
    label: <EmployeeOption employee={employee} />,
  }));

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 px-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center mb-4">
          <label htmlFor="requestType" className="w-full mb-2 font-medium">
            Request Type:
          </label>
          <select
            id="requestType"
            value={requestType}
            onChange={handleRequestTypeChange}
            className="w-full border rounded-md p-2 cursor-pointer"
          >
            <option value="">-- Select Request Type --</option>
            <option value="Request Something">Request Something</option>
            <option value="Report Something">Report Something</option>
          </select>
        </div>

        {requestType === "Request Something" && (
          <>
            <div className=" flex flex-row justify-between items-center mb-4">
              <label className="w-auto mb-2 font-medium">
                Asset required for:
              </label>
              <div className="flex flex-row justify-between items-center mx-auto">
                <label
                  htmlFor="needAssetForSelf"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="needAssetForSelf"
                    name="needAssetFor"
                    value="Self"
                    checked={needAssetFor === "Self"}
                    onChange={handleNeedAssetForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Self
                </label>
                <label
                  htmlFor="needAssetForProject"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="needAssetForProject"
                    name="needAssetFor"
                    value="Project"
                    checked={needAssetFor === "Project"}
                    onChange={handleNeedAssetForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Project
                </label>
              </div>
            </div>

            {needAssetFor && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label
                  htmlFor="selectedAsset"
                  className="w-full mb-2 font-medium"
                >
                  Request For:
                </label>
                <select
                  id="selectedAsset"
                  value={selectedAsset}
                  onChange={(e) => handleAssetSelect(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Asset --</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Consumables">Consumables</option>
                  <option value="Consumables">Licence</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            )}

            {selectedAsset && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="description"
                  className="w-full mb-2 font-medium"
                >
                  Brief your requirement:
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}

            {description && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label className="w- mb-2 font-medium">
                  Approved By Manager:
                </label>
                <div className="flex flex-row justify-between items-center mx-auto">
                  <label
                    htmlFor="managerApprovalYes"
                    className="inline-flex items-center mr-2"
                  >
                    <input
                      type="radio"
                      id="managerApprovalYes"
                      name="managerApproval"
                      value="Yes"
                      checked={hasManagerApproval}
                      onChange={handleManagerApprovalChange}
                      //  onChange={() => setHasManagerApproval(true)}
                      className="cursor-pointer mr-2"
                    />
                    Yes
                  </label>
                  <label
                    htmlFor="managerApprovalNo"
                    className="inline-flex items-center mr-2"
                  >
                    <input
                      type="radio"
                      id="managerApprovalNo"
                      name="managerApproval"
                      value="No"
                      checked={!hasManagerApproval}
                      onChange={handleManagerApprovalChange}
                      className="cursor-pointer mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            )}

            {hasManagerApproval && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="managerName"
                  className="w-full mb-2 font-medium"
                >
                  Manager's Name:
                </label>
                <Select
                  id="managerName"
                  value={{ value: managerName, label: managerName }}
                  onChange={handleManagerNameChange}
                  options={employeeOptions}
                  className="w-full border rounded-md mt-2"
                />
              </div>
            )}
          </>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              !requestType ||
              (!selectedAsset && requestType === "Request Something") ||
              (!description && selectedAsset) ||
              (hasManagerApproval && !managerName)
            }
            className="mt-4 p-2 bg-green-500 text-white rounded-md cursor-pointer"
          >
            Submit
          </button>
        </div>

        {isFormComplete && (
          <p className="text-red-500 mt-2">
            Please fill in all the required fields.
          </p>
        )}

        {isFormSubmitted && (
          <p className="text-green-500 mt-2">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default DropdownForm;
