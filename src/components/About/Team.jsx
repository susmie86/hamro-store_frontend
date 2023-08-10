import "./About.css";
import { teams } from "../../Constants/Contant";
import Card from "../Common/Card";
import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
} from "../../assets/IconsIndex";

function Team() {
  return (
    <section className="section card-list">
      {teams.map(({ id, name, image, post, socialLinks }) => {
        return (
          <Card
            key={id}
            cardImg={image}
            contentClass={`team-content`}
            imgClass={`team-img`}
            paragraph={post}
            parentClass={`team`}
            title={name}
          >
            <ul className="team-links">
              <li>
                <a href={socialLinks.facebook}>
                  <img
                    src={facebookIcon}
                    alt="icon-twitter"
                    className="social-icon"
                  />
                </a>
              </li>

              <li>
                <a href={socialLinks.instagram}>
                  <img
                    src={instagramIcon}
                    alt="icon-instagram"
                    className="social-icon"
                  />
                </a>
              </li>

              <li>
                <a href={socialLinks.linkedin}>
                  <img
                    src={linkedInIcon}
                    alt="icon-LinkedIn"
                    className="social-icon"
                  />
                </a>
              </li>
            </ul>
          </Card>
        );
        // return <TeamCard key={team.id} {...team} />;
      })}
    </section>
  );
}

export default Team;
