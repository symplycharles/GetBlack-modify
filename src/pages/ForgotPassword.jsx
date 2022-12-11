import { useState } from "react";
import { Link } from "react-router-dom";
import getBlackLogo from "../assets/images/company-logo.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 place-items-center">
      <div className="w-[300px] pt-20">
        <div className="grid place-items-center">
          <Link to="/">
            <img src={getBlackLogo} alt="homeLogo" />
          </Link>
        </div>
        <p className="text-sm">
          Enter the email address associated with your account and we’ll send
          you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-2 w-full">
            <label className="label text-black">
              <span className="label-text text-md">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={onChange}
              className="p-2 border-2 border-gray-400 rounded-lg w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-2 w-full">
            <button
              type="submit"
              className="bg-[#0FA4F9] text-white p-3 font-bold uppercase text-md rounded-lg w-full"
            >
              send email
            </button>
          </div>
          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <span className="text-[#0FA4F9] ml-2 hover:underline">
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </form>
      </div>

      <footer className="text-center absolute bottom-0">
        <div className="flex justify-center items-center gap-2 text-center pb-4 text-sm">
          <p className="hover:underline">
            <Link to="/">© GetBlack</Link>
          </p>
          <p className="hover:underline">
            <Link to="/contact">Contact</Link>
          </p>
          <p className="hover:underline">
            <Link to="#">Privacy & terms</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ForgotPassword;
