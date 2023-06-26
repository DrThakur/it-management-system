import React, { useState } from "react";
import logo from "../../Images/LFT-Logo.svg";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiMonitor,
  FiBriefcase,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { ImRadioChecked } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const UserSidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (label) => {
    setActiveItem(label === activeItem ? null : label);
    if (label === "Dashboard") {
      navigate("/");
    } else if (label === "My Assets") {
      navigate("/assets");
    } else if (label === "My Accessories") {
      navigate("/licences");
    } else if (label === "IT Support") {
      navigate("/it-support");
    } else if (label === "Self-Support") {
      navigate("/self-support");
    } else if (label === "Admin Rights") {
      navigate("/admin-rights");
    }
  };

  return (
    <div className=" w-64 flex-none flex flex-col h-screen  bg-black text-white rounded-lg overflow-scroll overflow-x-hidden">
      <div className="top-0  flex items-center justify-center h-28">
        <img src={logo} alt="Logo" className="h-32 w-32 cursor-pointer" />
      </div>
      <div className="relative flex flex-col flex-grow ">
        <NavItem
          icon={<FiHome />}
          label="Dashboard"
          active={activeItem === "Dashboard"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiMonitor />}
          label="My Assets"
          active={activeItem === "My Assets"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">All</span>
            </div>
            <div className="flex items-center mb-4">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Monitor</span>
            </div>
            <div className="flex items-center">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Desktop</span>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<FaMouse />}
          label="My Accessories"
          active={activeItem === "My Accessories"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">All</span>
            </div>
            <div className="flex items-center mb-4">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Keyboard</span>
            </div>
            <div className="flex items-center">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Mouse</span>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<FiBriefcase />}
          label="IT Support"
          active={activeItem === "IT Support"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Create New Ticket</span>
            </div>
            <div className="flex items-center mb-4">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Pending Tickets</span>
            </div>
            <div className="flex items-center">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">Closed Tickets</span>
            </div>
            <div className="flex items-center">
              <ImRadioChecked className="mr-2" />
              <span className="text-white">All Tickets</span>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<MdSupportAgent />}
          label="Self Support"
          active={activeItem === "Self Support"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiShield />}
          label="Admin Rights"
          active={activeItem === "Admin Rights"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiSettings />}
          label="Settings"
          active={activeItem === "Settings"}
          onItemClick={handleItemClick}
        />

        <div className="mt-auto mb-4 text-sm text-gray-400 text-center">
          Version: 1.0.0
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active, onItemClick, children }) => {
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  const handleItemClick = () => {
    onItemClick(label);
    setExpandSubMenu(!expandSubMenu);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center py-2 pl-6 cursor-pointer ${
          active
            ? "bg-cyan-400 text-white rounded-lg"
            : "hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg"
        } backdrop-filter backdrop-blur-lg ml-2 mr-6 mb-2`}
        onClick={handleItemClick}
      >
        <span className="text-xl mr-4">{icon}</span>
        <span className="text-sm text-white font-montserrat ml-4">{label}</span>
        {children && (
          <span className="ml-auto">
            {expandSubMenu ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
      </div>
      {expandSubMenu && (
        <div className="relative left-10 top-0 bg-black text-white py-2 px-4 rounded-lg mt-1 text-sm ml-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default UserSidebar;
