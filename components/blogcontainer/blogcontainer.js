import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "./blogitem";

const BlogContainer = ({ blogPosts }) => {
  const [blogNum, setBlogNum] = useState(4);

  const handleClick = () => {
    setBlogNum((prevBlogNum) => prevBlogNum + 1);
  };

  return (
    <Row className="flex justify-start pt-24 pl-4 md:pl-10 lg:pl-16 pr-4 md:pr-10 lg:pr-16 pb-16">
      {blogPosts.slice(0, blogNum).map((post) => (
        <Col xs={12} md={6} className={`mb-20 p-0 px-md-2`} key={post.sys.id}>
          <BlogItem
            url={post.featuredImage.url}
            title={post.headline}
            description={post.descriptionBox}
            slug={post.slug}
          />
        </Col>
      ))}
      <div className="flex justify-center" onClick={handleClick}>
        <div className="pt-1.5 md:pt-1 pointer mt-5 w-52 md:w-64 joinUsButton text-sm text-center text-white md:text-base font-montserrat hover:opacity-80">
          See More
        </div>
      </div>
    </Row>
  );
};

export default BlogContainer;
