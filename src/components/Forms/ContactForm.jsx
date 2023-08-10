import { useState } from "react";
import Button from "../Common/Button";
import "./Form.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const nameChangeHandler = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, name: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, email: event.target.value };
    });
  };
  const phoneNumberChangeHandler = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, phoneNumber: event.target.value };
    });
  };
  const messageChangeHanlder = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, message: event.target.value };
    });
  };
  return (
    <div className="form-container contact-form">
      <form>
        {/* Input field for Name */}
        <div
          className={`inputfield ${
            formData.name.trim() !== "" ? "inputfield-value" : ""
          } name`}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="name">
            name <span>*</span>
          </label>
        </div>
        {/* Input Field for Email */}
        <div
          className={`inputfield ${
            formData.email.trim() !== "" ? "inputfield-value" : ""
          } email`}
        >
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={emailChangeHandler}
          />
          <label htmlFor="email">
            email <span>*</span>
          </label>
        </div>
        {/* Input field for phone number */}
        <div
          className={`inputfield ${
            formData.phoneNumber.trim() !== "" ? "inputfield-value" : ""
          } phoneNumber`}
        >
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={phoneNumberChangeHandler}
          />
          <label htmlFor="phoneNumber">
            phone number <span>*</span>
          </label>
        </div>

        {/* Input Field for Message */}
        <div
          className={`inputfield ${
            formData.message.trim() !== "" ? "inputfield-value" : ""
          } message`}
        >
            
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={messageChangeHanlder}
          />
          <label htmlFor="message">
            message <span>*</span>
          </label>
        </div>

        {/* Contact Form message sender bottom */}
        <Button type="submit" classname="primary">
            send message
          </Button>
      </form>
    </div>
  );
}

export default ContactForm;
