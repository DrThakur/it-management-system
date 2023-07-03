// import React from "react";

// import { pieChartData } from "../data/PieChartData/PieChartData";
// // import ChartHeader from "../components/PieChart/ChartHeader";
// import PieChart from "../components/PieChart/PieChart";

// const Pie = () => (
//   <div
//     className="m-2 md:m-2 mt-2 bg-white dark:bg-secondary-dark-bg rounded-3xl"
//     style={{ width: "50%", minWidth: "250px", padding: "0", margin: "auto" }}
//   >
//     {/* <ChartHeader category="Pie" title="Assets By Status" /> */}
//     <div
//       className="w-full"
//       style={{
//         height: "100%",
//         marginLeft: "-5px",
//         marginRight: "20px",
//         marginTop: "-50px",
//         marginBottom: "-1px",
//         zIndex: "100",
//         padding: "-5px",
//       }}
//     >
//       <PieChart
//         id="chart-pie"
//         data={pieChartData}
//         legendVisiblity
//         height="80%"
//         width="100%"
//         style={{ marginTop: "10px" }}
//       />
//     </div>
//   </div>
// );

// export default Pie;

import React from "react";

const Pie = () => {
  return (
    <div
      style={{
        width: "20vw",
        height: "60vh",
        backgroundColor: "green",
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Pie Chart</h1>
    </div>
  );
};

export default Pie;
