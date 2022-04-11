import { useEffect, useState } from "react";

import Drawers from "./assets/drawers.jpg";
import AvatarMichelle from "./assets/avatar-michelle.jpg";
import { ReactComponent as IconShare } from "./assets/icon-share.svg";

const App = () => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [currWidth, setCurrWidth] = useState(window.innerWidth);

  // Get the current window width
  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrWidth(window.innerWidth);
    });
  }, [currWidth]);

  return (
    <>
      <div
        role="application"
        className="flex min-h-screen items-center justify-center bg-[#ECF2F8]"
      >
        <div className="relative h-[515px] w-[328px] overflow-hidden rounded-xl bg-white font-[Manrope]">
          <img
            src={Drawers}
            alt="Drawers"
            className="relative bottom-4 opacity-[90%]"
          />

          <div className="absolute bottom-0 h-[315px] w-full bg-white">
            <h1 className="mx-[32.5px] mt-[38px] text-[0.99rem] font-bold leading-[24px] text-[#48556A]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home {currWidth}
            </h1>

            <p className="mx-[32.5px] mt-[13px] text-[0.8rem] text-[#707F93]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>

            <div className="absolute bottom-0 h-[66.5px] w-full">
              {currWidth < 1024 ? (
                showPopOver ? (
                  <div className="flex gap-[57px] px-[30px]">
                    <div className="flex gap-[20px]">
                      <img
                        src={AvatarMichelle}
                        alt="Avatar"
                        className="h-[40px] w-[40px] rounded-full"
                      />

                      <div className="mt-[2px] flex flex-col gap-[2px]">
                        <p className="text-[0.8rem] font-bold text-[#48556A]">
                          Michelle Appleton
                        </p>
                        <p className="text-[0.8rem] text-[#9DAEC2]">
                          28 Jun 2020
                        </p>
                      </div>
                    </div>
                    <div className="mt-[5px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#ECF2F8]">
                      <IconShare
                        fill="#6E8098"
                        onClick={() => setShowPopOver(!showPopOver)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full w-full bg-[#48556A]">
                    <div className="mt-[5px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#707F93]">
                      <IconShare
                        fill="white"
                        onClick={() => setShowPopOver(!showPopOver)}
                      />
                    </div>
                  </div>
                )
              ) : (
                <h1>Hola</h1>
              )}
            </div>
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
