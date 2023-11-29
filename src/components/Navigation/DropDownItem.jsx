import React from "react";
import { Link } from "react-router-dom";

function DropDownItem({ icon, text, link }) {
  return (
    <li className="dropdownItem">
      <img src={icon}></img>
      <Link to={link}> {text} </Link>
    </li>
  );
}

export default DropDownItem;
