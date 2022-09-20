import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Sidebar'
import Sidebar2 from '../Component/Sidebar2'
import Navbar from '../Component/Navbar'

const Dashboard = ({sidebarOpen,toggleSidebar}) => {
  return (
    <div className="flex justify-between h-screen max-h-screen overflow-y-hidden">
    <div
      className={`${
        sidebarOpen ? "w-52" : "w-0 lg:w-15 "
      } transition-all duration-300 ease-in-out absolute lg:relative left-0 top-0`}
    >
      <Sidebar2 toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    </div>
    <div className="flex-1 h-screen max-h-screen overflow-auto">
      <Navbar toggleSidebar={toggleSidebar} />
      <Outlet/>
      </div>
    </div>

  )
}

export default Dashboard