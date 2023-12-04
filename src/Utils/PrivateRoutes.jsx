import React from "react";
import { getDataFromCookies } from "./cookieHandler";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const accessToken = getDataFromCookies("accessToken");
  return accessToken ? children : <Navigate to={"/signin"} />;
}

export default PrivateRoutes;
