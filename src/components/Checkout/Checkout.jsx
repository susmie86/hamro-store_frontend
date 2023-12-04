import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import Button from "../Common/Button";
import CheckoutForm from "../Forms/CheckoutForm";
import "./Checkout.css";
function Checkout() {
  const { state } = useAppContext();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  let [total, setTotal] = useState(0);
  useEffect(() => {
    // Calculate total price by iterating through each item in the cart
    const totalPrice = state.cart.reduce(
      (accumulator, { marketPrice, discountPercent, quantity }) => {
        const discountedPrice =
          marketPrice - (marketPrice * discountPercent) / 100;
        return accumulator + discountedPrice * quantity;
      },
      0
    );
    setTotal(totalPrice);
  }, [state.cart]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="checkout-container">
      <h2 className="title">Billing Details</h2>
      <div className="checkout-content">
        <CheckoutForm />

        <div className="checkout-summary">
          <ul className="order-summary">
            {state.cart?.map(
              ({
                id,
                imgPath,
                productName,
                discountPercent,
                quantity,
                marketPrice,
              }) => {
                //  product);
                return (
                  <li key={id} className="order-item">
                    <img src={imgPath} alt={productName} className="item-img" />
                    <p className="item-title">{productName}</p>
                    <p className="item-price">
                      ${" "}
                      {(marketPrice - (marketPrice * discountPercent) / 100) *
                        quantity}
                    </p>
                  </li>
                );
              }
            )}
          </ul>
          <div className="proceed-checkout">
            <h2>cart total</h2>
            <div className="proceed-checkout_item">
              <span>subtotal: </span>
              <span>$ {total || 0}</span>
            </div>
            <div className="proceed-checkout_item">
              <span>Shipping:</span>
              <span>free </span>
            </div>
            <div className="proceed-checkout_item last">
              <span>total:</span>
              <span>$ {total || 0}</span>
            </div>
          </div>

          <div className="payment-options">
            <div className="payment-method">
              <input
                type="radio"
                id="creditCard"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="creditCard">Credit Card</label>
            </div>
            <div className="payment-method">
              <input
                type="radio"
                id="khalti"
                value="khalti"
                checked={paymentMethod === "khalti"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="khalti">khalti</label>
            </div>
          </div>

          <Button></Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
