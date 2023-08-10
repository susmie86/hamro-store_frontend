import "./Page.css";
import Navigation from "../components/Navigation/Navigation";
import SignInForm from "../components/Forms/SignInForm";
import SideImage from "../components/Common/SideImage";
import Container from "../components/Common/Container";
import RoadMap from "../components/Common/RoadMap";
import Footer from "../components/Footer/Footer";

function SignIn() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <section className="section form-page">
          <SideImage />
          <SignInForm />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default SignIn;
