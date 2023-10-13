import SideImage from "../components/Common/SideImage";
import SignUpForm from "../components/Forms/SignUpForm";
import PageLayout from "../components/Layouts/PageLayout";

function SignUpPage() {
  return (
    <PageLayout>
      <section className="section form-page">
        <SideImage />
        <SignUpForm />
      </section>
    </PageLayout>
  );
}

export default SignUpPage;
