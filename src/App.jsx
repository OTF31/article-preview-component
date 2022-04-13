import { useEffect, useState } from "react";

import Drawers from "./assets/drawers.jpg";

import AvatarMichelle from "./assets/avatar-michelle.jpg";
import { ReactComponent as IconShare } from "./assets/icon-share.svg";
import { ReactComponent as IconFacebook } from "./assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "./assets/icon-pinterest.svg";

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
        className="flex min-h-screen min-w-[375px] items-center justify-center bg-[#ECF2F8] py-[25px] px-[25px]"
      >
        <div className="relative flex h-[515px] w-[328px] flex-col rounded-xl bg-white font-[Manrope] lg:h-[280px] lg:w-[730px] lg:flex-row">
          <div>
            <img
              src={Drawers}
              alt="Drawers"
              className="relative bottom-4 rounded-xl opacity-[90%] shadow-xl lg:bottom-0 lg:h-[280px]"
            />
          </div>

          <div className="absolute bottom-0 h-[315px] w-full rounded-b-xl bg-white shadow-xl lg:right-0 lg:h-[280px] lg:w-[445px] lg:rounded-none lg:rounded-r-xl">
            <h1 className="mx-[32.5px] mt-[38px] text-[0.99rem] font-bold leading-[24px] text-[#48556A] lg:mx-[40px] lg:mt-[35px] lg:text-[1.26rem] lg:leading-[27px]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>

            <p className="mx-[32.5px] mt-[13px] text-[0.8rem] text-[#707F93] lg:mx-[40px]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>

            <div
              className={`absolute bottom-0 w-full lg:static ${
                currWidth < 1024
                  ? showPopOver
                    ? "h-[55px]"
                    : "h-[66.5px]"
                  : ""
              }`}
            >
              {currWidth < 1024 ? (
                showPopOver ? (
                  <div className="flex gap-[57px] bg-white px-[30px] transition duration-75 ease-in">
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
                    <div
                      className="mt-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#ECF2F8]"
                      onClick={() => setShowPopOver(!showPopOver)}
                    >
                      <IconShare fill="#6E8098" />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center gap-[57px] rounded-b-xl bg-[#48556A] px-[32px] transition duration-500 ease-out">
                    <div className="flex gap-4">
                      <p className="text-[0.8rem] tracking-[0.4em] text-[#9DAEC2]">
                        SHARE
                      </p>
                      <IconFacebook className="cursor-pointer fill-white transition duration-500 ease-in-out hover:scale-125 hover:bg-white hover:fill-[#4267B2]" />
                      <IconTwitter className="cursor-pointer fill-white transition duration-500 ease-in-out hover:scale-125 hover:fill-[#1DA1F2]" />
                      <IconPinterest className="cursor-pointer fill-white transition duration-500 ease-in-out hover:scale-125 hover:bg-white hover:fill-[#E60023]" />
                    </div>
                    <div
                      className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#707F93]"
                      onClick={() => setShowPopOver(!showPopOver)}
                    >
                      <IconShare fill="white" />
                    </div>
                  </div>
                )
              ) : (
                <div className="flex gap-[57px] bg-white px-[30px] lg:mx-[10px] lg:mt-[20px] lg:gap-[160px]">
                  <div className="flex gap-[20px] lg:gap-[16px]">
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

                  <div
                    className={`mt-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition duration-500 ease-in-out ${
                      showPopOver ? "bg-[#707F93]" : "bg-[#ECF2F8]"
                    }`}
                    onClick={() => setShowPopOver(!showPopOver)}
                  >
                    <IconShare fill={`${showPopOver ? "white" : "#6E8098"}`} />
                    {showPopOver && (
                      <div className="absolute bottom-[95px] -translate-x-1 cursor-auto">
                        <div className="relative flex h-[60px] w-[250px] items-center justify-center gap-1 rounded-xl lg:bg-[#48556A]">
                          <div className="flex gap-4">
                            <p className="text-[0.8rem] tracking-[0.4em] text-[#9DAEC2]">
                              SHARE
                            </p>
                            <IconFacebook className="cursor-pointer fill-white transition duration-500 ease-in-out hover:scale-125 hover:bg-white hover:fill-[#4267B2]" />
                            <IconTwitter className="cursor-pointer fill-white transition duration-500 ease-in-out hover:scale-125 hover:fill-[#1DA1F2]" />
                            <IconPinterest className="cursor-pointer fill-white transition duration-500  ease-in-out hover:scale-125 hover:bg-white hover:fill-[#E60023]" />
                          </div>
                          <div className="absolute bottom-0 h-[18px] w-[18px] origin-bottom-left rotate-[45deg] lg:bg-[#48556A]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
