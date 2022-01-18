import React from "react";
import { Container } from "react-bootstrap";
import AboutContainer from "../components/aboutcontainer/aboutcontainer";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import headerImage from "../public/assets/aboutBackground.png";
import imgMobile from "../public/assets/homegallery/mobileimages/about.png";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";
import MobileImage from "../components/mobileImg/mobile";

const AboutPage = () => {
  return (
    <>
      <NextSeo title={`${SEO.title} - About`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44 lg:h-80" />
        <MobileImage headerMobile={imgMobile} />
        <AboutContainer />
        <Footer />
      </Container>
    </>
  );
};

export default AboutPage;
