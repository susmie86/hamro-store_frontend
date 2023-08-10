import "./Common.css";

function Card({
  cardImg,
  children,
  contentClass,
  imgClass,
  paragraph,
  parentClass,
  title,
}) {
  return (
    <div className={`card ${parentClass}`}>
      <div className={`card__img ${imgClass}`}>{cardImg}</div>
      <div className={`card__content ${contentClass}`}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {children}
      </div>
    </div>
  );
}

export default Card;
