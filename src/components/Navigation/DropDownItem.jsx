import React from "react";
import { Link } from "react-router-dom";

function DropDownItem({ text, link }) {
  return (
    <li className="dropdownItem">
      <Link to={link}> {text} </Link>
    </li>
  );
}

export default DropDownItem;
