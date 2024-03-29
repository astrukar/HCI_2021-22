import { Col, Row } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <Row className="px-0">
      <Col sm={12} className="pl-5 py-6 md:py-12 bg-neutral-100">
        <h1 className="flex justify-center font-bold text-4xl md:text-5xl leading-10 font-montserrat pt-3 pb-2">
          How To Improve Your Health
        </h1>
        <h2 className="flex justify-center md:text-center text-sm md:text-lg font-montserrat pt-3 pb-3">
          Good nutrition is one of the keys to a healthy life. Understand how to
          live in a healthy, active way.
        </h2>
      </Col>
    </Row>
  );
};

export default HomeBanner;
