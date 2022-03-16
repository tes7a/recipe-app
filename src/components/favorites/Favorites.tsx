import React from "react";
import {Recipe} from "../../api/recipeAPI";

type Favorites = {
    favorite: Recipe[]
}

export const Favorites: React.FC<Favorites> = ({favorite}) => {
    return (<>
        {favorite.map(f =>
        <h1>{f.strArea}</h1>
        )}
    </>)
}