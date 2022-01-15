import { Row, Col } from "react-bootstrap";

const RecipeInfo = () => {
  return (
    <Row className="px-0 pb-28">
      <h1 className="flex pl-5 md:justify-center font-bold leading-10 font-montserrat text-3xl md:text-5xl lg:text-6xl py-24">
        Thai Peanut Chicken Lettuce Wraps
      </h1>
      <Col sm={12} lg={6}>
        <h1 className="pl-4 lg:pl-16 font-bold text-xl md:text-3xl font-montserrat pb-4">
          Ingredients
        </h1>
        <ul className="font-montserrat font-light pl-4 lg:pl-16">
          <li>1 tablespoon vegetable oil</li>
          <li>1 tablespoon toasted sesame oil</li>
          <li>1 pound ground chicken </li>
          <li>1 (3.5-ounce) package shiitake mushrooms, diced</li>
          <li>1 carrot, peeled and diced</li>
          <li>1 shallot, minced</li>
          <li>3 cloves garlic, minced</li>
          <li>1 tablespoon freshly grated ginger</li>
          <li>1/4 cup hoisin sauce </li>

          <li>2 teaspoons chili garlic sauce</li>
          <li>1 teaspoon fish sauce</li>
          <li>2 tablespoons chopped fresh cilantro leaves</li>
          <li>1 head butter lettuce</li>

          <li>FOR THE PEANUT SAUCE</li>

          <li>1 tablespoon reduced sodium soy sauce</li>
          <li>1 tablespoon freshly squeezed lime juice</li>
          <li>2 teaspoons brown sugar</li>
          <li>1 teaspoon chili garlic sauce, or more, to taste</li>
          <li>1 teaspoon freshly grated ginger</li>
        </ul>
      </Col>
      <Col sm={12} lg={6}>
        <h1 className="pl-4 lg:pl-10 font-bold text-xl md:text-3xl font-montserrat pb-4 ">
          Instructions
        </h1>
        <div className="font-montserrat font-light pl-4 lg:pl-10 pr-10">
          To make the peanut sauce, whisk together peanut butter, soy sauce,
          lime juice, brown sugar, chili garlic sauce and ginger in a small
          bowl. Whisk in 2-3 tablespoons water until desired consistency is
          reached; set aside.
          <br></br>
          Heat vegetable oil and sesame oil in a large skillet over medium high
          heat. Add ground chicken, mushrooms, carrot and shallot. Cook until
          browned, about 5-7 minutes, making sure to crumble the chicken as it
          cooks; drain excess fat.
          <br></br>
          Stir in garlic and ginger until fragrant, about 1 minute.
          <br></br>
          Stir in hoisin sauce, chili garlic sauce and fish sauce until heated
          through, about 30 seconds. Remove from heat; stir in cilantro.
          <br></br>
          To serve, spoon several tablespoons of the chicken mixture into the
          center of a lettuce leaf, taco-style, drizzled with peanut sauce.
        </div>
      </Col>
    </Row>
  );
};

export default RecipeInfo;
