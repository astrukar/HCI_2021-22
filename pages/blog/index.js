import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogContainer from "../../components/blogcontainer/blogcontainer";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import headerImage from "../../public/assets/healthylifestyle.png";

const BlogPage = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header urlImg={headerImage} classes="md:h-44" />
      <Row>
        <div className="flex pl-3 md:justify-center font-bold text-4xl leading-10 font-montserrat md:text-5xl py-20">
          Nutrition Research Topics
        </div>
      </Row>
      <BlogContainer />
      <Footer />
    </Container>
  );
};

export default BlogPage;
