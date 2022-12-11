import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/user/authSlice";
import GoogleOAuth from "../components/molecules/GoogleOAuth";
import FacebookOAuth from "../components/molecules/FacebookOAuth";
import Spinner from "../components/atoms/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Data from Redux state handling
  const { user, isLoading, isStatus, message } = useSelector(
    (state) => state.auth
  );

  // UseEffect for all the state
  useEffect(() => {
    if (isStatus) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isStatus === false || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [dispatch, isStatus, message, navigate, user]);

  // Handling the onChange on the Form
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Submitting the Login Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  // Handling the Spinner
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="grid place-items-center mb-4 mx-4">
          <div className="w-full max-w-xl mt-2">
            <div className="my-2 text-center">
              <h1 className="text-black text-4xl font-bold">Login</h1>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-4">
              {/* the Login Form Section */}
              <form
                onSubmit={handleSubmit}
                className="grid place-items-center w-full p-2"
              >
                <div className="mt-2 w-full">
                  <label className="label text-black">
                    <span className="label-text text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    id="email"
                    onChange={onChange}
                    className="p-2 border-2 border-gray-400 rounded-lg w-full"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mt-2 w-full">
                  <label className="label text-black">
                    <span className="label-text text-lg">Password</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    id="password"
                    onChange={onChange}
                    className="p-2 border-2 border-gray-400 rounded-lg w-full"
                    placeholder="password"
                    required
                  />
                  <label className="label flex justify-end">
                    <Link
                      to="/forgot-password"
                      className="label-text-alt link link-hover text-[#0FA4F9] text-sm  text-right"
                    >
                      Forgot Password?
                    </Link>
                  </label>
                </div>
                <div className="mt-2 w-full">
                  <button
                    type="submit"
                    className="bg-[#0FA4F9] text-white p-3 font-bold uppercase text-lg rounded-lg w-full"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div>
                <label className="label flex justify-center">
                  Don't have an Account?
                  <Link
                    className="ml-2 label-text-alt link link-hover text-[#0FA4F9] text-lg"
                    to="/register"
                  >
                    Sign Up
                  </Link>
                </label>
                <label className="label flex justify-center">
                  <span>Or</span>
                </label>
                {/* using OAuth to Login Section */}
                <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
                  <GoogleOAuth />
                  <FacebookOAuth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
