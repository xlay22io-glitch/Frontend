import axios from "axios";
import useAuthStore from "../store/auth-store";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const clearAuth = useAuthStore.getState().clearAuth;
      clearAuth();
      //   window.location.href = "/prijavi-se?expired=true";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
