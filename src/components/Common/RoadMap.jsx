import "./Common.css";
import { NavLink, useLocation } from "react-router-dom";

function RoadMap() {
  const location = useLocation();

  let currentLocation = ``;

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, arr) => {
      currentLocation += `/${crumb}`;
      const isLastCrumb = index === arr.length - 1;
      const isClickable = !isLastCrumb;
      return (
        <div className="roadmap_link" key={crumb}>
          {isClickable ? (
            <NavLink to={currentLocation}>{crumb}</NavLink>
          ) : (
            <span>{crumb}</span>
          )}
          {!isLastCrumb && "/"}
        </div>
      );
    });
  return <div className="roadmap">{crumbs}</div>;
}

export default RoadMap;
