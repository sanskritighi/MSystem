import React from "react";
import { AiOutlineClose, AiFillCaretDown, AiOutlineKey } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  FaRegListAlt,
  FaBook,
  FaUser,
  FaUsers,
  FaCog,
  FaPassport,
} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiAdminLine, RiOrganizationChart } from "react-icons/ri";
import { MdLibraryAdd, MdPassword } from "react-icons/md";
import { useState } from "react";

const activeRouteCss = "text-[#1abc9c]";
const activetoggleCss = "text-[#1abc9c]/100";
const routes = [
  {
    path: "/",
    name: "Profile",
    icon: <FaUser />,
  },
  {
    name: "Users",
    icon: <FaUsers />,
    submenus: [
      {
        name: "View Users",
        icon: <FaRegListAlt />,
        path: "/users",
      },
      {
        name: "Add Users",
        icon: <FaRegListAlt />,
        path: "/add-users",
      },
    ],
  },
  {
    name: "Books",
    icon: <FaBook />,
    submenus: [
      {
        name: "View Books",
        icon: <FaRegListAlt />,
        path: "/books",
      },
      {
        name: "Add Book",
        icon: <MdLibraryAdd />,
        path: "/add-book",
      },
    ],
  },
  {
    name: "Settings",
    icon: <FaCog />,
    submenus: [
      {
        name: "Role",
        icon: <BsFillPeopleFill />,
        path: "/roles",
      },
      {
        name: "Permissions",
        icon: <AiOutlineKey />,
        path: "/permissions",
      },
      {
        name: "Faculties",
        icon: <RiOrganizationChart />,
        path: "/faculties",
      },
      {
        name: "Change Password",
        icon: <MdPassword />,
        path: "/change-password",
      },
    ],
  },
];

const SideItem = ({ routeObj, sidebarOpen }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return routeObj.submenus ? (
    <div className={`w-full  h-full `} onClick={toggleSubMenu}>
      <div className=" hover:bg-white hover:text-blue cursor-pointer justify-start font-bold py-2 px-3  rounded flex gap-2 items-center">
        <span className={`${showSubMenu && activetoggleCss}`}>
          {" "}
          {routeObj.icon}
        </span>
        {sidebarOpen && <span> {routeObj.name}</span>}
        {sidebarOpen && <span>{<AiFillCaretDown />}</span>}
      </div>
      {showSubMenu && (
        <div className="transition-all ring-1 rounded ring-white mt-2 flex flex-col gap-1 p-1">
          {routeObj.submenus.map((submenu, index) => {
            return (
              <NavLink
                to={submenu.path}
                className={({ isActive }) =>
                  `hover:bg-white hover:text-blue justify-start  font-bold py-2 px-3  rounded flex  gap-2 items-center ${
                    isActive && activeRouteCss
                  } ${sidebarOpen ? " justify-start" : "justify-center"}`
                }
              >
                <span className="font-bold text-xl">{submenu.icon}</span>
                {sidebarOpen && <span>{submenu.name}</span>}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <NavLink
      to={routeObj.path}
      className={({ isActive }) =>
        `hover:bg-white hover:text-blue font-bold py-2 px-3 mb-2  rounded flex justify-start gap-2 items-center ${
          isActive && activeRouteCss
        }`
      }
    >
      <span className="font-bold text-xl">{routeObj.icon}</span>
      {sidebarOpen && <span>{routeObj.name}</span>}
    </NavLink>
  );
};

const Sidebar2 = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <>
      <div className="w-full h-screen overflow-auto bg-blue text-white z-99">
        {/* Top Header */}
        <div className="flex justify-between lg:justify-center items-center p-3">
          <div>
            {sidebarOpen ? (
              <h1 className="text-2xl font-bold pl-4 inline">Admin</h1>
            ) : (
              <RiAdminLine size={26} />
            )}
          </div>
          <span className="block  lg:hidden" onClick={toggleSidebar}>
            <AiOutlineClose />
          </span>
        </div>
        {/* Routes Area */}
        <div className="w-full mt-3 p-3 flex flex-col gap-3">
          {routes.map((route, index) => {
            return <SideItem routeObj={route} sidebarOpen={sidebarOpen} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
