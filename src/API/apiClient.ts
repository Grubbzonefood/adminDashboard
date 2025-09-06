import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api2.grubbzone.food/api",
  // baseURL: "http://localhost:5151/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to inject latest token
apiClient.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("grubbzone_authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;