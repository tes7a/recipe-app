import React, {useEffect, useState} from "react";
import {Recipe, recipeAPI} from "../../api/recipeAPI";
import {Recipes} from "./Recipes";
import {GetRecipe} from "../../api/getRecipe";
import {useFavorites} from "../../utils/useFavorites";

export const RecipeComponent = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const {favorite, setFavorite} = useFavorites();

    useEffect(() => {
      GetRecipe(setRecipes);
    }, [])
    //
    return(
        <div>
        { recipes.length && <Recipes
            setRecipes={setRecipes}
            recipes={recipes}
            favorite={favorite}
            setFavorite={setFavorite}
        />
        }
        </div>
    )

}