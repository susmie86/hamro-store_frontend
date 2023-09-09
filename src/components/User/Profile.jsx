import React, { useState } from 'react';
import "./User.css";
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import ChangeEmailAndPassword from './ChangeEmailAndPassword';
import Button from '../Common/Button';

function Profile() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const firstNameChangeHanlder = (event) => {
    setFormData(prevFormData => {
      return { ...prevFormData, firstName: event.target.value }
    })
  }

  const lastNameChangeHanlder = (event) => {
    setFormData(prevFormData => {
      return { ...prevFormData, lastName: event.target.value }
    })
  }



  const handleChangeEmail = (event) => {
    console.log(event.target.checked)
    setChangeEmail(event.target.checked)
  }

  const handleChangePassword = (event) => {
    console.log(event.target.checked)
    setChangePassword(event.target.checked)
  }
  return (
    <div className="account-section">

      {/* Field set for Account information change */}
      <div className="field-set info">
        <h3 className="field-title">account information</h3>

        <div
          className={`inputfield ${formData.firstName.trim() !== "" ? "inputfield-value" : ""
            }`}
        >
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={firstNameChangeHanlder}
            autoComplete='off'
          />
          <label htmlFor="firstName">first name</label>
          {/* {errors.name && <p>{errors.name}</p>} */}
        </div>
        <div
          className={`inputfield ${formData.lastName.trim() !== "" ? "inputfield-value" : ""
            }`}
        >
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={lastNameChangeHanlder}
            autoComplete='off'
          />
          <label htmlFor="lastName">last name</label>
          {/* {errors.name && <p>{errors.name}</p>} */}
        </div>

        <div className="checkboxes">
          <div className="checkbox-input">
            <input
              type="checkbox"
              name="changeEmail"
              id="changeEmail"
              checked={changeEmail}
              onChange={handleChangeEmail}
            />
            <label htmlFor="changeEmail">change email</label>
          </div>

          <div className="checkbox-input">
            <input
              type="checkbox"
              name="changeEmail"
              id="changeEmail"
              checked={changePassword}
              onChange={handleChangePassword}
            />
            <label htmlFor="changeEmail">change password</label>
          </div>
        </div>
      </div>
      {/* Field set for Account information change */}


      {changePassword && !changeEmail && <ChangePassword />}
      {!changePassword && changeEmail && <ChangeEmail />}
      {changePassword && changeEmail && <ChangeEmailAndPassword />}

      <Button classname={"primary"}>save</Button>

    </div>
  )
}

export default Profile;