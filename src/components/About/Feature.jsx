import { plusPoint } from "../../Constants/Contant";
// import FeatureCard from "./FeatureCard";
import Card from "../Common/Card";
// import { icon } from "@fortawesome/fontawesome-svg-core";

// function Feature() {
//   return (
//     <section className="card-list feature">
//       {plusPoint.map((data) => {
//         return <FeatureCard key={data.id} {...data} />;
//       })}
//     </section>
//   );
// }
function Feature() {
  return (
    <section className="section card-list feature">
      {plusPoint.map(({ id, icon, value, msg }) => {
        return (
          <Card
            key={id}
            parentClass={`feat ${id}`}
            contentClass={`feat-card__content`}
            imgClass={`card__icon`}
            cardImg={icon}
            title={`${value}k`}
            paragraph={msg}
          />
        );
      })}
    </section>
  );
}

export default Feature;
