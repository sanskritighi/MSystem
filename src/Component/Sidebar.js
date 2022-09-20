import React from "react";
import { AiOutlineClose,AiOutlineSetting ,AiOutlineProfile} from "react-icons/ai";
import {NavLink} from 'react-router-dom'
import {FaUserAlt ,FaRegListAlt } from "react-icons/fa";
import {BsBook,BsFillPeopleFill } from "react-icons/bs";
import {RiUserSettingsLine} from "react-icons/ri";
import {MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp,MdLibraryAdd}from "react-icons/md";
import { useState } from "react";



const Sidebar = ({ toggleSidebar, sidebarOpen }) => {
  const [toggle,setToggle]=useState(false);
  const [setting,setSetting] =useState(false);
  return (
    <div className="shodow-xl bg-blue text-white h-screen overflow-auto">
      <div className="flex justify-between items-center  p-3">
        <div>
          {sidebarOpen && (
            <h1 className="text-2xl font-bold pl-4 inline">Admin</h1>
          )}
        </div>
        {!sidebarOpen && (
          <span onClick={toggleSidebar}>
             {/* <AiOutlineClose/> */}
          </span>
        )}
        <span className="block  lg:hidden" onClick={toggleSidebar}>
        
          <AiOutlineClose />
        </span>
      </div>
      <div className=" p-3 ">
          {/* Profile route  */}
          <div className="hover:bg-white hover:text-blue font-bold py-2 px-3 mb-2  rounded flex space-x-4 items-center">
          <span className='font-bold text-xl'>
             {/* icon */}
             <AiOutlineProfile onClick={toggleSidebar}/>
      
               </span>
               <NavLink style={({isActive})=>{
               return{
                 color:isActive?'yellow':'',
              }
               }}  to ="/" >
               <span>Profile</span>
               </NavLink>
               <hr />
          </div>
        {/* User route  */}
        <div  className='hover:bg-white hover:text-blue font-bold py-2 space-x-4 items-center px-3 mb-2 rounded '>
        <div className=" space-x-4 flex  ">
          {/* icon */}
          <span className='font-bold text-xl'>
             {/* icon */}
             <FaUserAlt onClick={toggleSidebar}/>
      
               </span>
          <NavLink  to ="/">
               <span>User</span>
               </NavLink>
           {toggle?( 
          <span className='pl-8 text-2xl '>
            <MdOutlineKeyboardArrowUp
             onClick={()=>setToggle(!toggle)}/></span>) :(
          <span className='pl-8 text-2xl '><MdOutlineKeyboardArrowDown onClick={()=>setToggle(!toggle)}/></span>
          )  }
        </div>
        {toggle &&(
        <div className='pl-3 mt-2 '>
          <div className='flex space-x-2 '>
          <span className=' '>
             {/* icon */}
             <MdLibraryAdd/>
      
               </span>
              <NavLink  style={({isActive})=>{
               return{
                 color:isActive?'yellow':'',
              }
               }}
              to="/form">
               <span>Add</span>
               </NavLink>
              </div>
              <div className='flex space-x-2 mt-2'>
              <span className=' '>
             {/* icon */}
             <FaRegListAlt/>
      
               </span>
               <NavLink to="/list">
               <span>List</span>
               </NavLink>
             </div>
               </div>

               )}
               </div>
        
          
            {/* Book route  */}
          <div className="hover:bg-white hover:text-blue  font-bold py-2 px-3 mb-2  rounded flex space-x-4 items-center">
          <span className='font-bold text-xl'>
             {/* icon */}
             <BsBook onClick={toggleSidebar}/>
               </span>
               <NavLink to="/book">
               <span>Book</span>
               </NavLink>
          </div>
             
           {/* Setting route  */}
          <div  className='hover:bg-white hover:text-blue  font-bold py-2 space-x-4 items-center px-3 mb-2 rounded '>
        <div className=" space-x-4 flex">
          {/* icon */}
          <span className='font-bold text-xl'>
             {/* icon */}
             <AiOutlineSetting onClick={toggleSidebar}/>
      
               </span>
          <NavLink  to ="/">
               <span>Setting</span>
               </NavLink>
           {setting ?( 
          <span className='pl-4 text-2xl '>
            <MdOutlineKeyboardArrowUp
             onClick={()=>setSetting(!setting)}/></span>) :(
          <span className='pl-8 text-2xl '><MdOutlineKeyboardArrowDown onClick={()=>setSetting(!setting)}/></span>
          )  }
        </div>
        {setting &&(
        <div className='pl-3 mt-2 '>
          <div className='flex space-x-2 '>
          <span className='  '>
             {/* icon */}
             <RiUserSettingsLine/>
      
               </span>
              <NavLink to="/role">
               <span>Role</span>
               </NavLink>
              </div>
              <div className='flex space-x-2 mt-2'>
              <span className=' '>
             {/* icon */}
             <BsFillPeopleFill/>
      
               </span>
               <NavLink to="/form">
               <span>Faculty</span>
               </NavLink>
             </div>
             <div className='flex space-x-2 mt-2'>
          <span className=' '>
             {/* icon */}
             <MdLibraryAdd/>
      
               </span>
              <NavLink to="/form">
               <span>Permisssion</span>
               </NavLink>
              </div>
              <div className='flex space-x-2 mt-2'>
              <span className=' '>
             {/* icon */}
             <FaRegListAlt/>
      
               </span>
               <NavLink to="/change">
               <span>Change Password</span>
               </NavLink>
             </div>
               </div>

               )}
               </div>
          
      </div>
    </div>
  );
};
export default Sidebar;

