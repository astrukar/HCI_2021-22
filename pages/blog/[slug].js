import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
const BlogDetailPage = () => {
  return (
    <>
      <NextSeo title="Blog Detail" />
      <Container fluid className={"no-gutters"}>
        <Footer />
      </Container>
    </>
  );
};

export default BlogDetailPage;
