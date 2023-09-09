import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

function ChangeEmail() {
    const [formData, setFormData] = useState({
        email: "",
        currentPassword: ""
    })

    const [isPasswordHidden, setIsPasswordHidden] = useState(false);

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

    // Function for showing and hiding password
    const showPassword = () => {
        setIsPasswordHidden((prevIsPasswordHidden) => {
            return !prevIsPasswordHidden;
        });
    };
    return (
        <div className="field-set">
            <h3 className="field-title">change email</h3>

            {/* Email Input field */}
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
                    type={`${isPasswordHidden ? "password" : "text"}`}
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={currentPasswordChangeHandler}
                    autoComplete='off'
                />
                <label htmlFor="password">current password</label>
                <span onClick={showPassword}>
                    <FontAwesomeIcon icon={isPasswordHidden ? faEye : faEyeSlash} />
                </span>
            </div>
        </div>

    )
}

export default ChangeEmail