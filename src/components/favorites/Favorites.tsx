import React, {useContext} from "react";
import {Recipe} from "../../api/recipeAPI";
import {Ingredients} from "../recipes/ingredients/Ingredients";
import {FavoriteContext} from "../../utils/contextFavorite";

export const Favorites = () => {

    const {favorite} = useContext(FavoriteContext);

    return (
        <>
            <ul>
                {favorite.map((f: Recipe) =>
                    <Ingredients key={f.idMeal} recipe={f}/>
                )}
            </ul>
        </>
    )
}