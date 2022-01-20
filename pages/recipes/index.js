import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ListContainer from "../../components/listcontainer/listcontainer";
import headerImage from "../../public/assets/cooking.png";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import { getRecipes } from "../../lib/datasourceAPI";
import { Tag, FilterTag } from "../../components/listcontainer/tags";
import imgMobile from "../../public/assets/homegallery/mobileimages/recipes.jpeg";
import MobileImage from "../../components/mobileImg/mobile";

const Recipes = ({ recipes, tags }) => {
  const [activeTags, setActiveTags] = useState([]);
  const toggleActive = (text) =>
    setActiveTags((activeTags) => {
      if (activeTags.includes(text)) {
        return activeTags.filter((tag) => tag !== text);
      }
      return [...activeTags, text];
    });

  const filteredRecipes = !activeTags.length
    ? recipes
    : recipes.filter(
        (recipe) =>
          !!recipe.tags.filter((tag) => activeTags.includes(tag)).length
      );

  return (
    <>
      <NextSeo title={`${SEO.title} - Recipes`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44" />
        <MobileImage headerMobile={imgMobile} />
        <Row className="flex justify-center">
          <div className="flex pl-5 md:justify-center font-bold text-5xl leading-10 font-montserrat md:text-6xl pt-16 md:pt-20">
            Recipes
          </div>
          <p className="max-w-4xl md:text-center text-sm md:text-base font-montserrat pt-3 pb-10 pl-6">
            Find food inspiration and choose recipes you want to eat.With our
            wide recipe collection, you won’t have to eat the same boring meals
            again!
          </p>
        </Row>
        <Row className="pl-2 md:px-8 lg:px-28">
          <p
            onClick={() => setActiveTags([])}
            className={`text-gray-700 mb-1 pt-4 pb-2 sm:mb-2 sm:py-4 uppercase text-xl font-poppins cursor-pointer ${
              activeTags.length ? "hover:text-black" : ""
            }`}
          >
            {activeTags.length
              ? "Reset filters \u2002 \u2715"
              : "Filter by tag"}
          </p>
          <ul className="flex overflow-x-auto sm:flex-wrap sm:overflow-x-hidden">
            {tags.sort().map((tag) => (
              <FilterTag
                key={tag}
                text={tag}
                active={activeTags.includes(tag)}
                toggleActive={toggleActive}
              />
            ))}
          </ul>
        </Row>
        <ListContainer recipes={filteredRecipes} />
        <Footer />
      </Container>
    </>
  );
};

export default Recipes;

export async function getStaticProps() {
  const recipes = await getRecipes();

  const unionOfTags = recipes.reduce((tags, recipe) => {
    return [...tags, ...recipe.tags];
  }, []);
  const tags = Array.from(new Set(unionOfTags));

  return {
    props: {
      recipes,
      tags,
    },
  };
}
