import { Col, Row } from "react-bootstrap";
import ListItem from "./listitem";
const renderListItems = () =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, id) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={4}
      xl={3}
      className={`mb-3 p-0 ${id % 2 === 0 ? "pr-sm-1" : "pl-sm-1"} px-lg-1`}
      key={id}
    >
      <ListItem
        url={"https://via.placeholder.com/240x300.png"}
        title={"Healthy & Good Recipe"}
      />
    </Col>
  ));

const ListContainer = () => {
  return <Row className="pl-14 pb-14">{renderListItems()}</Row>;
};

export default ListContainer;
