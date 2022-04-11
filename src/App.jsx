import { useState } from "react";

const App = () => {
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <>
      <div
        role="application"
        className="flex min-h-screen items-center justify-center bg-[#ECF2F8]"
      >
        <div className="h-[515px] w-[330px] rounded-xl bg-white"></div>
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
