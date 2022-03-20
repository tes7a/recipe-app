import {useState} from "react";
import {Recipe} from "../api/recipeAPI";

export const useFavorites = () => {
    const [favorite, setFavorite] = useState<Recipe[]>([])

    return{
        favorite,
        setFavorite: (recipe: Recipe[]) =>  setFavorite(recipe)
    }
}