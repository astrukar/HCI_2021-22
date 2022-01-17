import { Container, Row, Col } from "react-bootstrap";
import HomeBanner from "../components/homebanner/homebanner";
import BannerWithImage from "../components/bannerWithImage/bannerWithImage";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Header from "../components/header/header";
import headerImage from "../public/assets/healthyFood.png";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";
import Link from "next/link";
const recipes = [
  {
    title: "Prosciutto Baked Bean Breakfast Frittata",
    imgUrl: "/assets/homegallery/recipe1.png",
    slug: "bean-breakfast-frittata",
  },
  {
    title: "Thai Penaut Chicken Lettuce Wraps",
    imgUrl: "/assets/homegallery/recipe2.png",
    slug: "chicken-lettuce-wraps",
  },
  {
    title: "Blueberry Oat Crisp",
    imgUrl: "/assets/homegallery/recipe3.png",
    slug: "blueberry-oat-crisp",
  },
  {
    title: "Berry Banana Smoothie Bowl",
    imgUrl: "assets/homegallery/recipe4.png",
    slug: "banana-smoothie-bowl",
  },
];

const articles = [
  {
    title: "Can Coffee or Tea Help Prevent Dementia and Stroke?",
    imgUrl: "/assets/homegallery/article1.png",
    slug: "/",
  },
  {
    title: "The Best Hydrating Foods for Diabetes",
    imgUrl: "/assets/homegallery/article2.png",
    slug: "/",
  },
  {
    title: "Using Nutritional Supplements To Improve Sporting Performance",
    imgUrl: "/assets/homegallery/article3.png",
    slug: "/",
  },
  {
    title: "How What You Eat Affects Your Sleep",
    imgUrl: "/assets/homegallery/article4.png",
    slug: "/",
  },
];
const renderRecipes = () => {
  return recipes.map((i, id) => {
    return (
      <Link href={`/recipes/${i.slug}`}>
        <Col
          className="pb-16 mb-2 pr-2 lg:pr-5 pointer hover:opacity-80"
          key={id}
        >
          <img src={i.imgUrl} alt={"Text Img Alt"} />
          <div className={`pt-2 font-montserrat text-sm lg:text-lg font-bold`}>
            {i.title}
          </div>
        </Col>
      </Link>
    );
  });
};
const renderArticles = () => {
  return articles.map((i, id) => {
    return (
      <Link href={i.slug}>
        <Col
          className="pb-16 mb-2 pr-2 lg:pr-5 pointer hover:opacity-80"
          key={id}
        >
          <img src={i.imgUrl} alt={"Text Img Alt"} />
          <div className={`pt-2 font-montserrat text-sm lg:text-lg font-bold`}>
            {i.title}
          </div>
        </Col>
      </Link>
    );
  });
};
const Home = () => {
  return (
    <>
      <NextSeo title={SEO.title} />
      <Container fluid className={"no-gutters"}>
        <Header urlImg={headerImage} classes="md:h-44 lg:h-80" />
        <HomeBanner />
        <Container fluid>
          <Row className="flex justify-center">
            <h1 className="font-montserrat text-3xl lg:text-4xl font-semibold flex justify-center py-16">
              New Recipes
            </h1>
          </Row>

          <div className="flex lg:pl-10 lg:pr-6">{renderRecipes()}</div>
        </Container>
        <BannerWithImage />
        <Container fluid>
          <Row className="flex justify-center">
            <h1 className="font-montserrat text-3xl lg:text-4xl font-semibold flex justify-center py-16">
              All Diet & Nutrition Articles
            </h1>
          </Row>

          <div className="flex lg:pl-10 lg:pr-6">{renderArticles()}</div>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
