import { useNavigate, useNavigation } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext'
import Button from '../Common/Button';
import "./Cart.css"
import CartItem from './CartItem';

function Cart() {
    const { state, dispatch } = useAppContext();
    const navigative = useNavigate()
    const returnToHome = () => {
        navigative("/");
    }
    if (state.cart.length > 0) {
        return (
            <section className='cart-section'>
                <div className="cart-list">
                    <h2>Shopping</h2>
                    {state.cart.map((product) => {
                        return <CartItem key={product.id} {...product} showDiscount={false} />
                    })}
                    <div className="button-list">
                        <Button classname={"outline"} onClick={returnToHome}>return to shop</Button>
                        <Button classname={"outline"}>update cart</Button>
                    </div>
                </div>
                <div className="proceed-checkout">
                    <h2>cart total</h2>
                    <div className="proceed-checkout_item">
                        <span>subtotal:</span>
                        <span>$ 1000</span>
                    </div>
                    <div className="proceed-checkout_item">
                        <span>Shipping:</span>
                        <span>free </span>
                    </div>
                    <div className="proceed-checkout_item last">
                        <span>total:</span>
                        <span>$ 1000</span>
                    </div>

                    <Button classname={"primary"} style={{ padding: "1em 1.5em", margin: "auto" }}>Proceed to checkout</Button>
                </div>
            </section>
        );
    } else {
        return <p>Nothing is in the cart.</p>
    }
}

export default Cart