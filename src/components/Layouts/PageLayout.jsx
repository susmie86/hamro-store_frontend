// PageLayout.js
import React from "react";
import Navigation from "../Navigation/Navigation";
import Container from "../Common/Container";
import RoadMap from "../Common/RoadMap";
import Footer from "../Footer/Footer";

function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default PageLayout;
