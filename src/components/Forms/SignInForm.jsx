import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppContext } from "../../Context/AppContext";
import formDataValidator from "../../Utils/FormValidator";
import { getFromLocalStorage } from "../../Utils/localStorage";
import Button from "../Common/Button";
import "./Form.css";

function SignInForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  let [isPasswordHidden, setIsPasswordHidden] = useState(true);
  let [isFormSubmitted, setFormSubmitted] = useState(false);
  let isFormValid = true;

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    for (const error in errors) {
      if (errors[error]) {
        isFormValid = false;
        break;
      }
    }
    if (isFormValid) {
      const dataInLocalStorage = getFromLocalStorage("user");
      if (isFormSubmitted) {
        console.log(dataInLocalStorage);
        dispatch({ type: "ADD_USER", payload: dataInLocalStorage });
        console.log(dataInLocalStorage);

      }
      if (state.user?.name) {
        console.log(state.user)
        toast.success("Log in successfull");
      }
      setFormData({
        email: "",
        password: ""
      });
    } else {
      toast.error("Log in failed.");
    }
  }, [errors, state.user?.uuid])
  // functions for setting handling change in input field
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
  // Function for showing and hiding password
  const showPassword = () => {
    setIsPasswordHidden((prevIsPasswordHidden) => {
      return !prevIsPasswordHidden;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    formDataValidator(formData, setErrors)
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
          className={`inputfield ${formData.email.trim() !== "" ? "inputfield-value" : ""
            } ${errors.email ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={emailChangeHanlder}
          />
          <label htmlFor="email">Email or Phone Number</label>
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Password Input Field */}
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
