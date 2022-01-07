import { Row, Col } from "react-bootstrap";
import Image from "next/image";
const BannerWithImage = () => {
  return (
    <Row className="bg-neutral-100 px-0">
      <Col className="sm:pl-5 lg:pl-16">
        <h1 className="font-bold text-4xl md:text-5xl leading-10 font-montserrat mt-4 pt-12 pb-4 ">
          Learn With Us
        </h1>
        <p className="text-sm md:text-lg font-montserrat pb-12 mb-5 ">
          If you’re interested in healthy eating, making a few small changes can
          get you moving in the right direction.
        </p>
      </Col>
    </Row>
  );
};

export default BannerWithImage;
