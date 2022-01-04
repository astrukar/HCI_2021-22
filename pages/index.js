import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer/footer";
import Image from "next/image";

const Home = () => {
  return (
    <Container fluid className={"no-gutters"}>
      <Footer />
    </Container>
  );
};

export default Home;
