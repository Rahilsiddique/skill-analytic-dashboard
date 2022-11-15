import React, { useContext } from "react";
import htmlIcon from "../../assets/images/htmlLogo.png";
import { GlobalContext } from "../../context/GlobalState";
const SkillUpdate = () => {
  const { setShowSkillModel } = useContext(GlobalContext);

  return (
    <div className="flex border-1 rounded-md p-4 border justify-between mt-7 py-7">
      <div className="flex">
        <div>
          <img src={htmlIcon} height={55} width={40} alt="HTML icon" />
        </div>
        <div className="ml-4">
          <span className="font-bold block">Hyper Text Markup Language</span>
          <span>
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </span>
        </div>
      </div>
      <div>
        <button
          className="bg-primaryDark text-white font-semibold p-3 rounded-lg px-7 hover:bg-primary transition ease-in-out"
          onClick={() => setShowSkillModel((prev) => !prev)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SkillUpdate;
