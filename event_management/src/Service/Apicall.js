import axios from "axios";

// ✅ Corrected variable name & added baseURL from env
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000", // Change as needed
  headers: { "Content-Type": "application/json" },
});

// ✅ Improved commonRequest with better error handling
export const commonRequest = async (method, url, body = null, customHeaders = {}) => {
  try {
    const token = localStorage.getItem("auth-token");
    const headers = {
      ...customHeaders,
      Authorization: token ? `Bearer ${token}` : "", // Auto-attach auth token
      "Content-Type": "application/json",
    };

    const response = await axiosInstance({
      method,
      url,
      headers,
      data: body ? JSON.stringify(body) : null,
    });

    return response.data; // Return only data
  } catch (error) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw error; // Allow caller to handle errors
  }
};
