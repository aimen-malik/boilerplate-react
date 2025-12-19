import axios from "axios";
import { setLogout } from "../auth/authSlice";
import { toast } from "react-toastify";
import { store } from "../store";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      error?.response?.status == 401 &&
      !error?.response?.data?.message.includes("Invalid credentials")
    ) {
      try {
        localStorage.clear();
        store.dispatch(setLogout());
        window.location.href = "/login";
      } catch (err) {}
    } else if (error.code === "ERR_NETWORK") {
    }
    return Promise.reject(error);
  }
);

const handleApiError = (error) => {
  if (error.response) {
  } else if (error.request) {
  } else {
  }
  return error;
};
const performRequest = async (method, url, data, config = {}) => {
  try {
    const response = await method(url, data, config);
    return response;
  } catch (error) {
    return handleApiError(error);
  }
};

export const get = async (url, config = {}) => {
  return performRequest(http.get, url, config);
};

export const post = async (url, data, config = {}) => {
  return performRequest(http.post, url, data, config);
};

export const del = async (url, config = {}) => {
  return performRequest(http.delete, url, config);
};
