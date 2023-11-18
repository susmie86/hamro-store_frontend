import axios from "axios";

// const accessToken = localStorage.getItem("access_token");

// Defining a base url
const customFetch = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Handle signup request
const signUpApiHandler = async ({ firstName, lastName, email, password }) => {
  const response = await customFetch.post("/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
  return response;
};

const VerifyOTPApiHanlder = async (email, otp) => {
  const response = await customFetch.post("/auth/verify", {
    email,
    otp,
  });
  return response;
};

const signInApiHandler = async ({ email, password }) => {
  const response = await customFetch.post("/auth/signin", { email, password });
  return response;
};

const getUserInfoApiHandler = async (accessToken) => {
  const response = await customFetch.get("/auth/getUser", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

const getProductsApiHandler = async (currentPage, pagelimit) => {
  const response = await customFetch.get(
    `/products?page=${currentPage}&limit=${pagelimit}`
  );
  return response;
};

const getAProductApiHandler = async (id) => {
  const response = await customFetch.get(`/products/${id}`);
  return response;
};

export {
  signUpApiHandler,
  VerifyOTPApiHanlder,
  signInApiHandler,
  getUserInfoApiHandler,
  getProductsApiHandler,
  getAProductApiHandler,
};
