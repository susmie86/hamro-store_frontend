function ContactCard({ icon, title, children }) {
  return (
    <div className="contact-card">
      <div className="contact-card__title">
        {icon}<h3>{title}</h3>
      </div>
      <div className="contact-card__content">{children}</div>
    </div>
  );
}

export default ContactCard;
