import { Col, Row } from "react-bootstrap";
import BlogItem from "./blogitem";

const BlogContainer = ({ blogPosts }) => {
  console.log("Blog Postovi", blogPosts);
  return (
    <Row className="pt-24 pl-5 md:pl-10 lg:pl-16 pr-3 md:pr-10 lg:pr-16 pb-16">
      {blogPosts.map((post) => (
        <Col xs={12} md={6} className={`mb-14 p-0 px-md-2`} key={post.sys.id}>
          <BlogItem
            url={post.featuredImage.url}
            title={post.headline}
            description={post.descriptionBox}
            ž
            slug={post.slug}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BlogContainer;
