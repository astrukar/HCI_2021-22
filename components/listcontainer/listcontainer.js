import { Col, Row } from "react-bootstrap";
import ListItem from "./listitem";

const ListContainer = ({ recipes }) => {
  return (
    <Row className="md:px-8 lg:px-20 py-8 md:py-14 lg:py-20">
      {recipes.map((recipe) => (
        <Col
          xs={6}
          md={4}
          lg={3}
          xl={3}
          className={`mb-5 p-0 px-2 px-lg-3`}
          key={recipe.sys.id}
        >
          <ListItem
            url={recipe.featuredImage.url}
            title={recipe.headline}
            description={recipe.featuredImage.description}
            slug={recipe.slug}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ListContainer;
