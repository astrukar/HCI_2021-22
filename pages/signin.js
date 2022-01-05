import { Container } from "react-bootstrap";
import Footer from "../components/footer/footer";
import SignInContainer from "../components/signincontainer/signincontainer";

const SignIn = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <SignInContainer />
      <Footer />
    </Container>
  );
};

export default SignIn;
