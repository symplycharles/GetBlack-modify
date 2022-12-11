import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/user/authSlice";
import { Link } from "react-router-dom";
import GoogleOAuth from "../components/molecules/GoogleOAuth";
import FacebookOAuth from "../components/molecules/FacebookOAuth";
import Spinner from "../components/atoms/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roleId: "",
    password: "",
    confirmPassword: "",
  });

  // Destructing the formData
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    roleId,
    password,
    confirmPassword,
  } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Data from Redux state handling
  const { user, isLoading, isStatus, message } = useSelector(
    (state) => state.auth
  );

  // Getting Customer Role from all role from - AllRoleAPI
  useEffect(() => {
    const fetchRole = async () => {
      const fetchRoleData = await fetch(
        "https://getblack-api.herokuapp.com/api/role"
      );
      const data = await fetchRoleData.json();
      let result = data.data;
      result.forEach((role) => {
        if (role.name === "Customer") {
          formData["roleId"] = role.id;
        }
      });
    };
    fetchRole();
    // eslint-disable-next-line
  }, []);

  // UseEffect for all the state
  useEffect(() => {
    if (isStatus) {
      toast.error(message);
    }

    // Redirect when logged in
    if (user || message === "Registration successful") {
      navigate("/login");
    }
    dispatch(reset());
  }, [dispatch, isStatus, message, navigate, user]);

  // handling the input change
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Submitting the form data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password is not correct");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        roleId,
        password,
        confirmPassword,
      };
      dispatch(register(userData));
    }
  };

  // Handling the Spinner
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="grid place-items-center mb-4 mx-4 ">
          <div className="w-1/2 mt-2">
            <div className="my-2 text-center">
              <h1 className="text-black text-4xl font-bold">Create Account</h1>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-4">
              {/* Create account form */}
              <form onSubmit={handleSubmit} className="w-full p-2">
                <div className="grid grid-cols-1 md:grid-cols-1 place-items-center gap-4">
                  <div className=" w-full">
                    <label className="label text-black">
                      <span className="label-text text-lg">First Name</span>
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      id="firstName"
                      onChange={onChange}
                      className="p-2 border border-gray-400 rounded-lg w-full"
                      placeholder="first name"
                      required
                    />
                  </div>
                  <div className=" w-full">
                    <label className="label text-black">
                      <span className="label-text text-lg">Last Name</span>
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      id="lastName"
                      onChange={onChange}
                      className="p-2 border border-gray-400 rounded-lg w-full"
                      placeholder="last name"
                      required
                    />
                  </div>
                  <div className=" w-full">
                    <label className="label text-black">
                      <span className="label-text text-lg">Email</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={onChange}
                      className="p-2 border border-gray-400 rounded-lg w-full"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className=" w-full">
                    <label className="label text-black">
                      <span className="label-text text-lg">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      value={phoneNumber}
                      id="phoneNumber"
                      onChange={onChange}
                      className="p-2 border border-gray-400 rounded-lg w-full"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className=" w-full">
                    <label className="label text-black">
                      <span className="label-text text-lg">Password</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      id="password"
                      onChange={onChange}
                      className="p-2 border border-gray-400 rounded-lg w-full"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="label text-black">
                      <span className="label-text text-lg">
                        Confirm Password
                      </span>
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      id="confirmPassword"
                      onChange={onChange}
                      className="p-2 border border-gray-400 rounded-lg w-full"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
                <div className=" mx-auto mt-4 w-full">
                  <button className="bg-[#0FA4F9] text-white p-3 font-bold uppercase text-lg rounded-lg w-full">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="mx-auto">
                <label className="label flex justify-center">
                  Already have an Account?
                  <Link
                    className="ml-2 label-text-alt link link-hover text-[#0FA4F9] text-lg"
                    to="/login"
                  >
                    Login
                  </Link>
                </label>
                <label className="label flex justify-center">
                  <span>Or</span>
                </label>
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

export default Register;
