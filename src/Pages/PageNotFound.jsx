import "./Page.css";
import Button from "../components/Common/Button";
import PageLayout from "../components/Layouts/PageLayout";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <section className="section page-not-found">
        <div className="page-not-found_content">
          <h1>404 not found</h1>
          <p>Your visited page not found. You may go home page.</p>
        </div>
        <Button
          onClick={() => {
            navigate("/");
          }}
          type={`button`}
          classname={`primary`}
        >
          back to home page
        </Button>
      </section>
    </PageLayout>
  );
}

export default PageNotFound;
