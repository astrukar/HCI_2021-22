import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import Header from "../../components/header/header";
import BlogDetail from "../../components/blogdetail/blogdetail";
import { getBlogBySlug, getBlogSlugs } from "../../lib/datasourceAPI";
import { P } from "../../components/blogdetail/text";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Ul, Li } from "../../components/blogdetail/list";
import { Pre, Code } from "../../components/blogdetail/code";
import { Quote } from "../../components/blogdetail/quote";
import { H2 } from "../../components/blogdetail/heading";

const components = {
  p: P,
  ul: Ul,
  li: Li,
  pre: Pre,
  code: Code,
  inlineCode: Code,
  blockquote: Quote,
};
const BlogDetailPage = ({ blog }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Blog Detail`} />
      <Container fluid className={"no-gutters p-0"}>
        <Header urlImg={blog.desktopImage.url} classes="md:h-44 lg:h-96" />
        <BlogDetail blogPost={blog} />
        <MDXRemote {...blog.mdxSource} components={components} />
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
