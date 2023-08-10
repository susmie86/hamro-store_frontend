import { Link } from "react-router-dom";
import { footerAccountLinks } from "../../Constants/Contant";

function AccountNav() {
  return (
    <>
      <article className="footer-article my-account">
        <h3 className="article-title">account</h3>
        <ul className="article_content">
          {footerAccountLinks.map(({ id, title, path }) => {
            return <li key={id}><Link to={path}>{title}</Link></li>;
          })}
        </ul>
      </article>
      <hr />
    </>
  );
}

export default AccountNav;
