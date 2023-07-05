import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
// import Pie from "../Pie";
// import DashboardCategory from "../../data/dashboardData/DashboardCategory";
// import RecentActivity from "../../components/RecentActivity/RecentActivity";
// import AssetLocation from "../../components/AssetLocation/AssetLocation";
// import UserCategory from "../../components/UserCategory/UserCategory";
// import NewUserCategory from "../../components/NewUserCategory/NewUserCategory";
// import DoughnutChartDemo from "../PieChart";
import userData from "../../data/UserData/UserData";
import RecentTicket from "../../components/RecentTicket/RecentTicket";
import SystemRights from "../../components/SystemRights/SystemRights";

const UserDashboard = () => {
  const systemName = "LFT007";
  const systemModel = "Lenovo i3-7th Gen";
  const userRights = "User Rights";

  return (
    <div className="flex flex-col w-3/4">
      <div className="flex-item-1">
        <InfoBox categories={userData} title="Dashboard" />
      </div>
      <div className="flex-item-2 mt-4">
        <div class="flex-container-2 flex flex-row flex-wrap">
          <div className="flex-item-2-1 flex w-full">
            <RecentTicket />
          </div>
          <div className="flex-item-2-2 mt-2">{/* <RecentActivity /> */}</div>
          <div className="flex-item-2-3 mt-10 mb-8 w-full">
            {/* <AssetLocation /> */}
            <SystemRights
              systemName={systemName}
              systemModel={systemModel}
              userRights={userRights}
            />
          </div>
          <div className="flex-item-2-4 mt-16 mb-6 w-full">
            {/* <UserCategory /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
