import "./Page.css"
import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Common/Button";
import Container from "../components/Common/Container";
import RoadMap from "../components/Common/RoadMap";

function PageNotFound() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <section className="section page-not-found">
          <div className="page-not-found_content">
            <h1>404 not found</h1>
            <p>Your visited page not found. You may go home page.</p>
          </div>
          <Button type={`button`} className={`primary`}>
            back to home page
          </Button>
        </section>
      </Container>
    </>
  );
}

export default PageNotFound;
