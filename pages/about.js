import React from "react";
import { Container } from "react-bootstrap";
import AboutContainer from "../components/aboutcontainer/aboutcontainer";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const AboutPage = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header />
      <AboutContainer />
      <Footer />
    </Container>
  );
};

export default AboutPage;
