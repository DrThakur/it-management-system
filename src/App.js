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
import DashboardCategory from "./data/dashboardData/DashboardCategory";
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

        <Route
          path="/"
          element={
            <Layout>
              <InfoBox categories={DashboardCategory} />
            </Layout>
          }
        />
        <Route
          path="/assets"
          element={
            <Layout>
              <InfoBox categories={assetCategory} />
            </Layout>
          }
        />
        <Route
          path="/licences"
          element={
            <Layout>
              <InfoBox categories={softwareCategory} />
            </Layout>
          }
        />
        <Route
          path="/it-support"
          element={
            <Layout>
              <InfoBox categories={ticketCategory} />
            </Layout>
          }
        />
        <Route
          path="/self-support"
          element={
            <Layout>
              <InfoBox categories={selfSupportCategory} />
            </Layout>
          }
        />
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
          path="/admin-rights"
          element={
            <UserLayout>
              <AssetForm />
            </UserLayout>
          }
        />
        <Route
          path="/:category"
          element={
            <Layout>
              <Table selectedCategory={selectedCategory} />
            </Layout>
          }
        />
        {/* <Route
          path="/users"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
