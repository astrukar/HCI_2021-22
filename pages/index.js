import { Container, Row, Col } from "react-bootstrap";
import HomeBanner from "../components/homebanner/homebanner";
import BannerWithImage from "../components/bannerWithImage/bannerWithImage";
import Footer from "../components/footer/footer";
import Image from "next/image";
const imageGallery = [
  {
    title: "Prosciutto Baked Bean Breakfast Frittata",
    url: "/assets/image1.jpeg",
  },
  { title: "Thai Penaut Chicken Lettuce Wraps", url: "/assets/image2.jpeg" },
  { title: "Blueberry Oat Crisp", url: "/assets/image3.jpeg" },
  { title: "Berry Banana Smoothie Bowl", url: "/assets/image4.jpeg" },
];
const renderImageGallery = () => {
  return imageGallery.map((i, id) => {
    return (
      <Col className="pb-16 mb-2 pr-2 lg:pr-5" key={id}>
        <img src={i.url} className="img" alt={"Text Img Alt"} />
        <div className={`pt-2 font-montserrat text-lg font-bold`}>
          {i.title}
        </div>
      </Col>
    );
  });
};

const Home = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <HomeBanner />
      <Container fluid>
        <Row className="flex justify-center">
          <h1 className="font-montserrat text-4xl font-semibold flex justify-center py-16">
            New Recipes
          </h1>
        </Row>

        <div className="flex justify-center pl-10 pr-6">
          {renderImageGallery()}
        </div>
      </Container>
      <BannerWithImage />
      <Container fluid>
        <Row className="flex justify-center">
          <h1 className="font-montserrat text-4xl font-semibold flex justify-center py-16">
            All Diet & Nutrition Articles
          </h1>
        </Row>

        <div className="flex justify-center pl-10 pr-6">
          {renderImageGallery()}
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
