import React from "react";
import CompGraph from "./MainSection/CompGraph";
import QuickStats from "./MainSection/QuickStats";
import SkillUpdate from "./MainSection/SkillUpdate";

const MainSection = () => {
  return (
    <div className="p-7">
      <div>Skill Test</div>
      <SkillUpdate />
      <QuickStats />
      <CompGraph />
    </div>
  );
};

export default MainSection;
