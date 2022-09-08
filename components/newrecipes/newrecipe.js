import { Image } from "react-bootstrap";

const NewRecipe = ({ img, username, caption }) => {
  return (
    <div className="px-2 cursor-pointer">
      <Image
        fluid
        src={img}
        alt={`New Recipe from ${username}`}
        className="w-80 h-80 hover:opacity-80"
      />
      <p className="font-montserrat mt-1 text-sm md:text-lg font-semibold hover:opacity-80 w-10/12">
        {caption}
      </p>
    </div>
  );
};

export default NewRecipe;
