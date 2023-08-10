import SectionHeader from "../Common/SectionHeader";
import { productCategory } from "../../Constants/ProductCategory";
import CategoryCard from "../Common/CategoryCard";

function Category() {
  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader title={"categories"} subtitle={"browse by category"} />
        </div>
        <div className="product-list category">
          {productCategory.map((category) => {
            return <CategoryCard key={category.id} {...category} />;
          })}
        </div>
      </section>
      <hr />
    </>
  );
}

export default Category;
