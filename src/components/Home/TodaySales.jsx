import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import Button from "../Common/Button";
import ProductCard from "../Common/ProductCard";
import Rating from "../Common/Rating";
import SectionHeader from "../Common/SectionHeader";

function TodaySales() {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const viewAllProductsHandler = () => {
    navigate("/products/todays-sales");
  };
  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader title={"today's"} subtitle={"flash sales"} />
        </div>
        <div className="product-list">
          {state.todaysSales.map((todaysale) => {
            return (
              <ProductCard
                key={todaysale.id}
                {...todaysale}
                showDiscount={true}
                cardFor={`today's sales`}
              >
                <Rating rating={todaysale.rating} reviews={todaysale.review} />
              </ProductCard>
            );
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

export default TodaySales;
