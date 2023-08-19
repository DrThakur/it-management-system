import React from "react";
// import UnderConstructionPage from "../../components/UnderConstructionPage/UnderConstructionPage";
import UserTicketTable from "../../components/UserTicketTable/UserTicketTable";

const MyTicketsPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold">My Tickets</h1>
      {/* <UnderConstructionPage /> */}
      <UserTicketTable />
    </div>
  );
};

export default MyTicketsPage;
