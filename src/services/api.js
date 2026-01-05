import axios from "axios";

const api = axios.create({
  baseURL: "https://api.sheety.co/YOUR_REAL_ID/f1ApiFinal",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
