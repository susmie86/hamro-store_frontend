import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import formDataValidator from "../../Utils/FormValidator";
import Button from "../Common/Button";
import "./Form.css";
import { signInApiHandler } from "../../Utils/Axios";
import { setDataToCookies } from "../../Utils/cookieHandler";

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [callApi, setCallApi] = useState(false);
  let [isPasswordHidden, setIsPasswordHidden] = useState(true);
  let isFormValid = true;

  useEffect(() => {
    for (const error in errors) {
      if (errors[error]) {
        isFormValid = false;
        break;
      }
    }
  }, [errors, isFormValid, callApi]);
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

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    formDataValidator(formData, setErrors);
    setCallApi(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (isFormValid && callApi) {
        const response = await signInApiHandler(formData);
        setCallApi(false);

        if (response.data.status === "Success") {
          toast.success(response.data.message);
          setDataToCookies("accessToken", response.data.data.accessToken, 1);
          setDataToCookies("refreshToken", response.data.data.refreshToken, 3);
          navigate("/");
          setFormData({ email: "", password: "" });
        } else if (response.data.status === "error") {
          toast.error(response.data.message);
        }
      }
    };

    fetchData(); // Call fetchData on every render
  }, [isFormValid, callApi]);
  return (
    <div className="form-container">
      <div className="form-title">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
      </div>
      <form onSubmit={formSubmitHandler} autoComplete="off">
        {/* Email Input field */}
        <div
          className={`inputfield ${
            formData.email.trim() !== "" ? "inputfield-value" : ""
          } ${errors.email ? "error-input" : ""}`}
        >
          <input
            type="text"
            id="email"
            name="Email"
            value={formData.email}
            onChange={emailChangeHanlder}
            autoComplete="off"
          />
          <label htmlFor="email">Email or Phone Number</label>
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Password Input Field */}
        <div
          className={`inputfield password ${
            formData.password.trim() !== "" ? "inputfield-value" : ""
          } ${errors.password ? "error-input" : ""}`}
        >
          <input
            type={`${isPasswordHidden ? "password" : "text"}`}
            id="password"
            name="Password"
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

        <div className="form-btns">
          <Button type="submit" classname="primary">
            log in
          </Button>
          <NavLink to="/forgetPassword" className="forgetPass">
            forget password?
          </NavLink>
          <p>
            don't have a account?
            <NavLink to="/signup" className="pageRoute">
              sign up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
