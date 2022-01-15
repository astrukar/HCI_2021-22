import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import { getRecipes, getSlugs } from "../../lib/datasourceAPI";

const RecipeDetailPage = ({ recipe }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Recipe Detail`} />
      <Container fluid className={"no-gutters"}>
        <Row>{recipe.headline}</Row>
        <Footer />
      </Container>
    </>
  );
};

export default RecipeDetailPage;

export async function getStaticProps({ params }) {
  const recipe = await getRecipes({ slug: params.slug });
  console.log("Recipe", recipe);
  return {
    props: {
      recipe,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getSlugs();
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
