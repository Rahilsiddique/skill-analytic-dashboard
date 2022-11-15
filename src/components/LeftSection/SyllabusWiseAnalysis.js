import React, { useEffect, useState } from "react";

const SyllabusWiseAnalysis = () => {
  const [loadEffect, setLoadEffect] = useState(false);
  useEffect(() => {
    window.onbeforeunload = function () {
      setLoadEffect((prev) => !prev);
    };

    return () => {
      window.onbeforeunload = null;
      setLoadEffect((prev) => !prev);
    };
  }, []);
  return (
    <div className="border-1 border p-8 mt-20 rounded-lg">
      <div className="font-bold mb-5">Syllabus Wise Analysis</div>
      <div>
        <div className="text-gray-500">HTML Tools, Forms, History</div>
        <div className="flex justify-between items-center mb-7">
          <div class="w-[70%] bg-[#EDF4FE] rounded-full h-2.5 overflow-hidden">
            <div
              class={
                loadEffect
                  ? "bg-[#438AF6] h-2.5 rounded-full translate-x-0 transition-all duration-300"
                  : "bg-[#438AF6] h-2.5 rounded-full -translate-x-full"
              }
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="text-[#438AF6] font-semibold">80%</div>
        </div>
      </div>
      <div>
        <div className="text-gray-500">HTML Tools, Forms, History</div>
        <div className="flex justify-between items-center mb-7">
          <div class="w-[70%] bg-[#FFF4ED] rounded-full h-2.5 overflow-hidden">
            <div
              class={
                loadEffect
                  ? "bg-[#FF9142] h-2.5 rounded-full translate-x-0 transition-all duration-300"
                  : "bg-[#FF9142] h-2.5 rounded-full -translate-x-full"
              }
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="text-[#FF9142] font-semibold">60%</div>
        </div>
      </div>
      <div>
        <div className="text-gray-500">HTML Tools, Forms, History</div>
        <div className="flex justify-between items-center mb-7">
          <div class="w-[70%] bg-[#FFEFEF] rounded-full h-2.5 overflow-hidden">
            <div
              class={
                loadEffect
                  ? "bg-[#FB5E5E] h-2.5 rounded-full translate-x-0 transition-all duration-300"
                  : "bg-[#FB5E5E] h-2.5 rounded-full -translate-x-full"
              }
              style={{ width: "24%" }}
            ></div>
          </div>
          <div className="text-[#FB5E5E] font-semibold">24%</div>
        </div>
      </div>
      <div>
        <div className="text-gray-500">HTML Tools, Forms, History</div>
        <div className="flex justify-between items-center mb-7">
          <div class="w-[70%] bg-[#EBFAF1] rounded-full h-2.5 overflow-hidden">
            <div
              class={
                loadEffect
                  ? "bg-[#2EC971] h-2.5 rounded-full translate-x-0 transition-all duration-300"
                  : "bg-[#2EC971] h-2.5 rounded-full -translate-x-full"
              }
              style={{ width: "96%" }}
            ></div>
          </div>
          <div className="text-[#2EC971] font-semibold">96%</div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;
