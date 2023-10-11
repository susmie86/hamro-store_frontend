import axios from "axios";

const accessToken = localStorage.getItem("access_token");

// Defining a base url
const customFetch = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `bearer ${accessToken}`,
  },
});

const signUpApiHandler = async ({ firstName, lastName, email, password }) => {
  const response = await customFetch.post("/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
  return response;
};

const VerifyOTP = async (email, otp) => {
  const response = await customFetch.post("/auth/verify", {
    email,
    otp,
  });
  return response;
};

export { signUpApiHandler, VerifyOTP };
