import React from "react";
import Container from "../Common/Container";
import RoadMap from "../Common/RoadMap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import UserNavigation from "../User/UserNavigation";
import "./UserPage.css";

function UserPageLayout({ component, children }) {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <section className="section user-section">
          <UserNavigation />
          {children}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default UserPageLayout;
