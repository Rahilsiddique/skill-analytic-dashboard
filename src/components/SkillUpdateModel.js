import React, { useContext, useRef, useState } from "react";
import htmlLogo from "../assets/images/htmlLogo.png";
import { BsArrowRightShort } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalState";

const SkillUpdateModel = ({ visible }) => {
  const {
    setShowSkillModel,
    setSkillStats,
    skillStats,
    setLineGraph,
    lineGraph,
  } = useContext(GlobalContext);
  const rankRef = useRef();
  const percentileRef = useRef();
  const scoreRef = useRef();
  const [localChange, setLocalChange] = useState(skillStats);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      rankRef.current?.value === "" ||
      scoreRef.current?.value === "" ||
      percentileRef.current?.value === ""
    ) {
      alert("fill the complete form");
      return;
    }
    setSkillStats(localChange);
    lineGraph.length > 10
      ? lineGraph.pop()
      : setLineGraph((prev) => [
          ...prev,
          {
            percentile: localChange.percentile,
            id: lineGraph.length + 1,
            numberOfStudent: Math.floor(Math.random() * 50),
          },
        ]);
    setShowSkillModel((prev) => !prev);
  };
  if (!visible) return;
  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center bg-black">
      <div className="bg-white w-[40%] rounded-md p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex border-1 border-b justify-between p-3">
            <div className="text-2xl font-bold justify-between">
              Update scores
            </div>
            <div>
              <img src={htmlLogo} height={30} width={30} alt="html icon" />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-primaryDark w-6 h-6 flex justify-center items-center text-white ">
                1
              </div>
              <div>
                Update your <span className="font-semibold">rank</span>
              </div>
            </div>
            <div>
              <input
                ref={rankRef}
                type="number"
                className="h-10 border-1 border-primary border rounded-md focus:border-primaryLight  focus:outline-none text-primary font-semibold pl-3"
                value={localChange.rank}
                onChange={(e) =>
                  setLocalChange((prev) => ({
                    ...prev,
                    rank: parseInt(e.target.value),
                  }))
                }
              />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-primaryDark w-6 h-6 flex justify-center items-center text-white ">
                2
              </div>
              <div>
                Update your <span className="font-semibold">percentile</span>
              </div>
            </div>
            <div className="">
              <input
                ref={percentileRef}
                type="number"
                min="0"
                max="100"
                className="h-10 border-1 border-primary border rounded-md focus:border-primaryLight focus:outline-none text-primary font-semibold pl-3 w-52"
                value={localChange.percentile}
                onChange={(e) =>
                  setLocalChange((prev) => ({
                    ...prev,
                    percentile: parseInt(e.target.value),
                  }))
                }
              />
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-primaryDark w-6 h-6 flex justify-center items-center text-white ">
                3
              </div>
              <div>
                Update your{" "}
                <span className="font-semibold">current score (out of 15)</span>
              </div>
            </div>
            <div>
              <input
                ref={scoreRef}
                min="0"
                max="15"
                type="number"
                className="h-10 border-1 border-primary border rounded-md focus:border-primaryLight  focus:outline-none  text-primary font-semibold pl-3 w-52"
                value={localChange.score}
                onChange={(e) =>
                  setLocalChange((prev) => ({
                    ...prev,
                    score: parseInt(e.target.value),
                  }))
                }
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <button className="bg-primaryDark font-semibold text-white px-3 py-2 rounded-md flex items-center justify-center gap-1">
              save
              <BsArrowRightShort size={20} className="mt-1" />
            </button>
            <button
              className="bg-white py-2 px-3 mx-6 border rounded-md border-1 border-primaryDark font-bold text-primaryDark"
              onClick={() => setShowSkillModel((prev) => !prev)}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillUpdateModel;
