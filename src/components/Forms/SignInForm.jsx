import { useState } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { getFromLocalStorage } from "../../Utils/localStorage";
import Button from "../Common/Button";

function SignInForm() {
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  let [isPasswordHidden, setIsPasswordHidden] = useState(true);

  // functions for setting handling change in input field
  const emailChangeHanlder = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, emailOrPhone: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, password: event.target.value };
    });
  };
  // Function for showing and hiding password
  const showPassword = () => {
    setIsPasswordHidden((prevIsPasswordHidden) => {
      return !prevIsPasswordHidden;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const dataFromLocalStorage = getFromLocalStorage("user");
    if(formData.emailOrPhone === dataFromLocalStorage.emailOrPhone) {
      console.log(`hello ${dataFromLocalStorage.name} `)
    }
    console.log(dataFromLocalStorage)
  };
  return (
    <div className="form-container">
      <div className="form-title">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
      </div>
      <form onSubmit={formSubmitHandler}>
        {/* Email Input field */}
        <div
          className={`inputfield ${formData.emailOrPhone.trim() !== "" ? "inputfield-value" : ""
            }`}
        >
          <input
            type="text"
            id="email"
            name="email"
            value={formData.emailOrPhone}
            onChange={emailChangeHanlder}
          />
          <label htmlFor="email">Email or Phone Number</label>
        </div>

        {/* Password Input Field */}
        <div
          className={`inputfield password ${formData.password.trim() !== "" ? "inputfield-value" : ""
            }`}
        >
          <input
            type={`${isPasswordHidden ? "password" : "text"}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={passwordChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <span onClick={showPassword}>
            <FontAwesomeIcon icon={isPasswordHidden ? faEye : faEyeSlash} />
          </span>
        </div>

        <div className="form-btns">
          <Button type="submit" classname="primary">
            log in
          </Button>
          <NavLink to="/forgetPassword" className="forgetPass">forget password?</NavLink>
          <p>don't have a account?<NavLink to='/signup' className='pageRoute'>sign up</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
