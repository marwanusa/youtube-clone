import YoutubeLogo from "../assets/Youtube.svg?react";
import SideMenuIcon from "../assets/SideMenu.svg?react";
import PlusIcon from "../assets/Plus.svg?react";
import Searchbar from "./Searchbar";
import NotificationIcon from "../assets/Notification.svg?react";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "../assets/Search.svg?react";
import MicIcon from "../assets/Microphone.svg?react";
import Sidebar from "./Sidebar";
import ListItem from "./ListItem";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [SidebarShow, setSidebarShow] = useState(false);
  const menuData = [
    { type: "item", text: "Google Account" },
    { type: "item", text: "Switch account" },
    { type: "item", text: "Sign out" },
    { type: "divider" },
    { type: "item", text: "YouTube Studio" },
    { type: "item", text: "Purchases and memberships" },
    { type: "divider" },
    { type: "item", text: "Your data in YouTube" },
    { type: "item", text: "Appearance: Device theme" },
    { type: "item", text: "Language: English" },
    { type: "item", text: "Restricted Mode: Off" },
    { type: "item", text: "Location: Egypt" },
    { type: "item", text: "Keyboard shortcuts" },
    { type: "divider" },
    { type: "item", text: "Settings" },
    { type: "item", text: "Help" },
    { type: "item", text: "Send feedback" },
  ];

  return (
    <>
      <header className="bg-transparent  justify-between w-full h-16 flex px-3">
        <div className="leftSection flex items-center gap-5  ">
          <span
            onClick={() => setSidebarShow(!SidebarShow)}
            className="hover:bg-[#222222] cursor-pointer p-2 rounded-3xl  "
          >
            <SideMenuIcon />
          </span>
          <a href="/">
            <YoutubeLogo />
          </a>
          <span className="-m-[18px] text-[10px] font-bold pb-6 text-[#8a8686]">
            EG
          </span>
        </div>
        <div className="middleSection md:basis-[48%]   ">
          <Searchbar />
        </div>
        <div className="rightSection flex justify-center items-center  gap-3">
          <div className="flex md:hidden justify-center items-center h-full">
            <button className="cursor-pointer h-[35px] w-[35px] p-1  mx-2   text-white rounded-2xl flex items-center justify-center hover:bg-[#313131]">
              <SearchIcon className="h-[35px] w-[35px]" />
            </button>
            <button className="cursor-pointer h-[35px] w-[35px] p-1  mx-2   text-white rounded-2xl flex items-center justify-center hover:bg-[#313131]">
              <MicIcon />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 bg-[#222222] p-2 rounded-3xl px-3 cursor-pointer hover:bg-[#313131]">
            <PlusIcon />
            <p className="font-medium text-white ">Create</p>
          </div>
          <button className="cursor-pointer h-[35px] p-1  mx-2 w-[35x] bg-[#222222] text-white rounded-2xl flex items-center justify-center hover:bg-[#313131]">
            <NotificationIcon />
          </button>
          <div className="relative">
            <img
              className="cursor-pointer w-10 h-10 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Rounded avatar"
            />
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-72 bg-[#232323] rounded-xl shadow-lg z-50 py-3 text-white"
              >
                <div className="flex items-center gap-3 px-4 py-2 border-b border-[#444]">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="avatar"
                  />
                  <div>
                    <div className="font-bold">Marwan Usama</div>
                    <div className="text-xs text-gray-400">@memo_yt62</div>
                    <a
                      href="#"
                      className="text-xs text-blue-400 hover:underline"
                    >
                      View your channel
                    </a>
                  </div>
                </div>
                <ul className="py-2">
                  {menuData.map((entry, index) =>
                    entry.type === "divider" ? (
                      <hr key={index} className="my-2 border-[#444]" />
                    ) : (
                      <ListItem key={index} text={entry.text} />
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Navbar;
