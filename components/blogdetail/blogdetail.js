import { Row } from "react-bootstrap";

const BlogDetail = ({ blogPost }) => {
  return (
    <Row className="m-0">
      <h1 className="pl-1.5 lg:pl-16 font-bold font-montserrat leading-10 text-3xl md:text-5xl py-8 md:py-16">
        {blogPost.headline}
      </h1>
    </Row>
  );
};

export default BlogDetail;
