import SectionHeader from "../Common/SectionHeader";
import { newArrivals } from "../../Constants/ProductsData";
import NewArrivalCard from "../Common/NewArrivalCard";

function NewArrivals() {
  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader title={`featured`} subtitle={`new arrival`} />
        </div>
        <div className="product-list new-arrivals">
          {newArrivals.map((newArrival) => {
            return <NewArrivalCard key={newArrival.id} {...newArrival} />;
          })}
        </div>
      </section>
      <hr />
    </>
  );
}

export default NewArrivals;
