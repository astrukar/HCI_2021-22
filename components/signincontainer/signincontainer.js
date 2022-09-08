import { Row, Col, Button } from "react-bootstrap";
import { signIn } from "next-auth/react";

const SignInContainer = ({ providers }) => {
  return (
    <Row>
      <Col className="pt-20">
        <h1 className="flex justify-center font-bold text-5xl lg:text-6xl leading-10 font-montserrat pb-8">
          Login
        </h1>
        <div className="mt-2 flex justify-center">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 font-montserrat text-xs bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
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
          <div className="pt-1.5 md:pt-1 pointer w-52 md:w-64 joinUsButton text-center text-sm text-white md:text-base font-montserrat hover:opacity-80">
            Login
          </div>
        </div>
        <div className="mb-16 flex justify-center">
          <div className="pt-1.5 md:pt-1 pointer w-52 md:w-64 registrationButton text-center text-sm md:text-base font-montserrat text-white hover:text-white hover:opacity-80">
            Not A Member Yet?
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignInContainer;
