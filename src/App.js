// import logo from "./logo.svg";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Notification from "./components/Notification/Notification";
// import Login from "./pages/login";
// import AdminDashboard from "./pages/Admindashboard";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
// import Layout from "./components/Layout/Layout";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Carousel from "./pages/carousel";
// import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import InfoBox from "./components/InfoBox/InfoBox";
import assetCategory from "./data/AssetData/AssetCategory";
import softwareCategory from "./data/SoftwareData/SoftwareCategory";
import ticketCategory from "./data/TicketData/TicketCategory";
import selfSupportCategory from "./data/SelfSupportCategory/SelfSupportCategory";
import Table from "./components/Table/Table";
// import Form from "./components/Form/Form";
import AssetForm from "./components/Asset/AssetForm/AssetForm";
import UserLayout from "./components/UserLayout/UserLayout";
// import Login from "./pages/login";
import Dashboard from "./pages/FinalDashboard/Dashboard";
import RecentActivityPage from "./pages/RecentActivityPage";
import accessoryCategory from "./data/AccessoriesData/AccessoriesCategory";
import consumablesCategory from "./data/Consumables/ConsumablesCategory";
import componentsCategory from "./data/Components/ComponentsCategory";
import Reports from "./pages/Reports";
import AdminRights from "./pages/AdminRights";
import NotificationMenu from "./components/Notification/Notification";
import AssetLocation from "./components/AssetLocation/AssetLocation";
import AssetLocationPage from "./pages/AssetLocationPage";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserAsset from "./components/UserAsset/UserAsset";
import UserTable from "./components/UserTable/UserTable";
import SelfSupportPage from "./pages/SelfSupportPage/SelfSupportPage";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import ConsumablesPage from "./pages/ConsumablesPage/ConsumablesPage";
import AssetFormPage from "./pages/AssetFormPage/AssetFormPage";
import TicketFormPage from "./pages/TicketFormPage/TicketFormPage";
import TicketPage from "./pages/TicketPage/TicketPage";
// import PieChart from "./components/PieChart/PieChart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(selectedCategory);
  };

  // const myChartData = [
  //   { name: "Asset 1", value: 50 },
  //   { name: "Asset 2", value: 30 },
  //   { name: "Asset 3", value: 20 },
  // ];
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<AdminDashboard />} /> */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/" element={<Sidebar />} /> */}
        {/* <Route path="/" element={<Sidebar />} /> */}
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<Layout />} /> */}

        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/" element={<Notification />} /> */}

        {/* <Route
          path="/"
          element={
            <Layout>
              <InfoBox categories={DashboardCategory} />
            </Layout>
          }
        /> */}
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/assets"
          element={
            <Layout>
              <InfoBox categories={assetCategory} title="Assets" />
            </Layout>
          }
        />
        <Route
          path="/accessories"
          element={
            <Layout>
              <InfoBox categories={accessoryCategory} title="Accessories" />
            </Layout>
          }
        />
        {/* <Route
          path="/consumables"
          element={
            <Layout>
              <InfoBox categories={consumablesCategory} title="Consumables" />
            </Layout>
          }
        /> */}
        <Route
          path="/consumables"
          element={
            <Layout>
              <ConsumablesPage />
            </Layout>
          }
        />
        {/* <Route
          path="/components"
          element={
            <Layout>
              <InfoBox categories={componentsCategory} title="Components" />
            </Layout>
          }
        /> */}
        <Route
          path="/components"
          element={
            <Layout>
              <ComponentsPage />
            </Layout>
          }
        />
        <Route
          path="/licences"
          element={
            <Layout>
              <InfoBox categories={softwareCategory} title="Licences" />
            </Layout>
          }
        />
        <Route
          path="/tickets"
          element={
            <Layout>
              <TicketPage />
            </Layout>
          }
        />

        <Route
          path="/it-support"
          element={
            <Layout>
              <InfoBox categories={ticketCategory} title="IT Support" />
            </Layout>
          }
        />
        {/* <Route
          path="/self-support"
          element={
            <Layout>
              <InfoBox categories={selfSupportCategory} title="Self Support" />
            </Layout>
          }
        /> */}
        <Route
          path="/self-support"
          element={
            <Layout>
              <SelfSupportPage />
            </Layout>
          }
        />

        <Route
          path="/admin-rights"
          element={
            <UserLayout>
              <UserDashboard />
            </UserLayout>
          }
        />
        {/* <Route
          path="/admin-rights"
          element={
            <Layout>
              <AdminRights />
            </Layout>
          }
        /> */}
        <Route
          path="/users"
          element={
            <Layout>
              <Table />
            </Layout>
          }
        />
        {/* <Route
          path="/admin-rights"
          element={
            <Layout>
              <AssetForm />
            </Layout>
          }
        /> */}

        <Route
          path="/:category"
          element={
            <Layout>
              <Table selectedCategory={selectedCategory} />
            </Layout>
          }
        />

        <Route
          path="/recent-activity"
          element={
            <Layout>
              <RecentActivityPage />
            </Layout>
          }
        />
        <Route
          path="/asset-location"
          element={
            <Layout>
              <AssetLocationPage />
            </Layout>
          }
        />
        <Route
          path="/reports"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />
        <Route
          path="/create-asset"
          element={
            <Layout>
              <AssetFormPage />
            </Layout>
          }
        />
        <Route
          path="/new-ticket"
          element={
            <Layout>
              <TicketFormPage />
            </Layout>
          }
        />
        {/* <Route
          path="/users"
          element={
            <UserLayout>
              <Table />
            </UserLayout>
          }
        /> */}
        <Route
          path="/assets-issued"
          element={
            <UserLayout>
              <UserAsset />
            </UserLayout>
          }
        />
        <Route
          path="/accessories-issued"
          element={
            <UserLayout>
              {/* <UserAsset /> */}
              <UserTable />
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
