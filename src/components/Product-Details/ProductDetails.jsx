import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MinusIcon from "../../assets/Icons/MinusIcon";
import PlusIcon from "../../assets/Icons/PlusIcon";
import WishlistIcon from "../../assets/Icons/WishlistIcon";
import Button from "../Common/Button";
import Rating from "../Common/Rating";
import "./ProductDetails.css";

// TODO: Need to see product through api
function ProductDetails() {
  const { id } = useParams();
  const quantity = 1;
  const stockQuantity = 0;

  const imgChanger = (index) => {
    // setLargeImg(images[index]);
  };

  useEffect(() => {
    (async () => {
      const response = await getAProductApiHandler();
      console.log(response);
    })();
  }, [quantity]);
  const [largeImg, setLargeImg] = useState("");

  // Increase quantity of product
  const increaseQuantity = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: id });
    }
  };
  return (
    <section className="product-details">
      {/*********************
       *
       * Images section
       *
       ***********************/}
      <div className="product-details_imgs">
        <div className="product-details_thumbnails">
          {images.map((image, index) => {
            return (
              <div
                className="thumbnail_item"
                onClick={() => {
                  imgChanger(index);
                }}
              >
                <img src={image} />
              </div>
            );
          })}
        </div>
        <div className="product-details_img">
          <img src={largeImg} />
        </div>
      </div>

      {/*********************
       *
       * About Product section
       *
       ***********************/}
      <div className="product-details_info">
        <div className="info-main">
          <h2 className="product-name">Havic HV G-92 Gamepad</h2>
          <h3 className="product-category light-font">product-category</h3>

          <div className="stock-review">
            <Rating rating={0} reviews={0} />
            <span
              className={`stock_info ${stockQuantity ? "" : "not-available"}`}
            >{`${stockQuantity ? "in stock" : "out of stock"}`}</span>
          </div>

          <p className="product-price">price</p>

          <p className="product-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            exercitationem doloribus officia vel accusantium velit ab minima
            quasi voluptatum nihil aperiam, maxime magni consequuntur debitis
            quae in corrupti, amet dolor.
          </p>
        </div>

        <hr />

        <div className="info-secondary">
          <div className="buy-products">
            {/* Increase and decrease button */}
            <div class="quantity-info">
              <button
                className={`quantity-button ${quantity < 2 ? "decrease" : ""}`}
                onClick={decreaseQuantity}
              >
                <MinusIcon />
              </button>
              <span className="quantity">{quantity}</span>
              <button
                className="quantity-button increase"
                onClick={increaseQuantity}
              >
                <PlusIcon />
              </button>
            </div>

            <Button classname={`primary`}>buy now</Button>

            <button className="btn wishlist-btn">
              <WishlistIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
