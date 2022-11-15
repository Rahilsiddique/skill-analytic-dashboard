import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import RightSection from "./components/RightSection";
import SkillUpdateModel from "./components/SkillUpdateModel";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const { showSkillModel } = useContext(GlobalContext);
  return (
    <div className="h-screen">
      <NavBar />
      <div className="grid md:grid-cols-6 w-full grid-cols-1">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-3 ml-4">
          <MainSection />
        </div>
        <div className="col-span-2 mr-4">
          <RightSection />
        </div>
      </div>
      <SkillUpdateModel visible={showSkillModel} />
    </div>
  );
}

export default App;
