import React, { useContext } from "react";
import quickStatLogo1 from "../../assets/images/quickStatLogo1.png";
import quickStatLogo2 from "../../assets/images/quickStatLogo2.png";
import quickStatLogo3 from "../../assets/images/quickStatLogo3.png";
import { GlobalContext } from "../../context/GlobalState";

const QuickStats = () => {
  const { skillStats } = useContext(GlobalContext);
  return (
    <div className="p-4 border-1 border my-5 rounded-lg">
      <div className="font-bold">Quick Statistics</div>
      <div className="flex justify-around">
        <div className="flex gap-3 border-1 border-r p-4">
          <div>
            <img src={quickStatLogo1} alt="trophie" />
          </div>
          <div className="pr-4">
            <div className="font-bold text-xl">
              {skillStats.rank.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">YOUR RANK</div>
          </div>
        </div>
        <div className="flex gap-3 border-1 border-r p-4">
          <div>
            <img src={quickStatLogo2} alt="trophie" />
          </div>
          <div className="pr-4">
            <div className="font-bold text-xl">{skillStats.percentile}%</div>
            <div className="text-sm text-gray-400">PERCENTILE</div>
          </div>
        </div>
        <div className="flex gap-3 m-4">
          <div>
            <img src={quickStatLogo3} alt="trophie" />
          </div>
          <div className="pr-4">
            <div className="font-bold text-xl">
              {skillStats.score < 10
                ? "0" + skillStats.score
                : skillStats.score}
              /15
            </div>
            <div className="text-sm text-gray-400">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
