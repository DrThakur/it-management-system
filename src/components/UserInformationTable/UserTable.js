import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { ProductService } from "../service/ProductService";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Link, useNavigate } from "react-router-dom";

const Table = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[0].value);
  const [categories] = useState(["Accessories", "Fitness", "Clothing"]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
    initFilters();
  }, []);

  // const headerCellStyle = {
  //   padding: "5px auto", // Adjust this value to your preference
  //   margin: "0 auto", // Adjust this value to your preference
  //   textAlign: "center",
  // };

  const statusBodyTemplate = (product) => {
    return <Tag value={product.status} severity={getSeverity(product)}></Tag>;
  };

  const getSeverity = (product) => {
    switch (product.status) {
      case "ACTIVE":
        return "success";

      case "HOLD":
        return "warning";

      case "INACTIVE":
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
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      price: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      description: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      inventoryStatus: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    setGlobalFilterValue("");
  };
  const clearFilter = () => {
    initFilters();
  };
  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
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
  const employeeBodyTemplate = (rowData) => {
    const employee = rowData.employee;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row align-items-center">
          <img
            alt={employee.firstName}
            src={`https://primefaces.org/cdn/primereact/images/avatar/${employee.image}`}
            width="32"
            height="32"
          />
          <Link
            to="/userview"
            className="ml-2 text-green-500 hover:text-green-900"
          >
            {employee.firstName}
          </Link>
        </div>
      </div>
    );
  };

  const categoryEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={categories}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Category"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const columns = [
    {
      field: "id",
      header: "ID",
      sortable: true,
    },
    {
      field: "name",
      header: "Name",
      body: employeeBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        padding: "0 30px",
        minWidth: "16rem", // Customize the style as needed
      },
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "designation",
      header: "Designation",
      bodyStyle: {
        textAlign: "center",
        minWidth: "12rem", // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.designation}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "emailID",
      header: "Email ID",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-yellow-500 hover:text-blue-900">
          {rowData.emailID}
        </a>
      ),
      editor: (options) => categoryEditor(options),
      sortable: true,
    },
    {
      field: "phoneNumber",
      header: "Phone Number",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "username",
      header: "Username",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.username}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "department",
      header: "Department",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.department}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "location",
      header: "Location",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.location}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "reportingManager",
      header: "Reporting Manager",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.reportingManager}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "issuedAssets",
      header: "Issued Assets",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.issuedAssets}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "issuedLicence",
      header: "Issued Licence",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.issuedLicence}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "totalRaisedTickets",
      header: "Total Raised Tickets",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a href="/userview" className="text-blue-500 hover:text-blue-900">
          {rowData.totalRaisedTickets}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: statusBodyTemplate,
      editor: (options) => textEditor(options),
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

  const handleNewUserCreation = () => {
    navigate("/new-user");
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
          onClick={handleNewUserCreation}
        >
          Create User
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
      <h1>All Users</h1>
      <DataTable
        value={products}
        header={header}
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
          "price",
          "description",
          "inventoryStatus",
          "category",
        ]}
        emptyMessage="No product found."
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        scrollable
        scrollHeight="400px"
        selectionMode={"checkbox"}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        {visibleColumns.map((column, index) => (
          <Column
            key={index}
            {...column}
            headerStyle={{ textAlign: "center" }}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default Table;