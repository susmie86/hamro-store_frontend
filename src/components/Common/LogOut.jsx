import React, { useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import { logoutApiHandler } from "../../Utils/Axios";
import { removeDataFromCookies } from "../../Utils/cookieHandler";
import "./LogOut.css";
import OverlayModel from "./OverlayModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LogOut({ closeModal }) {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {}, [state.user]);
  const cancelLogOut = () => {
    closeModal(false);
  };

  const confirmLogOut = async () => {
    const response = await logoutApiHandler();

    if (response.data.status === "Success") {
      toast.success(response.data.message);
      dispatch({ type: "REMOVE_USER" });
      removeDataFromCookies("refreshToken");
      removeDataFromCookies("accessToken");
      navigate("/");
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <OverlayModel closeModal={closeModal}>
      <div className="card-logout">
        <h2>Log Out</h2>
        <p className="message">Are you sure you want to logout?</p>
        <div>
          <button className="btn disagree" onClick={cancelLogOut}>
            Cancel
          </button>
          <button className="btn agree" onClick={confirmLogOut}>
            Confirm
          </button>
        </div>
      </div>
    </OverlayModel>
  );
}

export default LogOut;
