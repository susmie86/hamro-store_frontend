import ProductCard from "../Common/ProductCard";
import SectionHeader from "../Common/SectionHeader";
import Button from "../Common/Button";
import Rating from "../Common/Rating";
import { useAppContext } from "../../Context/AppContext";

function TodaySales() {
  const { state } = useAppContext();
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
          <Button type={`button`} classname={`primary`}>
            view all products
          </Button>
        </div>
      </section>

      <hr />
    </>
  );
}

export default TodaySales;
