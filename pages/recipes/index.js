import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ListContainer from "../../components/listcontainer/listcontainer";
import headerImage from "../../public/assets/cooking.png";
const Recipes = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Header urlImg={headerImage} classes="md:h-44" />
      <ListContainer />
      <Footer />
    </Container>
  );
};

export default Recipes;
