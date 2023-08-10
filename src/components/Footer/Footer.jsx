import "./Footer.css";
import Subscribe from "./Subscribe";
import AccountNav from "./AccountNav";
import Support from "./Support";
import QuickLink from "./QuickLink";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-contents">
        <Subscribe />
        <Support />
        <AccountNav />
        <QuickLink />
      </div>
      <p className="copyright">
      &#9400; copyright hamro store 2023. all right reserved.
      </p>
    </section>
  );
}

export default Footer;
