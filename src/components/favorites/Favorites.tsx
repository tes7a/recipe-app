import React from "react";
import {Recipe} from "../../api/recipeAPI";

type Favorites = {
    favorite: Recipe[]
}

export const Favorites: React.FC<Favorites> = ({favorite}) => {
    return (<>
        <ul>
            {favorite.map(f =>
                <h1>{f.strArea}</h1>
            )}
        </ul>
    </>)
}