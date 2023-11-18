import Cookies from "js-cookie";

// Get Data From Cookies
const getDataFromCookies = (key) => {
  const token = Cookies.get(key);
  return token;
};

// Set Data on cookies
const setDataToCookies = (key, value, expireAt) => {
  Cookies.set(key, value, {
    path: "/",
    expires: expireAt,
  });
};

// Remove Data from Cookies
const removeDataFromCookies = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

export { getDataFromCookies, setDataToCookies, removeDataFromCookies };
