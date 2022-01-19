import { Row } from "react-bootstrap";

const BlogDetail = ({ blogPost }) => {
  return (
    <Row>
      <h1 className="pl-5 md:px-6 lg:px-20 font-bold font-montserrat text-3xl md:text-5xl py-16">
        {blogPost.headline}
      </h1>
      <div className="md:px-6 lg:px-20 text-sm font-montserrat md:w-10/12 pb-12">
        {blogPost.subheadline}
      </div>
    </Row>
  );
};

export default BlogDetail;
