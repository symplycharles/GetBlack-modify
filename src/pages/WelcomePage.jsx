import getBlackLogo from "../assets/images/company-logo.png";
import { useSelector } from "react-redux";

function WelcomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto grid grid-cols-1 place-items-center px-4">
      <div className="w-full md:w-1/2 pt-20">
        <div className="grid place-items-center w-full">
          <div className="mb-4">
            <img src={getBlackLogo} alt="compang-logo" />
          </div>
          <div className="text-left mb-4">
            <h2 className="text-3xl font-bold">
              Hey <span className="capitalize">{user.name}!</span>
            </h2>
            <h4 className="text-xl font-semibold mb-1">So nice to meet you!</h4>
            <p className="text-md">
              We are overjoyed to have you here at GetBlack! Start your journey
              by clicking one of the links below:
            </p>
          </div>
          <div className="mt-2">
            <button className="bg-[#52CD8B] text-white p-3 font-bold uppercase text-md rounded-lg w-full">
              GET THE BEST DEALS
            </button>
          </div>
          <div className="mt-2">
            <button className="bg-[#52CD8B] text-white p-3 font-bold uppercase text-md rounded-lg w-full">
              START SELLING
            </button>
          </div>
          <div className="mt-2">
            <button className="bg-[#52CD8B] text-white p-3 font-bold uppercase text-md rounded-lg w-full">
              READ FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
