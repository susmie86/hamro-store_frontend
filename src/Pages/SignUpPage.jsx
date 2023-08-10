import Navigation from "../components/Navigation/Navigation";
import Container from "../components/Common/Container";
import SideImage from "../components/Common/SideImage";
import SignUpForm from "../components/Forms/SignUpForm";
import RoadMap from "../components/Common/RoadMap";
import Footer from "../components/Footer/Footer";

function SignUpPage() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <section className="section form-page">
          <SideImage />
          <SignUpForm />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default SignUpPage;
