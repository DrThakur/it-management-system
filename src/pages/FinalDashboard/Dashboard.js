import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import Pie from "../Pie";
import DashboardCategory from "../../data/dashboardData/DashboardCategory";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import AssetLocation from "../../components/AssetLocation/AssetLocation";
// import DoughnutChartDemo from "../PieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div>
        <InfoBox categories={DashboardCategory} title="Dashboard" />
      </div>
      <div className="flex mt-3">
        <div className="w-2/5 ml-2 rounded-lg shadow-md -mt-1 z-20">
          <h3 className="text-start font-bold p-2 text-2xl">Ticket Status</h3>
          <div className="-mb-4">
            <Pie />
          </div>
        </div>
        <div className="w-3/5 shadow-md ml-2 rounded-lg mb-5">
          <RecentActivity />
        </div>
      </div>
      <div className="flex mt-3">
        <div className="w-1/2 ml-2 rounded-lg shadow-md -mt-1 z-20">
          <AssetLocation />
        </div>
        <div className="w-1/2 shadow-md ml-2 rounded-lg mb-5">
          {/* Add your second additional component here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
