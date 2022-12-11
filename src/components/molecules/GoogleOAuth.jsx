import googleIcon from "../../assets/images/googleIcon.png";

function GoogleOAuth() {
  return (
    <div className="w-full">
      <button className="flex items-center bg-[#D9D9D9] py-3 px-4 w-full rounded-lg">
        <img src={googleIcon} alt="googleIcon" className="w-8 ml-4" />
        <span className="ml-2 text-md font-medium">Login with Google</span>
      </button>
    </div>
  );
}

export default GoogleOAuth;
