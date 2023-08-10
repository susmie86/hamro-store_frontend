import { services } from "../../Constants/Contant";
import Card from "../Common/Card";

function Services() {
  return (
    <section className="section card-list services">
      {services.map(({ id, icon, title, message }) => {
        return (
          <Card
            cardImg={icon}
            contentClass={`service-card__content`}
            imgClass={`card__icon`}
            key={id}
            paragraph={message}
            parentClass={`service`}
            title={title}
          />
        );
      })}
    </section>
  );
}

export default Services;
