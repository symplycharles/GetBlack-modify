import { publicRequest, userRequest } from "../../../requestMethods";

// const API_URL = "https://getblack-api.herokuapp.com/api";

// Register user
const register = async (userData) => {
  const response = await publicRequest.post("/register", userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await publicRequest.post("/login", userData);
  if (response.data.data !== null) {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

// Change user Password
const passwordChange = async (userData) => {
  const response = await userRequest.post("/changepassword", userData);
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  passwordChange,
};

export default authService;
