import React from "react";
import { Container } from "react-bootstrap";
import BlogContainer from "../../components/blogcontainer/blogcontainer";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import headerImage from "../../public/assets/healthylifestyle.png";

const BlogPage = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header urlImg={headerImage} classes="md:h-44" />
      <BlogContainer />
      <Footer />
    </Container>
  );
};

export default BlogPage;
