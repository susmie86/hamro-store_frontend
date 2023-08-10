import { portrait_of_girls } from "../../assets/imageIndex";

function CompanyHistory() {
  return (
    <>
      <section className="section about">
        <article className="about__history">
          <h1>our history</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </article>
        <div className="about__img">
          <img src={portrait_of_girls} alt="portrait of two girls" />
        </div>
      </section>
    </>
  );
}

export default CompanyHistory;
