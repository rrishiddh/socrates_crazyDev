import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";




const MainLayout = () => {
    return (
        <div className="grid grid-cols-5 min-h-screen bg-[#242424] rounded-3xl">
            <div className=" col-span-1  ">
                <div className="p-4  text-white min-h-screen">
                    <LeftSide></LeftSide>
                </div>
            </div>
            <div  className=" col-span-4 p-4 pl-5 ">
            <div className=" bg-[#2B2B2B] rounded-2xl text-white ">
            <Outlet></Outlet>   

            </div>

            </div>
            
        </div>
    );
};

export default MainLayout;