import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [SidebarShow, setSidebarShow] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar setSidebarShow={setSidebarShow} SidebarShow={SidebarShow}/>
      </div>
      <Sidebar SidebarShow={SidebarShow}/>
      <main
        className={`transition-all duration-300 pt-19 ${
          SidebarShow ? 'ml-[260px]' : ' md:ml-[100px]'
        } bg-[#0f0f0f] min-h-screen`}
      >
        <Outlet/>
      </main>
    </>
  )
}

export default MainLayout