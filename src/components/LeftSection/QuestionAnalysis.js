import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ScoreChart from "../Graphs/ScoreChart";
import scoreChartCenter from "../../assets/images/scoreChartCenter.png";

const QuestionAnalysis = () => {
  const { skillStats } = useContext(GlobalContext);
  return (
    <div className="border-1 border p-5 my-5 rounded-lg">
      <div className="flex justify-between my-4">
        <div className="font-bold">Question Analysis</div>
        <div className="font-semibold text-primaryLight">
          {skillStats.score}/15
        </div>
      </div>
      <div>
        <span className="font-semibold">
          You scored {skillStats.score} question correct out of 15.
        </span>{" "}
        However it still needs some improvements
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute">
          <img src={scoreChartCenter} alt="target dart" />
        </div>
        <ScoreChart />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
