import React, { useState } from "react";
import employees from "../../../data/EmployeesData/EmployeesData";
import Select from "react-select";
import DialogBox from "./DialogBox";

const EmployeeOption = ({ employee }) => (
  <div className="flex items-center">
    <img
      src={employee.imageUrl}
      alt={`${employee.name}'s profile`}
      className="w-8 h-8 rounded-full mr-2"
    />
    <div>
      <p className="font-medium">{employee.name}</p>
      <p className="text-sm text-gray-700">
        {employee.position} ({employee.code})
      </p>
    </div>
  </div>
);

const DropdownForm = () => {
  const [requestType, setRequestType] = useState("");
  const [needAssetFor, setNeedAssetFor] = useState("");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [description, setDescription] = useState("");
  const [hasManagerApproval, setHasManagerApproval] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("");
  const [managerName, setManagerName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogVisibleDuration, setDialogVisibleDuration] = useState(5000); // 5000 milliseconds (5 seconds)
  const [ticketDetails, setTicketDetails] = useState({
    ticketId: "",
    issue: "",
    submissionTime: null,
  });

  const handleRequestTypeChange = (e) => {
    const selectedRequestType = e.target.value;
    setRequestType(selectedRequestType);

    if (selectedRequestType !== "Request Something") {
      setNeedAssetFor("");
      setSelectedAsset("");
      setDescription("");
      setHasManagerApproval(false);
      setManagerName("");
    } else {
      setSelectedIssue("");
      setDescription("");
    }

    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleNeedAssetForChange = (e) => {
    setNeedAssetFor(e.target.value);
    setSelectedAsset("");
    setDescription("");
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleAssetSelect = (asset) => {
    setSelectedAsset(asset);
    setDescription("");
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleManagerApprovalChange = (e) => {
    setHasManagerApproval(e.target.value === "Yes");
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleManagerNameChange = (selectedOption) => {
    setManagerName(selectedOption.value);
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };
  const handleIssueChange = (issue) => {
    setSelectedIssue(issue);
    setDescription("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };
  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isComplete = true;

    if (requestType === "Request Something") {
      if (!needAssetFor || !selectedAsset || !description) {
        isComplete = false;
      }
      if (hasManagerApproval && !managerName) {
        isComplete = false;
      }
      if (!selectedPriority) {
        isComplete = false;
      }
    } else if (requestType === "Report Something") {
      if (!selectedIssue || !description || !selectedPriority) {
        isComplete = false;
      }
    } else {
      isComplete = false;
    }

    if (isComplete) {
      setIsFormSubmitted(true);

      // Simulate a backend response
      const mockTicketId = Math.floor(Math.random() * 1000) + 1;
      const submissionDetails = {
        ticketId: `TICKET-${mockTicketId}`,
        issue:
          requestType === "Report Something" ? selectedIssue : selectedAsset,
        submissionTime: new Date(),
      };
      setTicketDetails(submissionDetails);
      setShowDialog(true);
      setDialogVisibleDuration(5000);
    } else {
      setIsFormComplete(true);
    }

    // Resetting the form fields
    setRequestType("");
    setNeedAssetFor("");
    setSelectedAsset("");
    setDescription("");
    setHasManagerApproval(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
    setSelectedIssue("");
    setSelectedPriority("");
  };

  const employeeOptions = employees.map((employee) => ({
    value: employee.name,
    label: <EmployeeOption employee={employee} />,
  }));

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 px-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center mb-4">
          <label htmlFor="requestType" className="w-full mb-2 font-medium">
            Request Type:
          </label>
          <select
            id="requestType"
            value={requestType}
            onChange={handleRequestTypeChange}
            className="w-full border rounded-md p-2 cursor-pointer"
          >
            <option value="">-- Select Request Type --</option>
            <option value="Request Something">Request Something</option>
            <option value="Report Something">Report Something</option>
          </select>
        </div>
        {requestType && (
          <div
            className={`p-2 rounded-lg shadow-md text-center mx-auto mb-2 ${
              requestType === "Request Something"
                ? "bg-pink-500"
                : "bg-yellow-500"
            }`}
          >
            <p className="text-lg text-center font-semibold text-white">
              {requestType.toUpperCase()}
            </p>
          </div>
        )}

        {requestType === "Request Something" ? (
          <>
            <div className=" flex flex-row justify-between items-center mb-4">
              <label className="w-auto mb-2 font-medium">
                Asset required for:
              </label>
              <div className="flex flex-row justify-between items-center mx-auto">
                <label
                  htmlFor="needAssetForSelf"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="needAssetForSelf"
                    name="needAssetFor"
                    value="Self"
                    checked={needAssetFor === "Self"}
                    onChange={handleNeedAssetForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Self
                </label>
                <label
                  htmlFor="needAssetForProject"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="needAssetForProject"
                    name="needAssetFor"
                    value="Project"
                    checked={needAssetFor === "Project"}
                    onChange={handleNeedAssetForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Project
                </label>
              </div>
            </div>

            {needAssetFor && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label
                  htmlFor="selectedAsset"
                  className="w-full mb-2 font-medium"
                >
                  Request For:
                </label>
                <select
                  id="selectedAsset"
                  value={selectedAsset}
                  onChange={(e) => handleAssetSelect(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Asset --</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Consumables">Consumables</option>
                  <option value="Consumables">Licence</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            )}

            {selectedAsset && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="description"
                  className="w-full mb-2 font-medium"
                >
                  Brief your requirement:
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}

            {description && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label className="w- mb-2 font-medium">
                  Approved By Manager:
                </label>
                <div className="flex flex-row justify-between items-center mx-auto">
                  <label
                    htmlFor="managerApprovalYes"
                    className="inline-flex items-center mr-2"
                  >
                    <input
                      type="radio"
                      id="managerApprovalYes"
                      name="managerApproval"
                      value="Yes"
                      checked={hasManagerApproval}
                      onChange={handleManagerApprovalChange}
                      //  onChange={() => setHasManagerApproval(true)}
                      className="cursor-pointer mr-2"
                    />
                    Yes
                  </label>
                  <label
                    htmlFor="managerApprovalNo"
                    className="inline-flex items-center mr-2"
                  >
                    <input
                      type="radio"
                      id="managerApprovalNo"
                      name="managerApproval"
                      value="No"
                      checked={!hasManagerApproval}
                      onChange={handleManagerApprovalChange}
                      className="cursor-pointer mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            )}

            {hasManagerApproval && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="managerName"
                  className="w-full mb-2 font-medium"
                >
                  Manager's Name:
                </label>
                <Select
                  id="managerName"
                  value={{ value: managerName, label: managerName }}
                  onChange={handleManagerNameChange}
                  options={employeeOptions}
                  className="w-full border rounded-md mt-2"
                />
              </div>
            )}
            {managerName && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label
                  htmlFor="selectedPriority"
                  className="w-full mb-2 font-medium"
                >
                  Set Priority:
                </label>
                <select
                  id="selectedPriority"
                  value={selectedPriority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="High Priority">High Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value=" Low Priority">Low Priority</option>
                </select>
              </div>
            )}
          </>
        ) : (
          <>
            {requestType === "Report Something" && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label
                  htmlFor="selectedAsset"
                  className="w-full mb-2 font-medium"
                >
                  Issue Related To:
                </label>
                <select
                  id="selectedIssue"
                  value={selectedIssue}
                  onChange={(e) => handleIssueChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="Software Related">Software Related</option>
                  <option value="Network Related">Network Related</option>
                  <option value="LFT Resource Related">
                    LFT Resource Realted
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
            )}
            {selectedIssue === "LFT Resource Related" && (
              <div>
                <p className="text-sm text-right mb-2 -mt-2">
                  (For Mantis, SVN, Crush FTP, FTP Access Related etc...)
                </p>
              </div>
            )}
            {selectedIssue && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="description"
                  className="w-full mb-2 font-medium"
                >
                  Brief your requirement:
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}
            {description && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label
                  htmlFor="selectedPriority"
                  className="w-full mb-2 font-medium"
                >
                  Set Priority:
                </label>
                <select
                  id="selectedPriority"
                  value={selectedPriority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="High Priority">High Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value=" Low Priority">Low Priority</option>
                </select>
              </div>
            )}
          </>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              !requestType ||
              (!selectedAsset && requestType === "Request Something") ||
              (!description && selectedAsset) ||
              (requestType === "Report Something" && !selectedIssue) ||
              !description ||
              !selectedPriority ||
              (hasManagerApproval && !managerName) ||
              !selectedPriority
            }
            className="mt-4 p-2 bg-green-500 text-white rounded-md cursor-pointer"
          >
            Submit
          </button>
        </div>

        {isFormComplete && (
          <p className="text-red-500 mt-2">
            Please fill in all the required fields.
          </p>
        )}

        {isFormSubmitted && (
          <p className="text-green-500 mt-2">Form submitted successfully!</p>
        )}
        {showDialog && (
          <DialogBox
            ticketDetails={ticketDetails}
            onClose={() => setShowDialog(false)}
          />
        )}
        {showDialog &&
          dialogVisibleDuration > 0 &&
          setTimeout(() => {
            setShowDialog(false);
            setDialogVisibleDuration(0); // Reset the duration
          }, dialogVisibleDuration)}
      </form>
    </div>
  );
};

export default DropdownForm;
