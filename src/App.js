import React from "react";
import Sidebar from "./Component/Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { useState } from "react";

import Profiles from "./Component/Profiles";
import Role from "./Component/Role";

import Changepw from "./Component/Changepw";
import AddBook from "./Component/AddBook";
import Login from "./Component/Login";
import Protected from "./Utils/Protected";
import Dashboard from "./Layout/Dashboard";
import ListUsers from "./Component/UsersList";
import ViewBook from "./Component/ViewBook";
import Forms from "./Component/Form";
import Permissions from "./Component/Permissions";
import Faculty from "./Component/Faculty";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Routes>
        <Route exact index path="/login" element={<Login />} />

        <Route element={<Protected />}>
          <Route
            element={
              <Dashboard
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
              />
            }
          >
            {/* <Navbar /> */}
            <Route path="/" element={<Profiles />} />
            <Route path="/users" element={<ListUsers />} />
            <Route path="/add-users" element={<Forms />} />
            <Route path="/books" element={<ViewBook />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/roles" element={<Role />} />
            <Route path="/change-password" exact element={<Changepw />} />
            <Route path="/Permissions" element={<Permissions />} />
            <Route path="/Faculties" element={<Faculty />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div className="inline-flex w-screen h-screen text-5xl bg-gray-600 text-red-400 items-center justify-center">
              404 Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
};
export default App;
