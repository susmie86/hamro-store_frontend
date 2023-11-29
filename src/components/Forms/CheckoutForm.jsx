import React, { useState } from "react";
import "./Form.css";
function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    streetAddress: "",
    appartmentFloor: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  const nameChangeHandler = () => {};
  const emailChangeHandler = () => {};
  const phoneNumberChangeHandler = () => {};
  const streetAddressChangeHandler = () => {};
  const appartmentFloorChangeHandler = () => {};
  const cityChangeHandler = () => {}
  return (
    <div className="form-container checkout-form">
      <form>
        {/* Input field for Name */}
        <div
          className={`inputfield ${
            formData.name.trim() !== "" ? "inputfield-value" : ""
          }`}
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

        {/* Input field for Street Address */}
        <div
          className={`inputfield ${
            formData.streetAddress.trim() !== "" ? "inputfield-value" : ""
          }`}
        >
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={streetAddressChangeHandler}
          />
          <label htmlFor="streetAddress">
            street address <span>*</span>
          </label>
        </div>

        {/* Input field for appartment floor */}
        <div
          className={`inputfield ${
            formData.appartmentFloor.trim() !== "" ? "inputfield-value" : ""
          }`}
        >
          <input
            type="text"
            id="appartmentFloor"
            name="appartmentFloor"
            value={formData.appartmentFloor}
            onChange={appartmentFloorChangeHandler}
          />
          <label htmlFor="appartmentFloor">
            appartment, floor, etc (optional)
          </label>
        </div>

        {/* Input field for Street Address */}
        <div
          className={`inputfield ${
            formData.city.trim() !== "" ? "inputfield-value" : ""
          }`}
        >
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={cityChangeHandler}
          />
          <label htmlFor="city">
            town/city <span>*</span>
          </label>
        </div>

        {/* Input Field for Email */}
        <div
          className={`inputfield ${
            formData.email.trim() !== "" ? "inputfield-value" : ""
          }`}
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
          }`}
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
      </form>
    </div>
  );
}

export default CheckoutForm;
