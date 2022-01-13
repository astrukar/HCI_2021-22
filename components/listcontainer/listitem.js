import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";

const ListItem = (props) => {
  const { url, title, description } = props;
  return (
    <Link href={"/"} passHref>
      <a className="no-anchor-decoration hover:text-black">
        <Image
          fluid
          src={url}
          alt={description}
          className="w-100 hover:opacity-80"
        />
        <p className="font-montserrat mt-1 text-sm md:text-lg font-semibold hover:opacity-80 w-10/12">
          {title}
        </p>
      </a>
    </Link>
  );
};

export default ListItem;
