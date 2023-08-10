import SectionHeader from "../Common/SectionHeader";
import ProductCard from "../Common/ProductCard";
import Button from "../Common/Button";
import Rating from "../Common/Rating";
import { useAppContext } from "../../Context/AppContext";

function OurProducts() {
  const { state } = useAppContext();

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
          {state.ourProducts.map((product) => {
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

export default OurProducts;
