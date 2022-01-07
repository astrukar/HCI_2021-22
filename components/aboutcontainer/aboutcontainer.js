import { Row, Col, Button } from "react-bootstrap";
const AboutContainer = () => {
  return (
    <>
      <Row>
        <h1 className="flex pl-5 md:justify-center font-bold text-5xl leading-10 font-montserrat text-6xl py-20">
          About Us
        </h1>
        <Col sm={12} md={7} className="bg-neutral-100 pl-5 md:pl-16">
          <h2 className="font-montserrat font-bold text-4xl pt-12 pb-4">
            Who We Are
          </h2>
          <p className=" text-sm lg:text-base font-montserrat pb-10">
            We are a public-facing charity which exists to give people,
            educators and organisations access to reliable information on
            nutrition. Grounded in science; working with experts; supporting
            anyone on their journey towards a healthy, sustainable diet. We work
            with experts across the nutrition and food community to provide
            impartial, evidence-based information, education and expertise,
            motivating people to adopt healthy, sustainable diets – for life.
          </p>
        </Col>
        <Col sm={12} md={5} className="p-0">
          <img src="/assets/aboutbackground.jpeg" className="aboutimg" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={7} className="pl-5 md:pl-16">
          <h1 className="font-montserrat font-bold text-4xl pt-12 pb-4">
            Our Goals
          </h1>
          <p className=" text-sm lg:text-base font-montserrat pb-14">
            The key to good health is good nutrition, so HealthsGo is your
            complete guide to healthy eating and getting the best nutrition.
            There are many ways to achieve this, and different approaches work
            for different people. The key to good health is good nutrition, so
            HealthsGo is your complete guide to healthy eating and getting the
            best nutrition. There are many ways to achieve this, and different
            approaches work for different people. The key to good health is good
            nutrition, so HealthsGo is your complete guide to healthy eating and
            getting the best nutrition.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="bg-neutral-100 pl-5 md:pl-16 pb-14">
          <h1 className="font-extrabold text-5xl font-montserrat text-5xl pt-10">
            Sign Up To Our Newsletter
          </h1>
          <div className="text-sm lg:text-base font-montserrat w-3/5 pt-3 pb-9">
            Get the best of health and lifestyle content, including nutritious
            recipes, lifestyle tips and the latest food and wellness trends when
            you sign-up to our HealthsGo newsletter.
          </div>
          <input
            className={`mt-5 mb-5 joinUsEmail italic text-black`}
            type="email"
            placeholder="E-mail"
          />
          <br />
          <Button
            variant={`dark`}
            className="w-52 md:w-64 joinUsButton text-sm md:text-base font-montserrat hover:opacity-80"
          >
            Sign Up
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AboutContainer;
