import { Row, Col } from "react-bootstrap";

const SearchInput = () => {
  return (
    <Row className="bg-searchColor pl-4 md:pl-16 py-10 font-montserrat">
      <Col sm={12}>
        <input
          id="search-input"
          type="text"
          className="searchInput"
          placeholder={"Search Topics..."}
        />
      </Col>
    </Row>
  );
};

export default SearchInput;
