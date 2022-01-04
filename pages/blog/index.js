import React from "react";
import { Container } from "react-bootstrap";
import BlogContainer from "../../components/blogcontainer/blogcontainer";
import Footer from "../../components/footer/footer";

const BlogPage = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <BlogContainer />
      <Footer />
    </Container>
  );
};

export default BlogPage;
