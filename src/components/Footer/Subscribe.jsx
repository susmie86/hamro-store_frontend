import SendIcon from "../../assets/Icons/SendIcon";

function Subscribe() {
  return (
    <>
      <article className="footer-article subscribe">
        <h2 className="footer_logo">
          hamro <span>store</span>
        </h2>
        <h3 className="article-title">subscribe</h3>
        <div className="subscribe-mail">
          <label htmlFor="article_content">Get 10% off your first order</label>
          <div className="subscribe_inputfield">
            <input
              type="text"
              name="mail"
              id="subscribe"
              placeholder="Enter your email"
            />
            <span>
              <SendIcon />
            </span>
          </div>
        </div>
      </article>
      <hr />
    </>
  );
}

export default Subscribe;
