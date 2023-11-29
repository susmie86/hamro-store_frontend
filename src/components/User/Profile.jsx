import React, { useState } from "react";
import "./User.css";
import ChangePassword from "./ChangePassword";
import Button from "../Common/Button";

function Profile() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [changePassword, setChangePassword] = useState(false);

  const firstNameChangeHanlder = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, firstName: event.target.value };
    });
  };

  const lastNameChangeHanlder = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, lastName: event.target.value };
    });
  };

  const handleChangePassword = (event) => {
    setChangePassword(event.target.checked);
  };
  return (
    <div className="account-section">
      {/* Field set for Account information change */}
      <div className="field-set info">
        <h3 className="field-title">account information</h3>

        <div
          className={`inputfield ${
            formData.firstName.trim() !== "" ? "inputfield-value" : ""
          }`}
        >
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={firstNameChangeHanlder}
            autoComplete="off"
          />
          <label htmlFor="firstName">first name</label>
          {/* {errors.name && <p>{errors.name}</p>} */}
        </div>
        <div
          className={`inputfield ${
            formData.lastName.trim() !== "" ? "inputfield-value" : ""
          }`}
        >
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={lastNameChangeHanlder}
            autoComplete="off"
          />
          <label htmlFor="lastName">last name</label>
          {/* {errors.name && <p>{errors.name}</p>} */}
        </div>

        <div className="checkboxes">
          <div className="checkbox-input">
            <input
              type="checkbox"
              name="changePassword"
              id="changePassword"
              checked={changePassword}
              onChange={handleChangePassword}
            />
            <label htmlFor="changePassword">change password</label>
          </div>
        </div>
      </div>
      {/* Field set for Account information change */}

      {changePassword && <ChangePassword />}

      <Button classname={"primary"}>save</Button>
    </div>
  );
}

export default Profile;
