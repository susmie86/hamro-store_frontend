import React from "react";

function DropDownItem({ icon, text, link }) {
  return (
    <li className="dropdownItem">
      <img src={icon}></img>
      <a> {text} </a>
    </li>
  );
}

export default DropDownItem;
