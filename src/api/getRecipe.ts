import {recipeAPI} from "./recipeAPI";

export const GetRecipe = () => {
    return recipeAPI.getRecipe()
}