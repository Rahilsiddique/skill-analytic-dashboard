import React from "react";
import { CgLoadbarSound } from "react-icons/cg";
import { TfiMedallAlt } from "react-icons/tfi";
import { AiOutlineFile } from "react-icons/ai";

const SideBar = () => {
  return (
    // w-[15%]
    <div className="border-1 border-r h-full pt-10 pr-2.5">
      <div className="flex p-4 items-center hover:bg-gray-200 rounded-r-full my-2 gap-4">
        <div>
          <CgLoadbarSound size={25} />
        </div>
        <div className="font-semibold">Dashboard</div>
      </div>
      <div className="flex p-4 items-center bg-gray-200 rounded-r-full text-primary my-2 gap-4">
        <div>
          <TfiMedallAlt size={25} />
        </div>
        <div className="font-semibold">Skill Test</div>
      </div>
      <div className="flex p-4 items-center hover:bg-gray-200 rounded-r-full my-2 gap-4">
        <div>
          <AiOutlineFile size={25} />
        </div>
        <div className="font-semibold">Internship</div>
      </div>
    </div>
  );
};

export default SideBar;
