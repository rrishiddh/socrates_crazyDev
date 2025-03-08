import React from "react";
import img from "./../assets/Logo.svg";
import icon1 from "./../assets/icon=flow.svg";
import icon2 from "./../assets/icon=search.svg";
import icon3 from "./../assets/icon=sidebar-left.svg";
import icon4 from "./../assets/leftIcon.svg";
import dp from "./../assets/JessicaMills.svg";
import setting from "./../assets/setting.svg";

const LeftSide = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        {/* 1st section */}
        <div className="flex justify-between mb-8">
          <div className="flex gap-2 items-center">
            <img src={img} className="w-8" />
            <h1 className="font-semibold text-2xl">socrates</h1>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={icon2}
              className="w-6 h-6"
            />
            <img
              src={icon3}
              className="w-6 h-6"
            />
          </div>
        </div>
        {/* 2nd section */}
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center gap-2 border rounded-3xl py-2 border-[#585858] px-10">
            <img
              src={icon4}
              className="w-5 h-5"
            />
            <h1 className="text-xl">Add folder</h1>
          </div>
          <div className="flex items-center gap-2 bg-[#585858] rounded-3xl py-2 px-10">
            <img
              src={icon4}
              className="w-5 h-5"
            />
            <h1 className="text-xl">Create chat</h1>
          </div>
        </div>
      </div>
      {/* 3rd Section */}
      <div>
        <div className="p-4 rounded-xl bg-[#585858]">
          <h1 className="text-lg">Upgrade to Premium</h1>
          <p className="text-sm font-light text-[#ffffff9a]">
            Make the most of all features!
          </p>
          <div className="mt-4 border flex items-center gap-2 rounded-3xl py-2 px-10 border-[#F37F0C]">
            <h1 className="text-center">Upgrade plan</h1>
          </div>
        </div>
        <div className="mt-5 flex gap-2 items-center">
          <img src={icon1} className="w-9 p-1 rounded-2xl bg-[#60606050]" />
          <h1 className="text-xl">Flow AI Templates</h1>
        </div>
        <div className="mt-5 flex gap-2 justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={dp} className="w-9" />
            <h1 className="">Jessica Mills</h1>
          </div>
          <div>
            <img src={setting} className="w-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
