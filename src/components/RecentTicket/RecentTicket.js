// import React from "react";
// import ProgressBar from "./ProgressBar";

// const RecentTicket = () => {
//   // Assuming you have ticket data with the necessary information
//   const ticket = {
//     creationDate: "2023-06-30",
//     acceptedDate: "2023-07-01",
//     acceptedBy: "John Doe",
//     inProcess: true,
//     resolutionDate: "2023-07-02",
//     resolvedBy: "Jane Smith",
//   };

//   return (
//     <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full">
//       <h2 className="text-xl font-semibold">Recent Ticket</h2>
//       <ProgressBar
//         stages={["Created", "Accepted", "In Process", "Resolved"]}
//         currentStage={3}
//       />

//       <div className="mt-4">
//         <p>Creation Date: {ticket.creationDate}</p>
//         <p>
//           Accepted By IT Team: {ticket.acceptedDate} - {ticket.acceptedBy}
//         </p>
//         {ticket.inProcess && <p>In Process</p>}
//         {ticket.resolutionDate && (
//           <p>
//             Resolved: {ticket.resolutionDate} - {ticket.resolvedBy}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecentTicket;

import React from "react";
import ProgressBar from "./ProgressBar";

const RecentTicket = () => {
  // Assuming you have ticket data with the necessary information
  const ticket = {
    creationDate: "2023-06-30",
    acceptedDate: "2023-07-01",
    acceptedBy: "John Doe",
    inProcess: true,
    resolutionDate: "2023-07-02",
    resolvedBy: "Jane Smith",
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-xl font-semibold mb-6">Recent Ticket</h2>
      <ProgressBar
        stages={["Created", "Accepted", "In Process", "Resolved"]}
        currentStage={3}
      />

      {/* <div className="mt-4">
        <p>Creation Date: {ticket.creationDate}</p>
        <p>
          Accepted By IT Team: {ticket.acceptedDate} - {ticket.acceptedBy}
        </p>
        {ticket.inProcess && <p>In Process</p>}
        {ticket.resolutionDate && (
          <p>
            Resolved: {ticket.resolutionDate} - {ticket.resolvedBy}
          </p>
        )}
      </div> */}
    </div>
  );
};

export default RecentTicket;
