"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const adminInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

adminInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("admin_token"));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

adminInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.code === "ERR_NETWORK") {
      toast.error("Network Error! Please check your internet or server.");
    } else if (error.response) {
      toast.error(error.response.data?.message || "Something went wrong!");
    } else {
      toast.error("Unexpected Error!");
    }
    return Promise.reject(error);
  }
);

export default adminInstance;
