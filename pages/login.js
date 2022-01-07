import { Container } from "react-bootstrap";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SignInContainer from "../components/signincontainer/signincontainer";
import backgroundImg from "../public/assets/signIn.png";
const SignIn = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header urlImg={backgroundImg} />
      <SignInContainer />
      <Footer />
    </Container>
  );
};

export default SignIn;