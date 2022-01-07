import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import NavBar from "./navbar";
import BurgerNavigation from "./burgernavigation";
import hamburgerMenu from "../../public/hamburger.svg";
const menuItems = ["Home", "Recipes", "Blog", "About"];

import { useEffect, useState } from "react";
const Header = (props) => {
  const { urlImg } = props;
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (isClicked) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [isClicked]);

  return (
    <Row className="p-0">
      <header className="px-5 pb-5 relative flex bg-hci-header md:bg-transparent sm:h-28 md:h-56 lg:h-96">
        <div className="hidden md:block z--1">
          <Image
            src={urlImg}
            layout="fill"
            objectFit="cover"
            priority
            alt="Hero image"
          />
        </div>

        <main className="sm:pt-16 max-w-6xl mx-auto flex-grow flex flex-col">
          <div className="z-10 flex justify-between md:mb-16">
            <h1 className="z-10 text-white text-4xl lg:text-7xl font-montserrat font-bold">
              HealthsGo
            </h1>
            <div className="flex items-center md:hidden">
              <BurgerNavigation
                menuItems={menuItems}
                isOpen={isClicked}
                setIsOpen={setIsClicked}
              />
              <div className="w-8" />
              <img
                onClick={() => setIsClicked(!isClicked)}
                className={`h-7 transform scale-75 cursor-pointer z-50 transition-all ease-linear duration-500 ${
                  isClicked ? "transform rotate-90" : ""
                }`}
                src={"/hamburger.svg"}
                alt="Menu"
              />
            </div>
            <NavBar menuItems={menuItems} />
          </div>
        </main>
      </header>
    </Row>
  );
};

export default Header;
