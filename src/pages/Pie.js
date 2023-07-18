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

// import React from "react";

// const Pie = () => {
//   return (
//     <div
//       style={{
//         width: "20vw",
//         height: "69vh",
//         backgroundColor: "green",
//         textAlign: "center",
//         padding: "20px",
//         borderRadius: "10px",
//       }}
//     >
//       <h1>Pie Chart</h1>
//     </div>
//   );
// };

// export default Pie;

import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { useState } from "react";

const Pie = () => {
  const [showContent, setShowContent] = useState(true);
  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const chartHeight = showContent ? "65vh" : "auto";

  return (
    <div>
      <div
        className="flex flex-col justify-start items-center rounded-lg pt-5 bg-blue-50 shadow w-full"
        style={{
          width: "20.5vw",
          height: chartHeight,
        }}
      >
        <div className="flex flex-row justify-between items-center mb-2 -mt-2 ">
          <h1 className="text-xl font-bold ml-1">Chart Component</h1>
          <button
            className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none ml-7"
            onClick={handleToggleContent}
          >
            <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
          </button>
        </div>
        {showContent && (
          <div className="h-auto ">
            <CChart
              type="doughnut"
              data={{
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      // color: getStyle("--cui-body-color"),
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pie;
