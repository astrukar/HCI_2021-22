import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";

const legalLinks = [
  { label: "Contact", url: "/contact" },
  { label: "FAQ", url: "/faq" },
  { label: "About", url: "/about-us" },
  { label: "Location", url: "/location" },
  { label: "Privacy", url: "/privacy" },
];

const renderLegalLinks = () =>
  legalLinks.map((link) => (
    <Col className="flex justify-center" key={link.url}>
      <div className="mb-2">
        <Link href={link.url}>
          <a className="no-underline text-white hover:text-white">
            {link.label}
          </a>
        </Link>
      </div>
    </Col>
  ));

const Footer = () => {
  return (
    <Row className="bg-black text-white font-montserrat flex justify-center">
      <Col sm={12} md={8}>
        <Row className="flex justify-center pt-4 text-xs sm:text-sm md:text-lg">
          {renderLegalLinks()}
        </Row>

        <div className="flex justify-center italic text-xs md:text-sm pt-12">
          Follow Us!
        </div>
        <div className={`mt-4 mb-2 flex justify-center`}>
          <a
            href={`https://www.facebook.com/`}
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="pr-11">
              <img
                src="/assets/icons/facebook.svg"
                className="w-9 h-9"
                alt="facebook"
              />
            </span>
          </a>
          <a
            href={`https://www.instagram.com/`}
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="pr-11">
              <img
                src="/assets/icons/instagram.svg"
                className="w-9 h-9"
                alt="instagram"
              />
            </span>
          </a>
          <a
            href={`https://www.pinterest.com//`}
            target={"_blank"}
            rel="noreferrer"
          >
            <span>
              <img
                src="/assets/icons/pinterest.svg"
                className="w-9 h-9"
                alt="instagram"
              />
            </span>
          </a>
        </div>

        <div className={`flex justify-center text-xs font-extralight pb-1`}>
          ©2021 Healthsgo.
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
