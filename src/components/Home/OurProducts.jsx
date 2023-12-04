import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import Button from "../Common/Button";
import ProductCard from "../Common/ProductCard";
import Rating from "../Common/Rating";
import SectionHeader from "../Common/SectionHeader";
import "./Home.css";

function OurProducts() {
  const { state } = useAppContext();
  const navigate = useNavigate();

  const viewAllProductsHandler = () => {
    navigate("/products/our-products");
  };

  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader
            title={`our products`}
            subtitle={`explore our products`}
          />
        </div>
        <div className="product-list">
          {state.ourProducts.map((product, index) => {
            if (index < 4) {
              return (
                <ProductCard
                  key={product.id}
                  {...product}
                  showDiscount={false}
                  cardFor={"Our Products"}
                >
                  <Rating rating={product.rating} reviews={product.review} />
                </ProductCard>
              );
            }
          })}
        </div>
        <div className="section-bottom">
          <Button
            type={`button`}
            classname={`primary`}
            onClick={viewAllProductsHandler}
          >
            view all products
          </Button>
        </div>
      </section>
      <hr />
    </>
  );
}

export default OurProducts;
