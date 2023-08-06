import React, { useState, useEffect } from "react";
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
import axios from "axios";

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);
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
  const [statuses] = useState(["Resolved", "Pending", "New"]);
  const [selectedTickets, setSelectedTickets] = useState(null);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  // useEffect(() => {
  //   TicketService.getTicketsMini().then((data) => setTickets(data));
  //   initFilters();
  // }, []);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get("http://localhost:8002/tickets");
        console.log(res);
        setTickets(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchTickets();
    initFilters();
  }, []);

  const statusBodyTemplate = (ticket) => {
    return <Tag value={ticket.status} severity={getSeverity(ticket)}></Tag>;
  };
  const priorityBodyTemplate = (ticket) => {
    return (
      <Tag value={ticket.priority} severity={getPrioritySeverity(ticket)}></Tag>
    );
  };

  const getSeverity = (ticket) => {
    switch (ticket.status) {
      case "Resolved":
        return "success";

      case "New":
        return "warning";

      case "Pending":
        return "danger";

      default:
        return null;
    }
  };
  const getPrioritySeverity = (ticket) => {
    switch (ticket.priority) {
      case "Low Priority":
        return "success";

      case "Medium Priority":
        return "warning";

      case "High Priority":
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
      ticketID: { value: null, matchMode: FilterMatchMode.CONTAINS },
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
        <div className="flex flex-row align-items-center">
          <img
            alt={createdBy.name}
            src={`http://localhost:8002${createdBy.profilePicture}`}
            width="32"
            height="32"
          />
          <Link
            to="/userview"
            className="ml-2 text-green-500 hover:text-green-900"
          >
            {createdBy.name}
          </Link>
        </div>
      </div>
    );
  };
  const assignedBodyTemplate = (rowData) => {
    const assignedTo = rowData.assignedTo;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row align-items-center">
          <img
            alt={assignedTo.name}
            src={`http://localhost:8002${assignedTo.profilePicture}`}
            width="32"
            height="32"
          />
          <Link
            to="/userview"
            className="ml-2 text-green-500 hover:text-green-900"
          >
            {assignedTo.name}
          </Link>
        </div>
      </div>
    );
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
        <a href="/ticketView" className="text-blue-500 hover:text-blue-900">
          {rowData.serialNumber}
        </a>
      ),
      sortable: true,
      bodyStyle: {
        textAlign: "center",
      },
    },
    {
      field: "ticketID",
      header: "Ticket ID",
      body: (rowData) => (
        <a href="/ticketView" className="text-blue-500 hover:text-blue-900">
          {rowData.ticketId}
        </a>
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
        minWidth: "15rem", // Customize the style as needed
      },
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
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.requestType}
        </a>
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
        <a href="/userview" className="text-yellow-500 hover:text-blue-900">
          {new Date(rowData.createdAt).toLocaleString()}
        </a>
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
      field: "assignedTo",
      header: "Assigned To",
      body: assignedBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        minWidth: "15rem", // Customize the style as needed
      },
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
    {
      rowEditor: true,
      headerStyle: { width: "10%", minWidth: "8rem" },
      bodyStyle: { textAlign: "center" },
    },
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
    navigate("/new-ticket");
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
      <div>
        <MultiSelect
          value={visibleColumns}
          options={columns}
          optionLabel="header"
          onChange={onColumnToggle}
          className="w-32 sm:w-20rem ml-2"
          display="chip"
        />
      </div>
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
    <div className="w-full overflow-hidden ">
      <h1>All Tickets</h1>
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
        sortField="id"
        sortOrder={1}
        filters={filters}
        globalFilterFields={[
          "name",
          "ticketID",
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
          headerStyle={{ width: "3rem" }}
        ></Column>
        {visibleColumns.map((column, index) => (
          <Column
            key={index}
            {...column}
            headerStyle={{
              textAlign: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default TicketTable;
