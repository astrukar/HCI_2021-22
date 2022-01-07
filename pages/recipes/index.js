import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ListContainer from "../../components/listcontainer/listcontainer";
import headerImage from "../../public/assets/cooking.png";
const Recipes = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header urlImg={headerImage} classes="md:h-44" />
      <Row className="flex justify-center">
        <div className="flex pl-3 md:justify-center font-bold text-5xl leading-10 font-montserrat md:text-6xl pt-20">
          Recipes
        </div>
        <p className="max-w-4xl md:text-center text-sm md:text-base font-montserrat py-10 pl-4">
          Find food inspiration and choose recipes you want to eat.With our wide
          recipe collection, you won’t have to eat the same boring meals again!
        </p>
      </Row>
      <ListContainer />
      <Footer />
    </Container>
  );
};

export default Recipes;
