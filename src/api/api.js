import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getHomeRecipeList = async () => {
  const list = [];
  let homeRecipes = await getDocs(collection(db, "list_recipes"));
  homeRecipes.forEach((doc) => {
    list.push(doc.data());
  });
  return list;
};

export const getRecipeList = async () => {
  const list = [];
  let recipeList = await getDocs(collection(db, "recipe_lists"));
  recipeList.forEach((doc) => {
    let data = {
      id: doc.id,
      price: doc.data().price,
      receipe: doc.data().recipeName,
      receipeBy: doc.data().receipeBy,
      cookingTime: doc.data().cookingTime,
      image: doc.data().imageUrl
    };
    list.push(data);
  });
  return list;
};
