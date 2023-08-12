const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default function formDataValidator({ name, emailOrPhone, password, confirmPassword }, setErrors) {
    // Validate UserName Field
    if (name.trim() === '') {
        setErrors((prevErrors) => {
            return { ...prevErrors, name: "Username is required." }
        })
    } else {
        setErrors(prevErrors => {
            return { ...prevErrors, name: "" }
        });
    }

    // Validate user Email
    if (emailOrPhone.trim() === "") {
        setErrors(prevErrors => {
            return { ...prevErrors, email: "Email is required." }
        })
    } else if (!emailReg.test(emailOrPhone)) {
        setErrors(prevErrors => {
            return { ...prevErrors, email: "Email is not valid." }
        })
    } else {
        setErrors(prevErrors => {
            return { ...prevErrors, email: "" }
        })
    }

    // Validate password field
    if (password.trim() === '' || password.length < 8) {
        setErrors(prevErrors => {
            return { ...prevErrors, password: "Password must be of atleast 8 characters." }
        });
    } else {
        setErrors(prevErrors => {
            return { ...prevErrors, password: "" }
        })
    }

    if (confirmPassword !== password) {
        setErrors(prevErrors => {
            return { ...prevErrors, confirmPassword: "Password do not match." }
        })
    } else {
        setErrors(prevErrors => {
            return { ...prevErrors, confirmPassword: "" }
        })
    }


}