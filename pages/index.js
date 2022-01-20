import { Container, Row, Col } from "react-bootstrap";
import HomeBanner from "../components/homebanner/homebanner";
import BannerWithImage from "../components/bannerWithImage/bannerWithImage";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Header from "../components/header/header";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";
import Link from "next/link";
import MobileImage from "../components/mobileImg/mobile";
import imgMobile from "../public/assets/homegallery/mobileimages/home.png";
import { articles, recipes } from "../data/homedata";

const renderRecipes = (props) => {
  return props.map((i, id) => {
    return (
      <Link href={i.slug} key={id}>
        <Col className="pb-16 mb-2 pr-4 lg:pr-5 pointer hover:opacity-80">
          <Image
            src={i.imgUrl}
            width={245}
            height={321}
            layout="fixed"
            alt="Hero image"
          />
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
        <Header urlImg={imgMobile} classes="md:h-44 lg:h-96" />
        <MobileImage headerMobile={imgMobile} />
        <HomeBanner />
        <Container fluid>
          <Row className="flex justify-center">
            <h1 className="font-montserrat text-3xl lg:text-4xl font-semibold flex justify-center py-16">
              New Recipes
            </h1>
          </Row>
          <div className="wrapper lg:pl-10 lg:pr-6">
            {renderRecipes(recipes)}
          </div>
        </Container>
        <BannerWithImage />
        <Container fluid>
          <Row className="flex justify-center">
            <h1 className="font-montserrat text-3xl lg:text-4xl font-semibold flex justify-center py-16">
              All Diet & Nutrition Articles
            </h1>
          </Row>

          <div className="wrapper lg:pl-10 lg:pr-6">
            {renderRecipes(articles)}
          </div>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
