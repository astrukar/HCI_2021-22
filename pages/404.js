import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import { NextSeo } from "next-seo";

const ErrorPage = () => {
  return (
    <>
      <NextSeo title="Error Page" />
      <Container fluid className="p-0">
        <div className="z--1 px-0">
          <Image
            src={"/assets/junkfood.png"}
            className={`resposive z--1 px-0`}
            layout="fill"
            objectFit="cover"
            priority
            alt="Background image on Not Found Page"
          />
        </div>
        <Row className="z-10 flex text-center pt-44 m-0">
          <h1 className="z-10 font-montserrat text-4xl md:text-6xl font-bold text-white">
            Error 404
          </h1>
          <p className="z-10 font-montserrat font-light text-xl md:text-4xl pt-2.5 text-white">
            Oooops! You were not supposed to see this!
          </p>
          <Link href="/">
            <a className="z-10 font-poppins text-base mt-24 text-white hover:text-white">
              Go Back To Home
            </a>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
