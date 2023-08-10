import { quickLinks } from "../../Constants/Contant";
import { Link } from "react-router-dom";

function QuickLink() {
  return (
    <>
      <article className="footer-article quick-links">
        <h3 className="article-title">quick link</h3>
        <ul className="article_content">
          {quickLinks.map(({ id, title, path }) => {
            return (
              <li key={id}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </article>
      <hr />
    </>
  );
}

export default QuickLink;
