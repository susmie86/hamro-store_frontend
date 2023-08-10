// This component contains add to wishlist icon for product card and delete product from wishlist icon
import { useState, useEffect } from "react";
import WishlistIcon from "../../assets/Icons/WishlistIcon";
import DeleteIcon from "../../assets/Icons/DeleteIcon";
import { useAppContext } from "../../Context/AppContext";

function IconButton({ btnFor, data }) {
  const { state, dispatch } = useAppContext();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Set the initial state based on whether the product is in the wishlist
    setIsWishlisted(state.wishlist.some((item) => item.id === data.id));
  }, [state.wishlist, data.id]);

  const toggleWishlist = () => {
    setIsWishlisted((prevWishlist) => {
      return !prevWishlist;
    });

    if (!isWishlisted) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: data });
    } else {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: data.id });
    }
  };

  const deleteProduct = () => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: data.id })
  };
  if (btnFor === "addToWishlist")
    return (
      <div
        className={`icon-div ${isWishlisted ? "wished" : ""}`}
        onClick={toggleWishlist}
      >
        <WishlistIcon />
      </div>
    );

  if (btnFor === `delete`) {
    return (
      <div className="icon-div" onClick={deleteProduct}>
        <DeleteIcon />
      </div>
    );
  }
}

export default IconButton;
