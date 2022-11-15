import React, { useContext } from "react";
import { Line, LineChart, ReferenceLine, Tooltip, XAxis } from "recharts";
import { GlobalContext } from "../../context/GlobalState";

const LineComp = () => {
  const { lineGraph, skillStats } = useContext(GlobalContext);
  console.log(skillStats.percentile);
  return (
    <LineChart
      height={300}
      width={600}
      data={lineGraph}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="percentile" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="numberOfStudent"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <ReferenceLine x={skillStats?.percentile} label="your percentile" />
    </LineChart>
  );
};

export default LineComp;
