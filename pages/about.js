import React from "react";
import { Container } from "react-bootstrap";
import AboutContainer from "../components/aboutcontainer/aboutcontainer";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import backImg from "../public/assets/aboutBackground.png";
const AboutPage = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header urlImg={backImg} />
      <AboutContainer />
      <Footer />
    </Container>
  );
};

export default AboutPage;
