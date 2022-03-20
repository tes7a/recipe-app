import React from "react";
import { Recipe } from "../../api/recipeAPI";
import { Ingredients } from "../recipes/ingredients/Ingredients";

type Favorites = {
    favorite: Recipe[],
}

export const Favorites: React.FC<Favorites> = ({favorite}) => {

    return (<>
        <ul>
            {favorite.map(f =>
                <Ingredients key={f.idMeal} recipe={f}/>
            )}
        </ul>
    </>)
}