import axios from "axios";

const API = axios.create({
  baseURL: "https://tradenest-backend-s2bu.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;



