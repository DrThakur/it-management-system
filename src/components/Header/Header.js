import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon, FiBell } from "react-icons/fi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { FaUser, FaCog, FaLock, FaSignOutAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import dummyProfilePic from "../../Images/dummy-profile-pic.jpg";

const Header = ({ name, logout, toggleSidebar, toggleNotificationMenu }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const dropdownRef = useRef(null);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Implement dark mode logic here
  };

  const handleTriangleToggle = () => {
    setIsOpen(!isOpen);
    // Implement triangle toggle logic here
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="px-8 py-6 bg-gray-100 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full bg-blue-500 text-white"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Toggle Menu</span>
          <RxHamburgerMenu />
        </button>
        <h3 className="text-lg">
          <span className="font-thin">Welcome, </span>
          <span className="text-red-500">{name || "Ankit"} </span>
        </h3>
      </div>
      <div className="flex items-center space-x-6 ml-2">
        {" "}
        {/* Added ml-2 class for left margin */}
        <button
          className="p-2 rounded-full bg-white text-gray-600"
          onClick={handleDarkModeToggle}
        >
          {darkMode ? (
            <FiSun className="text-2xl" />
          ) : (
            <FiMoon className="text-2xl" />
          )}
        </button>
        <button
          className="p-2 rounded-full bg-white text-gray-600"
          onClick={toggleNotificationMenu}
        >
          <FiBell className="text-2xl" />
          {notificationCount > 0 && (
            <span className="bg-red-500 text-white absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-xs mr-24 mt-5">
              {notificationCount}
            </span>
          )}
        </button>
        <div className="relative flex items-center">
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-10 right-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-20"
            >
              {/* Triangle menu content */}
              <ul className="space-y-2 p-2">
                <li className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
                  <FaUser className="mr-2" />
                  Profile
                </li>
                <li className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
                  <FaCog className="mr-2" />
                  Settings
                </li>
                <li className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
                  <FaLock className="mr-2" />
                  Change Password
                </li>
                <li
                  className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer"
                  onClick={logout}
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </li>
              </ul>
            </div>
          )}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-2">
              <img
                src={dummyProfilePic}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <div className="absolute flex items-center justify-center right-0 bottom-0 transform translate-x-6 -translate-y-1/2 cursor-pointer">
                {isOpen ? (
                  <GoTriangleDown
                    className="text-black text-xl"
                    onClick={handleTriangleToggle}
                  />
                ) : (
                  <GoTriangleUp
                    className="text-black text-xl"
                    onClick={handleTriangleToggle}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
