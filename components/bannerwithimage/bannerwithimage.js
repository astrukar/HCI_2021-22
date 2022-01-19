import { Row, Col } from "react-bootstrap";
import Image from "next/image";

const BannerWithImage = () => {
  return (
    <Row className="flex items-center bg-neutral-100 px-0">
      <Col sm={12} lg={6} className="pl-5 lg:pl-16">
        <h1 className="font-bold text-4xl lg:text-5xl leading-10 font-montserrat mt-5 md:mt-2 pb-3">
          Learn With Us
        </h1>
        <p className="text-sm lg:text-lg font-montserrat mb-5 sm:mb-2">
          If you’re interested in healthy eating, making a few small changes can
          get you moving in the right direction.
        </p>
      </Col>
      <Col sm={12} lg={6} className="p-0">
        <Image
          src={`/assets/eatinghealthy.png`}
          layout="responsive"
          width={650}
          height={300}
          objectFit="cover"
          priority
          alt="Hero image"
        />
      </Col>
    </Row>
  );
};

export default BannerWithImage;
