import Navigation from "../components/Navigation/Navigation";
import Team from "../components/About/Team";
import Container from "../components/Common/Container";
import Feature from "../components/About/Feature";
import Services from "../components/About/Services";
import CompanyHistory from "../components/About/CompanyHistory";
import RoadMap from "../components/Common/RoadMap";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Common/Timer";

function About() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <CompanyHistory />
        <Feature />
        <Team />
        <Services />
      </Container>
      <Timer />
      <Footer />
    </>
  );
}

export default About;
