import { signOut, signIn, useSession } from "next-auth/react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/modal/modal";
import NewRecipes from "../components/newrecipes/newrecipes";
import { useRouter } from "next/router";
const MyProfile = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <Container fluid className={"no-gutters"}>
      <Row className="pr-0">
        <header
          className={`pl-5 lg:pl-10 relative flex bg-teal-800 sm:h-20 justify-between`}
        >
          <Link href="/">
            <a className="no-underline z-10 my-auto py-2 items-center text-white text-4xl md:text-3xl lg:text-5xl font-montserrat font-bold hover:text-white">
              HealthsGo
            </a>
          </Link>
          {session ? (
            <button
              className="no-underline text-white my-auto pr-4 md:pr-8 whitespace-nowrap w-min text-white font-montserrat hover:font-bold"
              onClick={signOut}
            >
              Sign out
            </button>
          ) : (
            <button
              className="no-underline text-white my-auto pr-4 md:pr-8 whitespace-nowrap w-min text-white font-montserrat hover:font-bold"
              onClick={signIn}
            >
              Sign out
            </button>
          )}
        </header>
        {session ? (
          <>
            <Modal />
            <h1 className="font-poppins pt-20 text-center text-3xl">
              Welcome to HealthsGo!
            </h1>
            <h4 className="font-poppins pt-2 text-center text-xl">
              Do you want to help us?
            </h4>
            <h3 className="italic font-poppins pt-16 pb-8 text-center text-md">
              Share the recipe with others!
            </h3>
            <button
              onClick={() => setOpen(true)}
              className="mx-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-56"
            >
              Add New Recipe
            </button>
            <NewRecipes />
          </>
        ) : (
          <button
            onClick={() => router.push("/")}
            className="mx-auto mt-36 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-56"
          >
            Go Back To Home
          </button>
        )}
      </Row>
    </Container>
  );
};

export default MyProfile;
