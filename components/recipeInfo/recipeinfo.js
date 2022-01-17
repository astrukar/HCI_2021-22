import { Row, Col } from "react-bootstrap";

const RecipeInfo = ({ recipe }) => {
  console.log(recipe);
  return (
    <Row className="px-0 pb-28">
      <h1 className="flex pl-5 md:justify-center font-bold leading-10 font-montserrat text-3xl md:text-5xl lg:text-6xl py-24">
        {recipe.headline}
      </h1>
      <Col sm={12} lg={6}>
        <h1 className="pl-4 lg:pl-16 font-bold text-xl md:text-3xl font-montserrat pb-4">
          Ingredients
        </h1>
        <ul className="font-montserrat font-light pl-4 lg:pl-16">
          {recipe.ingredientsContainer}
        </ul>
      </Col>
      <Col sm={12} lg={6}>
        <h1 className="pl-4 lg:pl-10 font-bold text-xl md:text-3xl font-montserrat pb-4 ">
          Instructions
        </h1>
        <div className="font-montserrat font-light pl-4 lg:pl-10 pr-10">
          {recipe.instructionsContainer}
        </div>
      </Col>
    </Row>
  );
};

export default RecipeInfo;
