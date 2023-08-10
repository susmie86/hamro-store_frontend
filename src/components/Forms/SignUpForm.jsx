import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Button from "../Common/Button";
import { setToLocalStorage } from "../../Utils/localStorage";
import { NavLink } from "react-router-dom";
import formDataValidator from "../../Utils/FormValidator";
import { toast } from "react-toastify";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  useState(() => {
    console.log(errors)
  }, [errors])

  //   Function for Showing and Hiding password
  const showPassword = () => {
    setIsPasswordHidden((prevIsPasswordHidden) => {
      return !prevIsPasswordHidden;
    });
  };
  const showConfirmPassword = () => {
    setIsConfirmPasswordHidden((prevIsConfirmPasswordHidden) => {
      return !prevIsConfirmPasswordHidden;
    });
  };

  //Input change handler
  const nameChangeHanlder = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, name: event.target.value };
    });
  };

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

  const confirmPasswordChangeHandler = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, confirmPassword: event.target.value };
    });
  };

  // Add User data to local storage
  const formSignUpHandler = (event) => {
    event.preventDefault();
    // Form Validation starts here
    toast.success("Hello world!!!");
    let isFormValid = true;
    formDataValidator(formData, setErrors)
    for (const error in errors) {
      if (errors[error]) {
        isFormValid = false;
        break;
      }
    }

    if (isFormValid) {
      // Store form data to local storage
      setToLocalStorage("user", formData);
      setFormData({
        name: "",
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
      });
    }
  }
  return (
    <div className="form-container">

      <div className="form-title">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
      </div>

      {/* FORM  */}
      <form onSubmit={formSignUpHandler}>
        {/* User Name Input FIeld */}
        <div
          className={`inputfield ${formData.name.trim() !== "" ? "inputfield-value" : ""
            }`}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={nameChangeHanlder}
          />
          <label htmlFor="name">Name</label>
        </div>

        {/* User Email or Phone Number Field */}
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

        {/* User Password Input Field */}
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
        <div
          className={`inputfield password ${formData.confirmPassword.trim() !== "" ? "inputfield-value" : ""
            }`}
        >
          <input
            type={`${isConfirmPasswordHidden ? "password" : "text"}`}
            id="passwordConfirm"
            name="password"
            value={formData.confirmPassword}
            onChange={confirmPasswordChangeHandler}
          />
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <span onClick={showConfirmPassword}>
            <FontAwesomeIcon
              icon={isConfirmPasswordHidden ? faEye : faEyeSlash}
            />
          </span>
        </div>
        <div className="form-btns">
          <Button type="submit" classname="primary">
            create account
          </Button>
          <p>Already have account? <NavLink to='/signin' className="pageRoute">log in</NavLink></p>
          {/* <NavLink to="/forgetPassword">forget password?</NavLink> */}
        </div>
      </form>

    </div>
  );
}

export default SignUpForm;
