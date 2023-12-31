import React, { useState, useEffect, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
// import { TicketService } from "../service/TicketService";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "../../context/Context";

const TicketTableByStatus = ({ title, statuses }) => {
  const [tickets, setTickets] = useState([]);
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[0].value);
  const [priorities] = useState([
    "High Priority",
    "Medium Priority",
    "Low Priority",
  ]);
  // const [statuses] = useState(["Resolved", "Open", "New", "Closed"]);
  const [selectedTickets, setSelectedTickets] = useState(null);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  // useEffect(() => {
  //   TicketService.getTicketsMini().then((data) => setTickets(data));
  //   initFilters();
  // }, []);

  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(`http://${baseURL}:${port}/tickets`);
        console.log("My Ticket Responses", res);
        const filteredTickets = res.data.filter((ticket) =>
          statuses.includes(ticket.status)
        );
        setTickets(filteredTickets);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchTickets();
    initFilters();
  }, [statuses]);
  console.log(user);
  console.log(user._id);

  const formatDate = (date) => {
    const options = {
      weekday: "short", // Mon
      day: "2-digit", // 21
      month: "short", // Aug
      year: "numeric", // 2023
      hour: "2-digit", // 12
      minute: "2-digit", // 05
      second: "2-digit", // 21
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const statusBodyTemplate = (ticket) => {
    return (
      <Tag
        value={ticket.status}
        severity={getSeverity(ticket)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };
  const priorityBodyTemplate = (ticket) => {
    return (
      <Tag
        value={ticket.priority}
        severity={getPrioritySeverity(ticket)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };
  const priorityApprovalTemplate = (ticket) => {
    return (
      <Tag
        value={ticket.approvedByManager || "Not Required"}
        severity={getApprovalSeverity(ticket)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };

  const getSeverity = (ticket) => {
    switch (ticket.status) {
      case "Closed":
        return "success";

      case "New":
        return "info";

      case "Open":
        return "danger";

      case "Resolved":
        return "warning";

      default:
        return null;
    }
  };
  const getPrioritySeverity = (ticket) => {
    switch (ticket.priority) {
      case "Low":
        return "success";

      case "Medium":
        return "warning";

      case "High":
        return "danger";

      default:
        return null;
    }
  };
  const getApprovalSeverity = (ticket) => {
    switch (ticket.approvedByManager) {
      case "Yes":
        return "success";

      case "Not Required":
        return "warning";

      case "Awaited":
        return "warning";

      case "No":
        return "danger";

      default:
        return null;
    }
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.CONTAINS },
      ticketId: { value: null, matchMode: FilterMatchMode.CONTAINS },
      requestType: { value: null, matchMode: FilterMatchMode.CONTAINS },
      createdAt: { value: null, matchMode: FilterMatchMode.CONTAINS },
      priority: { value: null, matchMode: FilterMatchMode.CONTAINS },
      assignedTo: { value: null, matchMode: FilterMatchMode.CONTAINS },
      status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };
  const clearFilter = () => {
    initFilters();
  };
  const onRowEditComplete = (e) => {
    let _tickets = [...tickets];
    let { newData, index } = e;

    _tickets[index] = newData;

    setTickets(_tickets);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };
  const userBodyTemplate = (rowData) => {
    const createdBy = rowData.createdBy;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={createdBy.fullName}
            src={`http://${baseURL}:${port}${createdBy.profileImageURL}`}
            width="40"
            height="40"
          />
          <Link
            to={`/userview/${rowData._id}`}
            className="ml-2 text-green-500 hover:text-green-900"
          >
            {createdBy.fullName}
          </Link>
        </div>
      </div>
    );
  };
  const assignedBodyTemplate = (rowData) => {
    console.log("Row Row Data", rowData);

    const assignedTo = rowData.assignedTo;
    console.log("Assigned To data", assignedTo);
    if (!assignedTo._id) {
      // Ticket is unassigned
      return (
        <div className="flex flex-col align-items-center gap-2 mr-2">
          <div className="flex flex-row items-center justify-start">
            <span>Not Assigned Yet</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 border-none p-3 rounded-lg text-white ml-4 -mr-6"
              onClick={() => handleTicketAssignment(rowData._id)}
              // disabled={rowData.isAssigned}
            >
              Take Ownership
            </button>
          </div>
        </div>
      );
    } else {
      // tIcket Is Assigned
      return (
        <div className="flex flex-col align-items-center gap-2 mr-2">
          <div className="flex flex-row  items-center justify-start">
            <img
              alt={assignedTo.fullName}
              src={`http://${baseURL}:${port}${assignedTo.profileImageURL}`}
              width="40"
              height="40"
            />
            <Link
              to={`/userview/${rowData._id}`}
              className="ml-2 text-green-500 hover:text-green-900"
            >
              {assignedTo.fullName}
            </Link>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 border-none p-3 rounded-lg text-white ml-4 -mr-6"
              // onClick={handleTicketAssignment}
              // disabled={rowData.isAssigned}
            >
              Assigned to You
            </button> */}
          </div>
        </div>
      );
    }
  };

  const priorityEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={priorities}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select Priority"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };
  const statusEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Change Status"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const columns = [
    {
      field: "id",
      header: "S.No",
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.serialNumber}
        </Link>
      ),
      sortable: true,
      bodyStyle: {
        textAlign: "center",
      },
    },
    {
      field: "ticketId",
      header: "Ticket ID",
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.ticketId}
        </Link>
      ),
      bodyStyle: {
        textAlign: "center",
        minWidth: "7rem",
      },
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "name",
      header: "Created By",
      body: userBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        minWidth: "8rem",
        // Customize the style as needed
      },
      style: { minWidth: "150px" },
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "requestType",
      header: "Request Type",
      bodyStyle: {
        textAlign: "center",
        minWidth: "10rem", // Customize the style as needed
      },
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.requestType}
        </Link>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "createdAt",
      header: "Created On",
      bodyStyle: {
        textAlign: "center",
        minWidth: "8rem",
      },
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-yellow-500 hover:text-blue-900"
        >
          {/* {new Date(rowData.createdAt).toDateString()} */}
          {formatDate(rowData.createdAt)}
        </Link>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "priority",
      header: "Priority",
      body: priorityBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        pointer: "cursor",
      },
      editor: (options) => priorityEditor(options),
      sortable: true,
    },
    {
      field: "approvedByManager",
      header: "Manager Approval",
      body: priorityApprovalTemplate,
      bodyStyle: {
        textAlign: "center",
        pointer: "cursor",
        minWidth: "6rem",
      },
      editor: (options) => priorityEditor(options),
      sortable: true,
    },
    {
      field: "assignedTo",
      header: "Assigned To",
      body: assignedBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      // style: { minWidth: "100px" },
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      bodyStyle: {
        textAlign: "center",
      },
      body: statusBodyTemplate,
      editor: (options) => statusEditor(options),
      sortable: true,
    },
    //  {
    //    rowEditor: true,
    //    headerStyle: { width: "10%", minWidth: "8rem" },
    //    bodyStyle: { textAlign: "center" },
    //  },
  ];
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };

  const handleNewTicketCreation = () => {
    navigate("/user/new-ticket");
  };
  const handleTicketAssignment = () => {
    toast.success("New user created!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const header = (
    <div className="flex justify-between mb-4">
      <div className="flex justify-content-center mb-4">
        <Dropdown
          value={size}
          onChange={(e) => setSize(e.value)}
          options={sizeOptions}
          optionLabel="label"
          editable
          placeholder="Change Size"
          className="w-32 md:w-14rem"
        />
      </div>
      {/* <div>
        <MultiSelect
          value={visibleColumns}
          options={columns}
          optionLabel="header"
          onChange={onColumnToggle}
          className="w-32 sm:w-20rem ml-2"
          display="chip"
        />
      </div> */}
      <div className="w-1/2 ml-2">
        <button
          className="bg-green-500 border-none p-3 rounded-lg text-white"
          onClick={handleNewTicketCreation}
        >
          Create New Ticket
        </button>
      </div>
      <div className="flex items-center">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search"
          />
        </span>
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label=""
          outlined
          style={{ marginLeft: "5px" }}
          onClick={clearFilter}
          className={globalFilterValue ? "p-button-danger p-ml-2" : ""}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden card p-fluid">
      <h1>{title}</h1>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <DataTable
          value={tickets}
          header={header}
          showGridlines
          size={size}
          tableStyle={{ overflow: "auto" }}
          className="shadow-md rounded-lg"
          stripedRows
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          removableSort
          sortField="createdAt"
          sortOrder={-1}
          filters={filters}
          globalFilterFields={[
            "name",
            "ticketId",
            "requestType",
            "createdAt",
            "priority",
            "assignedTo",
            "location",
            "status",
          ]}
          emptyMessage="No Tickets found."
          editMode="row"
          dataKey="id"
          onRowEditComplete={onRowEditComplete}
          scrollable
          scrollHeight="400px"
          selectionMode={"checkbox"}
          selection={selectedTickets}
          onSelectionChange={(e) => setSelectedTickets(e.value)}
        >
          <Column
            selectionMode="multiple"
            // headerStyle={{ width: "3rem" }}
          ></Column>
          {visibleColumns.map((column, index) => (
            <Column
              key={index}
              {...column}
              headerStyle={{
                textAlign: "center",
              }}
            />
          ))}
        </DataTable>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TicketTableByStatus;
