import React from "react";
import { Container } from "react-bootstrap";
import AboutContainer from "../components/aboutcontainer/aboutcontainer";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import headerImage from "../public/assets/aboutBackground.png";
import { NextSeo } from "next-seo";
const AboutPage = () => {
  return (
    <>
      <NextSeo title="About Us" />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44 lg:h-80" />
        <AboutContainer />
        <Footer />
      </Container>
    </>
  );
};

export default AboutPage;
