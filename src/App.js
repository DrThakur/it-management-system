// import logo from "./logo.svg";
import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import InfoBox from "./components/InfoBox/InfoBox";
import assetCategory from "./data/AssetData/AssetCategory";
import softwareCategory from "./data/SoftwareData/SoftwareCategory";
import ticketCategory from "./data/TicketData/TicketCategory";
import Table from "./components/Table/Table";
import UserLayout from "./components/UserLayout/UserLayout";
import Dashboard from "./pages/FinalDashboard/Dashboard";
import RecentActivityPage from "./pages/RecentActivityPage";
import accessoryCategory from "./data/AccessoriesData/AccessoriesCategory";
import Reports from "./pages/Reports";
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
import Users from "./pages/Users/Users";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import UserCreationPage from "./pages/UserCreationPage/UserCreationPage";
import UserViewPage from "./pages/UserViewPage/UserViewPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import Tickets from "./pages/Tickets/Tickets";
import Login from "./pages/login";
import MyTicketsPage from "./pages/MyTicketsPage/MyTicketsPage";
import MyAssetPage from "./pages/MyAssetPage/MyAssetPage";
import MyAccessoryPage from "./pages/MyAccessoryPage/MyAccessoryPage";
import SystemRightPage from "./pages/SystemRightPage/SystemRightPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import IndividualAssetPage from "./pages/IndividualAssetPage/IndividualAssetPage";
import { Context } from "./context/Context";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { user } = useContext(Context);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(selectedCategory);
  };
  const hasAdminRole = (user) => {
    return (user && user.role === "SUPER ADMIN") || user.role === "ADMIN";
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            user ? (
              hasAdminRole(user) ? (
                <Layout>
                  <Dashboard />
                </Layout>
              ) : (
                <UserLayout>
                  <UserDashboard />
                </UserLayout>
              )
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/assets"
          element={
            user ? (
              <Layout>
                <InfoBox categories={assetCategory} title="Assets" />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/accessories"
          element={
            user ? (
              <Layout>
                <InfoBox categories={accessoryCategory} title="Accessories" />
              </Layout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/consumables"
          element={
            user ? (
              <Layout>
                <ConsumablesPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/components"
          element={
            user ? (
              <Layout>
                <ComponentsPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/licences"
          element={
            user ? (
              <Layout>
                <InfoBox categories={softwareCategory} title="Licences" />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/tickets"
          element={
            user ? (
              <Layout>
                <TicketPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/it-support"
          element={
            user ? (
              <Layout>
                <InfoBox categories={ticketCategory} title="IT Support" />
              </Layout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/self-support"
          element={
            user ? (
              hasAdminRole(user) ? (
                <Layout>
                  <SelfSupportPage />
                </Layout>
              ) : (
                <UserLayout>
                  <SelfSupportPage />
                </UserLayout>
              )
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/:assetType"
          element={
            user ? (
              <Layout>
                <IndividualAssetPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/users"
          element={
            user ? (
              <Layout>
                <Users />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/new-user"
          element={
            user ? (
              <Layout>
                <UserCreationPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/userview"
          element={
            user ? (
              <Layout>
                <UserViewPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/userProfilePage"
          element={
            user ? (
              <Layout>
                <UserProfilePage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/all-tickets"
          element={
            user ? (
              <Layout>
                <Tickets />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/my-tickets"
          element={
            user ? (
              <UserLayout>
                <MyTicketsPage />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/my-assets"
          element={
            user ? (
              <UserLayout>
                <MyAssetPage />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/my-accessories"
          element={
            user ? (
              <UserLayout>
                <MyAccessoryPage />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/system-right"
          element={
            user ? (
              <UserLayout>
                <SystemRightPage />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/settings"
          element={
            user ? (
              hasAdminRole(user) ? (
                <Layout>
                  <SettingsPage />
                </Layout>
              ) : (
                <UserLayout>
                  <SettingsPage />
                </UserLayout>
              )
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/:category"
          element={
            user ? (
              <Layout>
                <Table selectedCategory={selectedCategory} />
              </Layout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/recent-activity"
          element={
            user ? (
              <Layout>
                <RecentActivityPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/asset-location"
          element={
            user ? (
              <Layout>
                <AssetLocationPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/reports"
          element={
            user ? (
              <Layout>
                <Reports />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/create-asset"
          element={
            user ? (
              <Layout>
                <AssetFormPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/new-ticket"
          element={
            user ? (
              <Layout>
                <TicketFormPage />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/user/new-ticket"
          element={
            user ? (
              <UserLayout>
                <TicketFormPage />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/assets-issued"
          element={
            user ? (
              <UserLayout>
                <UserAsset />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/accessories-issued"
          element={
            user ? (
              <UserLayout>
                <UserTable />
              </UserLayout>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
