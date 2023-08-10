import Navigation from "../components/Navigation/Navigation";
import Container from "../components/Common/Container";
import RoadMap from "../components/Common/RoadMap";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

function HomePage() {
  return (
    <>
      <Navigation />
      <Container className={`home-page`}>
        <RoadMap />
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
