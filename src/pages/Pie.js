import React from "react";

import { pieChartData } from "../data/PieChartData/PieChartData";
// import ChartHeader from "../components/PieChart/ChartHeader";
import PieChart from "../components/PieChart/PieChart";

const Pie = () => (
  <div
    className="m-2 md:m-2 mt-2 p-2 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    style={{ width: "50%", minWidth: "300px", padding: "0", margin: "0" }}
  >
    {/* <ChartHeader category="Pie" title="Assets By Status" /> */}
    <div
      className="w-full"
      style={{
        height: "100%",
        marginLeft: "30px",
        marginRight: "20px",
        marginTop: "-50px",
        marginBottom: "-1px",
        zIndex: "100",
        padding: "-20px",
      }}
    >
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="100%"
        width="100%"
      />
    </div>
  </div>
);

export default Pie;
