import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUpApiHandler } from "../../Utils/Axios";
import formDataValidator from "../../Utils/FormValidator";
import Button from "../Common/Button";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [callApi, setCallApi] = useState(false);
  const [errors, setErrors] = useState({});
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true); //to hide and display confirm password

  const navigate = useNavigate();
  let isFormValid = true;
  // Based on validation set data on local storage
  useEffect(() => {
    for (const error in errors) {
      if (errors[error]) {
        isFormValid = false;
        break;
      }
    }
    if (!isFormValid) {
      toast.error("Enter all fields correctly");
    }
  }, [errors, isFormValid, callApi]);

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

  const emailChangeHanlder = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, email: event.target.value };
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
  const formSignUpHandler = async (event) => {
    event.preventDefault();
    formDataValidator(formData, setErrors, "signup");
    setCallApi(true);
    // If there is not error then it means we are good to go
    if (isFormValid && callApi) {
      const response = await signUpApiHandler(formData);

      if (response.data.status === "Success") {
        toast.success(response.data.message);

        sessionStorage.setItem("email", formData.email);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setCallApi(false);
        navigate("/signup/verify");
      } else {
        if (
          response.data.message ===
          "This user is already registered and verified."
        ) {
          toast.error(response.data.message);
          navigate("/signin");
        } else {
          toast.error(response.data.message);
          navigate("/signup/verify");
        }
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
      </div>

      {/* FORM  */}
      <form onSubmit={formSignUpHandler} autoComplete="off">
        {/* first Name Input FIeld */}
        <div
          className={`inputfield ${
            formData.firstName?.trim() !== "" ? "inputfield-value" : ""
          } ${errors.lastName ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={firstNameChangeHanlder}
          />
          <label htmlFor="firstName">First Name</label>
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        {/* Last Name input field */}
        <div
          className={`inputfield ${
            formData.lastName?.trim() !== "" ? "inputfield-value" : ""
          } ${errors.lastName ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={lastNameChangeHanlder}
          />
          <label htmlFor="lastName">Last Name</label>
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        {/* User Email or Phone Number Field */}
        <div
          className={`inputfield ${
            formData.email?.trim() !== "" ? "inputfield-value" : ""
          } ${errors.email ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={emailChangeHanlder}
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* User Password Input Field */}
        <div
          className={`inputfield password ${
            formData.password?.trim() !== "" ? "inputfield-value" : ""
          } ${errors.password ? "error-input" : ""}`}
        >
          <input
            type={`${isPasswordHidden ? "password" : "text"}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={passwordChangeHandler}
            autoComplete="new-password"
          />
          <label htmlFor="password">Password</label>
          <span onClick={showPassword}>
            <FontAwesomeIcon icon={isPasswordHidden ? faEye : faEyeSlash} />
          </span>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div
          className={`inputfield password ${
            formData.confirmPassword?.trim() !== "" ? "inputfield-value" : ""
          } ${errors.confirmPassword ? "error-input" : ""}`}
        >
          <input
            type={`${isConfirmPasswordHidden ? "password" : "text"}`}
            id="passwordConfirm"
            name="password"
            value={formData.confirmPassword}
            onChange={confirmPasswordChangeHandler}
            autoComplete="new-password"
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
          <p>
            Already have account?{" "}
            <NavLink to="/signin" className="pageRoute">
              log in
            </NavLink>
          </p>
          {/* <NavLink to="/forgetPassword">forget password?</NavLink> */}
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
