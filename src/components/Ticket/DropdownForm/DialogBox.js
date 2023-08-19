import React from "react";
import { useNavigate } from "react-router-dom";

const DialogBox = ({ onClose, ticketDetails }) => {
  const navigate = useNavigate(); // Initialize the useHistory hook

  const handleViewDetails = () => {
    // Navigate to the ticket detail page with the ticket ID
    navigate(`/ticketView`);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-2 bg-green-400 text-white rounded-lg shadow-md px-2">
          Ticket Created Successfully !!
        </h2>
        <p>
          Ticket ID:
          <span className="text-lg font-bold">{ticketDetails.ticketId}</span>
        </p>
        <p>
          Issue:
          <span className="text-lg font-bold">{ticketDetails.issue}</span>
        </p>
        <p>
          Submission Time:
          <span className="text-lg font-bold">
            {ticketDetails.submissionTime.toLocaleString()}
          </span>
        </p>
        <div className="flex flex-row justify-between items-center">
          <button
            className="mt-4 p-2 bg-gray-500 text-white rounded-md cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="mt-4 p-2 bg-green-500 text-white rounded-md cursor-pointer"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
