import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import Pie from "../Pie";
import DashboardCategory from "../../data/dashboardData/DashboardCategory";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
// import DoughnutChartDemo from "../PieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div>
        <InfoBox categories={DashboardCategory} title="Dashboard" />
      </div>
      <div className="flex mt-3">
        <div className="w-2/5 ml-2 rounded-lg shadow-md -mt-1">
          <h3 className="text-start p-2 text-2xl">Ticket Status</h3>
          <div className="">
            <Pie />
          </div>
        </div>
        <div className="w-3/5 shadow-md h-8">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
