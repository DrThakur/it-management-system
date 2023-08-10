import React from "react";
import TicketTable from "../../components/TicketTable/TicketTable";

const Tickets = () => {
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <TicketTable />
    </div>
  );
};

export default Tickets;
