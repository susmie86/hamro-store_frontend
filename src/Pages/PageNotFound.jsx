import "./Page.css";
import Button from "../components/Common/Button";
import PageLayout from "../components/Layouts/PageLayout";

function PageNotFound() {
  return (
    <PageLayout>
      <section className="section page-not-found">
        <div className="page-not-found_content">
          <h1>404 not found</h1>
          <p>Your visited page not found. You may go home page.</p>
        </div>
        <Button type={`button`} className={`primary`}>
          back to home page
        </Button>
      </section>
    </PageLayout>
  );
}

export default PageNotFound;
