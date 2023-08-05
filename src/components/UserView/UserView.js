import React from "react";

const UserView = () => {
  const user = {
    name: "John Doe",
    company: "Example Corp",
    username: "johndoe",
    email: "johndoe@example.com",
    lastLogin: "2023-08-05 10:30 AM",
    createdAt: "2023-01-15",
    active: true,
    employeeCode: "EMP123",
    designation: "Senior Developer",
    reportingManager: "Jane Smith",
    department: "Engineering",
    location: "New York",
    phoneNumber: "+1 123-456-7890",
    profileImage: "https://example.com/profile.jpg", // Replace with actual image URL
  };

  return (
    <div className="w-full h-full p-8 flex bg-white -mt-2">
      {/* Left Section */}
      <div className="w-7/12 pr-8">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Company:</strong> {user.company}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Last Login:</strong> {user.lastLogin}
        </p>
        <p>
          <strong>Created At:</strong> {user.createdAt}
        </p>
        <p>
          <strong>Active:</strong> {user.active ? "Yes" : "No"}
        </p>
        <p>
          <strong>Employee Code:</strong> {user.employeeCode}
        </p>
        <p>
          <strong>Designation:</strong> {user.designation}
        </p>
        <p>
          <strong>Reporting Manager:</strong> {user.reportingManager}
        </p>
        <p>
          <strong>Department:</strong> {user.department}
        </p>
        <p>
          <strong>Location:</strong> {user.location}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-5/12 pl-8 border-l border-gray-300">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=612x612&w=0&k=20&c=5QE_Qf5Vth9bCHcD5OpdZ1PoPhn36j3GtRVzaFAa22c="
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Edit User
          </button>
          <button className="w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Clone User
          </button>
          <button className="w-1/2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Print All Assigned
          </button>
          <button className="w-1/2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Email List of All Assigned
          </button>
          <button className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send Password Reset Link
          </button>
          <button className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>

          <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Check-in All/Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserView;