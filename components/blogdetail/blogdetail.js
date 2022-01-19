import { Row } from "react-bootstrap";

const BlogDetail = ({ blogPost }) => {
  return (
    <Row>
      <h1 className="pl-5 md:px-6 lg:px-20 font-bold font-montserrat text-3xl md:text-5xl py-8 md:py-16">
        {blogPost.headline}
      </h1>
      <div>{blogPost.subheadline}</div>
    </Row>
  );
};

export default BlogDetail;
