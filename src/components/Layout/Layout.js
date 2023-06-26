import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import NotificationMenu from "../Notification/Notification";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotificationMenu = () => {
    setIsNotificationMenuOpen(!isNotificationMenuOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {isSidebarOpen && <Sidebar />}
        <div className="flex flex-col flex-grow">
          <Header
            toggleSidebar={toggleSidebar}
            toggleNotificationMenu={toggleNotificationMenu}
          />
          <div className="flex-grow p-4">
            <div className="flex relative">
              <div className="flex-grow ">
                {children}
                <div className="flex-grow">
                  {isNotificationMenuOpen && <NotificationMenu />}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
