import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import NotificationMenu from "../Notification/Notification";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotificationMenu = () => {
    setIsNotificationMenuOpen(!isNotificationMenuOpen);
  };
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex flex-grow h-screen">
        {isSidebarOpen && <Sidebar isSideOpen={isSidebarOpen} />}
        <div className="flex flex-col flex-grow">
          <Header
            toggleSidebar={toggleSidebar}
            toggleNotificationMenu={toggleNotificationMenu}
            isSideOpen={isSidebarOpen}
            isNotificationClicked={isNotificationMenuOpen}
          />
          <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden h-screen">
            <div className="flex flex-col">
              <div className="flex flex-grow mr-2">
                {children}

                {isNotificationMenuOpen && <NotificationMenu />}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
