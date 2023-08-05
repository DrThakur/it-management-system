import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const InformationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    isActive: false,
    email: "",
    profileImage: null,
    employeeCode: "",
    designation: "",
    reportingManager: "",
    department: "",
    location: "",
    phone: "",
    notes: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-screen mx-auto p-4 -mt-6 -ml-16">
      <form
        className="w-8/12 mx-auto p-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="active"
          >
            Active:
          </label>
          <input
            className="w-5 h-5 px-4 py-4 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="checkbox"
            name="active"
            value={formData.isActive}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="employeeCode"
          >
            Employee Code:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="employeeCode"
            value={formData.employeeCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="designation"
          >
            Designation:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="reportingManager"
          >
            Reporting Manager:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="reportingManager"
            value={formData.reportingManager}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="department"
          >
            Department:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="location"
          >
            Location:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow- -ml-6"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="notes"
          >
            Notes:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="profileImage"
          >
            Profile Image:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="file"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4 flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline flex justify-evenly"
            type="submit"
          >
            <BsCheckLg className="w-6 h-6" />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default InformationForm;
