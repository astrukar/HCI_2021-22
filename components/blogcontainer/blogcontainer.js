import { Col, Row } from "react-bootstrap";
import BlogItem from "./blogitem";
const renderBlogItems = () =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, id) => (
    <Col
      xs={12}
      md={6}
      className={`mb-14 p-0 ${id % 2 === 0 ? "pr-sm-2" : "pl-sm-2"} px-lg-2`}
      key={id}
    >
      <BlogItem
        url={"https://via.placeholder.com/522x389.png"}
        title={"What Is A Healthy, Balanced Diet For Diabetes?"}
        description={
          "Athletes will have different nutritional needs compared with the general public. They may require more calories and macronutrients to maintain strength to compete at their optimum level."
        }
      />
    </Col>
  ));

const BlogContainer = () => {
  return (
    <Row className="pt-20 pl-3 md:pl-10 lg:pl-16 pr-3 md:pr-10 lg:pr-16pb-16">
      {renderBlogItems()}
    </Row>
  );
};

export default BlogContainer;
