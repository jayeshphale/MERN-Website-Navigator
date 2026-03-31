import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-website-navigator.onrender.com/api"
});

export const uploadFile = (formData) => {
  return API.post("/upload", formData);
};