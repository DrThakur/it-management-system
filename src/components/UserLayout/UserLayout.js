import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
import NotificationMenu from "../Notification/Notification";
import UserSidebar from "../UserSidebar/UserSidebar";

const UserLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotificationMenu = () => {
    setIsNotificationMenuOpen(!isNotificationMenuOpen);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow h-screen">
        {isSidebarOpen && <UserSidebar />}
        <div className="flex flex-col flex-grow">
          <Header
            toggleSidebar={toggleSidebar}
            toggleNotificationMenu={toggleNotificationMenu}
            isSideOpen={isSidebarOpen}
            isNotificationClicked={isNotificationMenuOpen}
          />
          <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden h-screen">
            <div className="flex relative">
              <div className="flex-grow mr-2">
                {children}
                <div className="flex-grow">
                  {isNotificationMenuOpen && <NotificationMenu />}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
