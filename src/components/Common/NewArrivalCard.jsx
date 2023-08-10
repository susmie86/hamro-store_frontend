import "./ProductCard.css";
import Button from "./Button";

function NewArrivalCard({ id, imgPath, productName, description }) {
  const classname = id === 1 ? "first" : id === 2 ? "second" : "";
  return (
    <div className={`arrival-card ${classname}`}>
      <div className="arrival-card_img">
        <img src={imgPath} alt={productName} />
      </div>
      <div className="arrival-card_content">
        <h3 className="arrival-card_heading">{productName}</h3>
        <p className="arrival-card_description">{description}</p>
        <Button type={`button`} classname={`secondary`}>
          shop now
        </Button>
      </div>
    </div>
  );
}

export default NewArrivalCard;
