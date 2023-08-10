import "./ProductCard.jsx";
import FullStarIcon from "../../assets/Icons/FullStarIcon.jsx";
import HalfStarIcon from "../../assets/Icons/HalfStarIcon.jsx";
import StarOutline from "../../assets/Icons/StarOutline.jsx";

function Rating({ rating, reviews }) {
  const ratingStar = Array.from({ length: 5 }, (elm, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FullStarIcon />
        ) : rating >= numbers ? (
          <HalfStarIcon />
        ) : (
          <StarOutline />
        )}
      </span>
    );
  });
  return (
    <p className="product-rating">
      {ratingStar}
      <span className="reviews">({reviews})</span>
    </p>
  );
}

export default Rating;
