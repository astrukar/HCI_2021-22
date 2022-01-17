import { Col, Row, Button } from "react-bootstrap";
import ListItem from "./listitem";

const ListContainer = ({ recipes }) => {
  return (
    <Row className="flex justify-center md:px-8 lg:px-28 py-16 md:py-14 lg:py-20">
      {recipes.map((recipe) => (
        <Col
          xs={6}
          md={4}
          lg={3}
          xl={3}
          className={`mb-16 p-0 px-2 px-lg-3`}
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
      <Button
        variant={`dark`}
        className=" mt-5 w-52 md:w-64 joinUsButton text-sm md:text-base font-montserrat hover:opacity-80"
      >
        See More
      </Button>
    </Row>
  );
};

export default ListContainer;
