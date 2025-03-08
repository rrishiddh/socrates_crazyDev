import iconInfo from "./../assets/icon=info-circle.svg";
import cloudIcon from "./../assets/CloudIcon.svg";

const Home = () => {
    return (
        <div className="h-screen">
            <br />
            <div className="flex items-center gap-2 bg-[#242424] rounded-3xl py-2 px-4 mx-auto text-center w-[65%] ">
            <img src={iconInfo} className="w-8" />
            <h1 className="text-[14px]">The web version does not display local chats. To access all features, please <span className="text-[#FB9937]">install the app.</span></h1>
            </div>

            
        </div>
    );
};

export default Home;