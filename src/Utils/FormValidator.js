const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default function formDataValidator(
  { firstName, lastName, email, password, confirmPassword },
  setErrors,
  validatorFor
) {
  // Validate first Name Field
  if (validatorFor === "signup") {
    if (firstName?.trim() === "") {
      setErrors((prevErrors) => {
        return { ...prevErrors, firstName: "first name is required." };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, firstName: "" };
      });
    }

    // Validate last name field
    if (lastName?.trim() === "") {
      setErrors((prevErrors) => {
        return { ...prevErrors, lastName: "last name is required." };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, lastName: "" };
      });
    }
    // Validate password for
    if (confirmPassword !== password) {
      setErrors((prevErrors) => {
        return { ...prevErrors, confirmPassword: "Password do not match." };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, confirmPassword: "" };
      });
    }
  }
  // Validate user Email
  if (email?.trim() === "") {
    setErrors((prevErrors) => {
      return { ...prevErrors, email: "Email is required." };
    });
  } else if (!emailReg.test(email)) {
    setErrors((prevErrors) => {
      return { ...prevErrors, email: "Email is not valid." };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, email: "" };
    });
  }

  // Validate password field
  if (password?.trim() === "" || password.length < 8) {
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        password: "Password must be of atleast 8 characters.",
      };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, password: "" };
    });
  }
}
