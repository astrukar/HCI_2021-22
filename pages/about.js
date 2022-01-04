import React from "react";
import { Container } from "react-bootstrap";
import AboutContainer from "../components/aboutcontainer/aboutcontainer";
import Footer from "../components/footer/footer";

const AboutPage = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <AboutContainer />
      <Footer />
    </Container>
  );
};

export default AboutPage;
