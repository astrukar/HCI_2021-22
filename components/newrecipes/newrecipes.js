import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, data } from "../../firebase";
import NewRecipe from "./newrecipe";

const NewRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "recipes"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setRecipes(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="flex justify-center my-8 pt-12">
      {recipes.map((recipe) => (
        <NewRecipe
          key={recipe.id}
          id={recipe.id}
          username={recipe.data().username}
          img={recipe.data().image}
          caption={recipe.data().caption}
        />
      ))}
    </div>
  );
};

export default NewRecipes;
