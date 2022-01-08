import { Container } from "react-bootstrap";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SignInContainer from "../components/signincontainer/signincontainer";
import headerImage from "../public/assets/signIn.png";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";

const SignIn = () => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Login`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44" />
        <SignInContainer />
        <Footer />
      </Container>
    </>
  );
};

export default SignIn;
