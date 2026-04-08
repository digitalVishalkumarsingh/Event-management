import { commonRequest } from "./Apicall";
import { Backendurl } from "./helper";

// **Submit Contact Form**
export const contactFunction = async (data) => {
  try {
    console.log("Form data:", data);
    const response = await commonRequest("POST", `${Backendurl}/user/contact`, data);
    return response;
  } catch (error) {
    console.error("Error submitting form:", error.response?.data?.message || error.message);
    throw error.response?.data || error;
  }
};

// **Register User**
export const postUser = async (data) => {
  try {
    const response = await commonRequest("POST", `${Backendurl}/register`, data);
    return response;
  } catch (error) {
    console.error("User registration failed:", error.response?.data?.message || error.message);
    throw error.response?.data || error;
  }
};

// **User Login**
export const loginUser = async (data) => {
  try {
    const response = await commonRequest("POST", `${Backendurl}/login`, data);
    return response;
  } catch (error) {
    console.error("User login failed:", error.response?.data?.message || error.message);
    throw error.response?.data || error;
  }
};

// **Get Logged-In User Data**
export const getLogin = async () => {
  try {
    const token = localStorage.getItem("auth-token"); // Get token from storage

    if (!token) {
      console.error("Authentication token is missing");
      return null;
    }

    const headers = { Authorization: `Bearer ${token}` };
    const response = await commonRequest("GET", `${Backendurl}/getlogin`, null, headers);
    
    return response;
  } catch (error) {
    console.error("Failed to fetch user data:", error.response?.data?.message || error.message);
    throw error.response?.data || error;
  }
};
