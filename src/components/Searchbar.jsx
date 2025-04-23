
import SearchIcon from "../assets/Search.svg?react"
import MicIcon from "../assets/Microphone.svg?react"
import { useState } from "react";
const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
    <div className="h-full  items-center rounded-2xl hidden md:flex">
      <div className="h-[70%] flex w-[90%] group border border-transparent transition-colors duration-200 rounded-l-2xl group-focus:border-[#3ea6ff]">
        <span className="w-[10%] bg-[#202020] rounded-l-2xl flex justify-center text-white items-center
          opacity-0   group-focus-within:opacity-100">
          <SearchIcon className="w-[18px] h-[18px]"/>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="h-[full] w-[90%] bg-[#202020] text-white px-3 outline-none border-none rounded-l-2xl group-focus-within:rounded-l-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="cursor-pointer h-[65%] w-[8%] bg-[#222222] text-white rounded-r-2xl flex items-center justify-center">
        <SearchIcon className="w-[25px] h-[25px]"/>
      </button>
      <button className="cursor-pointer h-[35px] p-1  mx-2 w-[35x] bg-[#222222] text-white rounded-2xl flex items-center justify-center hover:bg-[#313131]">
        <MicIcon/>
      </button>
    </div>

    </>
    
  )
}

export default Searchbar