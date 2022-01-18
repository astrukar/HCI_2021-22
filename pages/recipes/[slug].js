import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import { getRecipeBySlug, getRecipeSlugs } from "../../lib/datasourceAPI";
import RecipeInfo from "../../components/recipeInfo/recipeinfo";
import Header from "../../components/header/header";
import headerImage from "../../public/assets/aboutBackground.png";
import NutritionInfo from "../../components/recipeInfo/nutritioninfo";

const RecipeDetailPage = ({ recipe }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Recipe Detail`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={recipe.desktopImage.url} classes="md:h-44 lg:h-96" />
        <RecipeInfo recipe={recipe} />
        <Footer />
      </Container>
    </>
  );
};

export default RecipeDetailPage;

export async function getStaticProps({ params }) {
  const recipe = await getRecipeBySlug(params.slug);
  return {
    props: {
      recipe,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getRecipeSlugs();
  const paths = slugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
