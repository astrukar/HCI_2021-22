import Image from "next/image";
import { Row } from "react-bootstrap";

const MobileImage = ({ headerMobile }) => {
  return (
    <div className="flex block md:hidden">
      <Image
        src={headerMobile}
        layout="responsive"
        width={428}
        height={215}
        objectFit="cover"
        priority
        alt="Hero image"
      />
    </div>
  );
};

export default MobileImage;
