import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import Header from "../../components/header/header";
import headerImage from "../../public/assets/aboutBackground.png";
import BlogDetail from "../../components/blogdetail/blogdetail";

const BlogDetailPage = () => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Blog Detail`} />
      <Container fluid className={"no-gutters p-0"}>
        <Header urlImg={headerImage} classes="md:h-44 lg:h-80" />
        <BlogDetail />
        <Footer />
      </Container>
    </>
  );
};

export default BlogDetailPage;
