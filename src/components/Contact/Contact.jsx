import "./Contact.css";
import ContactCard from "./ContactCard";
import PhoneIcon from "../../assets/Icons/PhoneIcon";
import MailIcon from "../../assets/Icons/MailIcon";
// import Timer from "../Common/Timer";

function Contact() {
  return (
    <>
      <div className="contacts">
        <ContactCard icon={<PhoneIcon />} title="call to us">
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </ContactCard>
        <hr />
        <ContactCard icon={<MailIcon />} title="write to us">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@hamrostore.com</p>
          <p>Emails: support@hamrostore.com</p>
        </ContactCard>
      </div>
      {/* <Timer /> */}
    </>
  );
}

export default Contact;
