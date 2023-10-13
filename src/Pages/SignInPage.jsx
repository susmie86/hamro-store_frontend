import "./Page.css";
import SignInForm from "../components/Forms/SignInForm";
import SideImage from "../components/Common/SideImage";
import PageLayout from "../components/Layouts/PageLayout";

function SignIn() {
  return (
    <PageLayout>
      <section className="section form-page">
        <SideImage />
        <SignInForm />
      </section>
    </PageLayout>
  );
}

export default SignIn;
