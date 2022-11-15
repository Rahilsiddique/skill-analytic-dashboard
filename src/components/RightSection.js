import React from "react";
import QuestionAnalysis from "./LeftSection/QuestionAnalysis";
import SyllabusWiseAnalysis from "./LeftSection/SyllabusWiseAnalysis";

const RightSection = () => {
  return (
    <div>
      <SyllabusWiseAnalysis />
      <QuestionAnalysis />
    </div>
  );
};

export default RightSection;
