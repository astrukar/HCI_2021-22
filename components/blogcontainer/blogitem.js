import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";

const BlogItem = (props) => {
  const { url, title, description } = props;
  return (
    <Link href={"/"} passHref>
      <a className={`no-anchor-decoration hover:text-black`}>
        <Image fluid src={url} className="w-full" alt="banner" />
        <h1 className="py-2 font-montserrat text-3xl font-bold w-10/12">
          {title}
        </h1>
        <p className="text-sm font-montserrat w-9/12">{description}</p>
      </a>
    </Link>
  );
};

export default BlogItem;
