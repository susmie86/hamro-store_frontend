import axios from "axios";
import { getDataFromCookies } from "./cookieHandler";

const accessToken = getDataFromCookies("accessToken");

// Defining a base url
const customFetch = axios.create({
  baseURL: "http://localhost:5000/api",
});

// -------------------------------- Auth Api Handler -------------------------------- //
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

// -------------------------------- Profile Api Handler -------------------------------- //
const getUserInfoApiHandler = async (accessToken) => {
  const response = await customFetch.get("/profile/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

const updateUserInfoApiHandler = async ({ firstName, lastName }) => {
  const response = await customFetch.patch(
    "/profile/",
    {
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const deleteUserProfileApiHandler = async () => {
  const response = await customFetch.delete("/profile/");
  return response;
};

// -------------------------------- Product Api Handler -------------------------------- //
const getAllProductsApiHandler = async (currentPage, pagelimit) => {
  const response = await customFetch.get(
    `/products?page=${currentPage}&limit=${pagelimit}`
  );
  return response;
};

const getSingleProductApiHandler = async (id) => {
  const response = await customFetch.get(`/products/${id}`);
  return response;
};

// -------------------------------- Product Api Handler for Admin -------------------------------- //
const addProductApiHandler = async (productData) => {
  const response = await customFetch.post(
    "/products/",
    { productData },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

// -------------------------------- Cart Api Handler -------------------------------- //
const addToCartApiHandler = async (id) => {
  const response = await customFetch.post(
    "/carts/",
    { id },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const addAllToCartApiHandler = async (productIds) => {
  const response = await customFetch.post(
    "/carts/addAll",
    { productIds },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const getCartItemsApiHandler = async () => {
  const response = await customFetch.get("/carts/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

const updateCartApiHandler = async (updatedItems) => {
  const response = await customFetch.put(
    "/carts/",
    { updatedItems },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const removeFromCartApiHandler = async (id) => {
  const response = await customFetch.delete(`/carts/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

// -------------------------------- Wishlist Api Handler -------------------------------- //
const addToWishlistApiHandler = async (productId) => {
  const response = await customFetch.post(
    "/wishlists/",
    { productId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const getWishlistsApiHandler = async () => {
  const response = await customFetch.get("/wishlists/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

const removeFromWishlistApiHandler = async (id) => {
  const response = await customFetch.delete(`/wishlists/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export {
  // Authentication
  signUpApiHandler,
  VerifyOTPApiHanlder,
  signInApiHandler,
  // User Profiles
  getUserInfoApiHandler,
  updateUserInfoApiHandler,
  deleteUserProfileApiHandler,
  // User Cart
  addToCartApiHandler,
  addAllToCartApiHandler,
  getCartItemsApiHandler,
  updateCartApiHandler,
  removeFromCartApiHandler,
  // User Wishlist
  addToWishlistApiHandler,
  getWishlistsApiHandler,
  removeFromWishlistApiHandler,
  // Products
  getAllProductsApiHandler,
  getSingleProductApiHandler,
  // Products Admin Side
  addProductApiHandler
};
