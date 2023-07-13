// import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };
//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-grow">
//         {isSidebarOpen && <Sidebar />}
//         <div className="flex flex-col flex-grow">
//           <Header
//             toggleSidebar={toggleSidebar}
//             toggleNotificationMenu={toggleNotificationMenu}
//           />
//           <div className="flex-grow p-4">
//             <div className="flex relative">
//               <div className="flex-grow ">
//                 {children}
//                 <div className="flex-grow">
//                   {isNotificationMenuOpen && <NotificationMenu />}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-grow">
//         {isSidebarOpen && <Sidebar />}
//         <div className="flex flex-col flex-grow relative">
//           <Header
//             toggleSidebar={toggleSidebar}
//             toggleNotificationMenu={toggleNotificationMenu}
//           />
//           <div className="flex-grow p-4">
//             <div className="flex flex-grow">
//               {isNotificationMenuOpen && <NotificationMenu />}
//               <div className="flex flex-col flex-grow relative">{children}</div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/*Layout div */}
//       <div className="flex flex-grow">
//         {/*Sidebar div */}
//         {isSidebarOpen && <Sidebar />}
//         <div className="flex flex-col flex-grow relative">
//           {/*Header and Footer div */}
//           <Header
//             toggleSidebar={toggleSidebar}
//             toggleNotificationMenu={toggleNotificationMenu}
//           />
//           <div className="flex-grow p-4">
//             {/*Content + Right  div */}
//             <div className="flex flex-col flex-grow relative">{children}</div>
//             <div className="flex flex-grow">
//               {isNotificationMenuOpen && <NotificationMenu />}
//             </div>
//           </div>
//           {/*Content + Right  div closing*/}
//           <Footer />
//         </div>
//         {/*Header and Footer div  closing*/}
//       </div>
//       {/*Sidebar div  closing*/}
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-grow">
//         {isSidebarOpen && <Sidebar />}
//         <div className="flex flex-col flex-grow relative">
//           <Header
//             toggleSidebar={toggleSidebar}
//             toggleNotificationMenu={toggleNotificationMenu}
//           />
//           <div className="flex-grow p-4">
//             <div className="flex flex-grow relative">
//               {isNotificationMenuOpen && <NotificationMenu />}
//               <div className="flex flex-col flex-grow relative w-3/5">
//                 {children}
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-grow">
//         {isSidebarOpen && <Sidebar />}
//         <div className="flex flex-col flex-grow relative">
//           <Header
//             toggleSidebar={toggleSidebar}
//             toggleNotificationMenu={toggleNotificationMenu}
//           />
//           <div className="flex-grow p-4">
//             <div className="flex">
//               <div className="flex flex-col flex-grow w-2/4 ml-64 -z-100">
//                 {children}
//               </div>
//               {isNotificationMenuOpen && <NotificationMenu />}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };

//   return (
//     <div className="flex flex-row w-full">
//       <div className="">{isSidebarOpen && <Sidebar />}</div>
//       <div className="grow relative">
//         <Header
//           toggleSidebar={toggleSidebar}
//           toggleNotificationMenu={toggleNotificationMenu}
//         />
//         <div className="flex flex-row flex-grow">
//           <div className="flex flex-row">
//             <div className="flex flex-grow flex-auto">{children}</div>
//             <NotificationMenu />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-grow">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;

//Copy From Old:

// import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import NotificationMenu from "../Notification/Notification";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleNotificationMenu = () => {
//     setIsNotificationMenuOpen(!isNotificationMenuOpen);
//   };
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-grow h-screen">
//         {isSidebarOpen && <Sidebar isSideOpen={isSidebarOpen} />}
//         <div className="flex flex-col flex-grow">
//           <Header
//             toggleSidebar={toggleSidebar}
//             toggleNotificationMenu={toggleNotificationMenu}
//             isSideOpen={isSidebarOpen}
//             isNotificationClicked={isNotificationMenuOpen}
//           />
//           <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden h-screen">
//             <div className="flex flex-col">
//               <div className="flex flex-grow mr-2">
//                 {children}
//                 <div className="flex flex-grow">
//                   {isNotificationMenuOpen && <NotificationMenu />}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

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
    <div className="flex flex-col h-screen bg-blue-200">
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
                <div className="flex flex-grow">
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

export default Layout;
