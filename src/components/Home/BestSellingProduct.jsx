import SectionHeader from "../Common/SectionHeader";
import ProductCard from "../Common/ProductCard";
import Button from "../Common/Button";
import Rating from "../Common/Rating";
import { useAppContext } from "../../Context/AppContext";

function BestSellingProduct() {
  const { state } = useAppContext();
  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader
            title={"this month"}
            subtitle={"best selling products"}
          />
          <Button type={`button`} classname={`primary`}>
            view all
          </Button>
        </div>
        <div className="product-list">
          {state.bestSellingProducts.map((bestProduct) => {
            return (
              <ProductCard
                key={bestProduct.id}
                {...bestProduct}
                showDiscount={false}
                cardFor={"best selling products"}
              >
                <Rating
                  rating={bestProduct.rating}
                  reviews={bestProduct.review}
                />
              </ProductCard>
            );
          })}
        </div>
      </section>
      <hr />
    </>
  );
}

export default BestSellingProduct;
