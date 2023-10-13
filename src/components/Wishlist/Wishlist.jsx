// import React from "react";
import { useAppContext } from "../../Context/AppContext";
import ProductCard from "../Common/ProductCard";
import Button from "../Common/Button";
import "./Wishlist.css";

function Wishlist() {
  const { state, dispatch } = useAppContext();

  const moveAllProductToCart = () => {
    // Create an array of wishlist item ids
    const wishlistItemIds = state.wishlist.map((item) => item.id);
    // Dispatch the action with the array of ids as the payload
    dispatch({ type: "ADD_ALL_TO_CART", payload: wishlistItemIds });

    dispatch({ type: "REMOVE_ALL_FROM_WISHLIST" });
  };
  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <h3 className="wishlist">wishlist({state.wishlist.length})</h3>,
          <Button
            classname={"outline"}
            type={`action`}
            onClick={moveAllProductToCart}
          >
            Move all to bag{" "}
          </Button>
        </div>
        <div className="product-list wishlist">
          {state.wishlist.map((product) => {
            // console.log();
            return (
              <ProductCard
                key={product.id}
                {...product}
                cardFor={"wishlist"}
                showDiscount={false}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Wishlist;
