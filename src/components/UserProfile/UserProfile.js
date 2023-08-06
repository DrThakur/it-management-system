import React, { useState } from "react";

const UserProfile = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [username, setUsername] = useState("johndoe");
  const [gender, setGender] = useState("Male");
  const [birthday, setBirthday] = useState("1990-01-01");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSave = () => {
    // Perform save logic here
    setIsEditMode(false);
  };

  return (
    <div className="flex p-8 w-full">
      <div className="w-4/12 pr-8 bg-white rounded shadow text-center">
        <div className="mb-4 mt-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="User Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">{`${firstName} ${lastName}`}</p>
          <p className="text-gray-500">{username}</p>
          <p className="text-gray-500">Software Engineer</p>
        </div>
        <div className="border-t border-gray-300">
          <ul className="mt-4 space-y-2">
            <li>
              <button
                className="w-44 bg-gray-200 text-blue-500 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Personal Information")}
              >
                Personal Information
              </button>
            </li>
            <li>
              <button
                className="w-44 bg-gray-200 text-blue-500 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Change Password")}
              >
                Change Password
              </button>
            </li>
            <li>
              <button
                className="w-44 bg-gray-200 text-blue-500 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Theme Settings")}
              >
                Theme Settings
              </button>
            </li>
            <li>
              <button
                className="w-44 text-blue-500 bg-gray-200 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Settings")}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-8/12 ml-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Birthday</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div className="mt-2">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
          </div>
          <div className="mt-4">
            {isEditMode ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditMode(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
