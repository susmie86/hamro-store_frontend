import { useEffect, useState } from "react";
import "./ProductCard.css";
import Button from "./Button";
import IconButton from "./IconButton";
import { useAppContext } from "../../Context/AppContext";
import { toast } from "react-toastify";

function ProductCard({
  id,
  imgPath,
  productName,
  marketPrice,
  discountPercent,
  showDiscount,
  children,
  cardFor,
}) {
  const [showAddCartButton, setShowAddCartButton] = useState(false);
  const { state, dispatch } = useAppContext();

  useEffect(() => { }, [state.cart]);
  const showBtn = () => {
    setShowAddCartButton(true);
  };
  const hideBtn = () => {
    setShowAddCartButton(false);
  };
  // Function to add product to cart
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, imgPath, productName, marketPrice, discountPercent, showDiscount },
    });

    toast.success("Product Added to cart.");
  };

  return (
    <div className='product-card' onMouseEnter={showBtn} onMouseLeave={hideBtn}>
      <div className='product-img__container'>
        <img src={imgPath} alt={productName} className='product-img' />

        <span
          className={`discount-amount ${discountPercent && showDiscount ? "show-discount" : ""}`}
        >
          -{discountPercent}%
        </span>
        <IconButton
          data={{
            id,
            imgPath,
            productName,
            marketPrice,
            discountPercent,
            showDiscount,
          }}
          btnFor={`${cardFor === "wishlist" ? "delete" : "addToWishlist"}`}
        />
        <Button
          type={`action`}
          classname={`secondary ${showAddCartButton ? "show-btn" : ""}`}
          onClick={addToCart}
        >
          add to cart
        </Button>
      </div>

      <div className='product-card__content'>
        <h3 className='productName'>{productName}</h3>

        <p className={`product-price`}>
          {discountPercent ? (
            <>
              ${marketPrice - (marketPrice * discountPercent) / 100} <span>${marketPrice}</span>
            </>
          ) : (
            <>${marketPrice}</>
          )}
        </p>

        {children}
      </div>
    </div>
  );
}

export default ProductCard;
