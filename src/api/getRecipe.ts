import {Recipe, recipeAPI} from "./recipeAPI";

export const GetRecipe = (setRecipes: (recipe: Recipe[]) => void) => {
    recipeAPI.getRecipe()
        .then(res => setRecipes(res.meals))
}