import axios from "axios";

const API_URL = "https://getblack-api.herokuapp.com/api/role";

// Get the role back
const getAllRole = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const rolesService = {
  getAllRole,
};

export default rolesService;
