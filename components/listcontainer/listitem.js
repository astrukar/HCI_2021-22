import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";

const ListItem = (props) => {
  const { url, title } = props;
  return (
    <Link href={"/"} passHref>
      <a className={`no-anchor-decoration hover:text-black`}>
        <Image fluid src={url} alt="banner" />
        <p className={`font-montserrat text-lg font-bold`}>{title}</p>
      </a>
    </Link>
  );
};

export default ListItem;
