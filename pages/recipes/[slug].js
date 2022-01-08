import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import { NextSeo } from "next-seo";
const RecipeDetailPage = () => {
  return (
    <>
      <NextSeo title="Recipe Detail" />
      <Container fluid className={"no-gutters"}>
        <Footer />
      </Container>
    </>
  );
};

export default RecipeDetailPage;
