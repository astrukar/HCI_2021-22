import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";

const BlogDetailPage = () => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Blog Detail`} />
      <Container fluid className={"no-gutters"}>
        <Footer />
      </Container>
    </>
  );
};

export default BlogDetailPage;
