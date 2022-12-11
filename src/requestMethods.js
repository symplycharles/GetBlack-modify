import axios from "axios";

const BASE_URL = "https://getblack-api.herokuapp.com/api";
const userDetails = JSON.parse(localStorage.getItem("user"));
const TOKEN = userDetails ? userDetails.access_token : null;
console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
