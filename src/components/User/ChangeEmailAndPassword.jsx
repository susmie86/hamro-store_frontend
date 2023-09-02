import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

function ChangeEmailAndPassword() {
    const [formData, setFormData] = useState({
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    let [isPasswordHidden, setIsPasswordHidden] = useState({
        current: false,
        new: false,
        confirmNew: false
    });

    // Update state on every key stroke
    const emailChangeHanlder = (event) => {
        setFormData(prevFormData => {
            return { ...prevFormData, email: event.target.value }
        })
    }
    const currentPasswordChangeHandler = (event) => {
        setFormData((prevFormData) => {
            return { ...prevFormData, currentPassword: event.target.value };
        });
    };
    const newPasswordChangeHandler = (event) => {
        setFormData((prevFormData) => {
            return { ...prevFormData, newPassword: event.target.value };
        });
    };
    const confirmNewPasswordChangeHandler = (event) => {
        setFormData((prevFormData) => {
            return { ...prevFormData, confirmNewPassword: event.target.value };
        });
    };

    // Function for showing and hiding password
    const showCurrentPassword = () => {
        setIsPasswordHidden((prevIsPasswordHidden) => {
            return { ...prevIsPasswordHidden, current: !prevIsPasswordHidden.current }
        });
    };
    const showNewPassword = () => {
        setIsPasswordHidden((prevIsPasswordHidden) => {
            return { ...prevIsPasswordHidden, current: !prevIsPasswordHidden.new }
        });
    };
    const showConfirmNewPassword = () => {
        setIsPasswordHidden((prevIsPasswordHidden) => {
            return { ...prevIsPasswordHidden, current: !prevIsPasswordHidden.confirmNew }
        });
    };

    return (
        <div className="field-set password">
            <h3 className='field-title'>change email and password</h3>

            {/* Email Input Field */}
            <div
                className={`inputfield ${formData.email.trim() !== "" ? "inputfield-value" : ""
                    }`}
            >
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={emailChangeHanlder}
                    autoComplete='off'
                />
                <label htmlFor="email">email</label>
                {/* {errors.name && <p>{errors.name}</p>} */}
            </div>

            {/* Current Password Input Field */}
            <div
                className={`inputfield password
                ${formData.currentPassword.trim() !== "" ? "inputfield-value" : ""}
                `}
            >
                <input
                    type={`${isPasswordHidden.current ? "password" : "text"}`}
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={currentPasswordChangeHandler}
                    autoComplete='off'
                />
                <label htmlFor="password">current password</label>
                <span onClick={showCurrentPassword}>
                    <FontAwesomeIcon icon={isPasswordHidden.current ? faEye : faEyeSlash} />
                </span>
            </div>

            {/* New Password Input Field */}
            <div
                className={`inputfield password
                ${formData.newPassword.trim() !== "" ? "inputfield-value" : ""}
                `}
            >
                <input
                    type={`${isPasswordHidden.new ? "password" : "text"}`}
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={newPasswordChangeHandler}
                    autoComplete='new-password'
                />
                <label htmlFor="password">new password</label>
                <span onClick={showNewPassword}>
                    <FontAwesomeIcon icon={isPasswordHidden.new ? faEye : faEyeSlash} />
                </span>
            </div>

            {/* Confirm New Password Input field */}
            <div
                className={`inputfield password
                ${formData.confirmNewPassword.trim() !== "" ? "inputfield-value" : ""}
                `}
            >
                <input
                    type={`${isPasswordHidden.confirmNew ? "password" : "text"}`}
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    value={formData.confirmNewPassword}
                    onChange={confirmNewPasswordChangeHandler}
                    autoComplete='off'
                />
                <label htmlFor="password">confirm password</label>
                <span onClick={showConfirmNewPassword}>
                    <FontAwesomeIcon icon={isPasswordHidden.confirmNew ? faEye : faEyeSlash} />
                </span>
            </div>
        </div>
    )
}

export default ChangeEmailAndPassword