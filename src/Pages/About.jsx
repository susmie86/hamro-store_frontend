// About.jsx
import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import Team from "../components/About/Team";
import Feature from "../components/About/Feature";
import Services from "../components/About/Services";
import CompanyHistory from "../components/About/CompanyHistory";
import Timer from "../components/Common/Timer";

function About() {
  return (
    <PageLayout>
      <CompanyHistory />
      <Feature />
      <Team />
      <Services />
      <Timer />
    </PageLayout>
  );
}

export default About;
