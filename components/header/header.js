import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import NavBar from "./navbar";
import BurgerNavigation from "./burgernavigation";
import hamburgerMenu from "../../public/hamburger.svg";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";
const menuItems = ["Home", "Recipes", "Blog", "About"];

import { useEffect, useState } from "react";
const Header = ({ classes, urlImg }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (isClicked) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [isClicked]);
  const { data: session } = useSession();

  console.log(session);
  return (
    <Row className="pr-0">
      <header
        className={`pl-5 lg:pl-10 relative flex bg-teal-800 md:bg-transparent sm:h-28 ${classes}`}
      >
        <div className="hidden md:block z--1">
          <Image
            src={urlImg}
            layout="fill"
            objectFit="cover"
            priority
            alt="Hero image"
            className="brightness-75"
          />
        </div>

        <main className="pt-6 max-w-6xl mx-auto flex-grow flex flex-col">
          <div className="z-10 flex justify-between items-center">
            <Link href="/">
              <a className="no-underline z-10 pb-6 items-center text-white text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold hover:text-white">
                HealthsGo
              </a>
            </Link>
            <div className="pb-6 flex items-center md:hidden">
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
            {session ? (
              <>
                <button className="d-none d-lg-block no-underline mb-2.5 px-7 py-2 whitespace-nowrap w-min font-montserrat hover:font-bold">
                  <a
                    href="/myprofile"
                    className="hover:no-underline text-white"
                  >
                    MyProfile
                  </a>
                </button>
                <button
                  className="d-none d-lg-block no-underline text-white mb-2.5 py-2 whitespace-nowrap w-min text-white font-montserrat hover:font-bold"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                className="d-none d-lg-block no-underline text-white mb-2.5 py-2 whitespace-nowrap w-min text-white font-montserrat hover:font-bold"
                onClick={signIn}
              >
                Login
              </button>
            )}
          </div>
          <div
            className="absolute bottom-3 tracking-wide z-10 hidden md:block font-poppins text-base text-white font-light"
            dangerouslySetInnerHTML={{
              __html: `You are what you eat, so don't be fast, cheap, easy, or fake.`,
            }}
          />
        </main>
      </header>
    </Row>
  );
};

export default Header;
