import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ListItem from "./listitem";

const ListContainer = ({ recipes }) => {
  const [postNum, setPostNum] = useState(8);

  const handleClick = () => {
    setPostNum((prevPostNum) => prevPostNum + 1);
  };

  return (
    <Row className="flex justify-start pl-2 pr-2 md:px-8 lg:px-28 pt-16 md:pt-14 lg:pt-14">
      {recipes.slice(0, postNum).map((recipe) => (
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
      <div
        className="flex justify-center md:px-8 lg:px-28 pb-16 md:pb-14 lg:pb-20"
        onClick={handleClick}
      >
        <div className="pt-1.5 md:pt-1 pointer mt-5 w-52 md:w-64 joinUsButton text-sm text-center text-white md:text-base font-montserrat hover:opacity-80">
          See More
        </div>
      </div>
    </Row>
  );
};

export default ListContainer;
