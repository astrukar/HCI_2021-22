import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import Header from "../../components/header/header";
import BlogDetail from "../../components/blogdetail/blogdetail";
import { getBlogBySlug, getBlogSlugs } from "../../lib/datasourceAPI";
import { Pblog } from "../../components/blogdetail/text";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Ol, Li } from "../../components/blogdetail/list";
import { Pre, Code } from "../../components/blogdetail/code";
import { H2 } from "../../components/blogdetail/heading";
import MobileImage from "../../components/mobileImg/mobile";
const components = {
  p: Pblog,
  h2: H2,
  ol: Ol,
  li: Li,
  pre: Pre,
  code: Code,
  inlineCode: Code,
};
const BlogDetailPage = ({ blog }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Blog Detail`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={blog.desktopImage.url} classes="md:h-44 lg:h-96" />
        <MobileImage headerMobile={blog.mobileImage.url} />
        <BlogDetail blogPost={blog} />
        <Row>
          <MDXRemote {...blog.mdxSource} components={components} />
        </Row>

        <Footer />
      </Container>
    </>
  );
};

export default BlogDetailPage;

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  blog.mdxSource = await serialize(blog.subheadline);
  delete blog.subheadline;
  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getBlogSlugs();
  const paths = slugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
