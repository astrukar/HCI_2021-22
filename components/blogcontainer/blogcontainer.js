import { Col, Row, Button } from "react-bootstrap";
import BlogItem from "./blogitem";

const BlogContainer = ({ blogPosts }) => {
  return (
    <Row className="flex justify-center pt-24 pl-5 md:pl-10 lg:pl-16 pr-3 md:pr-10 lg:pr-16 pb-16">
      {blogPosts.map((post) => (
        <Col xs={12} md={6} className={`mb-14 p-0 px-md-2`} key={post.sys.id}>
          <BlogItem
            url={post.featuredImage.url}
            title={post.headline}
            description={post.descriptionBox}
            slug={post.slug}
          />
        </Col>
      ))}
      <Button
        variant={`dark`}
        className=" mt-5 w-52 md:w-64 joinUsButton text-sm md:text-base font-montserrat hover:opacity-80"
      >
        See More
      </Button>
    </Row>
  );
};

export default BlogContainer;
