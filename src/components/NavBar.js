import React from "react";
import cuvetteLogo from "../assets/images/cuvetteLogo.svg";
import profilePic from "../assets/images/profilePic.png";

const NavBar = () => {
  return (
    <div className="border-1 border-b p-6 flex justify-between">
      <div>
        <img src={cuvetteLogo} alt="cuvetteLogo" />
      </div>
      <div className="flex border-2 rounded-lg items-center">
        <img src={profilePic} height={40} width={40} alt="profilePic" />
        <span className="font-semibold pr-1">Rahil Siddique</span>
      </div>
    </div>
  );
};

export default NavBar;
