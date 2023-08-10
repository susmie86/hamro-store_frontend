import Navigation from "../components/Navigation/Navigation";
import Container from "../components/Common/Container";
import RoadMap from "../components/Common/RoadMap";
import Footer from "../components/Footer/Footer";
import Wishlist from "../components/Wishlist/Wishlist";

function WishlistPage() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <Wishlist />
      </Container>
      <Footer />
    </>
  );
}

export default WishlistPage;
