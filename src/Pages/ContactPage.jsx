import "./Page.css";
import Contact from "../components/Contact/Contact";
import ContactForm from "../components/Forms/ContactForm";
import PageLayout from "../components/Layouts/PageLayout";

function ContactPage() {
  return (
    <PageLayout>
      <section className="section contact-page">
        <Contact />
        <ContactForm />
      </section>
    </PageLayout>
  );
}

export default ContactPage;
