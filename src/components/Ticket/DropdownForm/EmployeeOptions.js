import React from "react";
const baseURL = process.env.REACT_APP_BASE_URL;
const port = process.env.REACT_APP_BACKEND_PORT;

const EmployeeOption = ({ employee }) => (
  <div className="flex items-center">
    <img
      src={`http://${baseURL}:${port}${employee.profileImageURL}`}
      alt={`${employee.fullName}'s profile`}
      className="w-10 h-10 rounded-full mr-2"
    />
    <div>
      <p className="font-medium">{employee.fullName}</p>
      <p className="text-sm text-gray-700">
        {employee.designation} ({employee.employeeCode})
      </p>
    </div>
  </div>
);

export default EmployeeOption;
