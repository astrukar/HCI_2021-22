import { Row, Col } from "react-bootstrap";

const BannerWithImage = () => {
  return (
    <Row className="flex items-center bg-neutral-100 px-0">
      <Col sm={12} lg={6} className="sm:pl-5 lg:pl-16">
        <h1 className="font-bold text-4xl md:text-5xl leading-10 font-montserrat mt-4 pb-3">
          Learn With Us
        </h1>
        <p className="text-sm md:text-lg font-montserrat mb-5 ">
          If you’re interested in healthy eating, making a few small changes can
          get you moving in the right direction.
        </p>
      </Col>
      <Col sm={12} lg={6} className="p-0">
        <img
          src="/assets/eatinghealthy.png"
          className="w-full sm:h-screen md:h-64 lg:h-80"
          alt="Home banner Image"
        />
      </Col>
    </Row>
  );
};

export default BannerWithImage;
