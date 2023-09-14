//Copy From Old:
import React, { useState } from "react";
import logo from "../../Images/LFT-Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiMonitor,
  FiBriefcase,
  FiSettings,
  FiUser,
  FiShield,
  FiHardDrive,
} from "react-icons/fi";
import { MdCable, MdSupportAgent } from "react-icons/md";
import { FaBorderAll, FaMouse } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { HiOutlineKey } from "react-icons/hi";
import { ImRadioChecked } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Sidebar = ({ isSideOpen, user }) => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (label) => {
    setActiveItem(label === activeItem ? null : label);
    if (label === "Dashboard") {
      navigate("/");
    } else if (label === "Assets") {
      navigate("/assets");
    } else if (label === "Accessories") {
      navigate("/accessories");
    } else if (label === "Consumables") {
      navigate("/consumables");
    } else if (label === "Components") {
      navigate("/components");
    } else if (label === "Licences") {
      navigate("/licences");
    } else if (label === "IT Support") {
      navigate("/it-support");
    } else if (label === "Self Support") {
      navigate("/self-support");
    } else if (label === "Admin Rights") {
      navigate("/admin-rights");
    } else if (label === "Users") {
      navigate("/users");
    } else if (label === "Reports") {
      navigate("/reports");
    } else if (label === "Settings") {
      navigate("/settings");
    }
  };

  return (
    <div
      className={`w-${
        isSideOpen ? "96" : "8"
      } flex-none flex flex-col h-screen  bg-yellow-300 text-white rounded-lg overflow-y-auto overflow-x-hidden `}
    >
      <div className="top-0 flex items-center justify-center -mb-10 -mt-6">
        <img src={logo} alt="Logo" className="h-40 w-40 cursor-pointer " />
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
          label="Assets"
          active={activeItem === "Assets"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col -ml-2">
            <div
              className={`flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1`}
            >
              <FaBorderAll className="mr-2" />
              <Link to="/assets" className="text-black">
                All
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/monitor" className="text-black">
                Monitor
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <span className="text-black">Desktop</span>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<FaMouse />}
          label="Accessories"
          active={activeItem === "Accessories"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col -ml-2">
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/accessories" className="text-black">
                All
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/keyboard" className="text-black">
                Keyboard
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/mouse" className="text-black">
                Mouse
              </Link>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<MdCable />}
          label="Consumables"
          active={activeItem === "Consumables"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiHardDrive />}
          label="Components"
          active={activeItem === "Components"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<HiOutlineKey />}
          label="Licences"
          active={activeItem === "Licences"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col -ml-2">
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/all" className="text-black cursor-pointer">
                All
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2 " />
              <Link to="/fpga" className="text-black">
                FPGA Software
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/hardware" className="text-black">
                Hardware Software
              </Link>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<FiBriefcase />}
          label="IT Support"
          active={activeItem === "IT Support"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col -ml-2">
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/new-ticket" className="text-black">
                Create New Ticket
              </Link>
            </div>
            {user && user.role === "TECHNICIAN"}
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/myassignedtickets" className="text-black">
                Assigned Tickets
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2 " />
              <Link to="/pending-ticket" className="text-black">
                Pending Tickets
              </Link>
            </div>
            <div className="flex items-center px-4 mb-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/closed-ticket" className="text-black">
                Closed Tickets
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/all-tickets" className="text-black">
                All Tickets
              </Link>
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
          icon={<FiUser />}
          label="Users"
          active={activeItem === "Users"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<TbReportSearch />}
          label="Reports"
          active={activeItem === "Reports"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiSettings className="animate-[spin_3s_linear_infinite]" />}
          label="Settings"
          active={activeItem === "Settings"}
          onItemClick={handleItemClick}
        />

        <div className="mt-auto mb-4 text-sm text-black text-center">
          Version: 1.0.0
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active, onItemClick, children }) => {
  const hasSubMenu = !!children;
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  const handleItemClick = () => {
    if (hasSubMenu) {
      setExpandSubMenu(!expandSubMenu);
    } else {
      onItemClick(label);
      setExpandSubMenu(false);
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center py-4 pl-6 cursor-pointer ${
          active
            ? "bg-cyan-400 rounded-lg"
            : "hover:bg-black hover:bg-opacity-20 hover:text-white hover:rounded-lg"
        } backdrop-filter backdrop-blur-lg ml-2 mr-6 mb-2`}
        onClick={handleItemClick}
      >
        <span
          className={`text-2xl mr-4 ${active ? "text-white" : "text-black"}`}
        >
          {icon}
        </span>
        <span
          className={`text-xl font-semibold font-montserrat ml-4 ${
            active ? "text-white" : "text-black"
          }`}
        >
          {label}
        </span>
        {hasSubMenu && (
          <span className="ml-auto text-black font-bold text-lg">
            {expandSubMenu ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
      </div>
      {expandSubMenu && hasSubMenu && (
        <div className="relative left-10 top-0 bg-yellow-300 text-black py-2 px-4 rounded-lg mt-1 text-base font-semibold ml-14">
          {children}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
