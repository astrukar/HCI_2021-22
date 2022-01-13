import { Col, Row } from "react-bootstrap";
import ListItem from "./listitem";

const ListContainer = ({ recipes }) => {
  console.log(recipes);
  return (
    <Row className="sm:px-4 md:px-8 lg:px-16 py-14">
      {recipes.map((recipe, index) => (
        <Col
          xs={6}
          md={4}
          lg={4}
          xl={3}
          className={`mb-5 p-0 ${
            index % 2 === 0 ? "pr-2 pr-md-4" : "pl-2 pl-md-4"
          } px-2 px-md-3`}
          key={recipe}
        >
          <ListItem
            url={recipe.featuredImage.url}
            title={recipe.headline}
            description={recipe.featuredImage.description}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ListContainer;
