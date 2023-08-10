import "./Home.css";
import TodaySales from "./TodaySales";
import Category from "./Category";
import BestSellingProduct from "./BestSellingProduct";
import OurProducts from "./OurProducts";
import NewArrivals from "./NewArrivals";

function Home() {
  return (
    <>
      <TodaySales />
      <Category />
      <BestSellingProduct />
      <OurProducts />
      <NewArrivals />
    </>
  );
}

export default Home;
