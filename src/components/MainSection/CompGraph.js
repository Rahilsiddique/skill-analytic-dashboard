import React, { useContext } from "react";
import commGraphRightLogo from "../../assets/images/commGraphRightLogo.png";
import { GlobalContext } from "../../context/GlobalState";
import LineComp from "../Graphs/LineComp";

const CompGraph = () => {
  const { skillStats } = useContext(GlobalContext);
  return (
    <div className="flex flex-col border-1 border rounded-lg p-5">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold pb-5">Comparsion Graph</div>
          <div>
            <span className="font-semibold">
              You scored {skillStats.percentile}% percentile
            </span>{" "}
            which is lower than the <span className="block"></span> average
            percentile 72% of all the engineers who took this assessment
          </div>
        </div>
        <div>
          <img
            src={commGraphRightLogo}
            height={50}
            width={50}
            alt="line chart logo"
          />
        </div>
      </div>
      <div className="pt-4">
        <LineComp />
      </div>
    </div>
  );
};

export default CompGraph;
