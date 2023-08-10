import React, { useState } from "react";
import employees from "../../../data/EmployeesData/EmployeesData";
import Select from "react-select";
import DialogBox from "./DialogBox";
import axios from "axios";

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
  const [assetRequiredFor, setAssetRequiredFor] = useState("");
  const [requestFor, setRequestFor] = useState("");
  const [requirementDetails, setRequirementDetails] = useState("");
  const [approvedByManager, setApprovedByManager] = useState(false);
  const [priority, setPriority] = useState("");
  const [managerName, setManagerName] = useState("");
  const [issueType, setIssueType] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    ticketId: "",
    issue: "",
    submissionTime: null,
  });
  const isButtonDisabled =
    !requestType ||
    (!requestFor && requestType === "Request Something") ||
    (!requirementDetails && requestFor) ||
    (requirementDetails && !approvedByManager) ||
    (approvedByManager && !managerName) ||
    (managerName && !priority) ||
    (requestType === "Report Something" && !issueType) ||
    (issueType && !issueDescription) ||
    (issueDescription && !priority);

  const handleRequestTypeChange = (e) => {
    const selectedRequestType = e.target.value;
    setRequestType(selectedRequestType);

    if (selectedRequestType !== "Request Something") {
      setAssetRequiredFor("");
      setRequestFor("");
      setRequirementDetails("");
      setApprovedByManager(false);
      setManagerName("");
      setPriority("");
    } else {
      setIssueType("");
      setRequirementDetails("");
      setPriority("");
    }

    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleassetRequiredForChange = (e) => {
    //setting the value of asset required
    setAssetRequiredFor(e.target.value);
    //resetting the values of feild coming below asset required for
    setRequestFor("");
    setRequirementDetails("");
    setApprovedByManager(false);
    setManagerName("");
    setPriority("");

    // setting form submission and form complete to false as form is still left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleAssetSelect = (asset) => {
    //setting the feild of request for on value change
    setRequestFor(asset);

    // restting the value of fielfs coming below request for
    setRequirementDetails("");
    setApprovedByManager(false);
    setManagerName("");
    setPriority("");

    // setting the form completed and form submission function to false as stillfew fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handlerequirementDetailsChange = (e) => {
    // setting the form field requirement details to selected or filled value on change
    setRequirementDetails(e.target.value);

    // resetting the form fields coming below to requirement details on its change in value
    setApprovedByManager(false);
    setManagerName("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleManagerApprovalChange = (value) => {
    // setting the value of field manager approval to selected value or filled value
    setApprovedByManager(value);

    // resetting the value of fields coming below manager approval field as on change of manager approval they might be needed to be changed
    setManagerName("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleManagerNameChange = (selectedOption) => {
    // setting the value of manager name field on value passed , given or selected or filled in form
    setManagerName(selectedOption.value);

    // restting the values of field coming below manager name as manager name changes happen
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleIssueChange = (issue) => {
    // setting the of issue related to field base on selected or filled value
    setIssueType(issue);
    // resetting the form fields coming below issue related to field as value of issue related to field changes
    setIssueDescription("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setPriority("");
    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleissueDescriptionChange = (e) => {
    //setting issue description to its values based on filled value in the form
    setIssueDescription(e.target.value);

    // restting the form fields coming below issue description to set is based on changes in issue description
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handlePriorityChange = (priority) => {
    // setting the value of priority field on value passed , given or selected or filled in form
    setPriority(priority);

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isComplete = true;

    if (requestType === "Request Something") {
      if (!assetRequiredFor || !requestFor || !requirementDetails) {
        isComplete = false;
      }
      if (approvedByManager && !managerName) {
        isComplete = false;
      }
      if (!priority) {
        isComplete = false;
      }
    } else if (requestType === "Report Something") {
      if (!issueType || !issueDescription || !priority) {
        isComplete = false;
      }
    } else {
      isComplete = false;
    }

    //form Data creation
    const formData = {
      requestType,
      priority,
    };

    if (requestType === "Request Something") {
      formData.assetRequiredFor = assetRequiredFor;
      formData.requestFor = requestFor;
      formData.requirementDetails = requirementDetails;
      formData.approvedByManager = approvedByManager;
      formData.managerName = managerName;
    } else if (requestType === "Report Something") {
      formData.issueType = issueType;
      formData.issueDescription = issueDescription;
    }

    if (isComplete) {
      setIsFormSubmitted(true);

      // Making Post request usin axios for form submission
      try {
        const response = await axios.post(
          "http://localhost:8002/tickets",
          formData
        );

        console.log(response);
        // Simulate a backend response
        const TicketId = response.data.id;
        const submissionDetails = {
          ticketId: `${TicketId}`,
          issue: requestType === "Report Something" ? issueType : requestFor,
          submissionTime: new Date(),
        };
        setTicketDetails(submissionDetails);
        setShowDialog(true);
      } catch (error) {
        // Handle error here
        console.error("Error submitting form:", error);
      }
    } else {
      setIsFormComplete(true);
    }

    // Resetting the form fields
    setRequestType("");
    setAssetRequiredFor("");
    setRequestFor("");
    setRequirementDetails("");
    setApprovedByManager(false);
    setManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
    setIssueType("");
    setIssueDescription("");
    setPriority("");
  };

  const employeeOptions = employees.map((employee) => ({
    value: employee.name,
    label: <EmployeeOption employee={employee} />,
  }));

  // const isFormIncomplete =
  //   !requestType ||
  //   (requestType === "Request Something" &&
  //     (!assetRequiredFor ||
  //       !requestFor ||
  //       !requirementDetails ||
  //       (approvedByManager && !managerName))) ||
  //   (requestType === "Report Something" && (!issueType || !issueDescription)) ||
  //   !priority;

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
                  htmlFor="assetRequiredForSelf"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="assetRequiredForSelf"
                    name="assetRequiredFor"
                    value="Self"
                    checked={assetRequiredFor === "Self"}
                    onChange={handleassetRequiredForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Self
                </label>
                <label
                  htmlFor="assetRequiredForProject"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="assetRequiredForProject"
                    name="assetRequiredFor"
                    value="Project"
                    checked={assetRequiredFor === "Project"}
                    onChange={handleassetRequiredForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Project
                </label>
              </div>
            </div>

            {assetRequiredFor && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label htmlFor="requestFor" className="w-full mb-2 font-medium">
                  Request For:
                </label>
                <select
                  id="requestFor"
                  name="requestFor"
                  value={requestFor}
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

            {requestFor && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="requirementDetails"
                  className="w-full mb-2 font-medium"
                >
                  Brief your requirement:
                </label>
                <textarea
                  id="requirementDetails"
                  name="requirementDetails"
                  value={requirementDetails}
                  onChange={handlerequirementDetailsChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}

            {requirementDetails && (
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
                      name="approvedByManager"
                      value="Yes"
                      checked={approvedByManager}
                      // onChange={handleManagerApprovalChange}
                      onChange={() => handleManagerApprovalChange("Yes")}
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
                      name="approvedByManager"
                      value="No"
                      checked={!approvedByManager}
                      // onChange={handleManagerApprovalChange}
                      onChange={() => handleManagerApprovalChange("No")}
                      className="cursor-pointer mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            )}

            {approvedByManager && (
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
                <label htmlFor="priority" className="w-full mb-2 font-medium">
                  Set Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="High Priority">High Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value="Low Priority">Low Priority</option>
                </select>
              </div>
            )}
          </>
        ) : (
          <>
            {requestType === "Report Something" && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label htmlFor="requestFor" className="w-full mb-2 font-medium">
                  Issue Related To:
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  value={issueType}
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
            {issueType === "LFT Resource Related" && (
              <div>
                <p className="text-sm text-right mb-2 -mt-2">
                  (For Mantis, SVN, Crush FTP, FTP Access Related etc...)
                </p>
              </div>
            )}
            {issueType && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="requirementDetails"
                  className="w-full mb-2 font-medium"
                >
                  Brief your requirement:
                </label>
                <textarea
                  id="issueDescription"
                  name="issueDescription"
                  value={issueDescription}
                  onChange={handleissueDescriptionChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}
            {issueDescription && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label htmlFor="priority" className="w-full mb-2 font-medium">
                  Set Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="High Priority">High Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value="Low Priority">Low Priority</option>
                </select>
              </div>
            )}
          </>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isButtonDisabled}
            onClick={handleSubmit}
            className={`mt-4 p-2 rounded-md cursor-pointer ${
              isButtonDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white"
            }`}
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
      </form>
    </div>
  );
};

export default DropdownForm;
