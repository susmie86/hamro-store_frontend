import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import Button from "../Common/Button";
import ProductCard from "../Common/ProductCard";
import Rating from "../Common/Rating";
import SectionHeader from "../Common/SectionHeader";

function BestSellingProduct() {
  const navigate = useNavigate();
  const { state } = useAppContext();

  const viewAllProductsHandler = () => {
    navigate("/products/best-selling-products");
  };
  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader
            title={"this month"}
            subtitle={"best selling products"}
          />
          <Button
            type={`button`}
            classname={`primary`}
            onClick={viewAllProductsHandler}
          >
            view all
          </Button>
        </div>
        <div className="product-list">
          {state.bestSellingProducts.map((bestProduct, index) => {
            if (index < 4) {
              return (
                <ProductCard
                  key={bestProduct.id}
                  {...bestProduct}
                  showDiscount={false}
                  cardFor={"Best Selling Products"}
                >
                  <Rating
                    rating={bestProduct.rating}
                    reviews={bestProduct.review}
                  />
                </ProductCard>
              );
            }
          })}
        </div>
      </section>
      <hr />
    </>
  );
}

export default BestSellingProduct;
