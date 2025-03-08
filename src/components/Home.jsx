import iconInfo from "./../assets/icon=info-circle.svg";
import cloudIcon from "./../assets/CloudIcon.svg";
import urlIcon from "./../assets/urlIcons.svg";
import dropboxIcon from "./../assets/dropboxIcons.svg";
import driveIcon from "./../assets/gdriveIcons.svg";
import dndIcon from "./../assets/dragndrop.svg";
import React, { useState } from "react";
import img from "./../assets/Logo.svg";
import icon1 from "./../assets/icon=flow.svg";
import icon2 from "./../assets/icon=search.svg";
import icon3 from "./../assets/icon=sidebar-left.svg";
import icon4 from "./../assets/leftIcon.svg";
import dp from "./../assets/JessicaMills.svg";
import setting from "./../assets/setting.svg";

const Home = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="grid grid-cols-5 min-h-screen  bg-[#242424] rounded-3xl">
        {/* left side  */}
        {!isCollapsed && (
                <>
        <div className={` ${isCollapsed ? 'col-span-0' : 'col-span-1 max-md:col-span-2'}`}>

          <div className="p-4  text-white ">
            <div className="flex flex-col min-h-screen justify-between px-4">
              {/* 1st section */}
              <div className="flex max-md:flex-col justify-between mb-8 ">
                <div className="flex gap-2 items-center">
                  <img src={img} className="w-8" />
                  <h1 className="font-semibold text-xl">socrates</h1>
                </div>
                <div className="flex gap-2 items-center max-sm:mt-2 max-sm:mx-auto">
                
                  <button>
                    <img src={icon2} className="w-5 h-5" />
                  </button>
                  <button onClick={() => setIsCollapsed(!isCollapsed)}>
                    <img src={icon3} className="w-5 h-5" />
                  </button>
                </div>
              </div>

              
                  {/* 2nd section */}
                  <div className="flex flex-col items-center space-y-5">
                    <button className="flex items-center gap-2 border rounded-3xl py-2 px-4 border-[#585858] w-full">
                      <img src={icon4} className="w-5 h-5" />
                      <h1 className="text-center">Add folder</h1>
                    </button>
                    <button className="flex items-center gap-2 bg-[#585858] rounded-3xl py-2 px-4 w-full">
                      <img src={icon4} className="w-5 h-5" />
                      <h1 className="text-center">Create chat</h1>
                    </button>
                  </div>

                  {/* 3rd Section */}
                  <div>
                    <div className="p-4 rounded-xl bg-[#585858] text-left w-full">
                      <h1 className="font-semibold">Upgrade to Premium</h1>
                      <p className="text-sm font-light text-[#ffffff9a]">
                        Make the most of all features!
                      </p>
                      <button className="mt-4 w-full border flex items-center rounded-3xl py-2 px-4 justify-center mx-auto border-[#F37F0C]">
                        <h1 className="text-sm font-semibold">Upgrade plan</h1>
                      </button>
                    </div>

                    <div className="mt-5 flex gap-2 items-center">
                      <img
                        src={icon1}
                        className="w-9 p-1 rounded-2xl bg-[#60606050]"
                      />
                      <h1 className="text-left">Flow AI Templates</h1>
                    </div>

                    <div className="mt-5 flex gap-2 justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <img src={dp} className="w-9" />
                        <h1 className="text-sm">Jessica Mills</h1>
                      </div>
                      <div>
                        <img src={setting} className="w-6" />
                      </div>
                    </div>
                  </div>
                
            </div>
          </div>
        </div>
        </>)}

        {/* right side  */}

        <div className={`p-4 pl-5 ${isCollapsed ? 'col-span-5' : 'col-span-4 max-md:col-span-3'}`}>

          <div className="min-h-screen flex flex-col  w-full bg-[#2B2B2B] rounded-2xl text-white ">
             {/* extra name section */}
             {isCollapsed && (
             <div className="flex  justify-start mt-2 md:absolute top-6 left-10 ">
                <div className="flex gap-2 items-center">
                  <img src={img} className="w-8" />
                  <h1 className="font-semibold text-xl">socrates</h1>
                </div>
                <div className="flex  ml-6 items-center">
                  
                  <button onClick={() => setIsCollapsed(!isCollapsed)}>
                    <img src={icon3} className="w-6" />
                  </button>
                </div>
              </div>)}

            {/* 1st section */}
            <div className="flex items-center gap-2 bg-[#242424] rounded-3xl py-2 px-4 mx-auto text-center  mt-2">
              <img src={iconInfo} className="w-5" />
              <h1 className="text-xs">
                The web version does not display local chats. To access all
                features, please{" "}
                <span className="text-[#FB9937]">install the app.</span>
              </h1>
            </div>

            {/* 2nd section */}
            <div className="flex max-md:flex-col items-center gap-2 mx-auto text-center justify-center mt-5">
              <h1 className="text-4xl max-sm:text-2xl">Add Files to</h1>
              <img src={cloudIcon} className="w-14" />
              <h1 className="text-4xl max-sm:text-2xl">Cloud Chat</h1>
            </div>
            <div className="items-center gap-2 mx-auto text-center justify-center mt-3 text-sm font-semibold">
              <p className="text-[#B7B7B7]">
                Your files will not be stored on our servers and no AI models
                will be trained.
              </p>
              <p className="text-[#F37F0C]">
                Supported File Types: .docx, .pdf, .epub, and many text
                filetypes
              </p>
            </div>

            {/* 3rd section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2  w-[70%] mx-auto gap-2 mt-10">
              <div className="flex items-center gap-2 p-4 bg-[#242424] rounded-2xl">
                <img src={dndIcon} className="w-10" />
                <p className=" font-semibold">
                  Drag & drop local files here, or click to select
                </p>
              </div>

              <div className="flex items-center gap-2 p-4 bg-[#242424] rounded-2xl">
                <img src={urlIcon} className="w-10" />
                <div className="relative w-full">
                  <p className=" font-semibold mb-2">Enter in a public URL:</p>
                  <div className="relative">
                    <input
                      name="url"
                      type="text"
                      placeholder="https://example.com/file.pdf"
                      className="bg-[#353535] rounded-3xl py-2 px-4 text-sm w-full pr-16"
                    />
                    <button className="bg-[#FFFFFF26] text-xs font-semibold rounded-3xl px-4 py-2 absolute right-2 top-1/2 transform -translate-y-1/2">
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 bg-[#242424] rounded-2xl">
                <img src={dropboxIcon} className="w-10" />
                <p className=" font-semibold">Add files from Dropbox</p>
              </div>

              <div className="flex items-center gap-2 p-4 bg-[#242424] rounded-2xl">
                <img src={driveIcon} className="w-10" />
                <p className=" font-semibold">Add files from Google Drive</p>
              </div>
            </div>

            <div className="mt-5 mx-auto flex w-full">
              <input
                name="file"
                type="file"
                placeholder="upload your file here"
                className="bg-[#242424] rounded-3xl py-2 px-4 text-sm w-[65%] mx-auto items-center justify-center"
              />
            </div>

            {/* last section*/}
            <div className="flex max-sm:flex-col max-sm:gap-4 items-center justify-center mt-5 relative pb-1">
              <button className="mt-4  border flex items-center gap-2 rounded-3xl py-2 px-10 border-[#FB9836]">
                Start
              </button>
              <p className="px-4 justify-center items-center">or</p>
              <button className="mt-4 border flex items-center gap-2 rounded-3xl py-2 px-10 bg-[#FB9937] border-[#FFBF00]">
                ✨ Start with Deep Dive
              </button>

              <div
                className="relative flex items-center "
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=77&format=png&color=ffffff"
                  className="w-5 mx-4 justify-center items-center cursor-pointer"
                />
                {tooltipVisible && (
                  <div className="absolute bottom-3 left-20 transform -translate-x-1/2 bg-black text-white text-xs p-3 rounded-lg w-[250px] shadow-lg">
                    Deep Dive processes documents section by section for
                    "unlimited" context, enabling complete answers. Run once per
                    chat to unlock Table AI and Prompt Loops
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
