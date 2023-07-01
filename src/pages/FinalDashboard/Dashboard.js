import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import Pie from "../Pie";
import DashboardCategory from "../../data/dashboardData/DashboardCategory";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import AssetLocation from "../../components/AssetLocation/AssetLocation";
import UserCategory from "../../components/UserCategory/UserCategory";
// import DoughnutChartDemo from "../PieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div>
        <InfoBox categories={DashboardCategory} title="Dashboard" />
      </div>
      <div className="flex mt-3">
        <div className="w-1/5 ml-2 rounded-lg shadow-md -mt-1 z-20 pt-6">
          <h3 className="text-start font-bold p-2 ml-2 text-2xl">
            Ticket Status
          </h3>
          <div className="-mb-4">
            <Pie />
          </div>
        </div>
        <div className="w-3/5 shadow-md ml-2 rounded-lg mb-5 py-1">
          <RecentActivity />
        </div>
      </div>
      <div className="flex mt-3">
        <div className="w-1/2 ml-2 rounded-lg shadow-md h-16 -mt-1 z-20">
          <AssetLocation />
        </div>
        <div className="w-1/2 shadow-md ml-2 rounded-lg mb-5">
          <UserCategory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
