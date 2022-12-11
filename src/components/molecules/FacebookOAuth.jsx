import facebookIcon from "../../assets/images/facebook.png";

function FacebookOAuth() {
  return (
    <div className="w-full">
      <button className="flex items-center bg-[#D9D9D9] py-3 px-4 w-full rounded-lg">
        <img src={facebookIcon} alt="googleIcon" className="w-8 ml-4" />
        <span className="ml-2 text-md font-medium">Login with Facebook</span>
      </button>
    </div>
  );
}

export default FacebookOAuth;
