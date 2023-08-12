import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Button from "../Common/Button";
import { getFromLocalStorage, setToLocalStorage } from "../../Utils/localStorage";
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
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true); //to hide and display confirm password
  const [isFormSubmitted, setFormSubmitted] = useState(false); // to check if user clicked the submit button or not
  let isFormValid = true;

  // Based on validation set data on local storage
  useEffect(() => {
    for (const error in errors) {
      if (errors[error]) {
        isFormValid = false;
        break;
      }
    }

    if (isFormValid) {
      // to Prevent form data to be stored in local storage without submit
      if (isFormSubmitted)
        setToLocalStorage("user", formData);
      // to check if form data is stored in local storage or not
      if (getFromLocalStorage("user"))
        toast.success("Sign up successfull.")
      // Clear inputfield after form submission
      setFormData({
        name: "",
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
      });

    } else {
      // If signup failed. give a toast message
      toast.error("Sign Up failed.");
    }
    // console.log(errors)
  }, [errors]);

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

  // Function to check If the form is valid or not.
  const formSignUpHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // tells that the form submit button is clicked.
    formDataValidator(formData, setErrors)
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
            } ${errors.name ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={nameChangeHanlder}
          />
          <label htmlFor="name">Name</label>
          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* User Email or Phone Number Field */}
        <div
          className={`inputfield ${formData.emailOrPhone.trim() !== "" ? "inputfield-value" : ""
            } ${errors.email ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="email"
            name="email"
            value={formData.emailOrPhone}
            onChange={emailChangeHanlder}
          />
          <label htmlFor="email">Email or Phone Number</label>
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* User Password Input Field */}
        <div
          className={`inputfield password ${formData.password.trim() !== "" ? "inputfield-value" : ""
            } ${errors.password ? "error-input" : ""}`}
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
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div
          className={`inputfield password ${formData.confirmPassword.trim() !== "" ? "inputfield-value" : ""
            } ${errors.confirmPassword ? "error-input" : ""}`}
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
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
