import React, { useState } from "react";
import "./Navigation.css"; // Import your CSS file
import DropDownItem from "./DropDownItem";
import { useAppContext } from "../../Context/AppContext";
import LogOut from "../Common/LogOut";

const DropdownMenu = ({ setShowDropdown, showDropdown }) => {
  const { state } = useAppContext();
  const [showLogOut, setShowLogout] = useState(false);
  const handleLogout = () => {
    // Show Logout overlay
    setShowLogout(true);
    // Close the dropdown
    setShowDropdown(false);
  };

  return (
    <div className={`dropdown-menu ${showDropdown ? "active" : "inactive"}`}>
      <h3>
        Hello
        <br />
        <span>{`${state.user.firstName} ${state.user.lastName}`}</span>
      </h3>
      <ul>
        <DropDownItem text={"My Profile"} link={"/user/account"} />
        <DropDownItem text={"Edit Profile"} link={"/user/edit"} />
        <button className="btn primary" onClick={handleLogout}>
          Log out
        </button>
      </ul>
      {showLogOut && <LogOut closeModal={() => setShowLogout(false)} />}
    </div>
  );
};

export default DropdownMenu;
