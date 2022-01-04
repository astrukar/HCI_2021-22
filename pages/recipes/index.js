import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import ListContainer from "../../components/listcontainer/listcontainer";

const Recipes = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <ListContainer />
      <Footer />
    </Container>
  );
};

export default Recipes;
