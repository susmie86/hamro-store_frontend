import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VerifyOTPApiHanlder } from "../Utils/Axios";
import Button from "../components/Common/Button";
import SideImage from "../components/Common/SideImage";
import PageLayout from "../components/Layouts/PageLayout";
import "./Page.css";

function VerifyAccount() {
  const [otp, setOtp] = useState();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const emailForVerification = sessionStorage.getItem("email");
  const otpChangeHandler = (e) => {
    setOtp(e.target.value);
  };
  const otpSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await VerifyOTPApiHanlder(emailForVerification, otp);
    if (response.data.status === "Success") {
      toast.success(response.data.message);
      setHasError(false);
      sessionStorage.removeItem("email");
      navigate("/signin");
    } else {
      setHasError(true);
      toast.error(response.data.message);
    }
  };

  const resendOtp = () => {};
  return (
    <PageLayout>
      {" "}
      <section className="section form-page">
        <SideImage />
        <div className="verify-card">
          <h2>Verify your account</h2>
          <p>Enter the 6 digit otp we sent you in your email</p>

          <form className="otp-form" onSubmit={otpSubmitHandler}>
            <div className={`input-fields-otp ${hasError ? "otp-error" : ""}`}>
              <input
                type="text"
                name="otp"
                id="otp"
                value={otp}
                maxLength={6}
                onChange={otpChangeHandler}
              />
              {/* {hasError && <p>{}</p>} */}
            </div>

            <Button type="submit" classname="primary">
              Verify OTP
            </Button>

            <button type="button" className="resend-button" onClick={resendOtp}>
              Resend OTP
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

export default VerifyAccount;
