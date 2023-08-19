import React from "react";

const EmployeeOption = ({ employee }) => (
  <div className="flex items-center">
    <img
      src={`http://localhost:8002${employee.profileImageURL}`}
      alt={`${employee.firstName}'s profile`}
      className="w-10 h-10 rounded-full mr-2"
    />
    <div>
      <p className="font-medium">
        {employee.firstName + " " + employee.lastName}
      </p>
      <p className="text-sm text-gray-700">
        {employee.designation} ({employee.employeeCode})
      </p>
    </div>
  </div>
);

export default EmployeeOption;
