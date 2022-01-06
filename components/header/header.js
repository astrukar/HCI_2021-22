import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

const Header = (props) => {
  const { urlImg } = props;
  return (
    <Row className="p-0">
      <header className="h-80 relative flex">
        <Image
          src={urlImg}
          className="z-0 w-100"
          layout="fill"
          alt="Background image"
        />
        <main className="mt-8 px-28">
          <div className="z-10 flex justify-between">
            <h1 className="z-10 text-white text-7xl font-montserrat font-bold">
              HealthsGo
            </h1>
            <nav className="z-10 mt-9 pl-20">
              <ul className="inline-flex list-none font-medium text-white font-montserrat text-lg">
                <li className="px-4">Home</li>
                <li className="px-4">Recipes</li>
                <li className="px-4">Blog</li>
                <li className="px-4">About</li>
                <li className="px-4">Sign In</li>
              </ul>
            </nav>
          </div>
        </main>
      </header>
    </Row>
  );
};

export default Header;
