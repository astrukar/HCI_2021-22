import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogContainer from "../../components/blogcontainer/blogcontainer";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SearchInput from "../../components/searchinput/searchinput";
import headerImage from "../../public/assets/healthylifestyle.png";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import { getBlogPosts } from "../../lib/datasourceAPI";
import imgMobile from "../../public/assets/homegallery/mobileimages/blog.png";
import MobileImage from "../../components/mobileImg/mobile";

const BlogPage = ({ posts }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Blog`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44" />
        <MobileImage headerMobile={imgMobile} />
        <Row>
          <div className="flex pl-5 md:justify-center font-bold text-5xl leading-10 font-montserrat md:text-6xl py-20">
            Nutrition Research Topics
          </div>
        </Row>
        <SearchInput />
        <BlogContainer blogPosts={posts} />
        <Footer />
      </Container>
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {
      posts,
    },
  };
}
