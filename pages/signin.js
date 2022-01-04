import { Container } from "react-bootstrap";
import Footer from "../components/footer/footer";

const SignIn = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <section className="sm:py-12 sm:bg-gray-50">
        <main className="max-w-4xl flex flex-col mx-auto my-8">
          <h2 className="capitalize text-3xl sm:text-4xl font-roboto-condensed font-bold text-gray-700 px-10 sm:px-0">
            Sign in
          </h2>
        </main>
      </section>
      <Footer />
    </Container>
  );
};

export default SignIn;
