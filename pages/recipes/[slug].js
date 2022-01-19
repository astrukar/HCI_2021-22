import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import { getRecipeBySlug, getRecipeSlugs } from "../../lib/datasourceAPI";
import RecipeInfo from "../../components/recipeInfo/recipeinfo";
import Header from "../../components/header/header";
import MobileImage from "../../components/mobileImg/mobile";
import { Precipe } from "../../components/blogdetail/text";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Ol, Li } from "../../components/blogdetail/list";
import { H2Recipe } from "../../components/blogdetail/heading";
const components = {
  p: Precipe,
  ol: Ol,
  li: Li,
  h2: H2Recipe,
};

const RecipeDetailPage = ({ recipe }) => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Recipe Detail`} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={recipe.desktopImage.url} classes="md:h-44 lg:h-96" />
        <MobileImage headerMobile={recipe.mobileImage.url} />
        <RecipeInfo recipe={recipe} />
        <MDXRemote {...recipe.mdxSource} components={components} />
        <Footer />
      </Container>
    </>
  );
};

export default RecipeDetailPage;

export async function getStaticProps({ params }) {
  const recipe = await getRecipeBySlug(params.slug);
  recipe.mdxSource = await serialize(recipe.recipeInfo);
  delete recipe.recipeInfo;
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
