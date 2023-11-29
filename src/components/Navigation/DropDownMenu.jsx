import React from "react";
import "./Navigation.css"; // Import your CSS file
import DropDownItem from "./DropDownItem";
import { useAppContext } from "../../Context/AppContext";

const DropdownMenu = ({ setShowDropdown, showDropdown }) => {
  const {state} = useAppContext();
  return (
    <div className={`dropdown-menu ${showDropdown ? "active" : "inactive"}`}>
      <h3>
        Hello
        <br />
        <span>{`${state.user.firstName} ${state.user.lastName}`}</span>
      </h3>
      <ul>
        <DropDownItem text={"My Profile"} link={"/user"} />
        <DropDownItem text={"Edit Profile"} link={"/user/edit"} />
        <DropDownItem text={"Logout"} />
      </ul>
    </div>
  );
};

export default DropdownMenu;
