import { Row, Col } from "react-bootstrap";

const RecipeInfo = ({ recipe }) => {
  return (
    <Row className="px-0 flex justify-center">
      <h1 className="flex pl-5 lg:pl-16 md:justify-center font-bold leading-10 font-montserrat text-3xl md:text-5xl lg:text-6xl py-12 md:py-16 lg:py-24">
        {recipe.headline}
      </h1>
      <Col sm={12} lg={6}>
        {recipe.RecipeInfo}
      </Col>
    </Row>
  );
};

export default RecipeInfo;
