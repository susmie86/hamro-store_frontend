import "./Page.css"
import Navigation from "../components/Navigation/Navigation";
import Container from "../components/Common/Container";
import RoadMap from "../components/Common/RoadMap";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import ContactForm from "../components/Forms/ContactForm";

function ContactPage() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <section className="section contact-page">
          <Contact />
          <ContactForm />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;
