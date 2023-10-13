import React from "react";
import Navigation from "../components/Navigation/Navigation";
import RoadMap from "../components/Common/RoadMap";
import User from "../components/User/User";
import Footer from "../components/Footer/Footer";
import Container from "../components/Common/Container";
import PageLayout from "../components/Layouts/PageLayout";

function UserPage() {
  return (
    <PageLayout>
      <section className="section user-section">
        <User />
      </section>
    </PageLayout>
  );
}

export default UserPage;
