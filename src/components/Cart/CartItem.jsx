import React, { useEffect } from 'react'
import { useAppContext } from "../../Context/AppContext"
import MinusIcon from '../../assets/Icons/MinusIcon';
import PlusIcon from '../../assets/Icons/PlusIcon';

function CartItem({ id, productName, quantity, imgPath, discountPercent, marketPrice }) {
    const { dispatch } = useAppContext();
    useEffect(() => {
    }, [quantity])


    // Increase quantity of product
    const increaseQuantity = () => {
        dispatch({ type: "INCREASE_QUANTITY", payload: id });
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            dispatch({ type: "DECREASE_QUANTITY", payload: id });
        }
    }

    const removeProduct = () => {
        dispatch({type: "REMOVE_FROM_CART", payload: id})
    }


    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={imgPath} alt={productName} />
            </div>
            <div className="cart-item__details">
                <div className="product-details">
                    <h3 className="product-name">{productName}</h3>
                    <p className="product-category">Category</p>
                </div>

                <div class="product-quantity-control">
                    <div class="quantity-info">
                        <button class={`quantity-button ${quantity < 2 ? "decrease" : ""}`} onClick={decreaseQuantity}>
                            <MinusIcon />
                        </button>
                        <span class="quantity">{quantity}</span>
                        <button class="quantity-button increase" onClick={increaseQuantity}>
                            <PlusIcon />
                        </button>
                    </div>
                    <p class="unit-price">unit price: ${marketPrice - discountPercent * marketPrice / 100}</p>
                </div>
                <button className="remove-button" onClick={removeProduct}>Remove Item</button>
            </div>
        </div>

    )
}

export default CartItem