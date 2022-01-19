import { Row, Col, Button } from "react-bootstrap";
const SignInContainer = () => {
  return (
    <Row>
      <Col className="pt-20">
        <h1 className="flex justify-center font-bold text-5xl lg:text-6xl leading-10 font-montserrat pb-16">
          Login
        </h1>
        <div className="pt-3 mb-4 pb-3 flex justify-center">
          <input
            className={`loginForm w-96 font-poppins italic text-black`}
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div className="pt-4 flex justify-center">
          <input
            className={`loginForm w-96 font-poppins italic text-black`}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <span className="mt-2 pt-1 mb-20 pr-28 mr-40 font-montserrat linkPass text-xs">
            Forgot Password?
          </span>
        </div>
        <div className="mb-3 flex justify-center">
          <Button
            variant={`dark`}
            className="w-52 md:w-64 joinUsButton text-sm md:text-base font-montserrat hover:opacity-80"
          >
            Login
          </Button>
        </div>
        <div className="mb-16 flex justify-center">
          <Button
            variant={`warning`}
            className="w-52 md:w-64 registrationButton text-sm md:text-base font-montserrat hover:text-white hover:opacity-80"
          >
            Not A Member Yet?
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default SignInContainer;
