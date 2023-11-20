import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import Button from "../Common/Button";
import "./Cart.css";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { state } = useAppContext();
  let [total, setTotal] = useState(0);
  const navigative = useNavigate();
  const returnToHome = () => {
    navigative("/");
  };

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

  if (state.cart.length > 0) {
    return (
      <section className="cart-section">
        <div className="cart-list">
          <h2>Shopping</h2>
          {state.cart.map((product) => {
            return (
              <CartItem key={product.id} {...product} showDiscount={false} />
            );
          })}
          <div className="button-list">
            <Button classname={"outline"} onClick={returnToHome}>
              return to shop
            </Button>
            <Button classname={"outline"}>update cart</Button>
          </div>
        </div>
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

          <Button
            classname={"primary"}
            style={{ padding: "1em 1.5em", margin: "auto" }}
          >
            Proceed to checkout
          </Button>
        </div>
      </section>
    );
  } else {
    return <p>Nothing is in the cart.</p>;
  }
}

export default Cart;
