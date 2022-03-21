import React, {useContext, useEffect, useState} from "react";
import {Recipe} from "../../api/recipeAPI";
import {Recipes} from "./recipe/Recipes";
import {GetRecipe} from "../../api/getRecipe";
import Spinner from "react-bootstrap/esm/Spinner";
import s from './recipeComponent.module.css'
import {FavoriteContext} from "../../utils/contextFavorite";

export const RecipeComponent = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [showSpinner, setShowSpinner] = useState(false)

    const {favorite, setFavorite} = useContext(FavoriteContext);

    useEffect(() => {
        GetRecipe().then(res => setRecipes(res.meals));
        setShowSpinner(true);
    }, [])

    useEffect(() => {
        recipes.length > 0 && setShowSpinner(false);
    }, [recipes])

    return (
        <div>
            {
                showSpinner && <Spinner className={s.spinner} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {recipes.length > 0 && <Recipes
                setRecipes={setRecipes}
                recipes={recipes}
                favorite={favorite}
                setFavorite={setFavorite}
            />
            }
        </div>
    )

}