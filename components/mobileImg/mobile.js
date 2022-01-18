import Image from "next/image";
import { Row } from "react-bootstrap";

const MobileImage = ({ headerMobile }) => {
  return (
    <Row className="block md:hidden">
      <Image
        src={headerMobile}
        layout="responsive"
        objectFit="cover"
        priority
        alt="Hero image"
      />
    </Row>
  );
};

export default MobileImage;
