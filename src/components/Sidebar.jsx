import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return(
    <>
    {
      open ? (
        <div className="absolute top-0 left-0 w-[240px] h-full bg-[#0f0f0f] z-50">

        </div>
      ): (
        <div className="absolute flex top-0 left-0 w-[60px] h-[91%] mt-[64px] bg-[#0f0f0f] z-50 flex-col gap-4">
          <div>

          </div>
        </div>
      )
    }
    </>   
  ) 
};

export default Sidebar;
