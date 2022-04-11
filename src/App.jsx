import { useState } from "react";

import Drawers from "./assets/drawers.jpg";

const App = () => {
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <>
      <div
        role="application"
        className="flex min-h-screen items-center justify-center bg-[#ECF2F8]"
      >
        <div className="relative h-[515px] w-[328px] overflow-hidden rounded-xl bg-white font-[Manrope]">
          {/* <img src={Drawers} alt="Drawers" className="-z-10" /> */}
          <img src={Drawers} alt="Drawers" className="relative bottom-4" />
          <div className="absolute bottom-0 h-[310px] w-full bg-white">
            <h1>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="absolute bottom-0 h-5 w-full bg-black"></div>
          </div>
        </div>
        {/* <div className="relative flex justify-center">
          <button
            className="rounded-xl bg-cyan-400 p-px text-[25px] font-bold transition duration-500 ease-in-out hover:bg-cyan-900"
            onClick={() => setShowPopOver(!showPopOver)}
          >
            Click me to show a popover!
          </button>
          {showPopOver && (
            <div className="absolute bottom-[60px]">
              <div className="relative flex h-[60px] w-[250px] items-center justify-center gap-1 rounded-xl border-2 border-black">
                <div>SHARE</div>
                <div>ICON 1</div>
                <div>ICON 2</div>
                <div onClick={() => alert("OTF")} className="cursor-pointer">
                  ICON 3
                </div>
                <div className="absolute bottom-0 h-[18px] w-[18px] origin-bottom-left translate-y-[2px] rotate-[45deg] border-r-2 border-b-2 border-black bg-white"></div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default App;
