import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ListContainer from "../../components/listcontainer/listcontainer";
import headerImage from "../../public/assets/cooking.png";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import { getRecipes } from "../../lib/datasourceAPI";

const Recipes = ({ recipes }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Recipes`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44" />
        <Row className="flex justify-center">
          <div className="flex pl-5 md:justify-center font-bold text-5xl leading-10 font-montserrat md:text-6xl pt-20">
            Recipes
          </div>
          <p className="max-w-4xl md:text-center text-sm md:text-base font-montserrat pt-3 pb-10 pl-5 md:px-8">
            Find food inspiration and choose recipes you want to eat.With our
            wide recipe collection, you won’t have to eat the same boring meals
            again!
          </p>
        </Row>
        <ListContainer recipes={recipes} />
        <Footer />
      </Container>
    </>
  );
};

export default Recipes;

export async function getStaticProps() {
  const recipes = await getRecipes();
  return {
    props: {
      recipes,
    },
  };
}
