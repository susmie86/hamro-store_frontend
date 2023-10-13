import ProductCard from "../Common/ProductCard";
import SectionHeader from "../Common/SectionHeader";
import Button from "../Common/Button";
import Rating from "../Common/Rating";
import { useAppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

function TodaySales() {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const viewAllProductsHandler = () => {
    navigate("/products/todays-sales");
    console.log("viewAllProductsHandler");
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
